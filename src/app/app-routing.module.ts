import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BackOfficeRoutingModule } from "./backoffice/backoffice-routing.module";
import { PublicRoutingModule } from "./public/public-routing.module";

const routes: Routes = [
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
  {
    path: "escuelas",
    redirectTo: "/escuelas",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    BackOfficeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
