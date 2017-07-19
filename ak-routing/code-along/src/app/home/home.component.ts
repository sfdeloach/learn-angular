import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private authService: AuthService
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

  log(action: string) {
    action === 'in' ? this.authService.login() : this.authService.logout();
  }
}
