import { createAction, props } from "@ngrx/store";
import { Activity } from "src/app/backoffice/models/activity";
import { IActivity } from "src/app/shared/models/Activity";

//Error
export const errorActivities = createAction(
  "[Error Activities] Activities"
);

//Get Activities-------------------------------------------------------
export const getActivities = createAction("[Activity] Get activities");

export const getActivitiesSuccess = createAction(
  "[Activity] Get activities success",
  props<{ activities: IActivity[] }>()
);

//Get Activity---------------------------------------------------------
export const getActivity = createAction(
  "[Activity] Get activity",
  props<{ id: number }>()
);

export const getActivitySuccess = createAction(
  "[Activity] Get activity success",
  props<{ data: IActivity[] }>()
);

//Add Activity---------------------------------------------------------
export const addActivity = createAction(
  "[Activity] Add activity",
  props<{ data: IActivity[] }>()
);

export const addActivitySuccess = createAction(
  "[Activity] Add activity success",
  props<{ data: IActivity[] }>()
);

//Delete Activity-----------------------------------------------------
export const deleteActivity = createAction(
  "[Activity] Delete activity",
  props<{ id: number }>()
);

export const deleteActivitySuccess = createAction(
  "[Activity] Delete activity success",
  props<{ id: number }>()
);

//Update Activity-----------------------------------------------------
export const updateActivity = createAction(
  "[Activity] Update activity",
  props<{ id: number; data: Activity }>()
);

export const updateActivitySuccess = createAction(
  "[Activity] Update activity success",
  props<{ id: number; data: Activity }>()
);
