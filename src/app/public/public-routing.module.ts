import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from "./pages/activities/activity-form.component";
import { DetailComponent } from "./pages/activities/details/detail.component";


//Own Component
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { HomeComponent } from "./pages/home/home.component";
import { PublicComponent } from "./public.component";
import { AboutComponent } from "./pages/aboutUs/about.component";

const routes: Routes = [
    {
        path: "",
        component: PublicComponent,
        children: [
            { 
              path: "",
              redirectTo: "/home", 
              pathMatch: "full" 
            },
            { 
              path: "home", 
              component: HomeComponent 
            },
            { 
              path: "actividad",
              component: ActivityFormComponent
            },
            { 
              path: "actividades/:id",
              component: DetailComponent
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
        ],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PublicRoutingModule {}
