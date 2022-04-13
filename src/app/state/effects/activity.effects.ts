import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { ActivitiesService } from "src/app/backoffice/services/activities/activities.service";
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
          catchError(() => EMPTY)
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
          catchError(() => EMPTY)
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
          map(
            (res) => addActivitySuccess({ data: res }),
            alert("Your activity is created succesfully")
          ),
          tap(() => this.router.navigateByUrl("/backoffice/actividades")),
          catchError(() => EMPTY)
        )
      )
    )
  );

  editActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateActivity),
      mergeMap(({ id, data }) =>
        this.activitiesService.updateActivity(id, data).pipe(
          map(
            (res) => updateActivitySuccess({ id, data: res }),
            alert("Your activity data was updated succesfully")
          ),
          tap(() => this.router.navigateByUrl("/backoffice/actividades")),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private activitiesService: ActivitiesService
  ) {}
}
