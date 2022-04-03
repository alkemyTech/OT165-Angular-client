import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { User } from "src/app/backoffice/models/user";
import { UserService } from "src/app/services/auth/user.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.scss"],
})
export class UserFormComponent implements OnInit {
  title: string = "";
  button: string = "";
  id: number = 0;

  userData = <User>{};

  userForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    email: ["", [Validators.required, RxwebValidators.email()]],
    profile_image: [
      "",
      [RxwebValidators.extension({ extensions: ["png", "jpg"] })],
    ],
    address: ["", [Validators.required, Validators.minLength(4)]],
    role_id: ["", [Validators.required, Validators.pattern(/[1-2]/)]],
  });

  role = [
    { name: "Administrador", code: 1 },
    { name: "Usuario", code: 2 },
  ];

  file: string = "";

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.title = "Editar";
      this.button = "Guardar cambios";
      this.id = id;
      this.getUser(id);
    } else {
      this.title = "Crear";
      this.button = "Crear usuario";
    }
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe((res: any) => {
      this.userData = res.data;
      this.setForm(this.userData);
      if (this.userData.profile_image) {
        this.file = this.userData.profile_image;
      }
    });
  }

  setForm(user: User) {
    this.userForm.setValue({
      name: user.name,
      email: user.email,
      profile_image: user.profile_image,
      role_id: user.role_id,
      address: user.address,
    });
  }

  submit() {
    if (this.userForm.valid) {
      if (this.id != 0) {
        console.log(this.id, this.userForm.value);
        this.userService.createUser(this.userForm.value).subscribe(
          (res: any) => {
            alert("Usuario guardado correctamente");
          },
          (error: any) => {
            alert("Ha ocurrido un problema!");
          }
        );
      } else {
        this.userService.createUser(this.userForm.value).subscribe(
          (res: any) => {
            alert("Usuario creado correctamente");
          },
          (error: any) => {
            alert("Ha ocurrido un problema!");
          }
        );
      }
    }
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
    this.userForm.patchValue({ profile_image: this.file });
  }
}
