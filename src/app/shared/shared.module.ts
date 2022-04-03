import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Own Components
import { LogoComponent } from "./components/logo/logo.component";
import { TitleComponent } from "./components/title/title.component";
import { CardComponent } from './components/card/card.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DialogComponent } from './components/dialog/dialog.component';
import { ProgressBarComponent } from './components/progressBar/progress-bar.component';

@NgModule({
  declarations: [
    LogoComponent,
    TitleComponent,
    CardComponent,
    NavComponent,
    FooterComponent,
    DialogComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RadioButtonModule,
    ProgressBarModule,    
    ConfirmDialogModule       
  ],
  exports: [
    LogoComponent,
    TitleComponent,
    CardComponent,
    NavComponent,
    FooterComponent,
    ProgressBarComponent,
    DialogComponent
  ]
})
export class SharedModule {}
