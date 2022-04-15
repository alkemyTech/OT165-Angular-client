import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Contact } from "src/app/shared/models/contact";
import { ContactService } from "src/app/public/services/contact/contact.service";

import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { circleMarker, Map, tileLayer } from "leaflet";
import { OrganizationService } from "src/app/services/organization/organization.service";
import { Organization } from "src/app/backoffice/models/organization";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent{
  organization!: Organization;
  subtitle!:string;
  latOrganization:number = -34.59755;
  lonOrganization:number = -58.37742;

  constructor(
    private serviceContact: ContactService,
    private serviceOrganization: OrganizationService,
    private dialogService: DialogService
  ) {
    this.organization = new Organization();
    this.subtitle = "Tu mensaje es recibido por un miembro de la ONG"
    this.serviceOrganization.getAll().subscribe(
      (response) => {
      this.loadOrganization(response);
      },
      (error) => {
        this.errorMessageLoadingOrganization();
      }
    );
  }

  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [
      Validators.pattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/),
      Validators.required,
    ]),
    phone: new FormControl("", [
      Validators.pattern(/^([0-9]{8,})*$/),
      Validators.required,
    ]),
    message: new FormControl("", [Validators.required]),
  });  

  loadMap() {
    const map = new Map("map").setView([this.latOrganization, this.lonOrganization], 15);

    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);    

    circleMarker([this.latOrganization, this.lonOrganization], {
      radius: 20,
      color: "#000000",
      fillOpacity: 0.6,
      fillColor: "#9AC9FB",
      weight: 2
    }).addTo(map)      
      .bindPopup(`        
        <h5 style="color:#DB5752;"> ${this.organization.name} </h5> 
        <p> ${this.organization.address} </p>
      `)
      .setRadius(10)
      .openPopup()
      .isPopupOpen();
  }

  loadOrganization(response: any) {
    this.organization = response;
    this.loadMap();
  }

  get name() {
    return this.contactForm.get("name")!;
  }
  get email() {
    return this.contactForm.get("email")!;
  }
  get phone() {
    return this.contactForm.get("phone")!;
  }
  get message() {
    return this.contactForm.get("message")!;
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
      type: "success",
      title: "Respuesta exitosa",
      detail: "Su mensaje ha sido enviado con éxito!",
      life: 3000,
    });
  }

  messageError() {
    this.dialogService.add({
      type: "error",
      title: "Ha ocurrido un error",
      detail: "El mensaje no pudo ser enviado, por favor intente nuevamente.",
      life: 3000,
    });
  }

  errorMessageLoadingOrganization() {
    this.dialogService.add({
      type: "error",
      title: "Ha ocurrido un error",
      detail: "La dirección de la organización no pudo ser cargada, por favor intente nuevamente.",
      life: 3000,
    });
  }
}
