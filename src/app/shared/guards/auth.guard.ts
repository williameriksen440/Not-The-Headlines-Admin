import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  redirectUrl: string;

  constructor(
      public auth: AuthService,
      public router: Router,
      private toastr: ToastrService
  ) {

  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ) {

    if (this.auth.loggedIn()) {
      return true;
    } else {
      // if user is not authorized in the inside sections, redirecting to login page
      if (this.router.url !== '/admin/login' && this.router.url !== '/register') {
        this.router.navigate(['auth/login']);
        this.toastr.error('', 'You have to be logged in to view that page');
      }


      // this is the url used for redirecting after login, if user wanted to access that first
      this.redirectUrl = state.url;
      return false;
    }
  }
}
