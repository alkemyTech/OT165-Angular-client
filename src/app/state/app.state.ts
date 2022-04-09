import { CategoryState } from 'src/app/state/reducers/category.reducer';
import { categoryReducer } from './reducers/category.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/auth/userState.interface";
import { SlideState } from "../shared/models/SlideState";
import { slideReducer } from "./reducers/slides.reducers";
import { UsersState } from "src/app/shared/models/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";
import { usersReducer } from "./reducers/users.reducers";
import { MemberState } from '../shared/models/membersState.interface';
import { membersReducer } from './reducers/member.reducer';

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;  
  slide: SlideState;
  users: UsersState;
  members: MemberState;
  category: CategoryState;
}

export const REDUCERS: ActionReducerMap<AppState> = {
  userLogin: loginReducer,
  userRegister: registerReducer,
  slide: slideReducer,
  members: membersReducer,
  users: usersReducer,
  category: categoryReducer
}

