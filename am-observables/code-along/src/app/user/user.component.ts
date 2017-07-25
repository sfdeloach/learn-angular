import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  params: Subscription;
  paramsString: string;
  buttonMessage: string = "Activate!"

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.params = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.paramsString = JSON.stringify(params, null, '\t');
      }
    );
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

  onActivate() {
    this.userService.userActivated.next(this.id);
  }

}
