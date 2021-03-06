import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    NgxAuthFirebaseUIModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [

  ]

})
export class CoreModule { }
