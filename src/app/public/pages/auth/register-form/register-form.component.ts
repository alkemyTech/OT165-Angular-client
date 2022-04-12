import { Component } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { registerSend } from "src/app/shared/models/auth/registerSend.interface";
import { registerUser } from "src/app/state/actions/auth.actions";
import { checkPattern, checkPasswords } from "../custom.validators";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.scss"],
})
export class RegisterFormComponent {
  form = this.fb.group(
    {
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password1: [
        "",
        [Validators.required, Validators.minLength(6), checkPattern],
      ],
      password2: ["", [Validators.required]],
      address: ["", [Validators.required]]
    },
    {
      validator: checkPasswords("password1", "password2"),
    }
  );
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    center: {lat: -38.416097, lng: -63.616672},
    disableDoubleClickZoom: false        
  };    
  markerPosition!: google.maps.LatLngLiteral | undefined;

  constructor(private store: Store<any>, private fb: FormBuilder) {}
  
  get email(): AbstractControl | null {
    return this.form.get("email");
  }
  get name(): AbstractControl | null {
    return this.form.get("name");
  }
  get password1(): AbstractControl | null {
    return this.form.get("password1");
  }
  get password2(): AbstractControl | null {
    return this.form.get("password2");
  }
  get address(): AbstractControl | null {
    return this.form.get("address");
  }
 
  register(e: Event) {
    e.preventDefault();
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    let object: registerSend = {
      name: this.form.get("name")?.value,
      email: this.form.get("email")?.value,
      password: this.form.get("password1")?.value,
      address: this.form.get("address")?.value
    };
    this.serviceRegister(object);
  }

  private async serviceRegister(object: registerSend) {
    await this.store.dispatch(registerUser({ user: object }));
  }

  addMarker(event: google.maps.MapMouseEvent) {    
    this.markerPosition = event.latLng?.toJSON();
    this.form.patchValue({address: `${this.markerPosition!.lat}, ${this.markerPosition!.lng}`})    
  }
}
