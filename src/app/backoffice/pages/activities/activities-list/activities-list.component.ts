import { Component, OnInit } from "@angular/core";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"],
})
export class ActivitiesListComponent implements OnInit {
  activities!: Array<{
    id: number;
    name?: string;
    slug?: string | null;
    description?: string;
    image?: string;
    user_id?: number | null;
    category_id?: number | null;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string | null;
    group_id?: string | number | null;
  }>;

  tableActivities!: TableData;
  titlesCol: Columns[] = [
    { header: "Nombre" },
    { header: "Imagen" },
    { header: "Creado" },
  ];

  private newData: Array<{
    id: number | undefined;
    image: string | undefined;
    name: string | undefined;
    createdAt: string | undefined;
  }> = [];

  constructor() {}

  ngOnInit(): void {
    this.activities = [
      {
        id: 1626,
        name: "Apoyo Escolar nivel Secundario",
        slug: null,
        description:
          "<p>Del mismo modo que en la primaria, este taller es el coraz\u00f3n del \u00e1rea secundaria. Este espacio tambi\u00e9n es utilizado por los j\u00f3venes como un punto de encuentro.</p>",
        image: "http://ongapi.alkemy.org/storage/AYZ08pid6V.jpeg",
        user_id: null,
        category_id: null,
        created_at: "2022-03-28T13:48:40.000000Z",
        updated_at: "2022-03-28T13:48:40.000000Z",
        deleted_at: null,
        group_id: 42,
      },
      {
        id: 1627,
        name: "Tutor\u00edas",
        slug: null,
        description:
          "<p>Es un programa destinado a j\u00f3venes a partir del tercer a\u00f1o de secundaria, cuyo objetivo es garantizar su permanencia en el colegio y servir de gu\u00eda y soporte.&nbsp;</p>",
        image: "http://ongapi.alkemy.org/storage/U2K44C9Z0D.jpeg",
        user_id: null,
        category_id: null,
        created_at: "2022-03-28T13:52:57.000000Z",
        updated_at: "2022-03-28T13:52:57.000000Z",
        deleted_at: null,
        group_id: 42,
      },
      {
        id: 1628,
        name: "Taller Arte y Cuentos",
        slug: null,
        description:
          "<p>Taller literario y de manualidades que se realiza permanentemente.</p>",
        image: "http://ongapi.alkemy.org/storage/77cynab6SQ.jpeg",
        user_id: null,
        category_id: null,
        created_at: "2022-03-28T13:55:23.000000Z",
        updated_at: "2022-03-28T13:55:23.000000Z",
        deleted_at: null,
        group_id: 42,
      },
      {
        id: 1629,
        name: "Paseos Recreativos y Educativos",
        slug: null,
        description:
          "<p>Estos paseos est\u00e1n pensados para promover la participaci\u00f3n y sentido de permanencia de los ni\u00f1os, ni\u00f1as y adolescentes del \u00e1rea educativa.</p>",
        image: "http://ongapi.alkemy.org/storage/XNFwl4vYjC.jpeg",
        user_id: null,
        category_id: null,
        created_at: "2022-03-28T13:58:31.000000Z",
        updated_at: "2022-03-28T13:58:31.000000Z",
        deleted_at: null,
        group_id: 42,
      },
      {
        id: 1630,
        name: "Jornada de vacunaci\u00f3n",
        slug: null,
        description:
          "<p>Protecci\u00f3n viral para los m\u00e1s peque\u00f1os de la casa, Somos M\u00e1s realiza semestralmente un gran plan de vacunaci\u00f3n</p>",
        image: "http://ongapi.alkemy.org/storage/5pDwVCc7Gu.jpeg",
        user_id: null,
        category_id: null,
        created_at: "2022-03-28T14:45:00.000000Z",
        updated_at: "2022-03-28T14:45:00.000000Z",
        deleted_at: null,
        group_id: 42,
      },
      {
        id: 1631,
        name: "Juegos din\u00e1micos",
        slug: null,
        description:
          "<p>Diversi\u00f3n para los ni\u00f1os a trav\u00e9s de juegos din\u00e1micos, promoviendo as\u00ed los valores de la uni\u00f3n, jugando en equipos</p>",
        image: "http://ongapi.alkemy.org/storage/tF0hZSHbJC.jpeg",
        user_id: null,
        category_id: null,
        created_at: "2022-03-28T14:49:57.000000Z",
        updated_at: "2022-03-28T14:49:57.000000Z",
        deleted_at: null,
        group_id: 42,
      },
      {
        id: 1632,
        name: "TITULO",
        slug: null,
        description: "<p>ACTIVIDAD</p>",
        image: "http://ongapi.alkemy.org/storage/YZrJygTQKt.png",
        user_id: null,
        category_id: null,
        created_at: "2022-03-28T20:30:17.000000Z",
        updated_at: "2022-03-28T20:30:17.000000Z",
        deleted_at: null,
        group_id: 42,
      },
    ];
    //Use just data require for component app-table
    for (let index = 0; index < this.activities.length; index++) {
      let { id, image, name, created_at } = this.activities[index];
      let cleanData = { id, image, name, createdAt: created_at };
      this.newData.push(cleanData);
    }

    this.showActivities(this.newData);
  }

  showActivities(
    data: Array<{
      id: number | undefined;
      image: string | undefined;
      name: string | undefined;
      createdAt: string | undefined;
    }>
  ) {
    this.tableActivities = {
      path: "/backoffice/actividades/",
      title: "Actividad",
      data: data,
    };
  }

  deleteUser(event: any) {}
}
