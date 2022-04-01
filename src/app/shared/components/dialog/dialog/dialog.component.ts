import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Message } from 'src/app/shared/models/Message';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  subscription: Subscription = new Subscription();
  messages: Message[] = [];

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    this.subscription = this.dialogService.messagesObservable.subscribe(el => {
      this.messages = el;
    });
  }
  
}
