import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Own Components
import { LogoComponent } from './components/logo/logo.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog.component';
import { ProgressBarComponent } from './components/progressBar/progress-bar.component';
import { MessageComponent } from './components/dialog/message/message.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { NotFoundComponent } from './components/notFound/not-found.component';
import {CarouselModule} from './modules/carousel/carousel.module';

@NgModule({
  declarations: [
    LogoComponent,
    TitleComponent,
    CardComponent,
    NavComponent,
    FooterComponent,
    ConfirmDialogComponent,
    ProgressBarComponent,
    MessageComponent,
    DialogComponent,
    NotFoundComponent,
  ],
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule,
    ButtonModule,
    RadioButtonModule,
    ProgressBarModule,
    ConfirmDialogModule,
  ],
  exports: [
    MessageComponent,
    CarouselModule,
    LogoComponent,
    TitleComponent,
    CardComponent,
    NavComponent,
    FooterComponent,
    ProgressBarComponent,
    DialogComponent,
    ConfirmDialogComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}
