//Own Component
import { AboutComponent } from "./pages/aboutUs/about.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ActivityCardComponent } from "./pages/activities/activity-card/activity-card.component";
import { ActivityFormComponent } from "./pages/activities/activity-form.component";
import { ButtonModule } from "primeng/button";
import { ContactComponent } from "./pages/contact/contact.component";
import { DetailComponent } from "./pages/activities/details/detail.component";
import { DonationAmountComponent } from "./pages/donations/donation-amount/donation-amount.component";
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { HomeComponent } from "./pages/home/home.component";
import { ImageCurvedComponent } from "./components/image-curved/image-curved.component";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { ListnewsComponent } from "./components/listnews/listnews.component";
import { PublicComponent } from "./public.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SliderComponent } from "./components/slider/slider.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";

//Own Modules
import { SharedModule } from "../shared/shared.module";
import { CarouselModule } from "./components/carousel/carousel.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [
    ActivityFormComponent,
    HomeComponent,
    PublicComponent,
    ListnewsComponent,
    SliderComponent,
    DonationComponent,
    ThanksComponent,
    DonationAmountComponent,
    ImageCurvedComponent,
    DetailComponent,
    AboutComponent,
    ContactComponent,
    ActivityCardComponent,
    ActivitiesListComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  exports: [],
  imports: [
    CarouselModule,
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class PublicModule {}
