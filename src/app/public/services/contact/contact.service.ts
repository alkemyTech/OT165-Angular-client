import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Contact } from 'src/app/shared/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService<Contact>{
  constructor(http: HttpClient) {
    super(http, 'contacts');
  }

  getContacts(): Observable<Contact[]> {
    return super.getAll();
  }

  getContact(id: number): Observable<Contact> {    
    return super.getById(id);
  }

  createContact(contact: Contact): Observable<Contact> {
    return super.post(contact);
  }

  updateContact(id: number, contact: Contact): Observable<Contact> {
    return super.putById(id, contact);
  }

  deleteContact(id: number): Observable<any> {
    return super.deleteById(id);
  }
}