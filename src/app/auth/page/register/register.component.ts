import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidationsService } from 'src/app/shared/validator/validations.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myFormLogin: FormGroup = this._fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this._vs.nameAndSurnameFormat),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this._vs.emailFormat)],
        [this._emailValidator],
      ],
      username: ['', [Validators.required, this._vs.cantBeHacker]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirm: ['', [Validators.required]],
    },
    {
      validators: [this._vs.matchPassword('password', 'confirm')],
    }
  );

  constructor(
    private _fb: FormBuilder,
    private _vs: ValidationsService,
    private _emailValidator: EmailValidatorService
  ) {}
  matchPassword: boolean = false;
  ngOnInit(): void {
    this.myFormLogin.reset({
      name: 'Rolando Oc',
      email: 'admi.jmb@gmail.com',
      username: 'niandewei',
    });
  }

  // methods of validations
  ifFieldIsNotValid(namefield: string): Validators | null {
    return this._vs.validField(namefield, this.myFormLogin);
  }

  isValidBy(field: string, validationName: string): Validators | null {
    const parms = { field, validationName, form: this.myFormLogin };
    const isvalid = this._vs.validateError(parms);
    return isvalid;
  }

  isMatchClass(): string {
    const isMatchPassword = Boolean(this.myFormLogin.getError('noMatch'));
    const condition = this._sameLengthPassAndConfirm() && !isMatchPassword;

    return condition ? 'form-control is-valid' : 'form-control shadow-sm';
  }

  private _sameLengthPassAndConfirm(): boolean | 0 {
    const password: string = this.myFormLogin.get('password')?.value;
    const confirm: string = this.myFormLogin.get('confirm')?.value;

    const sameLength: boolean | 0 = password?.length && confirm?.length === 8;
    return sameLength;
  }

  // methods of the Form
  save() {
    if (this.myFormLogin.invalid) {
      this.myFormLogin.markAllAsTouched();
      return;
    }
    const { confirm, ...data } = this.myFormLogin.value;
    console.table(data);
  }
}
