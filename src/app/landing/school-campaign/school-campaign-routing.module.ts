import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolCampaignComponent } from './school-campaign.component';

const routes: Routes = [
  {
    path: "escuelas",
    component: SchoolCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolCampaignRoutingModule { }
