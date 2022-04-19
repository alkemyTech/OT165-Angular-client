import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ ContactComponent ]      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contact component', () => {
    expect(component).toBeTruthy();
  });
  it('should render subtitle Tu mensaje es recibido por un miembro de la ONG', () => {
    expect(component.subtitle)
      .toContain('Tu mensaje es recibido por un miembro de la ONG')
  })
});
