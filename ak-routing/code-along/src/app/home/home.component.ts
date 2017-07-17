import { Component } from '@angular/core';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) { }

  onClick(route: string) {
    this.router.navigate([route]);
  }

  onLoadServer(index: number) {
    this.router.navigate(['/servers', index, 'edit'], {
      queryParams:
        { allowEdit: true },
      fragment: 'loading'
    });
  }
}
