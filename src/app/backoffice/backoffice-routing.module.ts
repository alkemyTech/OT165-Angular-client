import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'actividades', component: ActivityFormComponent },
      { path: 'registro', component: RegisterFormComponent, pathMatch: 'full' },
      { path: 'login', component: LoginFormComponent, pathMatch: 'full' },
      { path: 'organization/edit', component: OrganizationFormComponent },
      { path: '**', redirectTo: 'actividades'},
      { path: 'home-form', component: HomeFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
})
export class BackOfficeRoutingModule {}
