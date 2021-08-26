import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    public auth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  onLoginRequested(): void {
    this.router.navigate(['login']);
  }
  storeUserId(): void {
    this.auth.authState.subscribe(result => {
      if (result && result.uid) {
        localStorage.setItem('user', result.uid);
      }
    });
    this.router.navigate(['cloths']);
  }
}
