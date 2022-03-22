import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Own Components
import {LogoComponent} from './logo/logo.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    LogoComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleComponent
  ]
})
export class SharedModule { }
