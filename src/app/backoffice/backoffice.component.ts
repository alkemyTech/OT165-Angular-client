import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppState } from 'src/app/state/app.state';
import { selectUserData } from 'src/app/state/selectors/auth.selectors';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent {

  dashboard!:Array<any>;
  userLog = {}
  userLoged$!: Observable<any>;

  constructor(private authService: AuthService, private store: Store<AppState>) {
    this.dashboard = [
      {
        id: 1,
        title: "Backoffice",
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
        title: "Testimonios",
        path: '/backoffice',
        icon: `pi pi-comment`
      },
      {
        id: 6,
        title: "Organización",
        path: '/backoffice/organization',
        icon: `pi pi-briefcase`
      },
      {
        id: 7,
        title: "Slides",
        path: '/backoffice/slides',
        icon: `pi pi-images`
      },
      {
        id: 8,
        title: "Usuarios",
        path: '/backoffice/usuarios',
        icon: `pi pi-users`
      },
      {
        id: 9,
        title: "Miembros",
        path: '/backoffice-list',
        icon: `pi pi-id-card`
      },
    ]
    this.checkUserLogin();
        
  }

  private checkUserLogin(){
    this.authService.resultsUserGoogle().subscribe( (res) =>{
      this.userLog = res
      if (!res) {
        this.authService.getUserLoged.subscribe(res => {
          this.userLoged$ = this.store.select(selectUserData)
          this.userLoged$.subscribe((res) => {
            this.userLog = res
          })
        })
      }
    }) 
  }

}
