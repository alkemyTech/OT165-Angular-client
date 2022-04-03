import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";

export interface AppState {
  user: UserState;
  userRegister: UserState;
}

export const REDUCERS:ActionReducerMap<AppState> = {
    user: loginReducer,
    userRegister: registerReducer
}