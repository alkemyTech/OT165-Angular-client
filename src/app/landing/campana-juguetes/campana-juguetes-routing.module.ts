import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CampanaJuguetesComponent } from "./campana-juguetes.component";

const routes: Routes = [
  {
    path: "juguetes",
    component: CampanaJuguetesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampanaJuguetesRoutingModule {}
