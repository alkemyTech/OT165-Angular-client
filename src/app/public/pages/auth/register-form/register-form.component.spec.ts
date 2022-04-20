import { TestBed } from "@angular/core/testing";
import { RegisterFormComponent } from "./register-form.component";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { FormBuilder } from "@angular/forms";
import { GoogleMapsModule } from "@angular/google-maps";
import { registerUser } from "src/app/state/actions/auth.actions";

fdescribe("Formulario registro", () => {
  let component: RegisterFormComponent;
  let store: MockStore;
  let initialState = {
    success: false,
    user: {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GoogleMapsModule],
      providers: [provideMockStore({ initialState })],
    });

    store = TestBed.inject(MockStore);

    component = new RegisterFormComponent(store, new FormBuilder());

    spyOn(store, "dispatch").and.callFake(() => {});
  });

  it("Formulario con 5 campos:(name, email, password1, password2, address)", () => {
    expect(component.form.contains("name")).toBeTruthy();
    expect(component.form.contains("email")).toBeTruthy();
    expect(component.form.contains("password1")).toBeTruthy();
    expect(component.form.contains("password2")).toBeTruthy();
    expect(component.form.contains("address")).toBeTruthy();
  });

  it("Campo nombre es requerido", () => {
    const nombre = component.form.get("name");
    nombre?.setValue("");

    expect(nombre?.valid).toBeFalsy();
  });

  it("campo email es requerido", () => {
    const email = component.form.get("email");
    email?.setValue("");

    expect(email?.valid).toBeFalsy();
  });

  it("campo email acepta solo formato email, a@a.com", () => {
    const email = component.form.get("email");
    email?.setValue("a@a.com");

    expect(email?.valid).toBeTruthy();
  });

  it("campo password1 es requerido", () => {
    const password1 = component.form.get("password1");
    password1?.setValue("");

    expect(password1?.valid).toBeFalsy();
  });

  it("campo password1 debe contener minimo 6 caracteres (a!1234)", () => {
    const password1 = component.form.get("password1");
    password1?.setValue("a!1234");

    expect(password1?.value.length).toBeGreaterThanOrEqual(6);
    expect(password1?.valid).toBeTruthy();
  });

  it("campo password1 debe contener 1 letra, 1 numero y un caracter especial (a!1234)", () => {
    let errors;
    const password1 = component.form.get("password1");
    errors = password1?.errors || {};
    password1?.setValue("aa1234");

    expect(errors["notPattern"]).toBeTruthy();
  });

  it("campo password2 es requerido", () => {
    const password2 = component.form.get("password2");
    password2?.setValue("");

    expect(password2?.valid).toBeFalsy();
  });

  it("campo address es requerido", () => {
    const address = component.form.get("address");
    address?.setValue("");

    expect(address?.valid).toBeFalsy();
  });

  it("serviceRegister debe disparar registerUser", () => {
    const user = {
      name: "Olga",
      email: "olga@olga.com",
      password: "a!1234",
      address: "-34.605434506773555, -58.38920615903414",
    };
    component.serviceRegister(user);
    expect(store.dispatch).toHaveBeenCalledWith(registerUser({ user }));
  });
});
