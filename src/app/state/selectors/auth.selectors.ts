import { createSelector } from '@ngrx/store';
import { UserState } from 'src/app/shared/models/auth/userState.interface';
import { AppState } from '../app.state';
 
export const selectUserFeature = (state: AppState) => state.user;
 
export const selectUserData = createSelector(
    selectUserFeature,
  (state: UserState) => state.user?.user
);

export const selectUserToken = createSelector(
    selectUserFeature,
  (state: UserState) => state.user?.token
);