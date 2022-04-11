import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeRoutingModule } from './backoffice/backoffice-routing.module';
import { PublicRoutingModule } from './public/public-routing.module';
import { SchoolCampaignRoutingModule } from "./landing/school-campaign/school-campaign-routing.module";
import { NotFoundComponent } from './shared/components/notFound/not-found.component';

const routes: Routes = [
  {
    path: 'backoffice',
    redirectTo: '/backoffice',
    pathMatch: 'full',
  },
  {
    path: "escuelas",
    redirectTo: "/escuelas",
    pathMatch: "full",
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    BackOfficeRoutingModule,
    SchoolCampaignRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
