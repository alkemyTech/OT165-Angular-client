import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { loginSend } from "src/app/shared/models/auth/loginSend.interface";
import { loginUser } from "../../../../state/actions/auth.actions";
import { checkPattern } from "../custom.validators";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [Validators.required, Validators.minLength(6), checkPattern],
    ],
  });

  constructor(private store: Store<any>) {}

  get email(): AbstractControl | null {
    return this.form.get("email");
  }
  get password(): AbstractControl | null {
    return this.form.get("password");
  }

  login(e: Event) {
    e.preventDefault();
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    let object: loginSend = {
      email: this.form.get("email")?.value,
      password: this.form.get("password")?.value,
    };
    this.serviceLogin(object);
  }

  private async serviceLogin(object: loginSend) {
    await this.store.dispatch(loginUser({ user: object }));
  }
}
