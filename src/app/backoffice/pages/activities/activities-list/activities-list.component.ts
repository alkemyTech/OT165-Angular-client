import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import {Activity} from "src/app/backoffice/models/activity";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import {ActivitiesService} from "src/app/backoffice/services/activities/activities.service";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class ActivitiesListComponent implements OnInit {
  activities!: Array<Activity>;

  tableActivities!: TableData;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "image", header: "Imagen" },
    { field: "created_at", header: "Creado" },
  ];

  private newData: Array<any> = [];

  constructor(
    private activitiesServices: ActivitiesService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activitiesServices.getActivities().subscribe({
      next: (res) => {
        this.activities = res;
        //Use just data require for component app-table
        for (let index = 0; index < this.activities.length; index++) {
          let { id, image, name, created_at } = this.activities[index];
          let cleanData = { id, image, name, created_at };
          this.newData.push(cleanData);
          this.showActivities(this.newData);
        }
      },
      error: (error) => {},
    });
  }

  showActivities(
    data: Array<{
      id: number | undefined;
      image: string | undefined;
      name: string | undefined;
      created_at: string | undefined;
    }>
  ) {
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
