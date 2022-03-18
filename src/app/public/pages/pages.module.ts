import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Own Component
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  exports:[HomeComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
