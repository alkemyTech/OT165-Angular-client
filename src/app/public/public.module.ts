import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";

//Own Component
import { HomeComponent } from "./pages/home/home.component";
import { PublicComponent } from './public.component';
import { NavComponent } from './shared/nav/nav.component';
import { ListnewsComponent } from './components/listnews/listnews.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [HomeComponent, PublicComponent, NavComponent, ListnewsComponent, SliderComponent, FooterComponent],
  exports:[HomeComponent,NavComponent,ListnewsComponent, SliderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, PublicRoutingModule],
})
export class PublicModule {}

