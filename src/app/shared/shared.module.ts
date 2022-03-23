import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Own Components
import { LogoComponent } from "./components/logo/logo.component";
import { TitleComponent } from "./components/title/title.component";
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    LogoComponent,
    TitleComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    TitleComponent,
    CardComponent
  ]
})
export class SharedModule {}
