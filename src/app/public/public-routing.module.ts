import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Own Component
import { PublicComponent } from "./public.component";

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    loadChildren: () =>
      import("./public-child-routing.module").then(
        (m) => m.PublicChildRoutingModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
