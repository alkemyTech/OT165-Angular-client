import { ActivitiesListComponent } from './pages/activities/activities-list/activities-list.component';
import { ActivityCardComponent } from './pages/activities/activity-card/activity-card.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";

//Own Component
import { HomeComponent } from "./pages/home/home.component";
import { PublicComponent } from "./public.component";
import { SliderComponent } from "./components/slider/slider.component";
import { AboutComponent } from "./pages/aboutUs/about.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DonationAmountComponent } from "./pages/donations/donation-amount/donation-amount.component";
import { ImageCurvedComponent } from "./components/image-curved/image-curved.component";
import { ContactComponent } from './pages/contact/contact.component';
import { DetailComponent } from "./pages/activities/details/detail.component";

//Own Modules
import { SharedModule } from "../shared/shared.module";
import { CarouselModule } from "./components/carousel/carousel.module";
import {ListnewsComponent} from './components/listnews/listnews.component';

@NgModule({
  declarations: [
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
    ActivitiesListComponent

  ],
  exports: [
    HomeComponent,
    ListnewsComponent,
    SliderComponent,
  ],
  imports: [
    CarouselModule,
    CommonModule,
    SharedModule,
    RouterModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
  ],

})
export class PublicModule {}
