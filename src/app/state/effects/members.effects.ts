import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from "rxjs/operators";
import { MemberService } from "src/app/backoffice/services/members/member.service";
import {
  addMember,
  addedMember,
  deletedMember,
  deleteMember,
  loadedMembers,
  loadMembers,
  editMember,
  editedMember,
} from "../actions/members.actions";

@Injectable()
export class MembersEffects {
  constructor(
    private action$: Actions,
    private membersService: MemberService,
    private router: Router
  ) {}

  loadMembers$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadMembers),
      exhaustMap(() =>
        this.membersService.getMembers().pipe(
          map((members) => loadedMembers({ members: members })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteMember$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteMember),
      mergeMap(({ id }) =>
        this.membersService.deleteById(id).pipe(
          map(() => deletedMember({ id: id })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  editMember$ = createEffect(() =>
    this.action$.pipe(
      ofType(editMember),
      concatMap(({ id, member }) =>
        this.membersService.putById(id, member).pipe(
          map((editedMembers) => editedMember({ member: editedMembers })),
          tap(() => {
            this.router.navigateByUrl("/backoffice/members");
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addMember$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMember),
      concatMap(({ member }) =>
        this.membersService.post(member).pipe(
          map((member) => addedMember({ member: member })),
          tap(() => {
            this.router.navigateByUrl("/backoffice/members");
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
