import { createAction, props } from "@ngrx/store";
import { User } from "src/app/backoffice/models/user";

export const getUsers = createAction("[Users List] Get users");

export const getUsersSuccess = createAction(
  "[Users List] Get users success",
  props<{ users: Array<User> }>()
);

export const deleteUser = createAction(
  "[Users List] Delete user",
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  "[Users List] Delete user success",
  props<{ id: number }>()
);

export const addUser = createAction(
  "[Users List] Add user",
  props<{ user: User }>()
);

export const addUserSuccess = createAction(
  "[Users List] Add user success",
  props<{ user: User }>()
);
