import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CampanaJuguetesComponent } from "./campana-juguetes.component";

import { HeaderComponent } from "./components/header/header.component";

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [CampanaJuguetesComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class CampanaJuguetesModule {}
