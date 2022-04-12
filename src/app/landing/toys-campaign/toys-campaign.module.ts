import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ToysCampaignRoutingModule } from "./toys-campaign-routing.module";
import { HeaderComponent } from "./components/header/header.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { ToysPage } from "./toys-page/toys-page.component";
import { PublicModule } from "src/app/public/public.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToysPage,
  ],
  imports: [
    CommonModule,
    ToysCampaignRoutingModule,
    SharedModule,
    PublicModule
  ],
})
export class ToysCampaignModule {}
