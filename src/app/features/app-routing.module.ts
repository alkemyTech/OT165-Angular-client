import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SlidesComponent } from "./pages/slides/slides.component";

const routes: Routes = [
/*   { 
    path: "actividades", 
    component: ActivityFormComponent }, */
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'slide', component: SlidesComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
