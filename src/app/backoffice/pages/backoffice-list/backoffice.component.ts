import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeListComponent{
  dashboard!:Array<any>;

  constructor() {
    this.dashboard = [
      {
        id: 1,
        title: "Novedades",
        path: '/backoffice/novedades',
        icon: `pi pi-calendar-plus`
      },
      {
        id: 2,
        title: "Actividades",
        path: '/backoffice/actividades',
        icon: `pi pi-calendar`
      },
      {
        id: 3,
        title: "Categorías",
        path: '/backoffice/categorias',
        icon: `pi pi-list`
      },
      {
        id: 4,
        title: "Testimonios",
        path: '/backoffice',
        icon: `pi pi-comment`
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
        path: '/backoffice',
        icon: `pi pi-id-card`
      }
    ]    
  }
}
