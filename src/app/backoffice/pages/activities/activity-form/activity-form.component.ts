import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { ActivitiesService } from "src/app/backoffice/services/activities/activities.service";

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

  activity!: {
    name: string;
    description: string;
    image: string;
  };

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
    private router: Router
  ) {}

  ngOnInit(): void {
    let idString = this.activatedRoute.snapshot.paramMap.get("id") || " ";
    this.id = parseInt(idString);

    if (this.id) {
      this.edit = true;
      this.activitiesService.getActivity(this.id).subscribe({
        next: (response) => {
          this.activity = {
            name: response.data.name,
            image: response.data.image,
            description: response.data.description,
          };
          this.setFieldsData();
        },
        error: (error) => {
          this.edit = false;
        },
      });
    }
  }

  setFieldsData() {
    this.activityForm.setValue({
      name: this.activity.name,
      description: this.activity.description,
      image: this.activity.image,
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

  async createActivity() {
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
      this.activitiesService
        .updateActivity(this.id, this.activityForm.value)
        .subscribe({
          next: (res) => {
            alert("Your activity was updated succesfully");
            this.router.navigateByUrl("/backoffice/actividades");
          },
          error: (e) => {},
        });
    }
  }
}
