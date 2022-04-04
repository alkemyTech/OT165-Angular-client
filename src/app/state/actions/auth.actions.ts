import { createAction, props } from "@ngrx/store";
import { loginSend } from "src/app/shared/models/auth/loginSend.interface";
import { registerSend } from "src/app/shared/models/auth/registerSend.interface";
import { UserState } from "src/app/shared/models/auth/userState.interface";

/* Login Actions */
export const loginUser = createAction(
  "[Login Page] Login",
  props<{ user: loginSend }>()
);

export const logedUser = createAction(
  "[Login Page] Login success",
  props<{ user: UserState }>()
);

export const loginError = createAction(
  "[Login Page] Login Error",
);

/* Register Actions */
export const registerUser = createAction(
  "[Register Page] Register",
  props<{ user: registerSend }>()
);

export const registeredUser = createAction(
  "[Register Page] Register success",
  props<{ user: UserState }>()
);

export const registerError = createAction(
  "[Register Page] Register Error",
);