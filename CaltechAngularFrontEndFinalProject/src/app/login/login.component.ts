import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vinodh'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin  = false

  // dependency injection
  constructor(private router: Router, public hardcodedAuthenticationService: HardcodedAuthenticationService) { }


  ngOnInit() {

  }


  handleLogin() {
// make use of hardcoded authentication service
if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){


    //  if (this.username === 'vinodh' && this.password === 'something'){
    this.invalidLogin = false
    //navigate to welcome component
    this.router.navigate(['welcome', this.username])
  }
    else {
      this.invalidLogin = true
    }
  }

}
