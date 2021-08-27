import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ClothComponent } from './cloth/cloth.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { ClothDialogComponent } from './cloth-dialog/cloth-dialog.component';
import { ClothesComponent } from './cloths.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ClothesComponent,
    ClothComponent,
    ClothDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ClothesComponent
  ],
  providers: [

  ]

})
export class ClothsModule { }
