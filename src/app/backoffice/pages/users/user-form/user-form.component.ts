import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-user-form",
    templateUrl: "./user-form.component.html",
    styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
    role = [
        { name: "Administrador", code: "admin" },
        { name: "Usuario", code: "user" },
    ];

    file: string = "";

    constructor() {}

    ngOnInit(): void {}

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
        //this.form.patchValue({ image: this.file });
    }
}
