import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivityFormComponent
  },
  {
    path: "registro",
    component: RegisterFormComponent,
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginFormComponent,
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
