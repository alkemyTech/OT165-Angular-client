import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Contact } from "src/app/shared/models/contact";
import { ContactService } from "src/app/public/services/contact/contact.service";

import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { divIcon, Icon, Map, marker, tileLayer } from "leaflet";
import { OrganizationService } from "src/app/services/organization/organization.service";
import { Organization } from "src/app/backoffice/models/organization";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent{
  organization!: Organization;
  latOrganization:number = -34.59755;
  lonOrganization:number = -58.37742;

  constructor(
    private serviceContact: ContactService,
    private serviceOrganization: OrganizationService,
    private dialogService: DialogService
  ) {
    this.organization = new Organization();
    this.serviceOrganization.getAll().subscribe((response) => {
      this.loadOrganization(response);
    });
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

    const myIcon = new Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]      
    });

    marker([this.latOrganization, this.lonOrganization], { icon: myIcon })
      .addTo(map)
      .bindPopup(this.organization.name + "<br>" + this.organization.address)
      .openPopup();
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
}
