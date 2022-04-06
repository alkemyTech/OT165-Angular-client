import { createAction, props } from "@ngrx/store";

export const getActivities = createAction("[Activity] Get activities");

export const getActivitiesSuccess = createAction("[Activity] Get activity success");

export const addActivity = createAction("[Activity] Add activity")

export const addActivitySuccess = createAction("[Activity] Add activity success")

export const deleteActivity = createAction("[Activity] Delete activity");

export const deleteActivitySuccess = createAction("[Activity] Delete activity success");

