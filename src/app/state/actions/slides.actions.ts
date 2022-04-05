import { createAction, props } from "@ngrx/store";
import { Slide } from "../../shared/models/Slide";

export const getAllSlides = createAction(
  "[Get All Slides] Slides"
);

export const getOneSlide = createAction(
  "[Get Slide] Slides",
  props<{payload: { id: number }}>()
);

export const createSlide = createAction(
  "[Create Slide] Slides",
  props<{payload: { slide: Slide }}>()
);

export const updateSlide = createAction(
  "[Update Slide] Slides",
  props<{payload:{ id: number; slide: Slide }}>()
);

export const deleteSlide = createAction(
  "[Delete Slide] Slides",
  props<{payload: { id: number }}>()
);
