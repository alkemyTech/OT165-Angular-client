import { createReducer, on } from "@ngrx/store";
import { SlideState } from "src/app/shared/models/SlideState";
import * as actions from "../actions/slides.actions";

export const initialState: SlideState = { slides: [] };

export const slideReducer = createReducer(
  initialState,
  on(actions.getAllSlides, (state) => {
    return { ...state };
  }),
  // on(actions.getOneSlide,  (state, newState) => {
  //     return state = {...newState.user}
  // }),
  on(actions.createSlide, (state, { payload }) => {
    return {
      ...state,
      slides: [...state.slides, payload.slide],
    };
  }),
  on(actions.updateSlide, (state, { payload }) => {
    return {
      ...state,
      slides: [
        ...state.slides.map((el) => {
          return el.id == payload.id ? payload.slide : el;
        }),
      ],
    };
  }),
  on(actions.deleteSlide, (state, { payload }) => {
    return {
      ...state,
      slides: [
        ...state.slides.filter((el) => {
          return el.id != payload.id;
        }),
      ],
    };
  })
);
