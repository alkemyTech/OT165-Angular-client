import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { ActivitiesService } from "src/app/backoffice/services/activities/activities.service";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import {
  addActivity,
  addActivitySuccess,
  deleteActivity,
  deleteActivitySuccess,
  getActivities,
  getActivitiesSuccess,
  getActivity,
  getActivitySuccess,
  getSpecificActivities,
  getSpecificActivitiesSuccess,
  updateActivity,
  updateActivitySuccess,
} from "../actions/activity.actions";

@Injectable()
export class ActivityEffects {
  loadActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActivities),
      exhaustMap(() =>
        this.activitiesService.getActivities().pipe(
          map((res) => getActivitiesSuccess({ activities: res })),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo obtener el listado de Actividades",
            });
            return of({ type: "[Error Activities] Activities" });
          })
        )
      )
    )
  );

  loadSpecificActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpecificActivities),
      mergeMap(({ key }) =>
        this.activitiesService.getActivities(key).pipe(
          map((res) => getSpecificActivitiesSuccess({ activities: res })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteActivity),
      mergeMap(({ id }) =>
        this.activitiesService.deleteActivity(id).pipe(
          map(() => deleteActivitySuccess({ id })),
          tap(() => {
            this.dialogService.add({
              type: "success",
              title: "Eliminó",
              detail: "Se  eliminó la Actividad",
            });
          }),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo eliminar la Actividad",
            });
            return of({ type: "[Error Activities] Activities" });
          })
        )
      )
    )
  );

  loadActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getActivity),
      mergeMap(({ id }) =>
        this.activitiesService.getActivity(id).pipe(
          map((res) => getActivitySuccess({ data: res })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addActivity),
      mergeMap(({ data }) =>
        this.activitiesService.createActivity(data).pipe(
          map((res) => addActivitySuccess({ data: res })),
          tap(() => {
            this.dialogService.deleteAll();
            this.dialogService.add({
              type: "success",
              title: "Añadida",
              detail: "¡Has creado un nuevo Actividad!",
            });
            this.router.navigateByUrl("/backoffice/actividades");
          }),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo añadir la Actividad",
            });
            return of({ type: "[Error Activities] Activities" });
          })
        )
      )
    )
  );

  editActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateActivity),
      mergeMap(({ id, data }) =>
        this.activitiesService.updateActivity(id, data).pipe(
          map((res) => updateActivitySuccess({ id, data: res })),
          tap(() => {
            this.dialogService.deleteAll();
            this.dialogService.add({
              type: "success",
              title: "Editada",
              detail: "¡Has editado una Actividad!",
            });
            this.router.navigateByUrl("/backoffice/actividades");
          }),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo editar la Actividad",
            });
            return of({ type: "[Error Activities] Activities" });
          })
        )
      )
    )
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private activitiesService: ActivitiesService,
    private dialogService: DialogService
  ) {}
}
