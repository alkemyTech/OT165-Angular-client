import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { CategoryListComponent } from "./pages/categories/category-list/category-list.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { MembersComponent } from "./pages/members/members.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { BackofficeListComponent } from "./pages/backoffice-list/backoffice.component";

const childRoutes: Routes = [
  { path: "actividades", component: ActivitiesListComponent },
  { path: "actividades/crear", component: ActivityFormComponent },
  { path: "actividades/editar/:id", component: ActivityFormComponent },
  { path: "categorias", component: CategoryListComponent },
  { path: "categorias/crear", component: CategoriesFormComponent },
  { path: "categorias/editar/:id", component: CategoriesFormComponent },
  { path: "novedades", component: NewsFormComponent },
  { path: "novedades/:id", component: NewsFormComponent },
  { path: "usuarios", component: UsersListComponent },
  { path: "organization/edit", component: OrganizationFormComponent },
  {
    path: "organization",
    component: OrganizationComponent,
    pathMatch: "full",
  },
  { path: "home-form", component: HomeFormComponent },
  { path: "slides/:id", component: SlidesFormComponent },
  { path: "slides", component: SlidesListComponent },
  { path: "members/edit", component: MembersComponent },
  { path: "slides", component: SlidesListComponent },
  { path: "usuario", component: UserFormComponent },
  { path: "usuario/:id", component: UserFormComponent },
  { path: "", component: BackofficeListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class BackChildRoutingModule {}
