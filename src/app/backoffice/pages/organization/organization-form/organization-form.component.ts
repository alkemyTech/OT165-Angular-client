import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

@Component({
  selector: "app-organization-form",
  templateUrl: "./organization-form.component.html",
  styleUrls: ["./organization-form.component.scss"],
})
export class OrganizationFormComponent implements OnInit {
  reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
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
      data: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      console.log(this.form);
    }
  }
}
