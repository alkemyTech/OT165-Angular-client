import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/backoffice/models/slide.interface';

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent  {

  @Input() items!: Slide[]

  constructor() { }



}
