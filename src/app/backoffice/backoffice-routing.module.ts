import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "backoffice",
    loadChildren: () =>
      import("./back-child-routing.module").then(
        (m) => m.BackChildRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BackOfficeRoutingModule {}
