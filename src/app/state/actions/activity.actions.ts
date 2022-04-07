import { createAction, props } from "@ngrx/store";
import {Activity} from "src/app/shared/models/Activity";

export const getActivities = createAction("[Activity] Get activities");

export const getActivitiesSuccess = createAction("[Activity] Get activity success",props<{activities:Activity[]}>());

export const addActivity = createAction("[Activity] Add activity")

export const addActivitySuccess = createAction("[Activity] Add activity success")

export const deleteActivity = createAction("[Activity] Delete activity",props<{id:number}>());

export const deleteActivitySuccess = createAction("[Activity] Delete activity success",props<{id:number}>());

