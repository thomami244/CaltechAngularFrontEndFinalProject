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

    // this.subscription = this.userService.getUsersViaREST().subscribe((users: any) => {
    //   this.users = users;
    // });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
