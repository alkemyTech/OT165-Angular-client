import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/backoffice/models/user';
import { AppState } from 'src/app/state/app.state';
import { selectUserData, selectUserToken } from 'src/app/state/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate {
  userLoged$: Observable<any>;
  token$: Observable<any>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.userLoged$ = this.store.select(selectUserData);
    this.token$ = this.store.select(selectUserToken);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    let user!: User;
    let token!: string;

    this.userLoged$.subscribe((response) => {
      user = response;
    });
    this.token$.subscribe((response) => {
      token = response;
    });

    if (user == undefined && token == undefined) {
      return true;
    }
    console.log('User has already logged')
    this.router.navigate(["home"]);
    return false;
  }
}