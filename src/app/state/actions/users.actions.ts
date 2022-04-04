import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/backoffice/models/user';

export const getUsers = createAction(
    '[Users] Get users'
);

export const getUsersSuccess = createAction(
    '[Users] Get users success',
    (users: Array<User>) => ({users})
    //props<{ users: Array<User>}>()
);