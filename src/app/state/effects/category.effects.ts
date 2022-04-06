import { concatMap } from 'rxjs/operators';
import { createCategory, createCategorySuccess, editCategory, editCategorySuccess } from './../actions/category.actions';
import { catchError, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category/category.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { deleteCategory, deleteCategorySuccess, getCategories, getCategoriesSuccess } from '../actions/category.actions';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class CategoryEffects {

    getCategories$ = createEffect(() => this.action$.pipe(
        ofType(getCategories),
        mergeMap(() => this.categoryService.getAll()
            .pipe(
                map(categories => getCategoriesSuccess({categories: categories})),
                catchError(() => EMPTY)
            ))
    ));

    createCategory$ = createEffect(() => this.action$.pipe(
        ofType(createCategory),
        concatMap(({category}) => 
            this.categoryService.post(category).pipe(
                map((newCategory) => createCategorySuccess({category: newCategory})),
                catchError(() => EMPTY)
            ))
    ))

    updateCategory$ = createEffect(() => this.action$.pipe(
        ofType(editCategory),
        concatMap(({category}) =>
            this.categoryService.putById(category.id!, category).pipe(
                map((updatedCategory) => editCategorySuccess({category: updatedCategory})),
                catchError(() => EMPTY)
            ))
    )) 

    deleteCategory$ = createEffect(() => this.action$.pipe(
        ofType(deleteCategory),
        mergeMap(({id}) => this.categoryService.deleteById(id)
            .pipe(
                map(() => deleteCategorySuccess({id: id})),
                catchError(() => EMPTY)
            )
        )
    ))

   
    
    constructor(private action$: Actions, private categoryService: CategoryService) {}
    
}
