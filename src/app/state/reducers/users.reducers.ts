import { createReducer, on } from '@ngrx/store';
import { UsersState } from 'src/app/shared/models/userState.interface';
import { getUsers, getUsersSuccess } from 'src/app/state/actions/users.actions';

export const initialState: UsersState = { loading: false, users: [] };

export const usersReducer = createReducer(
  initialState,
  on(getUsers, (state) => { return {...state, loading: true} }),
  //on(getUsersSuccess, (state, { users }) => [...users]),
);