import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authentication(userName, password): boolean {
    if (userName === 'Admin' && password === 'password') {
      return true;
    }
    return false;
  }
}
