
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Own Component
import { HomeComponent } from "./pages/home/home.component";
import {PublicComponent} from "./public.component";

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class PublicRoutingModule {}
