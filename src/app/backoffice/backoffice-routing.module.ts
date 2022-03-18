import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityFormComponent } from './pages/activities/activity-form/activity-form.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'actividades', component: ActivityFormComponent },
      { path: 'categorias', component: CategoriesFormComponent},      
      { path: '**', redirectTo: 'actividades'}
    ]
  }
];

@NgModule({  
  imports: [RouterModule.forChild( routes )],  
})
export class BackOfficeRoutingModule {}