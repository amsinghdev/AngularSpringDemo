import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';

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
  constructor(private route: Router,private auth: AuthenticationService) { }

  ngOnInit() {
  }

  handelLogin() {
    if (this.auth.authentication(this.userName, this.password)) {
      this.route.navigate(['welcome', this.userName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
