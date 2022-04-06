import { createReducer, on } from "@ngrx/store";
import { UsersState } from "src/app/shared/models/userState.interface";
import {
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
  getUsers,
  getUsersSuccess,
} from "src/app/state/actions/users.actions";

export const initialState: UsersState = { loading: false, users: [] };

export const usersReducer = createReducer(
  initialState,
  on(getUsers, (state) => {
    return { ...state, loading: true };
  }),
  on(getUsersSuccess, (state, { users }) => {
    return { ...state, loading: false, users };
  }),
  on(deleteUser, (state) => {
    return { ...state, loading: false };
  }),
  on(deleteUserSuccess, (state, { id }) => {
    const updatedUsers = state.users.filter((user) => user.id !== id);
    return {
      ...state,      
      users: updatedUsers
    };
  }),
  on(addUser, (state) => {
    return { ...state, loading: false };
  }),
  on(addUserSuccess, (state, { user }) => {
    const updatedUsers = [...state.users, user]
    return{
      ...state,
      users: updatedUsers   
    }
  })
);
