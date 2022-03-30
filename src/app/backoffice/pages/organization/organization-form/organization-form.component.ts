import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { OrganizationService } from "src/app/services/organization/organization.service";
import { Organization } from "./../../../../shared/models/Organization";

@Component({
  selector: "app-organization-form",
  templateUrl: "./organization-form.component.html",
  styleUrls: ["./organization-form.component.scss"],
})
export class OrganizationFormComponent implements OnInit {
  organizationData = <Organization>{};

  reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";

  form = this.fb.group({
    name: ["", [Validators.required]],
    shortDescription: ["", [Validators.required]],
    longDescription: ["", [Validators.required]],
    logo: [
      "",
      [
        Validators.required,
        RxwebValidators.extension({ extensions: ["png", "jpg"] }),
      ],
    ],
    facebook: ["", [Validators.required, Validators.pattern(this.reg)]],
    linkedin: ["", [Validators.required, Validators.pattern(this.reg)]],
    instagram: ["", [Validators.required, Validators.pattern(this.reg)]],
    twitter: ["", [Validators.required, Validators.pattern(this.reg)]],
  });

  file: string = "";
  display = false;

  constructor(
    private fb: FormBuilder,
    private organizationService: OrganizationService
  ) {}

  ngOnInit(): void {
    this.showOrganization();
  }

  showOrganization() {
    this.organizationService.getOrganization().subscribe({
      next: (res) => {
        this.organizationData = <Organization>res;
        this.setForm(this.organizationData);
        this.file = this.organizationData.logo;
        this.display = true;
      },
    });
  }

  setForm(org: Organization) {
    this.form.setValue({
      name: org.name,
      shortDescription: org.short_description,
      longDescription: org.long_description,
      logo: org.logo,
      facebook: org.facebook_url,
      linkedin: org.linkedin_url,
      instagram: org.instagram_url,
      twitter: org.twitter_url,
    });
  }

  onUpload(event: any, fileUploader: any) {
    let file = event.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    fileUploader.clear();
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.file = reader.result;
    console.log("image Src", this.file);
    this.form.patchValue({ image: this.file });
  }

  submit() {
    //Save changes
  }
}
