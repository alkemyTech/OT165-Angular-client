import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/models/contact';
import { ContactService } from 'src/app/public/services/contact/contact.service';

import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit{
  constructor(
    private serviceContact: ContactService,
    private dialogService: DialogService
  ) {}

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/),
      Validators.required,
    ]),
    phone: new FormControl('', [
      Validators.pattern(/^([0-9]{8,})*$/),
      Validators.required,
    ]),
    message: new FormControl('', [Validators.required]),
  });

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get name() {
    return this.contactForm.get('name')!;
  }
  get email() {
    return this.contactForm.get('email')!;
  }
  get phone() {
    return this.contactForm.get('phone')!;
  }
  get message() {
    return this.contactForm.get('message')!;
  }

  sendMessage() {
    let contact: Contact = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value.toString(),
      message: this.message.value,
    };

    this.serviceContact.createContact(contact).subscribe(
      (response) => {        
        this.messageSuccess();
      },
      (error) => {        
        this.messageError();
      }
    );
  }

  clearContactForm() {
    this.contactForm.reset();
  }

  messageSuccess() {
    this.dialogService.add({
      type: 'success',
      title: 'Respuesta exitosa',
      detail: 'Su mensaje ha sido enviado con éxito!',
      life: 3000,
    });
  }

  messageError() {
    this.dialogService.add({
      type: 'error',
      title: 'Ha ocurrido un error',
      detail: 'El mensaje no pudo ser enviado, por favor intente nuevamente.',
      life: 3000,
    });
  }
}
