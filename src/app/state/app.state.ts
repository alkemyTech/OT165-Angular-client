import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/auth/userState.interface";
import { activityReducer } from "./reducers/activity.reducers";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;
  activities: any ;
}

export const REDUCERS: ActionReducerMap<AppState> = {
  userLogin: loginReducer,
  userRegister: registerReducer,
  activities: activityReducer,
};

