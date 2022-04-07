import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./pages/content/content.component";

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
  {
    path: "landing",
    component: ContentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
