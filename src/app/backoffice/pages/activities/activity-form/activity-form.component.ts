import { Component,  OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

@Component({
  selector: "app-activity-form",
  templateUrl: "./activity-form.component.html",
  styleUrls: ["./activity-form.component.scss"],
})
export class ActivityFormComponent implements OnInit {
  public edit: boolean = false;
  public id!: string | null;
  public image: string | null | SafeResourceUrl = "";

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
    private sanatizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.setFieldsData(this.id);
  }

  setFieldsData(id: string | null) {
    if (id) {
      this.edit = true;
      //See if obtain an activity data from endpoint.
      if (!!this.activity) {
        //Endpoint response with data, fill to activityForm
        this.activityForm.setValue({
          name: this.activity.name,
          description: this.activity.description,
          image: this.activity.image,
        });
        this.image = this.activityForm.value.image;
        return;
      } else {
        //Endpoint response with null data, show form create activity.
        this.edit = false;
        this.activity = { name: "", description: "", image: "" };
      }
    }
  }

  onUpload(event: any, fileUploader: any) {
    this.activityForm.patchValue({
      image: event.files,
    });
    //Show image after click  upload button
    let files = event.files[0].objectURL.changingThisBreaksApplicationSecurity;
    this.image = this.sanatizer.bypassSecurityTrustResourceUrl(files);

    fileUploader.clear();
  }

  createActivity() {
    if (this.activityForm.valid) {
      //Endpoint POST /activities/create
      this.activityForm.value;
      this.image = "";
      this.activityForm.reset();
      return;
    }
  }

  editActivity() {
    if (this.activityForm.valid) {
      //Endpoint PATCH /activities/:id
      this.activityForm.value;
      alert("Your activity was updated succesfully");
      return;
    }
  }
}
