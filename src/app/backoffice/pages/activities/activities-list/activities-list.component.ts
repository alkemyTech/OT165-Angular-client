import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ConfirmationService, MessageService } from "primeng/api";
import { Observable, Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { Activity } from "src/app/backoffice/models/activity";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import {
  deleteActivity,
  getActivities,
  getSpecificActivities,
} from "src/app/state/actions/activity.actions";
import { AppState } from "src/app/state/app.state";
import { selectListActivities, selectLoading } from "src/app/state/selectors/activity.selectors";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class ActivitiesListComponent implements OnInit {
  activities$: Observable<any> = new Observable();
  isLoading$!: Observable<boolean>;
  isLoading!: boolean;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "image", header: "Imagen" },
    { field: "created_at", header: "Creado" },
  ];
  tableActivities: TableData = {
    createPath: "/backoffice/actividades/crear/",
    editPath: "/backoffice/actividades/editar/",
    title: "Actividad",
    data: []
  };
  subject: Subject<any> = new Subject<any>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.isLoading$ = this.store.select(selectLoading);
    this.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.activities$ = this.store.select(selectListActivities);
    this.activities$.subscribe((response) => {
      this.refreshData(response);
    });
    this.store.dispatch(getActivities());
    this.subject.pipe(debounceTime(700))
    .subscribe((key: string) => {
      this.filter(key);
    });
  }

  refreshData(data: Activity[]) {
    this.tableActivities = {...this.tableActivities, data: data};
  }

  deleteActivity(event: number) {
    this.store.dispatch(deleteActivity({ id: event }));
  }

  debounce(key: string) {
    this.subject.next(key);
  }

  filter(e: string) {
    if (e.length > 2) {
      this.store.dispatch(getSpecificActivities({ key: e }));
    } else {
      this.store.dispatch(getActivities());
    }
  }
}
