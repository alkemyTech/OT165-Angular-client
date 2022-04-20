import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

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

  it('"Editar Miembro" Debe retornar formulario valido', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls["name"];
    let description = component.form.controls["description"];    
    let facebookUrl = component.form.controls["facebookUrl"];
    let linkedinUrl = component.form.controls["linkedinUrl"];

    name.setValue("Sabrina Luna");
    description.setValue("Abogada");    
    facebookUrl.setValue("www.facebook.com.ar/sabrina-luna");
    linkedinUrl.setValue("www.linkedin.com.ar/sabrina-luna");

    expect(component.form.valid).toBeTrue();
  });

  it('"Crear o editar (imagen) Miembro" Debe retornar formulario valido', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls["name"];
    let description = component.form.controls["description"];
    let image = component.form.controls["image"];
    let facebookUrl = component.form.controls["facebookUrl"];
    let linkedinUrl = component.form.controls["linkedinUrl"];

    name.setValue("Sabrina Luna");
    description.setValue("Abogada");
    image.setValue("data:image/jpeg;base64");
    facebookUrl.setValue("www.facebook.com.ar/sabrina-luna");
    linkedinUrl.setValue("www.linkedin.com.ar/sabrina-luna");

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

  it('"Boton Guardar o Crear Miembro" Debe retornar formulario valido', () => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let name = component.form.controls["name"];
    let description = component.form.controls["description"];
    let image = component.form.controls["image"];
    let facebookUrl = component.form.controls["facebookUrl"];
    let linkedinUrl = component.form.controls["linkedinUrl"];

    name.setValue("Sabrina Luna");
    description.setValue("Abogada");
    image.setValue("data:image/jpeg;base64");
    facebookUrl.setValue("www.facebook.com.ar/sabrina-luna");
    linkedinUrl.setValue("www.linkedin.com.ar/sabrina-luna");

    const btnElement = fixture.debugElement.query(By.css('button.primary'));
    btnElement.nativeElement.click();

    const testData = {
      name: "Sabrina Luna",
      description: "Abogada",
      facebookUrl: "data:image/jpeg;base64",
      image: "www.facebook.com.ar/sabrina-luna",
      linkedinUrl: "www.linkedin.com.ar/sabrina-luna"
    }
    expect(component.form.value).toEqual(testData);
  });
});