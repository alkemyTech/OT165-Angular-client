import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() imageSrc: string = '../../../../assets/images/image-not-found.png';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() detailsLink?: string;

  constructor() { }

  errorImageSrc () {
    this.imageSrc = '../../../../assets/images/image-not-found2.png';
  }
}