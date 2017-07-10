import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  onClick(element: HTMLLIElement) {
    this.userService.inactiveToActive(element.id);
  }
}
