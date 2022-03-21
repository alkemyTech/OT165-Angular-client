import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from './pages/donations/donation/donation.component';
import { ThanksComponent } from './pages/donations/thanks/thanks.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'donar', component: DonationComponent, pathMatch: 'full' },
      { path: 'gracias', component: ThanksComponent, pathMatch: 'full' },
      { path: '**', redirectTo: 'donar' },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
