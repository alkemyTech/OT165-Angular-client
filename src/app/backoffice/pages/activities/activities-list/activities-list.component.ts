import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ConfirmationService, MessageService } from "primeng/api";
import { Observable } from "rxjs";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { ActivitiesService } from "src/app/backoffice/services/activities/activities.service";
import {
  deleteActivity,
  deleteActivitySuccess,
  getActivities,
  getActivitiesSuccess,
} from "src/app/state/actions/activity.actions";
import { AppState } from "src/app/state/app.state";
import { selectListActivities } from "src/app/state/selectors/activity.selectors";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class ActivitiesListComponent implements OnInit {
  activities$: Observable<any> = new Observable();

  tableActivities!: TableData;

  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "image", header: "Imagen" },
    { field: "created_at", header: "Creado" },
  ];

  constructor(
    private activitiesServices: ActivitiesService,
    private messageService: MessageService,
    private store: Store<AppState>
  ) {
    this.store.dispatch(getActivities());
  }

  ngOnInit(): void {
    this.activities$ = this.store.select(selectListActivities);

    this.activitiesServices.getActivities().subscribe({
      next: (res) => {
        this.store.dispatch(getActivitiesSuccess({ activities: res }));
      },
      error: (error) => {},
    });
    this.activities$.subscribe((res) => {
      this.showActivities(res);
    });
  }

  showActivities(data: any) {
    this.tableActivities = {
      createPath: "/backoffice/actividades/crear/",
      editPath: "/backoffice/actividades/editar/",
      title: "Actividad",
      data: data,
    };
  }

  deleteUser(event: number) {
    this.store.dispatch(deleteActivity({ id: event }));
    this.activitiesServices.deleteActivity(event).subscribe({
      next: (res) => {
        this.store.dispatch(deleteActivitySuccess({ id: event }));
        console.log("______", this.activities$);
        // this.messageService.add({
        //   severity: "success",
        //   summary: "Eliminado",
        //   detail: "Categoria eliminada!",
        //   life: 3000,
        // });
      },
      error: (err) => {
        this.messageService.add({
          severity: "success",
          summary: "Error",
          detail: "La categoría no pudo ser eliminada.",
          life: 3000,
        });
      },
    });
  }
}
