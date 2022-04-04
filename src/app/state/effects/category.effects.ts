import { catchError, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category/category.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { getCategories, getCategoriesSuccess } from '../actions/category.actions';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class CategoryEffects {

    getCategories$ = createEffect(() => this.action$.pipe(
        ofType(getCategories),
        mergeMap(() => this.categoryService.getAll()
            .pipe(
                map(categories => getCategoriesSuccess(categories)),
                catchError(() => EMPTY)
            ))
    ))

   /*  createCategory$ = createEffect(() => 
        this.action.pipe(
            ofType(createCategory),
            tap((category) => console.log(category)),
            concatMap(({category}) => 
                this.categoryService.post(category).pipe(
                    map((newCategory) => createCategorySuccess(newCategory)),
                    catchError(() => EMPTY)
                )
            )
        )
    ) */
    
    constructor(private action$: Actions, private categoryService: CategoryService) {}
    
}
