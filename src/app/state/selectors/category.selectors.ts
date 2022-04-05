import { Category } from 'src/app/shared/models/Category';
import { CategoryState } from 'src/app/state/reducers/category.reducer';
import { AppState } from './../app.state';
import { createSelector } from "@ngrx/store";
export const selectCategoriesFeature = (state: AppState) => state.category;

export const selectCategories = createSelector(
    selectCategoriesFeature,
    (state: CategoryState) => state.categories
)
