import { createAction } from '@ngrx/store';
import { Category } from 'src/app/shared/models/Category';

export const getCategories = createAction(
    '[Category] Get categories'    
);
export const getCategoriesSuccess = createAction(
    '[Category] Get categories success',
    (categories: ReadonlyArray<Category>) => ({ categories })
);
export const createCategory = createAction(
    '[Category] Create Category',
    (category: Category) => ({ category })
);
export const createCategorySuccess = createAction(
    '[Category] Create Category success',
    (category: Category) => ({ category })
);
export const editCategory = createAction('[Category] Edit Category');
export const deleteCategory = createAction('[Category] Delete Category');