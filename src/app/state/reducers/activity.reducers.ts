import { createReducer, on } from "@ngrx/store";
import { ActivityState } from "src/app/shared/models/Activity";
import {
  addActivity,
  addActivitySuccess,
  deleteActivity,
  deleteActivitySuccess,
  errorActivities,
  getActivities,
  getActivitiesSuccess,
  getActivity,
  getActivitySuccess,
  getSpecificActivities,
  getSpecificActivitiesSuccess,
  updateActivity,
  updateActivitySuccess,
} from "../actions/activity.actions";

export const initialState: ActivityState = {
  activities: [],
  activity: [],
  loading: false,
  error: "",
};

export const activityReducer = createReducer(
  initialState,

  //Error----------------------------------------------
  on(errorActivities,state => ({...state})),

  //Get Activities-------------------------------------
  on(getActivities, (state) => {
    return { ...state, activity: [], loading: true };
  }),

  on(getActivitiesSuccess, (state, { activities }) => {
    return { ...state, activities: activities, loading: false };
  }),

  //Get Specific Activities-------------------------------------
  on(getSpecificActivities, (state) => {
    return { ...state, activity: [], loading: true };
  }),
  on(getSpecificActivitiesSuccess, (state, { activities }) => {
    return { ...state, activities: activities, loading: false };
  }),

  //Get Activity----------------------------------------
  on(getActivity, (state) => {
    return { ...state, loading: true };
  }),

  on(getActivitySuccess, (state, { data }) => {
    return { ...state, activity: data, loading: false };
  }),

  //Delete Activity--------------------------------------
  on(deleteActivity, (state) => {
    return { ...state, loading: true };
  }),

  on(deleteActivitySuccess, (state, { id }) => {
    return {
      ...state,
      activities: state.activities.filter((activity) => {
        return id !== activity.id;
      }),
      loading: false
    };
  }),

  //Update Activity--------------------------------------
  on(updateActivity, (state) => {
    return { ...state, loading: true };
  }),

  on(updateActivitySuccess, (state, { id, data }) => {
    return {
      ...state,
      activities: state.activities.map((activity) =>
        activity.id == id ? data : activity
      ),
      loading: false
    };
  }),

  //Add Activity----------------------------------------
  on(addActivity, (state) => {
    return { ...state, loading: true };
  }),

  on(addActivitySuccess, (state, { data }) => {
    return { ...state, activities: state.activities.concat(data), loading: false };
  })
);
