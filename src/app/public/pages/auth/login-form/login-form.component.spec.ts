import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LoginFormComponent } from './login-form.component';
import { loginReducer } from 'src/app/state/reducers/auth.reducers';
import { UserState } from 'src/app/shared/models/auth/userState.interface';
import { loginGoogle, loginUser } from 'src/app/state/actions/auth.actions';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let store: MockStore;
  const initialState: UserState = {
    success: false,
    user: {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ user: loginReducer }),
      ],
      providers: [FormBuilder, provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('Should create LoginFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Must return invalid form - Password required', () => {
    const email = component.form.controls['email'];
    email.setValue('test@test.com');
    expect(component.form.invalid).toBeTruthy();
  });

  it('Must return invalid form - Email required', () => {
    const password = component.form.controls['password'];
    password.setValue('123456');
    expect(component.form.invalid).toBeTruthy();
  });

  it('Must return valid form', () => {
    let email = component.form.controls['email'];
    let password = component.form.controls['password'];

    email.setValue('test@test.com');
    password.setValue('Test_123');

    expect(component.form.invalid).toBeFalsy();
  });

  it('Must call loginUser action', () => {
    component.form.setValue({
      email: 'test@test.com',
      password: 'Test_123',
    });
    component.serviceLogin(component.form.value);
    expect(store.dispatch).toHaveBeenCalledWith(
      loginUser({ user: component.form.value })
    );
  });

  it('Must call Google Login action', () => {
    component.loginGoogle();
    expect(store.dispatch).toHaveBeenCalledWith(loginGoogle());
  });
});
