import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/backoffice/models/user';

export const getUsers = createAction(
    '[Users List] Get users'
);

export const getUsersSuccess = createAction(
    '[Users List] Get users success',
    props<{ users: Array<User> }>()
);