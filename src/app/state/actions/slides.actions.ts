import { createAction, props } from "@ngrx/store";
import { Slide } from "../../shared/models/Slide";

export const getSlides = createAction(
  "[Get Slides] Slides"
);

export const getSlidesSuccess = createAction(
  "[Get Slides Success] Slides",
  props<{ slides: Slide[] }>()
);

export const getOneSlide = createAction(
  "[Get Slide] Slides",
  props<{ id: number }>()
);

export const getOneSlideSuccess = createAction(
  "[Get Slide Success] Slides",
  props<{ id: number }>()
);

export const createSlide = createAction(
  "[Create Slide] Slides"
);

export const createSlideSuccess = createAction(
  "[Create Slide Success] Slides",
  props<{ slide: Slide }>()
);

export const updateSlide = createAction(
  "[Update Slide] Slides"
);

export const updateSlideSuccess = createAction(
  "[Update Slide Success] Slides",
  props<{ id: number; slide: Slide }>()
);

export const deleteSlide = createAction(
  "[Delete Slide] Slides"
);

export const deleteSlideSuccess = createAction(
  "[Delete Slide Success] Slides",
  props<{ id: number }>()
);