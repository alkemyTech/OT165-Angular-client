import { createSelector } from '@ngrx/store';
import { User } from 'src/app/backoffice/models/user';
import { UsersState } from 'src/app/shared/models/userState.interface';
import { AppState } from '../app.state';

export const selectUsersFeature = (state: AppState) => state.users;
 
export const selectUsersList = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.users
);

export const selectLoading = createSelector(
  selectUsersFeature,
  (state: UsersState) => state.loading
);

export const selectUser = (id: number) => createSelector(
  selectUsersFeature,
  (state: UsersState) => {    
    return state.users.find((user: User) => user.id == id)
  }
)

export const filterUserByName = (key: string) => createSelector(
  selectUsersFeature,
  (state: UsersState) => {
    return state.users.filter((user: User) => user.name.toLowerCase().includes(key.toLowerCase()))
  }
)