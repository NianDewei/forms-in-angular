import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private _http: HttpClient) {}

  validate(
    control: AbstractControl<any, any>
  ): Observable<ValidationErrors | null> {
    // throw new Error('Method not implemented.');
    const email: string = control.value;
    console.log(email, 'Async Validator');
    return this._http
      .get<User[]>(`http://localhost:3000/users?q=${email}`)
      .pipe(
        delay(1000),
        map((res) => (res.length === 0 ? null : { emailExists: true }))
      );
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }
}
