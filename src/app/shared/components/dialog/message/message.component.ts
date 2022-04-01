import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from 'src/app/shared/models/Message';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message!: Message;

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
  }

  deleteMe(message: Message) {
    this.dialogService.delete(message);
  }

}
