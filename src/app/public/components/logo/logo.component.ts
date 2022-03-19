import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() width:number = 200;
  @Input() margin:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
