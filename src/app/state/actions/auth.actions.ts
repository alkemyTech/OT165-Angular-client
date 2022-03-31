import { createAction, props } from "@ngrx/store";
import { User } from "../../backoffice/models/user";

export const loginUser = createAction(
  "[Login Page] Login",
  props<{ email: string; password: string }>()
);

export const logedUser = createAction(
  "[Login Page] Loged success",
  props<{ user: User }>()
);
