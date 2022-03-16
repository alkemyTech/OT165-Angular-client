import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from './interface/ContentCard,interface';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  @Input() items!: CardContent[]

  constructor() { }

  ngOnInit(): void {
  }

}
