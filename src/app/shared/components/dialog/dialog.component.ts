import { ConfirmationService } from 'primeng/api';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers: [ConfirmationService]
})
export class DialogComponent {
  @Input() header: string = 'Titulo'; 
  @Input() message!: string; 
  @Output() eventToEmit: EventEmitter<any> = new EventEmitter(); 
  @Input() icon: string = "pi pi-exclamation-triangle";

  constructor(private confirmationService: ConfirmationService) { }

  confirm(id?: number, message?: string) {
    this.confirmationService.confirm({
        message: this.message !== null ? this.message : `${message}`,
        header: this.header,
        icon: this.icon,
        acceptLabel: 'Si',
        rejectLabel: 'No',
        accept: () => {
            this.eventToEmit.emit(id);
        }
    });
}
  
}
