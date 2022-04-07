import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  @Input() control:any;
  
  constructor() {}

  ngOnInit(): void {
    document.querySelectorAll(".bi").forEach((value) =>{        
      value.setAttribute("style", "border-radius: 50%");
    })
  }
}
