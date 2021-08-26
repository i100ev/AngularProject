import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ClothDialogResult, ICloth } from 'src/app/shared/interfaces/cloth';
import { MatDialog } from '@angular/material/dialog';
import { ClothDialogComponent } from './cloth-dialog/cloth-dialog.component';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


const getObservable = (collection: AngularFirestoreCollection<ICloth>) => {
  const subject = new BehaviorSubject<ICloth[]>([]);
  collection.valueChanges({ idField: 'id' }).subscribe((val: ICloth[]) => {
    subject.next(val);
  });
  return subject;
};

@Component({
  selector: 'app-cloths',
  templateUrl: './cloths.component.html',
  styleUrls: ['./cloths.component.css']
})

export class ClothsComponent {

  constructor(
    private dialog: MatDialog,
    private store: AngularFirestore,
    public auth: AngularFireAuth
  ) { }


  userId = localStorage.getItem('user') as string;

  clean = getObservable(this.store.collection('users').doc(this.userId).collection('clean')) as Observable<ICloth[]>;
  dirty = getObservable(this.store.collection('users').doc(this.userId).collection('dirty')) as Observable<ICloth[]>;
  washing = getObservable(this.store.collection('users').doc(this.userId).collection('washing')) as Observable<ICloth[]>;

  drop(event: CdkDragDrop<ICloth[] | null>): void {
    if (event.previousContainer === event.container) {
      return;
    }

    if (!event.previousContainer.data || !event.container.data) {
      return;
    }

    const item = event.previousContainer.data[event.previousIndex];

    this.store.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.store.collection('users').doc(this.userId).collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection('users').doc(this.userId).collection(event.container.id).add(item),
      ]);
      return promise;
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }


  newCloth(): void {
    const dialogRef = this.dialog.open(ClothDialogComponent, {
      width: '270px',
      data: {
        cloth: {}
      }
    });
    dialogRef.afterClosed().subscribe((result: ClothDialogResult) => this.store.collection('users').doc(this.userId).collection('dirty').add(result.cloth));
  }


  editCloth(list: 'clean' | 'dirty' | 'washing', cloth: ICloth): void {
    const dialogRef = this.dialog.open(ClothDialogComponent, {
      width: '270px',
      data: {
        cloth,
        enableDelete: true,
      },
    });

    dialogRef.afterClosed().subscribe((result: ClothDialogResult) => {
      if (result.delete) {
        this.store.collection('users').doc(this.userId).collection(list).doc(cloth.id).delete();
      } else {
        this.store.collection('users').doc(this.userId).collection(list).doc(cloth.id).update(cloth);
      }
    });
  }


}
