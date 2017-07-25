import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUser1Activated: boolean = false;
  isUser2Activated: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) this.isUser1Activated = !this.isUser1Activated;
        if (id === 2) this.isUser2Activated = !this.isUser2Activated;
      }
    );
  }
}
