import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {
  public image!: string | SafeResourceUrl;

  reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";

  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    description: ["", [Validators.required]],
    image: [
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

  constructor(private fb: FormBuilder, private sanatizer: DomSanitizer) {}

  ngOnInit(): void {}

  onUpload(event: any, fileUploader: any) {
    this.form.patchValue({
      image: event.files,
    });
    //Show image after click  upload button
    let files = event.files[0].objectURL.changingThisBreaksApplicationSecurity;
    this.image = this.sanatizer.bypassSecurityTrustResourceUrl(files);

    fileUploader.clear();
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value)
      return
    }
  }
}
