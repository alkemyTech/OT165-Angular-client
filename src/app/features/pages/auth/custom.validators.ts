import { AbstractControl, FormGroup } from "@angular/forms";

export function checkPattern(control: AbstractControl): {[key: string]: any} | null {
  let hasOneLetter: boolean = /[A-Za-z]/.test(control.value);
  let hasOneNumber: boolean = /[0-9]/.test(control.value);
  let hasOneSymbol: boolean = /[^A-Za-z0-9]/.test(control.value);
  if (hasOneLetter && hasOneNumber && hasOneSymbol) {
    return null;
  } else {
    return {'notPattern': true};
  }
}

export function checkPasswords(password1: string, password2: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[password1];
      const matchingControl = formGroup.controls[password2];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ notEqual: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}