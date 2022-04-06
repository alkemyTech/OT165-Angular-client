import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ConfirmationService, MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { Activity } from "src/app/backoffice/models/activity";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { ActivitiesService } from "src/app/backoffice/services/activities/activities.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class ActivitiesListComponent implements OnInit {
  activities!: Array<Activity>;

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
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.activitiesServices.getActivities().subscribe({
      next: (res) => {
        this.activities = res;
        this.showActivities(this.activities);
      },
      error: (error) => {},
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
    this.activitiesServices.deleteActivity(event).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: "success",
          summary: "Eliminado",
          detail: "Categoria eliminada!",
          life: 3000,
        });
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
