import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";

//Own Component
import { HomeComponent } from "./pages/home/home.component";
import { PublicComponent } from "./public.component";
import { NavComponent } from "./shared/nav/nav.component";
import { ListnewsComponent } from "./components/listNews/listnews.component";
import { SliderComponent } from "./components/slider/slider.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AboutComponent } from "./pages/aboutUs/about.component";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { DonationComponent } from "./pages/donations/donation/donation.component";
import { ThanksComponent } from "./pages/donations/thanks/thanks.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DonationAmountComponent } from "./pages/donations/donation-amount/donation-amount.component";
import { ImageCurvedComponent } from "./components/image-curved/image-curved.component";
import { DetailComponent } from "./pages/activities/details/detail.component";

//Own Modules
import { SharedModule } from "../shared/shared.module";
import { CarouselModule } from "./components/carousel/carousel.module";

@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent,
    NavComponent,
    ListnewsComponent,
    SliderComponent,
    FooterComponent,
    DonationComponent,
    ThanksComponent,
    DonationAmountComponent,
    ImageCurvedComponent,
    DetailComponent,
    AboutComponent,
  ],
  exports: [
    HomeComponent,
    NavComponent,
    ListnewsComponent,
    SliderComponent,
    FooterComponent,
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
