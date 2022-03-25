import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() detailsLink: string = '';
  @Input() isTable: boolean = false;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();;

  constructor(private router: Router) { }

  errorImageSrc () {
    this.imageSrc = '../../../../assets/images/image-not-found2.png';
  }

  navigateToDetails(e: Event) {
    e.preventDefault();
    if (this.detailsLink == '') {
      return;
    }
    if (this.isTable) {
      return;
    }
    this.router.navigate([this.detailsLink]);
  }

  editToggle() {
    this.onEdit.emit();
  }

  deleteToggle() {
    this.onDelete.emit();
  }

}