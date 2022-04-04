import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { UserService } from "src/app/backoffice/services/users/user.service";
import { getUsers, getUsersSuccess } from "src/app/state/actions/users.actions";

@Injectable()
export class UsersEffects {
  constructor(private action$: Actions, private serviceUser: UserService) {}

  // loadUsers$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(getUsers),
  //     exhaustMap(() =>
  //       this.serviceUser.getUsers().pipe(
  //         map((users) => getUsersSuccess(users)),
  //         catchError(() => EMPTY)          
  //       )
  //     )
  //   )
  // );
}
