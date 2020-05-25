import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authentication(userName, password): boolean {
    if (userName === 'Admin' && password === 'password') {
      sessionStorage.setItem('authenticatedUser', userName);
      return true;
    }
    return false;
  }
  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
}

logout() {
    sessionStorage.removeItem('authenticatedUser');
}
}
