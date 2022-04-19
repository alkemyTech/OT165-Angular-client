import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SlidesComponent } from './slides/slides.component';



@NgModule({
  declarations: [CarouselComponent,SlidesComponent],
  imports: [
    CommonModule
  ],
  exports: [CarouselComponent,SlidesComponent]
})
export class CarouselModule { }
