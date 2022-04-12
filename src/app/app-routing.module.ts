import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeRoutingModule } from './backoffice/backoffice-routing.module';
import { CampanaEscolarRoutingModule } from './landing/campana-escolar/campana-escolar-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { NotFoundComponent } from './shared/components/notFound/not-found.component';

const routes: Routes = [
  {
    path: 'backoffice',
    redirectTo: '/backoffice',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: "escuelas",
    redirectTo: "/escuelas",
    pathMatch: "full",
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    CampanaEscolarRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
