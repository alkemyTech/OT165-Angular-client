import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() openBar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  toggleOpenBar() {
    this.openBar.emit();
  }

  logOut() {
    //here should be the service called
  }

}
