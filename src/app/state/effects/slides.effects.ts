import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { catchError, exhaustMap, map, mergeMap, tap } from "rxjs/operators";
import { SlideService } from "src/app/backoffice/services/slides/slide.service";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import * as actions from "../actions/slides.actions";

@Injectable()
export class SlidesEffects {
  constructor(
    private actions$: Actions,
    private slideService: SlideService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  loadSlides$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getSlides),
      exhaustMap(() =>
        this.slideService.getAllSildes().pipe(
          map((slides) => actions.getSlidesSuccess({ slides: slides })),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo obtener el listado de slides",
            });
            return of({ type: "[Error Slides] Slides" });
          })
        )
      )
    )
  );

  loadSpecificSlides$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getSpecificSlides),
      mergeMap(({ key }) =>
        this.slideService.getListOfSlides(key).pipe(
          map((res) => actions.getSpecificSlidesSuccess({ slides: res })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteSlides$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteSlide),
      mergeMap(({ id }) =>
        this.slideService.deleteById(id).pipe(
          map(() => {
            return actions.deleteSlideSuccess({ id: id });
          }),
          tap(() => {
            this.dialogService.add({
              type: "success",
              title: "Eliminada",
              detail: "La slide se eliminĂ³ correctamente",
            });
          }),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error del servidor",
              detail: "No pudo eliminarse la slide",
            });
            return of({ type: "[Error Slides] Slides" });
          })
        )
      )
    )
  );

  updateSlide$ = createEffect(() => 
    this.actions$.pipe(
      ofType(actions.updateSlide),
      mergeMap(({id, slide}) => 
        this.slideService.upDateSlides(id, slide).pipe(
          map(() => actions.updateSlideSuccess({id: id, slide: slide})),
          tap(() => {
            this.dialogService.deleteAll();
            this.router.navigateByUrl('backoffice/slides');
            this.dialogService.add({
              type: "success",
              title: "Actualizada",
              detail: "La slide se actualizĂ³ correctamente",
            });
          }),
          catchError(() => {
            this.dialogService.add({
              type: "error",
              title: "Error del servidor",
              detail: "No pudo actualizarse la slide",
            });
            return of({ type: "[Error Slides] Slides" });
          })
        )
      )
    )
  );

  createSlide$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createSlide),
      mergeMap(({ slide }) =>
        this.slideService.createSlides(slide).pipe(
          map(() => {
            return actions.createSlideSuccess({ slide: slide });
          }),
          tap(() => {
            this.dialogService.deleteAll();
            this.router.navigate(["/backoffice/slides"]);
            this.dialogService.add({
              type: "success",
              title: "Listo",
              detail: "Â¡Has creado una nueva Slide!",
            });
          }),
          catchError(() => {
            this.dialogService.deleteAll();
            this.dialogService.add({
              type: "error",
              title: "Error en el servidor",
              detail: "No se pudo crear la slide",
            });
            return of({ type: "[Error Slides] Slides" });
          })
        )
      )
    )
  );
}
