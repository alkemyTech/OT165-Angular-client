import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  description!: string;
  date!: Date;
  place!: string;
  countdown!: any;

  items: any[] = [
    {
      title: "Campaña Escolar",
      description:
        "Recolección de utiles escolares para ayudar a nuestros chicos",
      image:
        "https://www.fundacionmapfre.org/media/educacion-divulgacion/covid-19/otras-acciones/apoyo-escolar-1194x585-1.jpg",
    },
    {
      title: "Ayudemos a los niños",
      description:
        "Te invitamos a colaborar para que todos los niños tengan las mismas oportunidades",
      image:
        "https://blogs.ibo.org/files/2020/06/PYP-Feat-1200x800-1.jpg",
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.description =
      "Somos Más genera todos los años una campaña con el objetivo de recolectar materiales escolares para ayudar a los chicos y chicas de la comunidad en el inicio del nuevo ciclo lectivo.";
    this.place = "Paraguay 733, Ciudad Autónoma de Buenos Aires";
    this.date = new Date(2022, 3, 28, 13, 15);
    this.countdown = this.getTime();
  }

  getTime() {
    let now = new Date();
    let time = (this.date.getTime() - now.getTime() + 1000) / 1000;
    let seconds = ("0" + Math.floor(time % 60)).slice(-2);
    let minutes = ("0" + Math.floor((time / 60) % 60)).slice(-2);
    let hours = ("0" + Math.floor((time / 3600) % 24)).slice(-2);
    let days = Math.floor(time / (3600 * 24));

    return {
      seconds,
      minutes,
      hours,
      days,
      time,
    };
  }
}
