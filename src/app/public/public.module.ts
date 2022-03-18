import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    LogoComponent
  ]
})
export class PublicModule { }
