import { createAction, props } from "@ngrx/store";
import { UserState } from "src/app/shared/models/userState.interface";

export const loginUser = createAction(
  "[Login Page] Login",
  props<{ email: string; password: string }>()
);

export const logedUser = createAction(
  "[Login Page] Login success",
  props<{ success: boolean, user: UserState }>()
);

export const registerUser = createAction(
  "[Register Page] Register",
  props<{ email: string; password: string }>()
);

export const registeredUser = createAction(
  "[Register Page] Register success",
  props<{ success: boolean, user: UserState }>()
);