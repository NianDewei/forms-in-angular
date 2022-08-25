import { Injectable } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';

interface validateError {
  field: string;
  validationName: string;
  form: FormGroup;
}

@Injectable({
  providedIn: 'root',
})
export class ValidationsService {
  public nameAndSurnameFormat: string = '([a-zñA-ZÑ]+) ([a-zñA-ZÑ]+)';
  public emailFormat: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public strongKey: string =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{12,})';

  constructor() {}

  //methods
  cantBeHacker(control: FormControl): Validators | null {
    const value: string = control.value.trim().toLowerCase();
    const ifIsHacker = value === 'hacker';

    return ifIsHacker ? { isHacker: true } : null;
  }

  validField(namefield: string, form: FormGroup): Validators | null {
    const inputName = form.controls[namefield];
    return inputName.invalid && (inputName.dirty || inputName.touched);
  }

  validateError(parms: validateError): Validators | null {
    const inputName = parms.form.controls[parms.field];
    return inputName.errors?.[parms.validationName];
  }

  matchPassword(primaryKey: string, keyToCompare: string): Validators | null {
    const responseConfirmation = (
      formGroup: AbstractControl
    ): Validators | null => {
      const password: string = formGroup.get(primaryKey)?.value;
      const confirm: string = formGroup.get(keyToCompare)?.value;

      const ifTheyAreDifferent = password !== confirm;

      if (ifTheyAreDifferent) {
        formGroup.get(keyToCompare)?.setErrors({ noMatch: true });
        return { noMatch: true };
      }

      formGroup.get(keyToCompare)?.setErrors(null);

      if (!confirm) {
        formGroup.get(keyToCompare)?.setErrors({ required: true });
      }

      return null;
    };

    // return validation
    return responseConfirmation;
  }
}
