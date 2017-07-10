import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  }

  onClick(element: HTMLLIElement) {
    this.userService.activeToInactive(element.id);
  }
}
