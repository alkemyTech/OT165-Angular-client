import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule
  ],
  exports: [
    LogoComponent
  ]
})
export class PublicModule {}
