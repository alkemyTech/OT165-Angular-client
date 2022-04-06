import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/auth/userState.interface";
import { UsersState } from "src/app/shared/models/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";
import { usersReducer } from "./reducers/users.reducers";

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;
  users: UsersState
}

export const REDUCERS:ActionReducerMap<AppState> = {
    userLogin: loginReducer,
    userRegister: registerReducer,
    users: usersReducer
}