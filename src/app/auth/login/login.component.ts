import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    const {email, password} = this.loginForm.value;
    this.authSvc.login(email, password);
  }

}
