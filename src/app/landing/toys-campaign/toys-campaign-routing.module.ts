import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToysCampaignComponent } from "./toys-campaign.component";

const routes: Routes = [
  {
    path: "toys-campaign",
    component: ToysCampaignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToysCampaignRoutingModule {}