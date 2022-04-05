import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/auth/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;
}

export const REDUCERS:ActionReducerMap<AppState> = {
    userLogin: loginReducer,
    userRegister: registerReducer
}