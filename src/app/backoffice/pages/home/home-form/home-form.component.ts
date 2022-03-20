import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Organization } from 'src/app/backoffice/entity/organization';
import { Slide } from 'src/app/backoffice/entity/slide';
import { OrganizationService } from 'src/app/backoffice/services/organization.service';
import { SlideService } from 'src/app/backoffice/services/slide.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {
  listSlides!:Array<Slide>;
  slidesOfHome!:Array<Slide>;
  organization!:Organization;
  selectedSlide1!:Slide;
  selectedSlide2!:Slide;
  selectedSlide3!:Slide;
  indexSlide1!:number;
  indexSlide2!:number;
  indexSlide3!:number;

  constructor(private serviceOrganization:OrganizationService, private serviceSlide:SlideService) { 
    this.organization = new Organization();    

    this.serviceOrganization.getOrganization().subscribe(
      response => { this.showOrganization(response)}
    )

    this.serviceSlide.getListOfSlides().subscribe(
      response => { this.showSlides(response) },  
    )
  }

  formWelcomeText = new FormGroup({
    welcomeText: new FormControl('', [Validators.minLength(20), Validators.required]),
  });

  get welcomeText(){ return this.formWelcomeText.get('welcomeText')!; }

  showOrganization(response: any){
    this.organization = <Organization>(response.data); 
    this.welcomeText.setValue(this.organization.welcome_text);
  }

  updateWelcomeText(){    
    let updatedOrganization = {
      id: this.organization.id,
      name: this.organization.name,
      welcome_text: this.formWelcomeText.get('welcomeText')?.value
    }
    this.serviceOrganization.updateWelcomeTextOfOrganization(updatedOrganization).subscribe(
      response => { response },
    );
  }
  
  showSlides(response: any){
    this.listSlides = <Array<any>>(response.data);

    this.indexSlide1 = this.listSlides.findIndex(slide=>{
      return slide.order == 1;
    })
    this.selectedSlide1 = this.listSlides[this.indexSlide1];

    this.indexSlide2 = this.listSlides.findIndex(slide=>{
      return slide.order == 2;
    })
    this.selectedSlide2 = this.listSlides[this.indexSlide2];

    this.indexSlide3 = this.listSlides.findIndex(slide=>{
      return slide.order == 3;
    })
    this.selectedSlide3 = this.listSlides[this.indexSlide3];
  }

  ngOnInit(): void {
  }

}