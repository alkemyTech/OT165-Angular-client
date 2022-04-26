import {
  ComponentFixture,
  TestBed,
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ActivityFormComponent } from "./activity-form.component";
import { FormBuilder } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { activityReducer } from "src/app/state/reducers/activity.reducers";
import { SharedModule } from "src/app/shared/shared.module";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { ActivityState } from "src/app/shared/models/Activity";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { addActivity } from "src/app/state/actions/activity.actions";

describe("ActivityFormComponent", () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;
  let store: MockStore;
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
      providers: [
        FormBuilder,
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it("[Component] should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("[Logo Component] page should show the logo", () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("app-logo")).toBeTruthy();
  });

  it("[Form Check] page should render de form", () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("#formContent")).toBeTruthy();
  });

  it("[Name Check] name should be required", () => {
    const name = component.activityForm.controls["name"];
    expect(name.valid).toBeFalsy();
    expect(name.pristine).toBeTruthy();
    expect(name.errors?.required).toBeTruthy();
    name.setValue("Test name");
    expect(name.valid).toBeTruthy();
    expect(name.errors).toBeNull();
  });

  it("[Description Check] description should be required", () => {
    const description = component.activityForm.controls["description"];
    expect(description.valid).toBeFalsy();
    expect(description.pristine).toBeTruthy();
    expect(description.errors?.required).toBeTruthy();
    description.setValue("Test description");
    expect(description.valid).toBeTruthy();
    expect(description.errors).toBeNull();
  });

  it("[Image Check] image should be required", () => {
    const image = component.activityForm.controls["image"];
    expect(image.valid).toBeFalsy();
    expect(image.pristine).toBeTruthy();
    expect(image.errors?.required).toBeTruthy();
    image.setValue("Test image");
    expect(image.valid).toBeTruthy();
    expect(image.errors).toBeNull();
  });

  it("[Redux Check] should call addActivity action", () => {
    expect(component.activityForm.invalid).toBeTruthy();
    component.activityForm.setValue({
      name: "Actividad de prueba",
      description: "<p>Descripci&oacute;n de prueba</p>",
      image: "data:image/png;base64,iVBORw0KGgoNjgCzQg8BVlWbJQ8EukRABNjjKo",
    });
    component.createActivity();
    const action = addActivity({data: component.activityForm.value});
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

});

