import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';

import { ActivityFormComponent } from './pages/activities/activity-form/activity-form.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'actividades', component: ActivityFormComponent },
      { path: 'categorias/:id', component: CategoriesFormComponent},
      { path: 'categorias', component: CategoriesFormComponent},      
      { path: 'registro', component: RegisterFormComponent },
      { path: 'organization/edit', component: OrganizationFormComponent },
      { path: '**', redirectTo: 'actividades'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( routes )],
})
export class BackOfficeRoutingModule {}
