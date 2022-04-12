import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ToysPage } from "./toys-page/toys-page.component";

const routes: Routes = [
  {
    path: "toys-campaign",
    component: ToysPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToysCampaignRoutingModule {}
