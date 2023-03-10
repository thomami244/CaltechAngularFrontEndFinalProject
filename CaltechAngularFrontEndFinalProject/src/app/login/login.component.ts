import { Component, OnInit, HostListener,NgModule, Injectable, Inject, Input, Output } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { UserService } from './../service/user/user.service';
// import { ProductDataService } from '../service/data/product-data.service';

import { IUser } from './../interfaces/user';

import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
// import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { UsersComponent } from '../users/users.component';

import { HttpRequest, HttpResponse, HttpHandler, HttpEvent,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { FormControl,  FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



// array in local storage for registered users
// let users = JSON.parse(localStorage.getItem('users')) || [];


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})

@Injectable()
export class LoginComponent implements OnInit  {


  users!: IUser[] ;
  subscription!: Subscription;
  loggedIn:Boolean = false;
  // adminLoggedIn:Boolean = true;

  @Input() username: String = "";
  @Output() usernameChange: String = "";

  @Input() password:String = "";
  @Output() passwordChange:String = "";

  @Input() adminLoggedIn:Boolean = false;
  @Output() adminLoggedInChange:Boolean = false;


  // adminLoggedIn$:any = this.adminLoggedIn.asObservable();

  constructor(

    // public id: number,
    // public username: string,
    // public password: string,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    // public adminLoggedIn:Boolean = false,
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


  // getUsername(){
  //   return this.username;
  //   }

  // getPassword(){
  //   return this.password;
  //   }


   handleLogin(username: String, password: String) {
    // username: "admin";

    // password: "password"


    // const { username, password } = body;
    const user = this.users.find(x => x.username === this.username && x.password === this.password);
    console.log(user);

console.log(this.username);
console.log(this.password);
// if (user) this.loggedIn === true;
if (!user) console.log('Username or password is incorrect');

    if (!user) return 'Username or password is incorrect';

    console.log("conditional test: " + user.username == "admin");
    if (user.username == "admin") this.adminLoggedIn = true;

    console.log("condition: " + user.username == "admin");
    console.log("admin is logged in " + this.adminLoggedIn);

    this.loggedIn = true;
    console.log("user is logged in " + this.loggedIn);
    console.log("username: " + user.username);
    this.username = username;
    this.password = password;


    return ({
        id: user.id,
        username: user.username,
        password: user.password,
        adminLoggedIn: this.adminLoggedIn,
        // token: 'fake-jwt-token'
    })

  }

  updateApprovalMessage(message: Boolean) {
    this.adminLoggedIn
    }



}
