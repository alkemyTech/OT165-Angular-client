import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth/auth.guard";

//Own Component
import { BackofficeComponent } from "./backoffice.component";

const routes: Routes = [
  {
    path: "backoffice",
    component: BackofficeComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./back-child-routing.module").then(
        (m) => m.BackChildRoutingModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
