import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/backoffice/models/slide.interface';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  @Input() item!: Slide

  constructor() { }

  ngOnInit(): void {
  }

}
