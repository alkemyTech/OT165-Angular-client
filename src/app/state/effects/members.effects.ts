import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
} from 'rxjs/operators';
import { MemberService } from 'src/app/backoffice/services/members/member.service';
import {
  addMember,
  addedMember,
  deletedMember,
  deleteMember,
  loadedMembers,
  loadMembers,
  editMember,
  editedMember,
} from '../actions/members.actions';

@Injectable()
export class MembersEffects {
  constructor(
    private action$: Actions,
    private membersService: MemberService
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
      concatMap(({ member }) =>
        this.membersService
          .putById(member.id!, member)
          .pipe(map((editedMembers) => editedMember({ member: editedMembers })))
      )
    )
  );

  addMember$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMember),
      concatMap(({ member }) =>
        this.membersService.post(member).pipe(
          map((member) => addedMember({ member: member })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
