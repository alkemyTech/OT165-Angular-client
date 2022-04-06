import { createReducer, on } from "@ngrx/store";
import { Activity } from "src/app/backoffice/models/activity";
import { getActivities } from "../actions/activity.actions";

export const initialState: Activity[] = [];

const _activityReducer = createReducer(
  initialState,
  on(getActivities, (state) => state)
);

export function activityReducer(state: Activity[], action: any) {
  return _activityReducer(state, action);
}
