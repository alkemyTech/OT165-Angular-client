import { createReducer, on } from "@ngrx/store";
import { ActivityState } from "src/app/shared/models/Activity";
import {
  deleteActivity,
  deleteActivitySuccess,
  getActivities,
  getActivitiesSuccess,
} from "../actions/activity.actions";

export const initialState: ActivityState = { loading: false, activities: [] };

export const activityReducer = createReducer(
  initialState,
  on(getActivities, (state) => {
    return { ...state, loading: true };
  }),

  on(getActivitiesSuccess, (state, { activities }) => {
    return { ...state, activities };
  }),

  on(deleteActivity, (state) => {
    return { ...state, loading: true };
  }),

  on(deleteActivitySuccess, (state, { id }) => {
    // const updateActivities = state.activities.filter((activity) => {
    //  return activity.id !== id;
    // });
    // return { ...state, activities: updateActivities };

    return {
      ...state,
      activities: state.activities.filter((activity) => {
        return id !== activity.id;
      }),
    };
  })
);
