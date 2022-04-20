import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MembersComponent } from './members.component';

describe('TEST del componente "MembersComponent"', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormBuilder,
        FormsModule
      ],
      declarations: [ MembersComponent ]
    })
    .compileComponents();
  });

  it('Debe existir el componente "MembersComponent"', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario valido', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls["name"];
    let description = component.form.controls["description"];
    let image = component.form.controls["image"];
    let facebookUrl = component.form.controls["facebookUrl"];
    let linkedinUrl = component.form.controls["linkedinUrl"];

    name.setValue("Luciano Luna");
    description.setValue("Contador");
    image.setValue("http://image.url.png");
    facebookUrl.setValue("www.facebook.com.ar/luciano-luna");
    linkedinUrl.setValue("www.linkedin.com.ar/luciano-luna");

    expect(component.form.valid).toBeTrue();
  });

  it('Debe retornar formulario invalido', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const name = component.form.controls["name"];
    name.setValue("Luciano Luna");
    expect(component.form.invalid).toBeTrue();
  });
});