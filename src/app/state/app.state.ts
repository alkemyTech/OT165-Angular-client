import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/userState.interface";
import { loginReducer } from "./reducers/auth.reducers";

export interface AppState {
  user: UserState;
}

export const REDUCERS:ActionReducerMap<AppState> = {
    user: loginReducer,
}