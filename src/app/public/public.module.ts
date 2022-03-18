import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DonationComponent } from './pages/donations/donation/donation.component';
import { ThanksComponent } from './pages/donations/thanks/thanks.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LogoComponent,
    DonationComponent,
    ThanksComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    LogoComponent
  ]
})
export class PublicModule { }
