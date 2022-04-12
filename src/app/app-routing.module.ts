import { SchoolCampaignRoutingModule } from './landing/school-campaign/school-campaign-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: "school-campaign",
    redirectTo: "/school-campaign",
    pathMatch: "full",
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    SchoolCampaignRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
