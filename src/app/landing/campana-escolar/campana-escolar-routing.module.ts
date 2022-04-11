import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampanaEscolarComponent } from './campana-escolar.component';

const routes: Routes = [
  {
    path: "escuelas",
    component: CampanaEscolarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanaEscolarRoutingModule { }
