import { createAction, props } from "@ngrx/store";
import { Slide } from "src/app/backoffice/models/slide.interface";

export const errorSlides = createAction(
  "[Error Slides] Slides"
);

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
  "[Create Slide] Slides",
  props<{ slide: Slide }>()
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
  "[Delete Slide] Slides",
  props<{ id: number }>()
);

export const deleteSlideSuccess = createAction(
  "[Delete Slide Success] Slides",
  props<{ id: number }>()
);