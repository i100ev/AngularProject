
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggedInGuard } from 'ngx-auth-firebaseui';

import { ClothesComponent } from './cloths/cloths.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'clothes',
    component: ClothesComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }