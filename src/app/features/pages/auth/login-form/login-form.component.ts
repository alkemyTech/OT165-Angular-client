import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkPattern } from '../custom.validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup = this.formBuilder.group({
    email: [null,[
      Validators.required,
      Validators.email
    ]],
    password: [null,[
        Validators.required,
        Validators.minLength(6),
        checkPattern
      ]]
  });

  constructor() { }

  ngOnInit(): void {
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }
  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  login(e:Event) {
    e.preventDefault();
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    let object = {
      email: this.email,
      password: this.password
    }
    //here we should send the object to the http server
  }

}
