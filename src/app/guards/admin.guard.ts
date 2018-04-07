import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate() {
    if (localStorage.getItem('adminUser')) {
      //logged in
      return true;
    }
    //not logged in
    this.router.navigate(['/login']);
    return false;
  }
}
