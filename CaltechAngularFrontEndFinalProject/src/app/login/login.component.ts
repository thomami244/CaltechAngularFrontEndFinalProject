import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { UserService } from './../service/user/user.service';
// import { ProductDataService } from '../service/data/product-data.service';

import { IUser } from './../interfaces/user';

import { Subscription } from 'rxjs';


// array in local storage for registered users
// let users = JSON.parse(localStorage.getItem('users')) || [];


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit  {

  users!: IUser[] ;
  subscription!: Subscription;
  username: String = "admin";

  password:String = "password";

  constructor(

    // public id: number,
    // public username: string,
    // public password: string,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    // private productDataService: ProductDataService,
  ) { }


  ngOnInit() {

    this.subscription = this.userService.getUsersViaREST().subscribe((users: IUser[]) => {
      this.users = users;
      console.log(users);
      console.log(users[0].id);
      console.log(users[0].username);
      console.log(users[0].password);
      console.log(users[1].id);
      console.log(users[1].username);
      console.log(users[1].password);
    });

  }

   handleLogin() {
    // username: "admin";

    // password: "password"


    // const { username, password } = body;
    const user = this.users.find(x => x.username === this.username && x.password === this.password);

console.log(this.username);
console.log(this.password);

    if (!user) return 'Username or password is incorrect';
    return ({
        id: user.id,
        username: user.username,
        password: user.password,
        // token: 'fake-jwt-token'
    })


  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     const { url, method, headers, body } = request;




  //     function handleLogin() {


  //       const { username, password } = body;
  //       const user = users.find(x => x.username === username && x.password === password);
  //       if (!user) return error('Username or password is incorrect');
  //       return ok({
  //           id: user.id,
  //           username: user.username,
  //           password: user.password,
  //           token: 'fake-jwt-token'
  //       })


      // return of(null)
      //     .pipe(mergeMap(handleRoute))
      //     .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      //     .pipe(delay(500))
      //     .pipe(dematerialize());

      // function handleRoute() {
      //     switch (true) {
      //         case url.endsWith('/users/authenticate') && method === 'POST':
      //             return authenticate();
      //         case url.endsWith('/users/register') && method === 'POST':
      //             return register();
      //         case url.endsWith('/users') && method === 'GET':
      //             return getUsers();
      //         case url.match(/\/users\/\d+$/) && method === 'DELETE':
      //             return deleteUser();
      //         default:
      //             // pass through any requests not handled above
      //             return next.handle(request);
      //     }
      // }


  // username = ''
  // password = ''
  // errorMessage = 'Invalid Credentials'
  // invalidLogin  = false

  // users: IUser[] | undefined;
  // subscription: Subscription;

  // constructor(

  //   // public id: number,
  //   // public username: string,
  //   // public password: string,
  //   private activatedRoute: ActivatedRoute,
  //   private userService: UserService,
  //   private productDataService: ProductDataService,
  // ) { }







// make use of hardcoded authentication service
// if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){


//     //  if (this.username === 'vinodh' && this.password === 'something'){
//     this.invalidLogin = false
//     //navigate to welcome component
//     this.router.navigate(['welcome', this.username])
//   }
//     else {
//       this.invalidLogin = true
//     }
  }



}
