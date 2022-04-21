import { Contact } from './../../../shared/models/contact';
import { ContactService } from './../../services/contact/contact.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { By } from '@angular/platform-browser';

fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let service: ContactService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, 
                ReactiveFormsModule,                 
                HttpClientTestingModule],
      declarations: [ ContactComponent ],
      providers: [ContactService]      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ContactService)
    fixture.detectChanges();
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
  it('should make correct HTTP request to contact /POST', (done: DoneFn) => {    
    const mockContact: Contact = {
      name: 'Franco',
      phone: '42314235',
      email: 'pipio@gmail.com',
      message: 'Hola, quiero donar'
    }
    service.post(mockContact).subscribe((res) => {  
      console.log(res)    
      expect(res).toBeUndefined();      
      done();      
    }, err => {
      expect(err.errors).toBeTruthy();
    })
    const req = httpTestingController.expectOne(request => request.method === 'POST');
    req.flush(mockContact);
  })
});
