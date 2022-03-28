import { Component, OnInit } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
  providers: [MessageService, ConfirmationService],
})
export class ActivitiesListComponent implements OnInit {
  public items!: any;

  titlesCol: string[] = ["Nombre", "Imagen", "Creada"];

  activities!: Array<{
    id: number;
    name: string;
    slug: string | null;
    description: string;
    image: string;
    user_id: number | null;
    category_id: number | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    group_id: string | null;
  }>;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.activities = [
      {
        id: 1599,
        name: "homer",
        slug: null,
        description: "<p>dsadsada</p>",
        image: "http://ongapi.alkemy.org/storage/kJIcWM5qZs.jpeg",
        user_id: null,
        category_id: null,
        created_at: "2022-03-25T23:57:59.000000Z",
        updated_at: "2022-03-27T21:42:08.000000Z",
        deleted_at: null,
        group_id: null,
      },
      {
        id: 1600,
        name: "asdda",
        slug: null,
        description: "<p>asdada</p>",
        image: "http://ongapi.alkemy.org/storage/ISIKI0EIUi.png",
        user_id: null,
        category_id: null,
        created_at: "2022-03-26T00:47:00.000000Z",
        updated_at: "2022-03-26T00:47:00.000000Z",
        deleted_at: null,
        group_id: null,
      },
      // {
      //   id: 1602,
      //   name: "Día de camping",
      //   slug: null,
      //   description: "<p>Día de camping familiar</p>",
      //   image: "http://ongapi.alkemy.org/storage/HG14tKkdzI.jpeg",
      //   user_id: null,
      //   category_id: null,
      //   created_at: "2022-03-26T15:22:25.000000Z",
      //   updated_at: "2022-03-26T15:22:25.000000Z",
      //   deleted_at: null,
      //   group_id: null,
      // },
      // {
      //   id: 1603,
      //   name: "Clases de fotografía",
      //   slug: null,
      //   description: "<p>Clases de fotografía para niños.</p>",
      //   image: "http://ongapi.alkemy.org/storage/3n4qXVlsJS.jpeg",
      //   user_id: null,
      //   category_id: null,
      //   created_at: "2022-03-26T15:22:55.000000Z",
      //   updated_at: "2022-03-26T15:22:55.000000Z",
      //   deleted_at: null,
      //   group_id: null,
      // },
      // {
      //   id: 1604,
      //   name: "Día de campo",
      //   slug: null,
      //   description: "<p>Día de campamento con los carajitos</p>",
      //   image: "http://ongapi.alkemy.org/storage/vxndro9ccJ.png",
      //   user_id: null,
      //   category_id: null,
      //   created_at: "2022-03-26T15:23:17.000000Z",
      //   updated_at: "2022-03-27T03:46:57.000000Z",
      //   deleted_at: null,
      //   group_id: null,
      // },
      // {
      //   id: 1615,
      //   name: "Día de campo",
      //   slug: null,
      //   description: "<p>jesus es el mejor</p>",
      //   image: "http://ongapi.alkemy.org/storage/TkIslC93B7.jpeg",
      //   user_id: null,
      //   category_id: null,
      //   created_at: "2022-03-27T04:13:06.000000Z",
      //   updated_at: "2022-03-27T04:13:06.000000Z",
      //   deleted_at: null,
      //   group_id: null,
      // },
    ];
    console.log(this.activities);
    this.showActivities(this.activities);
  }

  showActivities(data: any) {
    this.items = {
      path: "/backoffice/actividades/",
      title: "Actividad",
      data: data,
    };
    console.log(this.items);
  }

  deleteItem(id: any, name: any) {}
}
