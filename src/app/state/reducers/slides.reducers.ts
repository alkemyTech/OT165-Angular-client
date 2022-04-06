import { createReducer, on } from "@ngrx/store";
import { SlideState } from "src/app/shared/models/SlideState";
import * as actions from "../actions/slides.actions";

export const initialState: SlideState = { slides: [], loading: false };

export const slideReducer = createReducer(
  initialState,
  //GET SLIDES
  on(actions.getSlides, (state) => {
    return { ...state, loading: true };
  }),
  on(actions.getSlidesSuccess, (state, { slides }) => {
    return { ...state, loading: false, slides: slides };
  }),

  //CREATE SLIDE
  on(actions.createSlide, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(actions.createSlideSuccess, (state, { slide }) => {
    return {
      ...state,
      loading: false,
      slides: [...state.slides, slide],
    };
  }),

  //UPDATE SLIDE
  on(actions.updateSlide, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(actions.updateSlideSuccess, (state, { id, slide }) => {
    return {
      ...state,
      loading: false,
      slides: [
        ...state.slides.map((el) => {
          return el.id == id ? slide : el;
        }),
      ],
    };
  }),

  //DELETE SLIDE
  on(actions.deleteSlide, (state) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(actions.deleteSlideSuccess, (state, { id }) => {
    return {
      ...state,
      loading: false,
      slides: [
        ...state.slides.filter((el) => {
          return el.id != id;
        }),
      ],
    };
  }),

  //ERROR
  on(actions.deleteSlideSuccess, (state) => {
    return {
      ...state,
      loading: false
    };
  })
);
