import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';

import { environment } from 'src/environments/environment.prod';
import { HomeModule } from './home/home.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ClothsModule } from './cloths/cloths.module';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [	
    AppComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    UserModule,
    HomeModule,
    ClothsModule,
    AppRoutingModule,


    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    NgxAuthFirebaseUIModule.forRoot(
      environment.firebase,
      () => 'gardelog',
      {
        enableFirestoreSync: true, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
        authGuardFallbackURL: 'login', // url for unauthenticated users - to use in combination with canActivate feature on a route
        authGuardLoggedInURL: 'clothes', // url for authenticated users - to use in combination with canActivate feature on a route
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 4, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: false,
        enableEmailVerification: false, // default: true
        useRawUserCredential: false, // If set to true outputs the UserCredential object instead of firebase.User after login and signup - Default: false
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
