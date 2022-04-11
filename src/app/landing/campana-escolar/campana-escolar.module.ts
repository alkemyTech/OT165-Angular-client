import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampanaEscolarRoutingModule } from './campana-escolar-routing.module';
import { CampanaEscolarComponent } from './campana-escolar.component';
import { ContentComponent } from './components/content/content.component';
import { SchoolHeaderComponent } from './components/school-header/school-header.component';


@NgModule({
  declarations: [
    CampanaEscolarComponent,
    ContentComponent,
    SchoolHeaderComponent
  ],
  imports: [
    CommonModule,
    CampanaEscolarRoutingModule
  ]
})
export class CampanaEscolarModule { }
