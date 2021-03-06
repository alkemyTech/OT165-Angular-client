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
    on(actions.logOut,  state => {
        return state = { success: false, user: {} }
    }),
    /* login google */
    on(actions.loginGoogle, state => { //Este no es necesario porque el estado no cambia
        return {...state}
    }),
    on(actions.logedGoogle,  (state, { user }) => {
        return  state = user; 
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