import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  params: Subscription;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
      }
    );
  }

  ngOnDestroy() {
    this.params.unsubscribe();
  }

}
