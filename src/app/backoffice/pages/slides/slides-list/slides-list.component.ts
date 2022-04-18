import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ConfirmationService, MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { Slide } from "src/app/backoffice/models/slide.interface";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import * as actions from "src/app/state/actions/slides.actions";
import { AppState } from "src/app/state/app.state";
import {
  selectLoading,
  selectSlidesListWithOrder,
} from "src/app/state/selectors/slides.selectors";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class SlidesListComponent implements OnInit {
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "image", header: "Imagen" },
    { field: "description", header: "Descripción" },
    { field: "order", header: "Orden" },
  ];
  items: TableData = {
    createPath: "/backoffice/slides/undefined",
    editPath: "/backoffice/slides/",
    title: "Slides",
    data: []
  };

  isLoading$!: Observable<boolean>;
  slides$: Observable<Slide[]> = new Observable();

  constructor(private store: Store<AppState>) {
    this.store.dispatch(actions.getSlides());
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoading);
    this.slides$ = this.store.select(selectSlidesListWithOrder);
    this.slides$.subscribe((response) => {
      this.items = {...this.items, data: response}
    });
  }

  deleteSlides(event: number) {
    this.store.dispatch(actions.deleteSlide({ id: event }));
  }
}