import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Organization } from "src/app/backoffice/models/organization";
import { Slide } from "src/app/backoffice/models/slide";

import { SlideService } from "src/app/backoffice/services/slide.service";
import { OrganizationService } from "src/app/services/organization/organization.service";

@Component({
  selector: "app-home-form",
  templateUrl: "./home-form.component.html",
  styleUrls: ["./home-form.component.scss"],
})
export class HomeFormComponent {
  listSlides!: Array<Slide>;
  organization!: Organization;
  selectedSlide1!: Slide;
  selectedSlide2!: Slide;
  selectedSlide3!: Slide;
  indexSlide1!: number;
  indexSlide2!: number;
  indexSlide3!: number;
  previousSlide1!: any;
  currentSlide1!: any;
  previousSlide2!: any;
  currentSlide2!: any;
  previousSlide3!: any;
  currentSlide3!: any;
  updateMessageModal!: boolean;

  constructor(
    private serviceSlide: SlideService,
    private organizationService: OrganizationService
  ) {
    this.organization = new Organization();
    this.updateMessageModal = false;
    this.showOrganization();
    this.getSlidesList();
  }

  getSlidesList() {
    this.serviceSlide.getListOfSlides().subscribe((response) => {
      this.showSlides(response);
    });
  }

  formWelcomeText = new FormGroup({
    welcomeText: new FormControl("", [
      Validators.minLength(20),
      Validators.required,
    ]),
  });

  get welcomeText() {
    return this.formWelcomeText.get("welcomeText")!;
  }

  showOrganization() {
    this.organizationService.getOrganization().subscribe({
      next: (res) => {
        this.organization = <Organization>res;
        this.welcomeText.setValue(this.organization.welcome_text);
      },
    });
  }

  updateWelcomeText() {
    let updatedOrganization = {
      id: this.organization.id,
      name: this.organization.name,
      welcome_text: this.formWelcomeText.get("welcomeText")?.value,
    };
    this.organizationService
      .updateWelcomeTextOfOrganization(
        this.organization.id,
        updatedOrganization
      )
      .subscribe((response) => {
        response;
      });
  }

  showSlides(response: any) {
    this.listSlides = <Array<any>>response.data;

    this.indexSlide1 = this.listSlides.findIndex((slide) => {
      return slide.order == 1;
    });
    this.selectedSlide1 = this.listSlides[this.indexSlide1];

    this.indexSlide2 = this.listSlides.findIndex((slide) => {
      return slide.order == 2;
    });
    this.selectedSlide2 = this.listSlides[this.indexSlide2];

    this.indexSlide3 = this.listSlides.findIndex((slide) => {
      return slide.order == 3;
    });
    this.selectedSlide3 = this.listSlides[this.indexSlide3];
  }

  updateSlide1() {
    if (this.selectedSlide1 != null) {
      this.previousSlide1 = {
        id: this.listSlides[this.indexSlide1].id,
        name: this.listSlides[this.indexSlide1].name,
        order: 0,
      };

      this.currentSlide1 = {
        id: this.selectedSlide1.id,
        name: this.selectedSlide1.name,
        order: 1,
      };
    }
  }

  updateSlide2() {
    if (this.selectedSlide2 != null) {
      this.previousSlide2 = {
        id: this.listSlides[this.indexSlide2].id,
        name: this.listSlides[this.indexSlide2].name,
        order: 0,
      };

      this.currentSlide2 = {
        id: this.selectedSlide2.id,
        name: this.selectedSlide2.name,
        order: 2,
      };
    }
  }

  updateSlide3() {
    if (this.selectedSlide3 != null) {
      this.previousSlide3 = {
        id: this.listSlides[this.indexSlide3].id,
        name: this.listSlides[this.indexSlide3].name,
        order: 0,
      };

      this.currentSlide3 = {
        id: this.selectedSlide3.id,
        name: this.selectedSlide3.name,
        order: 3,
      };
    }
  }

  updateSlides() {
    this.updateWelcomeText();

    this.updateMessageModal = false;

    if (
      this.selectedSlide1.id == this.selectedSlide2.id ||
      this.selectedSlide1.id == this.selectedSlide3.id ||
      this.selectedSlide2.id == this.selectedSlide3.id
    ) {
      this.updateMessageModal = true;
      return;
    }

    if (this.previousSlide1 != null && this.currentSlide1 != null) {
      this.serviceSlide
        .updateOrderOfSlide(this.previousSlide1)
        .subscribe((response) => {
          response;
        });
      this.serviceSlide
        .updateOrderOfSlide(this.currentSlide1)
        .subscribe((response) => {
          response;
        });
    }

    if (this.previousSlide2 != null && this.currentSlide2 != null) {
      this.serviceSlide
        .updateOrderOfSlide(this.previousSlide2)
        .subscribe((response) => {
          response;
        });
      this.serviceSlide
        .updateOrderOfSlide(this.currentSlide2)
        .subscribe((response) => {
          response;
        });
    }

    if (this.previousSlide3 != null && this.currentSlide3 != null) {
      this.serviceSlide
        .updateOrderOfSlide(this.previousSlide3)
        .subscribe((response) => {
          response;
        });
      this.serviceSlide
        .updateOrderOfSlide(this.currentSlide3)
        .subscribe((response) => {
          response;
        });
    }

    setTimeout(() => {
      this.getSlidesList();
    }, 1000);
  }
}
