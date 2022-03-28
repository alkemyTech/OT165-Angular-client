import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Own Component
import { AboutComponent } from "./pages/aboutUs/about.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { DetailComponent } from "./pages/activities/details/detail.component";
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { HomeComponent } from "./pages/home/home.component";
import { PublicComponent } from "./public.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
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
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
