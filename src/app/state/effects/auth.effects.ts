import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { EMPTY, forkJoin, from, Observable, of } from "rxjs";
import {
  map,
  mergeMap,
  catchError,
  tap,
  switchMap,
  concatMap,
} from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { LoginResponse } from "src/app/shared/models/auth/loginResponse.interface";
import { RegisterResponse } from "src/app/shared/models/auth/registerResponse.interface";
import { UserState } from "src/app/shared/models/auth/userState.interface";
import {
  logedGoogle,
  loginError,
  loginGoogle,
  loginUser,
  logOut,
  logOutSuccess,
  registerUser,
} from "../actions/auth.actions";

@Injectable()
export class AuthEffects {
  loginUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap((action) =>
        this.authService.loginAPI(action.user).pipe(
          map((user: LoginResponse) => {
            return {
              type: "[Login Page] Login success",
              user: {
                success: user.success,
                user: user.data,
              },
            };
          }),
          tap((action) => {
            let userLogin = {
              success: action.user.success,
              user: action.user.user,
            };
            localStorage.setItem("userLogin", JSON.stringify(userLogin));
            if (userLogin.user?.token) {
              localStorage.setItem("token", userLogin.user?.token);
            }
            if (action.user.success && action.user.user?.user?.role_id == 2) {
              this.router.navigateByUrl("backoffice");
            } else if (action.user.user?.user?.role_id == 1) {
              this.router.navigateByUrl("home");
            }
          }),
          catchError(() => of({ type: "[Login Page] Login Error" }))
        )
      )
    )
  );

  loginUserGoogle$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loginGoogle),
      switchMap(() => {
        return from(this.authService.googleLogin());
      }),
      concatMap((credential) => {
        return forkJoin([of(credential), from(credential.user.getIdToken())]);
      }),
      map(([credential, token]: any) => {
        let user: UserState = this.authService.setUserGoogle(credential, token);
        localStorage.setItem("userLogin", JSON.stringify(user));
        localStorage.setItem("token", token);
        this.router.navigateByUrl("/backoffice");
        return logedGoogle({ user });
      }),
      catchError(() => of(loginError))
    )
  );

  registerUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      mergeMap((action) =>
        this.authService.registerUserAPI(action.user).pipe(
          map((user: RegisterResponse) => ({
            type: "[Register Page] Register success",
            user: {
              success: user.success,
              user: user.data,
            },
          })),
          tap(() => this.router.navigateByUrl("/login")),
          catchError(() => of({ type: "[Register Page] Register Error" }))
        )
      )
    )
  );

  logOut$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logOut),
        tap(() => {
          this.authService.signOutGoogle();
          localStorage.removeItem("userLogin");
          localStorage.removeItem("token");
          this.router.navigateByUrl("home");
        }),
        map(() => logOutSuccess),
        catchError(() => of(loginError))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
