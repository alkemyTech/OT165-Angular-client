import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  constructor(private serviceContact:ContactService) { }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/), Validators.required]),    
    phone: new FormControl('', [Validators.pattern(/^([0-9]{8,})*$/), Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  get name(){ return this.contactForm.get('name')!; }
  get email(){ return this.contactForm.get('email')!; }
  get phone(){ return this.contactForm.get('phone')!; }
  get message(){ return this.contactForm.get('message')!; }  

  sendMessage(){
    let contact:Contact = {
      name: this.name.value,
      email: this.email.value,
      phone: (this.phone.value).toString(),
      message: this.message.value
    }
    this.serviceContact.createContact(contact).subscribe(
      response => { response }
    )
  }

  clearContactForm(){
    this.contactForm.reset();
  }
}