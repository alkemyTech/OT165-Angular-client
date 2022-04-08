import { ActionReducerMap } from '@ngrx/store';
import { UserState } from '../shared/models/auth/userState.interface';
import { UsersState } from 'src/app/shared/models/userState.interface';
import { loginReducer, registerReducer } from './reducers/auth.reducers';
import { usersReducer } from './reducers/users.reducers';
import { MemberState } from '../shared/models/membersState.interface';
import { membersReducer } from './reducers/member.reducer';

export interface AppState {
  userLogin: UserState;
  userRegister: UserState;
  users: UsersState;
  members: MemberState;
}

export const REDUCERS: ActionReducerMap<AppState> = {
  userLogin: loginReducer,
  userRegister: registerReducer,
  users: usersReducer,
  members: membersReducer,
};
