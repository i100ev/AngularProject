import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    public auth: AngularFireAuth
    ) { }



  onCreateAccountRequested(): void {
    this.router.navigate(['register']);
  }
  storeUserId(): void {
    this.auth.authState.subscribe(result => {
      if (result && result.uid) {
        localStorage.setItem('user', result.uid);
      }
    });
    this.router.navigate(['clothes']);
  }
}
