import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Own Components
import {LogoComponent} from './logo/logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
  LogoComponent
  ]
})
export class SharedModule { }
