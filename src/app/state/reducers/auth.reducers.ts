import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/backoffice/models/user";
import { UserState } from "src/app/models/userState.interface";
import * as actions from "../actions/auth.actions";

export const initialState: UserState = { isLoged: false, user: new User };


export const loginReducer = createReducer(
    initialState,
    on(actions.loginUser, state => {
        return {...state}
    }),
    on(actions.logedUser, state => {
        return {...state, isLoged: true }
    }),
  );