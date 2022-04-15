import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
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
    private store: Store<AppState>
  ) {
    this.auth$ = this.store.select(selectUserToken);
    this.auth$.subscribe(el => {
      this.token = el;
      console.log(el);
    })
  }

  canActivate(): boolean {
    // this.authService.getUserLoged()
    return true;
  }
  
}
