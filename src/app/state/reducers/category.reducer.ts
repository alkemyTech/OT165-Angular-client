import { createCategory, deleteCategory, editCategory, getCategoriesSuccess } from './../actions/category.actions';
import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/shared/models/Category';

export interface CategoryState {
    categories: ReadonlyArray<Category>;
}
export const initialState: ReadonlyArray<Category> = [];

export const categoryReducer = createReducer(
    initialState,
    on(getCategoriesSuccess, (state, {categories}) => [...categories]),
    on(editCategory, (state) => {
        return state = {...state}
    }),
    on(deleteCategory, (state) => {
        return state = {...state}
    })
)