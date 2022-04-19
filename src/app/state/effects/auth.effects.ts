import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { LoginResponse } from "src/app/shared/models/auth/loginResponse.interface";
import { RegisterResponse } from "src/app/shared/models/auth/registerResponse.interface";
import {
  loginGoogle,
  loginUser,
  logOut,
  registerUser,
} from "../actions/auth.actions";

@Injectable()
export class AuthEffects {
  loginUser$ = createEffect(() =>
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
              localStorage.setItem("token", userLogin.user?.token)
            };
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

  loginUserGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginGoogle),
      tap(() => { 
        this.authService.SigninWithGoogle();
        // this.router.navigateByUrl("home");
      }),
      mergeMap((action) =>
        this.authService.getUserLoged.pipe(
          map((user) => {
            let userLogin = localStorage.getItem('userLogin');
            return {
              type: "[Login Page] Login Google success",
              user: userLogin,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  registerUser$ = createEffect(() =>
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
          tap((action) => {
            if (action.user.success) {
              this.router.navigateByUrl("login");
            }
          }),
          catchError(() => of({ type: "[Register Page] Register Error" }))
        )
      )
    )
  );

  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logOut),
      tap(() => {
        localStorage.removeItem('userLogin');
        localStorage.removeItem('token');
        this.router.navigateByUrl('home');
      })
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
