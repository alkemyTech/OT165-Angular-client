import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-donation-amount',
  templateUrl: './donation-amount.component.html',
  styleUrls: ['./donation-amount.component.scss']
})
export class DonationAmountComponent {

  @Input() index:number = 0;
  @Input() selected:boolean = false;
  @Input() item:any = {
    id: 0,
    amount: 0,
    text: '',
    url: ''
  };
  @Output() onSelect: EventEmitter<number> = new EventEmitter();

  constructor() { }

  toggleSelect(index: number) {
    this.onSelect.emit(index);
  }

}
