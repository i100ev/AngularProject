import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [

  ]

})
export class HomeModule { }
