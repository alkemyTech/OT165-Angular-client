import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./components/header/header.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FooterComponent } from "./components/footer/footer.component";
import { ToysPage } from "./toys-page/toys-page.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ToysPage],
  imports: [CommonModule, SharedModule],
})
export class ToysCampaignModule {}
