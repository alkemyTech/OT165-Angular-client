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

  constructor() {}

  ngOnInit(): void {
    this.description = "Somos Más genera todos los años una campaña con el objetivo de recolectar materiales escolares para ayudar a los chicos y chicas de la comunidad en el inicio del nuevo ciclo lectivo.";
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
