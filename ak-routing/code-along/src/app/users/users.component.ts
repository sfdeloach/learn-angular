import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUserIndex: number;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.newUserSelected.subscribe(
      (index: number) => { this.selectedUserIndex = index }
    );
  }

  onUserClick(index: number) {
    this.userService.setSelectedUserByIndex(index);
  }
}
