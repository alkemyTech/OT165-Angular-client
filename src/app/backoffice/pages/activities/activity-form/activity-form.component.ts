import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { ActivitiesService } from "src/app/backoffice/services/activities/activities.service";
import {
  getActivity,
  getActivitySuccess,
  updateActivity,
  updateActivitySuccess,
} from "src/app/state/actions/activity.actions";
import { selectListActivity } from "src/app/state/selectors/activity.selectors";

@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  public edit: boolean = false;
  public id!: number;
  public image: string | null = "";
  private file: string = "";

  activity$: Observable<any> = new Observable();

  activityForm = this.fb.group({
    name: ["", [Validators.required]],
    description: ["", Validators.required],
    image: [
      "",
      [
        Validators.required,
        RxwebValidators.extension({
          extensions: ["jpg", "png"],
        }),
      ],
    ],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private activitiesService: ActivitiesService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.activity$ = this.store.select(selectListActivity);
    let idString = this.activatedRoute.snapshot.paramMap.get("id") || " ";
    this.id = parseInt(idString);

    if (this.id) {
      this.store.dispatch(getActivity());
      this.edit = true;
      this.activitiesService.getActivity(this.id).subscribe({
        next: (response) => {
          this.store.dispatch(getActivitySuccess({ data: response }));
        },
        error: (error) => {
          this.edit = false;
        },
      });
      this.activity$.subscribe((res) => {
        if (res.length !== 0) {
          console.log("____________________", res);
          let { name, description, image } = res;
          this.setFieldsData(name, description, image);
        }
      });
    }
  }

  setFieldsData(name:string,description:string,image:string) {
     this.activityForm.setValue({
       name,
       description,
       image,
     });
     this.image = this.activityForm.value.image;
  }

  onUpload(event: any, fileUploader: any) {
    let file = event.files[0];
    this.imageToB64(file);
    fileUploader.clear();
  }

  imageToB64(file: any) {
    let reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.file = reader.result;
    this.image = this.file;
    this.activityForm.patchValue({ image: this.file });
  }

  createActivity() {
    if (this.activityForm.valid) {
      this.activitiesService.createActivity(this.activityForm.value).subscribe({
        next: (res) => {
          alert("Your activity is created succesfully");
          this.image = "";
          this.activityForm.reset();
          this.router.navigateByUrl("/backoffice/actividades");
        },
        error: (err) => {},
      });
    }
  }

  editActivity() {
    if (this.activityForm.valid) {
      if (!!this.file) {
        this.store.dispatch(
          updateActivity({ id: this.id, data: this.activityForm.value })
        );
        this.activitiesService
          .updateActivity(this.id, this.activityForm.value)
          .subscribe({
            next: (res) => {
              alert("Your activity was updated succesfully");
              this.router.navigateByUrl("/backoffice/actividades");
            },
            error: (error) => {},
          });
        return;
      }
      delete this.activityForm.value.image;
      this.store.dispatch(
        updateActivity({ id: this.id, data: this.activityForm.value })
      );
      this.activitiesService
        .updateActivity(this.id, this.activityForm.value)
        .subscribe({
          next: (res) => {
            this.store.dispatch(
              updateActivitySuccess({ id: this.id, data: res })
            );
            alert("Your activity was updated succesfully");
            this.router.navigateByUrl("/backoffice/actividades");
          },
          error: (e) => {},
        });
    }
  }
}
