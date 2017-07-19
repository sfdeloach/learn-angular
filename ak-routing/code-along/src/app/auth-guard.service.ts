import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  Router
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | Promise<boolean> | Observable<boolean> {
      return this.authService.isAuthenticated().then(
        (isAuthenticated: boolean) => {
          if (isAuthenticated) {
            console.log("user is authenticated");
            return true;
          } else {
            console.log("user is NOT authenticated");
            this.router.navigate(['/']);
            return false;
          }
        }
      );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : boolean | Promise<boolean> | Observable<boolean> {
      return this.canActivate(route, state);
  }

}
