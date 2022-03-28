import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { MembersComponent } from "./pages/members/members.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import {ActivitiesListComponent} from "./pages/activities/activities-list/activities-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "actividades", component: ActivitiesListComponent },
      { path: "actividades/:id", component: ActivityFormComponent },
      { path: "categorias/:id", component: CategoriesFormComponent },
      { path: "categorias", component: CategoriesFormComponent },
      { path: "novedades", component: NewsFormComponent },
      { path: "registro", component: RegisterFormComponent, pathMatch: "full" },
      { path: "login", component: LoginFormComponent, pathMatch: "full" },
      { path: "organization/edit", component: OrganizationFormComponent },
      {
        path: "organization",
        component: OrganizationComponent,
        pathMatch: "full",
      },
      { path: "home-form", component: HomeFormComponent },
      { path: "slides/:id", component: SlidesFormComponent },
      { path: "members/edit", component: MembersComponent },
      { path: "slides", component: SlidesListComponent },
      { path: "", component: BackofficeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BackOfficeRoutingModule {}
