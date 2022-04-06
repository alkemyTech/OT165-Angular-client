import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { Slide } from "src/app/backoffice/models/slide";
import { SlideService } from "src/app/backoffice/services/slides/slide.service";
import * as actions from "../actions/slides.actions";

@Injectable()
export class SlidesEffects {
  constructor(private actions$: Actions, private slideService: SlideService) {}

  loadSlides$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getSlides),
      exhaustMap(() =>
        this.slideService.getAllSildes().pipe(
          map((slides) => actions.getSlidesSuccess({ slides: slides })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
