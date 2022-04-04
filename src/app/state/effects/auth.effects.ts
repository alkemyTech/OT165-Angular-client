import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { LoginResponse } from "src/app/shared/models/auth/loginResponse.interface";
import { RegisterResponse } from "src/app/shared/models/auth/registerResponse.interface";
import { loginUser, registerUser } from "../actions/auth.actions";

@Injectable()
export class AuthEffects {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap((action) =>
        this.authService.loginAPI(action.user).pipe(
          map((user: LoginResponse) => ({
            type: "[Login Page] Login success",
            user: {
              success: user.success,
              user: user.data,
            },
          })),
          catchError(() => of({ type: "[Login Page] Login Error" }))
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
