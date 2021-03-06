import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, concatMap, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { UserService } from "src/app/backoffice/services/users/user.service";
import { addUser, addUserSuccess, deleteUser, deleteUserSuccess, getUsers, getUsersSuccess, updateUser, updateUserSuccess } from "src/app/state/actions/users.actions";

@Injectable()
export class UsersEffects {
  constructor(private action$: Actions, private serviceUser: UserService) { }

  loadUsers$ = createEffect(() => this.action$.pipe(
    ofType(getUsers),
    exhaustMap(() => this.serviceUser.getUsers()
      .pipe(
        map((users) => getUsersSuccess({ users: users })),
        catchError(() => EMPTY)
      )
    )
  )
  );

  deleteUser$ = createEffect(() => this.action$.pipe(
    ofType(deleteUser),
    mergeMap(({ id }) => this.serviceUser.deleteUser(id)
      .pipe(
        map(() => deleteUserSuccess({id: id})),
        catchError(() => EMPTY)
      )
    )
  )
  );

  updateUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateUser),
      concatMap(({ user }) =>
        this.serviceUser.updateUser(user.id, user).pipe(
          map((user) => updateUserSuccess({user: user})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUser),      
      concatMap(({ user }) =>
        this.serviceUser.createUser(user).pipe(
          map((user) => addUserSuccess({user: user})),
          catchError(() => EMPTY)
        )
      )
    )
  );
}