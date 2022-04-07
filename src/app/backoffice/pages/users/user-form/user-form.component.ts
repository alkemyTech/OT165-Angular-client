import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { User } from "src/app/backoffice/models/user";
import { checkPattern } from "src/app/public/pages/auth/custom.validators";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { addUser, updateUser } from "src/app/state/actions/users.actions";
import { AppState } from "src/app/state/app.state";
import { selectUser } from "src/app/state/selectors/users.selectors";

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
    password: ["", [Validators.required, Validators.minLength(6), checkPattern]],
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
  users$: Observable<User|undefined> = new Observable();

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,    
    private store: Store<AppState>,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.title = "Editar";
      this.button = "Guardar cambios";
      this.id = id;
      this.users$ = this.store.select(selectUser(this.id));
      this.users$.subscribe(response => {
        this.getUser(response);
      })
    } else {
      this.title = "Crear";
      this.button = "Crear usuario";
    }
  }

  getUser(response: any) {    
    this.userData = <User>response;
    this.setForm(this.userData);
    if (this.userData.profile_image) {
      this.file = this.userData.profile_image;
    }
  }

  setForm(user: User) {
    this.userForm.setValue({
      name: user.name,
      email: user.email,
      password: user.password,
      profile_image: user.profile_image,
      role_id: user.role_id,
      address: user.address,
    });
  }

  submit() {
    if (this.userForm.valid) {
      if (this.id != 0) {
        this.store.dispatch(updateUser({user: this.userForm.value}));
        this.messageSuccessUpdatedUser();
        this.userForm.reset();
      } else {
        let newUser = {}
        if(this.userForm.get('profile_image')?.value == ""){
          newUser = {
            name: this.userForm.get('name')?.value,
            email: this.userForm.get('email')?.value,
            password: this.userForm.get('password')?.value,
            role_id: this.userForm.get('role_id')?.value,
            address: this.userForm.get('address')?.value
          }          
        } else {
          newUser = {
            name: this.userForm.get('name')?.value,
            email: this.userForm.get('email')?.value,
            password: this.userForm.get('password')?.value,
            profile_image: this.userForm.get('profile_image')?.value,
            role_id: this.userForm.get('role_id')?.value,
            address: this.userForm.get('address')?.value
          }
        }
        this.store.dispatch(addUser({user: newUser}));
        this.messageSuccessNewUser();
        //this.userForm.reset();
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

  messageSuccessNewUser() {
    this.dialogService.add({
      type: 'success',
      title: 'Respuesta exitosa',
      detail: 'El usuario se creó correctamente.',
      life: 3000,
    });
  }

  messageSuccessUpdatedUser() {
    this.dialogService.add({
      type: 'success',
      title: 'Respuesta exitosa',
      detail: 'El usuario se modificó correctamente.',
      life: 3000,
    });
  }
}
