import { createReducer, on } from "@ngrx/store";
import { ActivityState } from "src/app/shared/models/Activity";
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

export const initialState: ActivityState = {
  activities: [],
  activity: [],
};

export const activityReducer = createReducer(
  initialState,

  //Get Activities-------------------------------------
  on(getActivities, (state) => {
    return { ...state, activity: [] };
  }),

  on(getActivitiesSuccess, (state, { activities }) => {
    return { ...state, activities: activities };
  }),

  //Get Activity----------------------------------------
  on(getActivity, (state) => {
    return { ...state };
  }),

  on(getActivitySuccess, (state, { data }) => {
    return { ...state, activity: data };
  }),

  //Delete Activity--------------------------------------
  on(deleteActivity, (state) => {
    return { ...state };
  }),

  on(deleteActivitySuccess, (state, { id }) => {
    return {
      ...state,
      activities: state.activities.filter((activity) => {
        return id !== activity.id;
      }),
    };
  }),

  //Update Activity--------------------------------------
  on(updateActivity, (state) => {
    return { ...state };
  }),

  on(updateActivitySuccess, (state, { id, data }) => {
    return {
      ...state,
      activities: state.activities.map((activity) =>
        activity.id == id ? data : activity
      ),
    };
  }),

  //Add Activity----------------------------------------
  on(addActivity, (state) => {
    return { ...state };
  }),

  on(addActivitySuccess, (state, { data }) => {
    return { ...state, activities: state.activities.concat(data) };
  })
);