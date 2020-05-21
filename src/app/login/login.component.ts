import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  handelLogin() {
    console.log('user name..' + this.userName + 'password...' + this.password)
    if (this.userName === 'Admin' && this.password === 'password') {
      console.log('Inside if loop')
      this.invalidLogin = false;
    } else {
      console.log('inside else loop')
      this.invalidLogin = true;
    }
  }

}
