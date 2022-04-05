import { CategoryState } from 'src/app/state/reducers/category.reducer';
import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/shared/models/Category';

export const getCategories = createAction('[Category] Get categories');
export const getCategoriesSuccess = createAction(
    '[Category] Get categories success',
     props<{categories: Category[]}>()   
);
export const createCategory = createAction(
    '[Category] Create Category',
    props<{category: Category}>()
);
export const createCategorySuccess = createAction(
    '[Category] Create Category success',
    props<{category: Category}>()
);
export const editCategory = createAction(
    '[Category] Edit Category',
    props<{category: Category}>()
);
export const editCategorySuccess = createAction(
    '[Category] Edit category success',
    props<{category: Category}>()
);
export const deleteCategory = createAction(
    '[Category] Delete Category',
    props<{id: number}>()
);
export const deleteCategorySuccess = createAction(
    '[Category] Delete category success',
    props<{id: number}>()
);