import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'Admin';
  password =  '';
  invalidLogin = false;
  errorMessage = 'Invalid Login Credentials !!'
  constructor(private route: Router) { }

  ngOnInit() {
  }

  handelLogin() {
    if (this.userName === 'Admin' && this.password === 'password') {
      this.route.navigate(['welcome', this.userName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
