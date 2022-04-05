import { Category } from 'src/app/shared/models/Category';
import { CategoryState } from 'src/app/state/reducers/category.reducer';
import { categoryReducer } from './reducers/category.reducer';
import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "../shared/models/userState.interface";
import { loginReducer, registerReducer } from "./reducers/auth.reducers";

export interface AppState {
  user: UserState;
  userRegister: UserState;
  category: CategoryState;
}

export const REDUCERS:ActionReducerMap<AppState> = {
    user: loginReducer,
    userRegister: registerReducer,
    category: categoryReducer
}