import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../../models/Message';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private messages: Message[] = [];
  private subject: Subject<Message[]> = new Subject<Message[]>();
  messagesObservable: Observable<Message[]> = this.subject.asObservable();

  constructor() { }

  add(message: Message) {
    this.messages.push(message);
    this.subject.next(this.messages);
  }

  delete(message: Message) {
    this.messages = this.messages.filter(el => {
      return el != message;
    });
    this.subject.next(this.messages);
  }

}
