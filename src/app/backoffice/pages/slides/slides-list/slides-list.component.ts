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
import { selectLoading, selectSlidesList } from "src/app/state/selectors/slides.selectors";

@Component({
  selector: "app-slides-list",
  templateUrl: "./slides-list.component.html",
  styleUrls: ["./slides-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class SlidesListComponent implements OnInit {
  items!: TableData;

  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "image", header: "Imagen" },
    { field: "description", header: "Descripción" },
    { field: "order", header: "Orden" },
  ];

  modalDialog!: boolean;

  slides!: Slide[];

  skeleton!: boolean;
  isLoading$!: Observable<boolean>;
  slides$: Observable<Slide[]> = new Observable();

  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(actions.getSlides());
  }

  ngOnInit(): void {
    this.skeleton = true;
    this.isLoading$ = this.store.select(selectLoading);
    this.isLoading$.subscribe(isLoading => {
      this.skeleton = isLoading;
    })
    this.slides$ = this.store.select(selectSlidesList);
    this.slides$.subscribe((response) => {
      this.loadTable(response);
    });
  }

  loadTable(response: Slide[]) {
    this.slides = response.filter((slide: Slide) => slide.order !== null);
    this.items = {
      createPath: "/backoffice/slides/undefined",
      editPath: "/backoffice/slides/",
      title: "Slides",
      data: this.slides,
    };
  }

  deleteSlides(event: number) {
    this.store.dispatch(actions.deleteSlide({id: event}));
  }
}
