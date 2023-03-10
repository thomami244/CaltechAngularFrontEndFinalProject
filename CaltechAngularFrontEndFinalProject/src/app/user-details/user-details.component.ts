import { UserService } from './../service/user/user.service';
import { IUser } from './../interfaces/user';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppendorPipe } from '../pipes/appendor/appendor.pipe';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [LoginComponent]
})
export class UserDetailsComponent implements OnInit {

  @Input() user!: IUser;
  posts: any;
  @Input() adminLoggedIn:Boolean = false;
  @Output() adminLoggedInChange:Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUserByIdViaREST(+params['userId'])
        .subscribe(
          user => this.user = user,
          error => console.log('Got an error: ', error),
          () => console.log('This Observable was complete!')
        );
    });

    this.activatedRoute.queryParams.subscribe(qs => console.log('Got the Query Params as: ', qs));
  }

  createUser() {
    this.user.id = null as any;;
    this.userService.createUser(this.user)
      .subscribe(user => {
        console.log('Got the Create Response as : ', user);
        alert(`User got created with id: , ${user.id}`);
      });
  }

  updateUser() {
    this.userService.updateUser(this.user)
    .subscribe(user => {
      console.log('Got the Create Response as : ', user);
      alert(`User got updated`);
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.user.id)
    .subscribe(user => {
      console.log('Got the Create Response as : ', user);
      alert(`User got deleted`);
    });
  }

  // getUserPosts() {
  //   this.posts = this.userService.getPostsByUser(this.user.id);
  // }

}
