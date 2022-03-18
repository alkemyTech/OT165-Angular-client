import { CategoriesFormComponent } from './backoffice/pages/categories/categories-form/categories-form.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackOfficeModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
