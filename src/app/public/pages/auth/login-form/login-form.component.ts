import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginResponse } from 'src/app/shared/models/auth/loginResponse.interface';
import { loginSend } from 'src/app/shared/models/auth/loginSend.interface';
import { UserState } from 'src/app/shared/models/auth/userState.interface';
import { logedUser, loginUser } from '../../../../state/actions/auth.actions';
import { checkPattern } from '../custom.validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

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


  constructor(private store: Store<any>, private authService: AuthService, private router: Router) { 
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
    let object: loginSend = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }
    this.store.dispatch(loginUser( { user: object } ));
    this.authService.loginAPI(object).subscribe( (res: LoginResponse) => {
      if (res.success) {
        let user: UserState = {
          success: res.success,
          user: res.data
        }
        this.store.dispatch(logedUser({ user }))
        this.router.navigateByUrl('home');
      }
    },
    error => {
      //alert
    })
  }

}
