import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterResponse } from 'src/app/shared/models/auth/registerResponse.interface';
import { registerSend } from 'src/app/shared/models/auth/registerSend.interface';
import { UserState } from 'src/app/shared/models/auth/userState.interface';
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
    name: ['',[
      Validators.required,
    ]],
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

  constructor(private store: Store<any>, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }
  get name(): AbstractControl | null {
    return this.form.get('name');
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
    let object: registerSend = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password1')?.value
    }
    this.authService.registerUserAPI(object).subscribe( (res: RegisterResponse) => {
      if (res.success) {
        this.store.dispatch(registerUser({user: object}));
        let user: UserState = {
          success: res.success,
          user: res.data
        }
        this.store.dispatch(registeredUser({user}))
        this.router.navigateByUrl('login');
      }
    },
    error => {
      //alert
    })
    
  }

}
