
import { CategoryState } from 'src/app/state/reducers/category.reducer';
import { categoryReducer } from './reducers/category.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/auth/userState.interface";
import { SlideState } from "../shared/models/SlideState";
import { slideReducer } from "./reducers/slides.reducers";
import { UsersState } from "src/app/shared/models/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";
import { usersReducer } from "./reducers/users.reducers";

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;  
  slide: SlideState;
  users: UsersState;
  category: CategoryState;
}

export const REDUCERS:ActionReducerMap<AppState> = {
    userLogin: loginReducer,
    userRegister: registerReducer,
    slide: slideReducer,
    users: usersReducer,
    category: categoryReducer
}