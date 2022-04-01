import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerUser, registeredUser } from 'src/app/state/actions/auth.actions';
import { checkPattern, checkPasswords } from '../custom.validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup = this.formBuilder.group({
    email: [null,[
      Validators.required,
      Validators.email
    ]],
    password1: [null,[
        Validators.required,
        Validators.minLength(6),
        checkPattern
      ]],
    password2: [null,[
      Validators.required
    ]]
  }, { 
    validator: checkPasswords('password1', 'password2')
  });

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }
  get password1(): AbstractControl | null {
    return this.form.get('password1');
  }
  get password2(): AbstractControl | null {
    return this.form.get('password2');
  }

  register(e:Event) {
    e.preventDefault();
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    let object = {
      email: this.form.get('email')?.value,
      password: this.form.get('password1')?.value
    }
    //here we should send the object to the http server
    this.store.dispatch(registerUser(object));
  }

}
