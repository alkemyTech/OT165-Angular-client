import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent {

  dashboard!:Array<any>;
  userLog = {}
  userLoged$!: Observable<any>;

  constructor() {
    this.dashboard = [
      {
        id: 1,
        title: "Home",
        path: '/backoffice',
        icon: `pi pi-id-card`
      },
      {
        id: 2,
        title: "Novedades",
        path: '/backoffice/novedades',
        icon: `pi pi-calendar-plus`
      },
      {
        id: 3,
        title: "Actividades",
        path: '/backoffice/actividades',
        icon: `pi pi-calendar`
      },
      {
        id: 4,
        title: "Categorías",
        path: '/backoffice/categorias',
        icon: `pi pi-list`
      },      
      {
        id: 5,
        title: "Organización",
        path: '/backoffice/organization',
        icon: `pi pi-briefcase`
      },
      {
        id: 6,
        title: "Slides",
        path: '/backoffice/slides',
        icon: `pi pi-images`
      },
      {
        id: 7,
        title: "Usuarios",
        path: '/backoffice/usuarios',
        icon: `pi pi-users`
      },
      {
        id: 8,
        title: "Miembros",
        path: '/backoffice/members',
        icon: `pi pi-id-card`
      },
    ]
  }

}
