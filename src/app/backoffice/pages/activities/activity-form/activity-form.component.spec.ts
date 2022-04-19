import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ActivityFormComponent } from "./activity-form.component";
import { FormBuilder } from "@angular/forms";
import { Store, StoreModule } from "@ngrx/store";
import { activityReducer } from "src/app/state/reducers/activity.reducers";
import { SharedModule } from "src/app/shared/shared.module";
import { FileUploadModule } from "primeng/fileupload";
import { HttpClientModule } from "@angular/common/http";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { ActivityState, IActivity } from "src/app/shared/models/Activity";

describe("ActivityFormComponent", () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;
  const initialState: ActivityState = {
    activities: [],
    activity: [],
    loading: false,
    error: "",
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivityFormComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ activities: activityReducer }),
        SharedModule,
      ],
      providers: [FormBuilder, provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("page should show the logo", () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("app-logo")).toBeTruthy();
  });

  it("form should require a name", () => {
    component.activityForm.setValue({
      name: "",
      description: "Hello world",
      image: "hello.jpg",
    });
    expect(component.activityForm.valid).toEqual(false);
  });

  it("form should require a description", () => {
    component.activityForm.setValue({
      name: "Hello world",
      description: "",
      image: "hello.jpg",
    });
    expect(component.activityForm.valid).toEqual(false);
  });

  it("form should require an image", () => {
    component.activityForm.setValue({
      name: "Hello world",
      description: "Hello world",
      image: "",
    });
    expect(component.activityForm.valid).toEqual(false);
  });

  it("form create an anctivity", () => {
    component.activityForm.setValue({
      name: "Actividad de prueba",
      description: "<p>Descripci&oacute;n de prueba</p>",
      image: "data:image/png;base64,iVBORw0KGgoNjgCzQg8BVlWbJQ8EukRABNjjKo",
    });
    component.createActivity();
    expect(component.activityForm.valid).toEqual(false);
  });
});
