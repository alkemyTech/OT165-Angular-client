import {
  ComponentFixture,
  inject,
  TestBed,
  waitForAsync,
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ActivityFormComponent } from "./activity-form.component";
import { FormBuilder } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { activityReducer } from "src/app/state/reducers/activity.reducers";
import { SharedModule } from "src/app/shared/shared.module";
import { provideMockStore } from "@ngrx/store/testing";
import { ActivityState } from "src/app/shared/models/Activity";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";

describe("ActivityFormComponent", () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;
  let dialogService: any;
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
        DialogService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
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

  it("[Form Check] if form is valid, it should create and add a success message", inject(
    [DialogService],
    (dialogService: DialogService) => {
      dialogService.messagesObservable.subscribe((el: any) => {
        console.log("llegué acá");
        console.log(el);
      });
      expect(component.activityForm.invalid).toBeTruthy();
      component.activityForm.setValue({
        name: "Actividad de prueba",
        description: "<p>Descripci&oacute;n de prueba</p>",
        image: "data:image/png;base64,iVBORw0KGgoNjgCzQg8BVlWbJQ8EukRABNjjKo",
      });
      fixture.detectChanges();
      component.createActivity();
      // fixture.detectChanges();

      dialogService.messagesObservable.subscribe((el) => {
        console.log(el);
        expect(el[0].type).toEqual("success");
      });
    }
  ));
});
