import { ActivatedRoute } from '@angular/router';
import { UserService } from './../service/user/user.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ProductDataService } from '../service/data/product-data.service';

import { IUser } from './../interfaces/user';

import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] | undefined;
  subscription!: Subscription;
  @Input() adminLoggedIn:Boolean = false;
  @Output() adminLoggedInChange:Boolean = false;
  param: any;

  constructor(

    // public id: number,
    // public username: string,
    // public password: string,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private productDataService: ProductDataService,
  ) {
    this.activatedRoute.paramMap.subscribe((map) => {
      console.log("MAP", map.get("adminLoggedIn"));
      this.param = map.get("adminLoggedIn");
    })
  }




  ngOnInit() {

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
