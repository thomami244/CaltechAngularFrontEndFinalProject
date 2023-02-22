import { ActivatedRoute } from '@angular/router';
import { UserService } from './../service/user/user.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.users = this.activatedRoute.snapshot.data['users'];
    // this.users = this.userService.getUsers();
    // this.userService.getUsersViaREST().subscribe((users: IUser[]) => {
    //   this.users = users;

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
