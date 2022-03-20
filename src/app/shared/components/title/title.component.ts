import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: string = 'TituloDePagina';
  @Input() imagePath: string = '/assets/images/image5.jpg';  

  constructor() { }

  ngOnInit(): void {
  }

}
