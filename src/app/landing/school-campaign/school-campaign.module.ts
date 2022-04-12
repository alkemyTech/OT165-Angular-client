import { SchoolCampaignRoutingModule } from './school-campaign-routing.module';
import { SchoolCampaignComponent } from './school-campaign.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { SchoolHeaderComponent } from './components/school-header/school-header.component';


@NgModule({
  declarations: [
    SchoolCampaignComponent,
    ContentComponent,
    SchoolHeaderComponent
  ],
  imports: [
    CommonModule,
    SchoolCampaignRoutingModule
  ]
})
export class CampanaEscolarModule { }
