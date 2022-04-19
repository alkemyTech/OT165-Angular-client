import { SchoolHeaderComponent } from "./components/school-header/school-header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SchoolCampaignComponent } from "./school-campaign.component";
import { ContentComponent } from "./components/content/content.component";
import { SchoolFooterComponent } from "./components/school-footer/school-footer.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    SchoolCampaignComponent,
    ContentComponent,
    SchoolHeaderComponent,
    SchoolFooterComponent,
  ],
  imports: [CommonModule,SharedModule],
})
export class SchoolCampaignModule {}
