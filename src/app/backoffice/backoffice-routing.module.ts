import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";

const routes: Routes = [
  {
    path: "actividades",
    component: ActivityFormComponent,
    pathMatch: "full",
  },
  { path: "registro", component: RegisterFormComponent, pathMatch: "full" },
  { path: "login", component: LoginFormComponent, pathMatch: "full" },
  {
    path: "organization/edit",
    component: OrganizationFormComponent,
    pathMatch: "full",
  },
  { path: "slides", component: SlidesFormComponent, pathMatch: "full" },
  { path: "**", redirectTo: "actividades" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BackOfficeRoutingModule {}
