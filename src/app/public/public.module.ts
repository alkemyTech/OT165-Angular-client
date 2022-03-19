import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";

//Own Component
import { HomeComponent } from "./pages/home/home.component";
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [HomeComponent, PublicComponent],
  exports:[HomeComponent],
  imports: [CommonModule, RouterModule, PublicRoutingModule],
})
export class PublicModule {}

