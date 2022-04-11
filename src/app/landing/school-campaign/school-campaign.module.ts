import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolCampaignRoutingModule } from './school-campaign-routing.module';
import { SchoolCampaignComponent } from './school-campaign.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    SchoolCampaignComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    SchoolCampaignRoutingModule
  ]
})
export class SchoolCampaignModule { }