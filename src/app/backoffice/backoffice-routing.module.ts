import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { CategoryListComponent } from "./pages/categories/category-list/category-list.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { MembersComponent } from "./pages/members/members.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "actividades", component: ActivitiesListComponent },
      { path: "actividades/crear", component: ActivityFormComponent },
      { path: "actividades/editar/:id", component: ActivityFormComponent },
      { path: "categorias", component: CategoryListComponent, pathMatch: "full" },      
      { path: "categorias/crear", component: CategoriesFormComponent},
      { path: "categorias/editar/:id", component: CategoriesFormComponent },
      { path: "login", component: LoginFormComponent, pathMatch: "full" },
      { path: "novedades", component: NewsFormComponent },
      { path: "organization/edit", component: OrganizationFormComponent },
      { path: "registro", component: RegisterFormComponent, pathMatch: "full" },
      { path: "usuarios", component: UsersListComponent },
      {
        path: "organization",
        component: OrganizationComponent,
        pathMatch: "full",
      },
      { path: "home-form", component: HomeFormComponent },
      { path: "slides/editar/:id", component: SlidesFormComponent },
      { path: "slides/crear", component: SlidesFormComponent },
      { path: "members/edit", component: MembersComponent },
      { path: "slides", component: SlidesListComponent },
      { path: "usuario", component: UserFormComponent },
      { path: "usuario/:id", component: UserFormComponent },
      { path: "", component: BackofficeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BackOfficeRoutingModule {}
