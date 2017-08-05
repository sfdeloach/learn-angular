import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormDataService } from './form-data.service';

@Injectable()
export class ValidFormService implements CanActivate {

  constructor(
    private formDataService: FormDataService,
    private router: Router
  ) { }

  canActivate(
    activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot
  ):
    boolean | Observable<boolean> | Promise<boolean> {
      if (this.formDataService.isValidForm) {
        return true;
      } else {
        console.log("Are you trying to be sneaky?");
        this.router.navigate(["/home"]);
        return false;
      }
    };
}
