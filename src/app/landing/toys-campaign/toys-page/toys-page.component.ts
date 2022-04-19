import { Component, OnInit } from "@angular/core";

type Remainder = {
  days: number;
  hours: number;
  minutes: number;
};

@Component({
  selector: "app-toys-page",
  templateUrl: "./toys-page.component.html",
  styleUrls: ["./toys-page.component.scss"],
})
export class ToysPage implements OnInit {
  location: string = 'Calle Esmeralda Nº 351, CABA';
  dueDate: Date = new Date("2022-12-08T12:15");
  remainder!: Remainder;
  items: any[] = [
    {
      title: "Campaña de Juguetes",
      description: "Recolección de juguetes para los festejos navideños",
      image: "https://i0.wp.com/serranojaimeconsultores.com/wp-content/uploads/2018/03/ong-2.jpg?fit=1024%2C682&ssl=1",
    },
    {
      title: "Ayudemos a los niños",
      description: "Te invitamos a colaborar para que todos los niños tengan las mismas oportunidades",
      image: "https://educowebmedia.blob.core.windows.net/educowebmedia/educospain/media/images/blog/ong-y-ods.jpg",
    },
  ]

  constructor() {}

  ngOnInit(): void {
    this.remainder = this.getRemainder(this.dueDate);
  }

  getRemainder(dueDate: Date) {
    let now = Date.now();
    let remainMiliseconds = dueDate.getTime() - now;
    let days = ~~(remainMiliseconds / 86400000);
    let hours = ~~((remainMiliseconds - days * 86400000) / 3600000);
    let minutes = ~~(
      (remainMiliseconds - days * 86400000 - hours * 3600000) /
      60000
    );
    return { days, hours, minutes };
  }
}
