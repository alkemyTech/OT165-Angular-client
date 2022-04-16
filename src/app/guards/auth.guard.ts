import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { AppState } from '../state/app.state';
import { selectUserToken } from '../state/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  auth$: Observable<any> = new Observable();
  token!: string;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.auth$ = this.store.select(selectUserToken);
    this.auth$.subscribe(el => {
      this.token = el;
    })
  }

  canActivate(): boolean {
    if(this.authService.isTokenValid()) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
  
}
