import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../../shared/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  selectedUserIndex: number;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.user = new User(params.name, params.id);
      }
    );

    this.usersService.newUserSelected.subscribe(
      index => {
        this.selectedUserIndex = index;
        this.user = this.usersService.getUsers()[this.selectedUserIndex];
      }
    );
  }

}
