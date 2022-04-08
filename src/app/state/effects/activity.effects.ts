import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
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
          map(({ data }) => getActivitySuccess({ data })),
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
            ({ data }) => addActivitySuccess({ data }),
            alert("Your activity is created succesfully")
          ),
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
            ({ data }) => updateActivitySuccess({ id, data }),
            alert("Your activity data was updated succesfully")
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesService
  ) {}
}
