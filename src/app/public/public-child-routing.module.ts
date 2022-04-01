import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./pages/aboutUs/about.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { DetailComponent } from "./pages/activities/details/detail.component";
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { LorenzoTestsComponent } from "./pages/lorenzo-tests/lorenzo-tests.component";

const childRoutes: Routes = [
  {
    path: "lorenzo",
    component: LorenzoTestsComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "actividades",
    component: ActivitiesListComponent,
  },
  {
    path: "actividades/:id",
    component: DetailComponent,
  },
  {
    path: "donar",
    component: DonationComponent,
    pathMatch: "full",
  },
  {
    path: "gracias",
    component: ThanksComponent,
    pathMatch: "full",
  },
  {
    path: "nosotros",
    component: AboutComponent,
    pathMatch: "full",
  },
  {
    path: "contacto",
    component: ContactComponent,
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginFormComponent,
    pathMatch: "full",
  },
  {
    path: "registro",
    component: RegisterFormComponent,
    pathMatch: "full",
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class PublicChildRoutingModule {}
