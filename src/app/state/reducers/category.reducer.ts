import { createCategory, deleteCategory, deleteCategorySuccess, editCategory, getCategoriesSuccess, createCategorySuccess, editCategorySuccess, deleteCategoryError } from './../actions/category.actions';
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
    on(createCategorySuccess, (state, {category}) => {                    
        return state = {
            success: true, 
            categories: [...state.categories, category],
            error: ''}
    }),
    on(editCategorySuccess, (state, {category}) => {
        const updatedArray: Category[] = state.categories.map((cat) => {
            if(cat.id == category.id){
                return category;
            }
            return cat;
        })
        return state = {
            success: true, 
            categories: updatedArray,
            error: ''}
    }),
    on(deleteCategorySuccess, (state, {id}) => {
        const categories = state.categories.filter(cat => cat.id !== id);
        return state = {categories: categories, success: true, error: ''}
    }),
    on(deleteCategoryError, (state, {error}) => {
        return state = {...state, error: error}
    })
)