import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

@Component({
    selector: "app-user-form",
    templateUrl: "./user-form.component.html",
    styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
    userForm = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(4)]],
        email: ["", [Validators.required, RxwebValidators.email()]],
        profilePic: [
            "",
            [
                Validators.required,
                RxwebValidators.extension({ extensions: ["png", "jpg"] }),
            ],
        ],
        desc: ["", [Validators.required, Validators.minLength(10)]],
        role: ["", [Validators.required]],
    });

    role = [
        { name: "Administrador", code: "admin" },
        { name: "Usuario", code: "user" },
    ];

    file: string = "";

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    submit() {
        console.log(this.userForm);
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
        this.userForm.patchValue({ profilePic: this.file });
    }
}
