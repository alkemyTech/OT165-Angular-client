import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";

const routes: Routes = [
    {
        path: "",
        children: [
            { path: "actividades", component: ActivityFormComponent },
            { path: "registro", component: RegisterFormComponent },
            { path: "organization/edit", component: OrganizationFormComponent },
            { path: "organization", component: OrganizationComponent },
            { path: "**", redirectTo: "actividades" },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class BackOfficeRoutingModule {}
