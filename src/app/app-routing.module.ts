import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackOfficeRoutingModule } from "./backoffice/backoffice-routing.module";
import { ToysCampaignRoutingModule } from "./landing/toys-campaign/toys-campaign-routing.module";
import { PublicRoutingModule } from "./public/public-routing.module";
import { NotFoundComponent } from "./shared/components/notFound/not-found.component";

const routes: Routes = [
  {
    path: "juguetes",
    redirectTo: "/juguetes",
    pathMatch: "full",
  },
  {
    path: "backoffice",
    redirectTo: "/backoffice",
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "**", pathMatch: "full", component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ToysCampaignRoutingModule,
    PublicRoutingModule,
    BackOfficeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
