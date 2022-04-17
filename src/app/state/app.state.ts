import { CategoryState } from "src/app/state/reducers/category.reducer";
import { categoryReducer } from "./reducers/category.reducer";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { ActivityState } from "../shared/models/Activity";
import { UserState } from "../shared/models/auth/userState.interface";
import { activityReducer } from "./reducers/activity.reducers";
import { SlideState } from "../shared/models/SlideState";
import { slideReducer } from "./reducers/slides.reducers";
import { UsersState } from "src/app/shared/models/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";
import { usersReducer } from "./reducers/users.reducers";
import { MemberState } from '../shared/models/membersState.interface';
import { membersReducer } from './reducers/member.reducer';
import { logOut } from "./actions/auth.actions";

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;
  activities: ActivityState;
  slide: SlideState;
  users: UsersState;
  members: MemberState;
  category: CategoryState;
}

export const persistToken = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (state?.userLogin.success === false) {
      let localStorageData = localStorage.getItem('userLogin');
      if (localStorageData){
        return reducer({...state, userLogin: JSON.parse(localStorageData)}, action);
      }
    }
    return reducer(state, action);
  };
}

export const REDUCERS: ActionReducerMap<AppState> = {
  userLogin: loginReducer,
  userRegister: registerReducer,
  slide: slideReducer,
  users: usersReducer,
  category: categoryReducer,
  activities: activityReducer,
  members: membersReducer,
}

export const METAREDUCERS: MetaReducer<any>[] = [persistToken];