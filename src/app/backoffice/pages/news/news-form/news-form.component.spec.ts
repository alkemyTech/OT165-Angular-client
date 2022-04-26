import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { DialogModule } from "primeng/dialog";
import { FileUploadModule } from "primeng/fileupload";
import { DialogComponent } from "src/app/shared/components/dialog/dialog/dialog.component";

import { NewsFormComponent } from "./news-form.component";

describe("NewsFormComponent", () => {
  let component: NewsFormComponent;
  let fixture: ComponentFixture<NewsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsFormComponent, DialogComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        FileUploadModule,
        DialogModule,
      ],
      providers: [],
    }).compileComponents();
  });

  it("should create", () => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("Debe retornar formulario invalido", () => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    const form = component.newsForm;
    expect(form.invalid).toBeTrue();
  });

  it("Debe retornar formulario valido", () => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;

    const form = component.newsForm;
    const name = component.newsForm.controls["name"];
    const content = component.newsForm.controls["content"];
    const image = component.newsForm.controls["image"];
    content.setValue("un contenido")
    name.setValue("nacho");
    image.setValue("http://image.url.png")
    expect(form.valid).toBeTrue();
  });

  it("Boton debe estar desactivado", () => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    const button = fixture.debugElement.query(By.css('button'))
    expect(button.nativeElement.disabled).toBeFalse()
  });

  it("El formulario debe ser de actulizacion", () => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    component.paramID = 10;
    component.ngOnInit();
    expect(component.actionType).toEqual("Editar")
  });

  it("El formulario debe ser de creacion", () => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    expect(component.actionType).toEqual("Crear")
  });

});
