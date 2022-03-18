import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-donation-amount',
  templateUrl: './donation-amount.component.html',
  styleUrls: ['./donation-amount.component.scss']
})
export class DonationAmountComponent {

  @Input() selected:boolean = false;
  @Input() item:any = {
    id: 0,
    amount: 0,
    text: '',
    url: ''
  };
  @Output() onSelect: EventEmitter<number> = new EventEmitter();

  constructor() { }

  toggleSelect(id: number) {
    this.onSelect.emit(id);
  }

}
