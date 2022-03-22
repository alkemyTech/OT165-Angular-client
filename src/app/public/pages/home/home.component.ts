import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  //Get data from public endpoint

  public welcome: string =
    "En Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio generando procesos de crecimiento y inserción social.";

  constructor() {}

}
