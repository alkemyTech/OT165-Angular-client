import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userLoged$: Observable<any> = this.authService.getUserLoged;
      let userLoged;
      userLoged$.subscribe((response) => {
        userLoged = response
      })    
      if ( userLoged != null ) {
        return true;
      }
      this.router.navigate(['home']);
      return false;
  } 
}