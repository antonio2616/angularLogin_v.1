import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import firebase from 'firebase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  public isLogged = false;
  public user: any;
  constructor(private authSvc: AuthService) { }

  async ngOnInit() {
    console.log('Navbar');
    this.user =  this.authSvc.getCurrentUser();
    if (this.user) {
      this.isLogged=true;
    }
  }

}
