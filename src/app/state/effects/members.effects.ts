import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from "rxjs/operators";
import { MemberService } from "src/app/backoffice/services/members/member.service";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
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
    private router: Router,
    private dialogService: DialogService,
  ) {}

  loadMembers$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadMembers),
      exhaustMap(() =>
        this.membersService.getMembers().pipe(
          map((members) => loadedMembers({ members: members })),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo obtener el listado de miembros",
            });
            return of({ type: "[Error Member] Member" });
          })
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
          tap(() => {
            this.dialogService.add({
              type: "success",
              title: "Miembro eliminada",
              detail: "El miembro se eliminó correctamente",
            });
          }),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error del servidor",
              detail: "No pudo eliminarse el miembro",
            });
            return of({ type: "[Error Member] Member" });
          })
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
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error del servidor",
              detail: "No pudo modificar el miembro",
            });
            return of({ type: "[Error Member] Member" });
          })
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
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo crear el miembro",
            });
            return of({ type: "[Error Member] Member" });
          })
        )
      )
    )
  );
}
