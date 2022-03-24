import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { BackofficeComponent } from "./pages/backoffice/backoffice.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";

const routes: Routes = [
    {
        path: "",
        children: [
            { path: "actividades", component: ActivityFormComponent },
            { path: "categorias/:id", component: CategoriesFormComponent },
            { path: "categorias", component: CategoriesFormComponent },
            {
                path: "registro",
                component: RegisterFormComponent,
                pathMatch: "full",
            },
            { path: "login", component: LoginFormComponent, pathMatch: "full" },
            { path: "organization/edit", component: OrganizationFormComponent },
            {
                path: "organization",
                component: OrganizationComponent,
                pathMatch: "full",
            },
            {
                path: "usuarios",
                component: UserFormComponent,
                pathMatch: "full",
            },
            { path: "home-form", component: HomeFormComponent },
            { path: "slides/:id", component: SlidesFormComponent },
            { path: "", component: BackofficeComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class BackOfficeRoutingModule {}
