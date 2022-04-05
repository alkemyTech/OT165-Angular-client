import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import { UserService } from "src/app/backoffice/services/users/user.service";
import { deleteUser, deleteUserSuccess, getUsers, getUsersSuccess } from "src/app/state/actions/users.actions";

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
}