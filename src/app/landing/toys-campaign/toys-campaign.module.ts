import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToysCampaignRoutingModule } from "./toys-campaign-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { ToysCampaignComponent } from "./toys-campaign.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ToysCampaignComponent, HeaderComponent],
  imports: [CommonModule, ToysCampaignRoutingModule, SharedModule],
})
export class ToysCampaignModule {}
