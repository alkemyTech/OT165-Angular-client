import { createCategory, deleteCategory, deleteCategorySuccess, editCategory, getCategoriesSuccess } from './../actions/category.actions';
import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/shared/models/Category';

export interface CategoryState { 
    categories: Category[];
    success: boolean;
    error: string;    
}
export const initialState: CategoryState = {categories: [], success: false, error: ''};

export const categoryReducer = createReducer(
    initialState,
    on(getCategoriesSuccess, (state, {categories}) => { 
        return state = {success: true, categories, error: ''};
    }),
    on(editCategory, (state) => {
        return state = {...state}
    }),
    on(deleteCategorySuccess, (state, {id}) => {
        const cats = state.categories.filter(cat => cat.id !== id);
        return state = {categories: cats, success: true, error: ''}
    })
)