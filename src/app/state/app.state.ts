import { ActionReducerMap } from "@ngrx/store";
import { UsersState, UserState } from "../shared/models/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";
import { usersReducer } from "./reducers/users.reducers";

export interface AppState {
  user: UserState;
  userRegister: UserState;
  users: UsersState
}

export const REDUCERS:ActionReducerMap<AppState> = {
  user: loginReducer,
  userRegister: registerReducer,
  users: usersReducer
}