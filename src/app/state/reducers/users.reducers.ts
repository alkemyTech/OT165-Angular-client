import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/backoffice/models/user';
import { getUsersSuccess } from 'src/app/state/actions/users.actions';


export const initialState:Array<User> = [];

export const usersReducer = createReducer(
  initialState,  
  on(getUsersSuccess, (state, { users }) => [...users]),
);