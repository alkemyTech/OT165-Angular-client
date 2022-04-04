import { createReducer, on } from "@ngrx/store";
import { UserState } from "src/app/shared/models/auth/userState.interface";
import * as actions from "../actions/auth.actions";

export const initialState: UserState = { success: false, user: {} };


export const loginReducer = createReducer(
    initialState,
    on(actions.loginUser, state => {
        return {...state}
    }),
    on(actions.logedUser,  (state, newState) => {
        return state = {...newState.user} 
    }),
  );

  export const registerReducer = createReducer(
    initialState,
    on(actions.registerUser, state => {
        return {...state}
    }),
    on(actions.registeredUser,  (state, { user }) => {
        return state = { ...user }
    }),
  );