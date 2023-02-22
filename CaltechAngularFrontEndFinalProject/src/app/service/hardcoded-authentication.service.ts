import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username :any,password :any){
    if (username === 'vinodh' && password === 'something'){
      // console.log('loged in hardcoded-authentication service');
      //store the user information in session storage
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }
}
