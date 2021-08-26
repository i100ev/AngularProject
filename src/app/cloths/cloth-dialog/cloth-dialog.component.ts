import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICloth, NewClothDialogData } from 'src/app/shared/interfaces/cloth';

@Component({
  selector: 'app-new-cloth-dialog',
  templateUrl: './cloth-dialog.component.html',
  styleUrls: ['./cloth-dialog.component.css']
})
export class ClothDialogComponent {

  private backupCloth: Partial<ICloth> = { ... this.data.cloth };

  constructor(
    public dialogRef: MatDialogRef<ClothDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NewClothDialogData
  ) { }

  cancel(): void {
    this.data.cloth.title = this.backupCloth.title;
    this.data.cloth.description = this.backupCloth.description;
    this.dialogRef.close();
  }
  
}

