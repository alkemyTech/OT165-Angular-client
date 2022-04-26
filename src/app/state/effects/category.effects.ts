import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { concatMap, tap } from 'rxjs/operators';
import { createCategory, createCategorySuccess, deleteCategoryError, editCategory, editCategorySuccess } from './../actions/category.actions';
import { catchError, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category/category.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { deleteCategory, deleteCategorySuccess, getCategories, getCategoriesSuccess } from '../actions/category.actions';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CategoryEffects {

    getCategories$ = createEffect(() => this.action$.pipe(
        ofType(getCategories),
        mergeMap(() => this.categoryService.getAll()
            .pipe(
                map(categories => getCategoriesSuccess({categories: categories})),
                catchError(() => { 
                    this.dialogService.add({
                        type: 'error',
                        title: 'Error',
                        detail: 'No se pudieron obtener las categorias'
                    })                  
                    return of({type: '[Category] Get categories error'})
                })
            ))
    ));

    createCategory$ = createEffect(() => this.action$.pipe(
        ofType(createCategory),
        concatMap(({category}) => 
            this.categoryService.post(category).pipe(
                map((newCategory) => createCategorySuccess({category: newCategory})),
                tap(() => {
                  this.dialogService.deleteAll();
                  this.dialogService.add({
                    type: "success",
                    title: "Añadida",
                    detail: "¡Añadiste una categoría nueva!",
                  });
                  this.router.navigateByUrl('backoffice/categorias');
                }),
                catchError(() => { 
                    this.dialogService.add({
                        type: 'error',
                        title: 'Error',
                        detail: 'No se pudo crear una nueva categoria.'
                    })                  
                    return of({type: '[Category] Create category error'})
                })
            ))
    ))

    updateCategory$ = createEffect(() => this.action$.pipe(
        ofType(editCategory),
        concatMap(({category}) =>
            this.categoryService.putById(category.id!, category).pipe(
                map((updatedCategory) => editCategorySuccess({category: updatedCategory})),
                tap(() => {
                  this.dialogService.deleteAll();
                  this.dialogService.add({
                    type: "success",
                    title: "Editada",
                    detail: "¡Se ha editado la categoría con éxito!",
                  });
                  this.router.navigateByUrl('backoffice/categorias');
                }),
                catchError(() => { 
                    this.dialogService.add({
                        type: 'error',
                        title: 'Error',
                        detail: 'No se pudo editar la categoria.'
                    })                  
                    return of({type: '[Category] Edit category error'})
                })
            ))
    )) 

    deleteCategory$ = createEffect(() => this.action$.pipe(
        ofType(deleteCategory),
        mergeMap(({id}) => this.categoryService.deleteById(id)        
            .pipe(
                map(() => { return deleteCategorySuccess({id: id})}), 
                tap(() => {
                  this.dialogService.add({
                    type: "success",
                    title: "Eliminada",
                    detail: "¡Se ha eliminado la categoría!",
                  });
                }),               
                catchError(() => { 
                    this.dialogService.add({
                        type: 'error',
                        title: 'Error',
                        detail: 'No se pudo eliminar la categoria.'
                    })                  
                    return of({type: '[Category] Delete category error'})
                })
            )
        )
    ))   
    
    constructor(private action$: Actions, 
                private categoryService: CategoryService,
                private dialogService: DialogService,
                private router: Router,
                ) {}
    
}
