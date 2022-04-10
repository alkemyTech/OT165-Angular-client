import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackOfficeRoutingModule } from "./backoffice/backoffice-routing.module";
import {CampanaJuguetesRoutingModule} from "./landing/campana-juguetes/campana-juguetes-routing.module";
import { PublicRoutingModule } from "./public/public-routing.module";

const routes: Routes = [
  {
  path:"juguetes",
  redirectTo:"/juguetes",
  pathMatch:"full",
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CampanaJuguetesRoutingModule,
    PublicRoutingModule,
    BackOfficeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
