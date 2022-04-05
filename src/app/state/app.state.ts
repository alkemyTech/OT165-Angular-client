import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/auth/userState.interface";
import { SlideState } from "../shared/models/SlideState";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";
import { slideReducer } from "./reducers/slides.reducers";

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;
  slide: SlideState;
}

export const REDUCERS:ActionReducerMap<AppState> = {
    userLogin: loginReducer,
    userRegister: registerReducer,
    slide: slideReducer
}