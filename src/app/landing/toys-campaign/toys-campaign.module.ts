import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToysCampaignRoutingModule } from "./toys-campaign-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { ToysCampaignComponent } from "./toys-campaign.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { ToysPage } from "./toys-page/toys-page.component";
import { PublicComponent } from "src/app/public/public.component";

@NgModule({
  declarations: [
    ToysCampaignComponent,
    HeaderComponent,
    FooterComponent,
    ToysPage,
  ],
  imports: [
    CommonModule,
    ToysCampaignRoutingModule,
    SharedModule,
    PublicComponent,
  ],
})
export class ToysCampaignModule {}
