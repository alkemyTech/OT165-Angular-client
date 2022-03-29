import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { Contact } from 'src/app/shared/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService<Contact>{
  constructor(http: HttpClient) {
    super(http, 'contacts');
  }
}