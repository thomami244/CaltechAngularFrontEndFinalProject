import { Component, OnInit, Input,Output } from '@angular/core';
import { IUser } from './../interfaces/user';
import { HookLogger } from './../decorators/class.decorator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@HookLogger({
  hooks: [
    'ngAfterContentInit',
    'ngAfterViewChecked',
  ]
})
export class UserComponent implements OnInit {

  @Input() user!: IUser;
  @Input() adminLoggedIn:Boolean = false;
  @Output() adminLoggedInChange:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
