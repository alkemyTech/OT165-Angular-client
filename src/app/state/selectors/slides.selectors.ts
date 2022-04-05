import { createSelector } from '@ngrx/store';
import { SlideState } from 'src/app/shared/models/SlideState';
import { AppState } from '../app.state';
 
export const selectSlides = (state: AppState) => state.slide;
 
export const selectSlidesData = createSelector(
  selectSlides,
  (state: SlideState) => state.slides
);