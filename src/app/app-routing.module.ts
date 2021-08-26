
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInGuard } from 'ngx-auth-firebaseui';

import { ClothsComponent } from './cloths/cloths.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'cloths',
    component: ClothsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }