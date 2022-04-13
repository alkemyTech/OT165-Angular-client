import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ConfirmationService, MessageService } from "primeng/api";
import { Observable, Subject, Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Slide } from "src/app/backoffice/models/slide.interface";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
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
  data: Slide[] = [];
  subject: Subject<any> = new Subject<any>();
  skeleton: boolean = true;
  isLoading$!: Observable<boolean>;
  slides$: Observable<Slide[]> = new Observable();

  constructor(private store: Store<AppState>) {
    this.store.dispatch(actions.getSlides());
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectLoading);
    this.isLoading$.subscribe((isLoading) => {
      this.skeleton = isLoading;
    });
    this.slides$ = this.store.select(selectSlidesListWithOrder);
    this.slides$.subscribe((response) => {
      this.data = response;
      this.refreshData(response);
    });
    this.subject.pipe(debounceTime(700))
    .subscribe((key: string) => {
      this.filter(key);
    });
  }

  refreshData(data: Slide[]) {
    this.items = {...this.items, data: data};
  }

  deleteSlides(event: number) {
    this.store.dispatch(actions.deleteSlide({ id: event }));
  }

  filterDebounce(key: string) {
    this.subject.next(key);
  }

  filter(e: string) {
    if (e !== '') {
      let regExp = new RegExp(e.trim(), 'i');
      let data = this.data.filter(el => {
        return regExp.test(el.description.trim()) || regExp.test(el.name.trim())
      });
      this.refreshData(data);
    } else {
      this.refreshData(this.data);
    }
  }
}
