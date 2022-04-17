import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { logOut } from '../../state/actions/auth.actions';
import { AppState } from '../../state/app.state';
import { selectUserToken } from '../../state/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  token$: Observable<any> = new Observable();
  token!: string;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.token$ = this.store.select(selectUserToken);
    this.token$.subscribe(el => {
      this.token = el;
    })
  }

  canActivate(): boolean {
    if(this.authService.isTokenValid(this.token)) {
      return true;
    } else {
      this.store.dispatch(logOut());
      this.router.navigateByUrl('login');
      return false;
    }
  }
  
}
