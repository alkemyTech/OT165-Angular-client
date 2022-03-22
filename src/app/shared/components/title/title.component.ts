import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() title: string = 'TituloDePagina';
  @Input() imagePath: string = '/assets/images/image5.jpg';  
  @Input() textColor: string = 'white';
  @Input() shadowColor: string = 'black';

  constructor() { } 

  setDefaultImage() {
    this.imagePath = '/assets/images/image5.jpg';
  }

}
