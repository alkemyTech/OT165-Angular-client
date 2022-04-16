import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { LoginResponse } from "src/app/shared/models/auth/loginResponse.interface";
import { RegisterResponse } from "src/app/shared/models/auth/registerResponse.interface";
import { loginGoogle, loginUser, registerUser } from "../actions/auth.actions";

@Injectable()
export class AuthEffects {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap((action) =>
        this.authService.loginAPI(action.user).pipe(
          map((user: LoginResponse) => {
            if (user.data?.token){
              localStorage.setItem("token", user.data?.token);
            }
            return {
              type: "[Login Page] Login success",
              user: {
                success: user.success,
                user: user.data,
              },
            };
          }),
          tap((action) => {
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
        this.router.navigateByUrl("home");
      }),
      mergeMap((action) =>
        this.authService.getUserLoged.pipe(
          map((user) => {
            if (user.data?.token){
              localStorage.setItem("token", user.data?.token);
            }
            return {
              type: "[Login Page] Login Google success",
              user: {
                success: true,
                user: user,
              },
            };
          })
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

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
