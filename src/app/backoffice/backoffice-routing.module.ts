import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Own Component
import { BackofficeComponent } from "./backoffice.component";

const routes: Routes = [
  {
    path: "backoffice",
    component: BackofficeComponent,
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
