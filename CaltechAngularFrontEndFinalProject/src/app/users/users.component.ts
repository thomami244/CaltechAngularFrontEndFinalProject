import { ActivatedRoute } from '@angular/router';
import { UserService } from './../service/user/user.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductDataService } from '../service/data/product-data.service';
import { LoginComponent } from '../login/login.component';

import { IUser } from './../interfaces/user';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [LoginComponent]
})
export class UsersComponent implements OnInit {

  users: IUser[] | undefined;
  subscription!: Subscription;
  @Input() adminLoggedIn:Boolean = false;
  // @Output() adminLoggedInChange:Boolean = false;
  param!: any;
  message: any;
  newData: any;

  constructor(


    // public id: number,
    // public username: string,
    // public password: string,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private productDataService: ProductDataService,
    public logincomponent: LoginComponent,
  ) {console.log(logincomponent.adminLoggedIn);
     this.adminLoggedIn= logincomponent.adminLoggedIn;
    console.log("constructor" + this.adminLoggedIn);
    // getData() {
    //   this.logincomponent
    //     .getData
    //     };

    // this.logincomponent.adminLoggedIn.subscribe(data => this.newData = data);


  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((map) => {
      console.log("placeholder");
      console.log("MAP", map.get("adminLoggedIn"));
      this.param = map.get("adminLoggedIn");
      console.log("users component receive service" + this.param)
    });

    // this.logincomponent.data$.subscribe(data => this.newData = data);

    // getData() {
    //   this.logincomponent
    //     .getData

    //       // some other code.
    //     };


    // this.activatedRoute.paramMap.subscribe((map) => {
    //   console.log("MAP", map.get("adminLoggedIn"));
    //   this.param = map.get("LoginComponent.adminLoggedIn");
    //   console.log("users component receive service" + this.param)
    // });


    // this.param.currentUpdateApprovalMessage.subscribe((msg: any) => this.message = msg);

    // console.log("users component message receive service" + this.message);

    // this.users = this.activatedRoute.snapshot.data['users'];
    // this.users = this.userService.getUsers();
    // this.userService.getUsersViaREST().subscribe((users: IUser[]) => {
    //   this.users = users;


    // this.productDataService.retrieveAllUsers().subscribe(
    //   users => {
    //     // console.log(response);
    //     this.users = users;
    //     console.log(users);
    //   }

    // )


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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
function getData() {
  throw new Error('Function not implemented.');
}
