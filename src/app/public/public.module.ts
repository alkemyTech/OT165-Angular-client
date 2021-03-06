//Own Component
import { AboutComponent } from "./pages/aboutUs/about.component";
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ActivityCardComponent } from "./pages/activities/activity-card/activity-card.component";
import { ButtonModule } from "primeng/button";
import { ProgressSpinnerModule } from "primeng/progressspinner";
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
import { TermsandconditionsComponent } from "./components/termsandconditions/termsandconditions.component";
import { SwiperModule } from 'swiper/angular';

//Own Modules
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { GoogleMapsModule } from "@angular/google-maps";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { NgxTwitterTimelineModule } from "ngx-twitter-timeline";
import { InputSearchComponent } from './components/input-search/input-search.component';
import { SpinnerComponent } from "../shared/components/spinner/spinner.component";
import { CarouselModule } from "../shared/modules/carousel/carousel.module";
import { DonationSectionComponent } from './components/donation-section/donation-section.component';

@NgModule({
  declarations: [
    SpinnerComponent,
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
    TermsandconditionsComponent,
    InputSearchComponent,
    DonationSectionComponent,
  ],
  exports: [],
  imports: [
    SwiperModule,
    ProgressSpinnerModule,
    CarouselModule,
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
    GoogleMapsModule,
    NgxTwitterTimelineModule,
    LeafletModule,
    PdfViewerModule,
  ],
})
export class PublicModule {}
