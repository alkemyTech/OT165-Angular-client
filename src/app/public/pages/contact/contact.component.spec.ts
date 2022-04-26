import { Observable, of, throwError } from 'rxjs';
import { Contact } from './../../../shared/models/contact';
import { ContactService } from './../../services/contact/contact.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { By } from '@angular/platform-browser';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;  
  let contactService: any;
 
  beforeEach(async () => {     
    await TestBed.configureTestingModule({
      imports: [FormsModule, 
                ReactiveFormsModule,                 
                HttpClientTestingModule],
      declarations: [ ContactComponent ],
      providers: []      
    })
    .compileComponents();    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
    contactService = TestBed.inject(ContactService)
  });
  
  it('should create contact component', () => {
    expect(component).toBeTruthy();
  });
  it('should render subtitle Tu mensaje es recibido por un miembro de la ONG', () => {
    expect(component.subtitle)
      .toContain('Tu mensaje es recibido por un miembro de la ONG')
  })
  it('should return invalid form', () => {
    const form = component.contactForm;
    const email = component.contactForm.controls['email'];
    email.setValue('pepe@gmail.com');
    expect(form.invalid).toBeTrue();
  })
  it('should return valid form when all inputs are filled', () => {
    const form = component.contactForm;
    const email = component.contactForm.controls['email']
    const name = component.contactForm.controls['name']
    const phone = component.contactForm.controls['phone']
    const message = component.contactForm.controls['message']
    email.setValue('pipio@gmail.com');
    name.setValue('Pepe');
    phone.setValue(124212523)
    message.setValue('Mandando un mensaje')
    expect(form.invalid).toBeFalse();
  })
  it('should not allow button if form is invalid', () => {    
    const email = component.contactForm.controls['email']
    const name = component.contactForm.controls['name']
    const phone = component.contactForm.controls['phone']    
    email.setValue('pepe@gmail.com');
    name.setValue('Pepe');
    phone.setValue(124212523)
    const submitButton = fixture.debugElement.query(By.css('button'));
    submitButton.nativeElement.click();
    expect(submitButton.properties['disabled']).toBeTrue();
  })
  it('should show error message if EMAIL INPUT is touched and not filled', () => {
    const email = component.contactForm.controls['email'];
    email.markAsTouched()
    fixture.detectChanges();        
    const emailError = fixture.debugElement.query(By.css('.p-error'));    
    expect(emailError).toBeTruthy();
  })
  it('should show error message if NAME INPUT is touched and not filled', () => {
    const name = component.contactForm.controls['name'];
    name.markAsTouched()
    fixture.detectChanges();        
    const nameError = fixture.debugElement.query(By.css('.p-error'));    
    expect(nameError).toBeTruthy();
  })
  it('should show error message if MESSAGE INPUT is touched and not filled', () => {
    const message = component.contactForm.controls['message'];
    message.markAsTouched()
    fixture.detectChanges();        
    const messageError = fixture.debugElement.query(By.css('.p-error'));    
    expect(messageError).toBeTruthy();
  })
  it('should make Http POST request and receive success', () => {
    const mySpy = spyOn(contactService, 'createContact').and.returnValue({subscribe: (res: any) => {
      expect(res).toBeTruthy();
    }
  })   
    component.sendMessage();
    expect(mySpy).toHaveBeenCalledTimes(1)   
  })  
});
