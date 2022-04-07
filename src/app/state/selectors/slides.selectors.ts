import { createSelector } from '@ngrx/store';
import { SlideState } from 'src/app/shared/models/SlideState';
import { AppState } from '../app.state';
 
export const selectSlides = (state: AppState) => state.slide;

export const selectLoading = createSelector(
  selectSlides,
  (state: SlideState) => state.loading
);

export const selectSlidesList = createSelector(
  selectSlides,
  (state: SlideState) => state.slides
);

export const selectSlideById = (id: number) => createSelector(
  selectSlides,
  (state: SlideState) => state.slides.find(el => el.id == id)
);