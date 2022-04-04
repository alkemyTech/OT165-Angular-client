import { createSelector } from '@ngrx/store';
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