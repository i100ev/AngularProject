import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {  }

  logout() {
    this.auth.signOut().then(() => {
      localStorage.clear();
    }).then(() => {
      this.router.navigate(['cloths']);
    });
  }
}
