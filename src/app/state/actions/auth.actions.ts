import { createAction, props } from "@ngrx/store";
import { UserState } from "src/app/shared/models/userState.interface";

export const loginUser = createAction(
  "[Login Page] Login",
  props<{ email: string; password: string }>()
);

export const logedUser = createAction(
  "[Register Page] Register success",
  props<{ user: UserState }>()
);
