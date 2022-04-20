import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ConfirmationService, MessageService } from "primeng/api";
import { Observable, Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
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
  key: Subject<any> = new Subject<any>();

  constructor(private store: Store<AppState>) {
    this.store.dispatch(actions.getSlides());
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoading);
    this.slides$ = this.store.select(selectSlidesListWithOrder);
    this.slides$.subscribe((response) => {
      this.items = {...this.items, data: response}
    });

    this.key
    .pipe(debounceTime(700))
    .subscribe((key: string) => {
      this.filter(key);
    });
  }

  deleteSlides(event: number) {
    this.store.dispatch(actions.deleteSlide({ id: event }));
  }

  filterDebounce(key: string) {
    this.key.next(key);
  }

  filter(keyWord: string) {
    if (keyWord.length > 2) {
      this.store.dispatch(actions.getSpecificSlides({ key: keyWord }));
    } else {
      this.store.dispatch(actions.getSlides());
    }
  }
}