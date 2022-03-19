import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  @Input() width:number = 200;
  @Input() margin:number = 0;

  constructor() { }

}
