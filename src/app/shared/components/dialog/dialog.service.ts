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

  addAll(messages: Message[]) {
    messages.forEach(el => {
      this.messages.push(el);
    });
    this.subject.next(this.messages);
  }

  delete(message: Message) {
    this.messages = this.messages.filter(el => {
      return el != message;
    });
    this.subject.next(this.messages);
  }

  deleteAll() {
    this.messages = [];
    this.subject.next(this.messages);
  }

}
