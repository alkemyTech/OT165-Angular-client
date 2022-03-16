import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from '../interface/ContentCard,interface';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss']
})
export class SlideCardComponent implements OnInit {

  @Input() items!: CardContent

  constructor() { }

  ngOnInit(): void {
  }

}
