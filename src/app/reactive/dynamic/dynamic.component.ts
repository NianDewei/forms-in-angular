import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  myForm: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this._fb.array(
      [
        ['Street F.', Validators.required],
        ['Dragon Ball Z', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this._fb.control('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  // getter

  get arrayFavorites() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  // methods
  ifFieldIsNotValid(namefield: string) {
    const inputName = this.myForm.controls[namefield];
    return inputName.invalid && (inputName.dirty || inputName.touched);
  }

  isValidBy(field: string, namevalid: string) {
    const inputName = this.myForm.controls[field];
    return inputName.errors?.[namevalid];
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.table(this.myForm.value);
  }

  // array methods
  addFavorite() {
    const input = this.newFavorite;

    if (input.invalid) return;

    this.arrayFavorites.push(
      this._fb.control(input.value, Validators.required)
    );

    input.reset();
  }

  removeFavorite(index: number) {
    this.arrayFavorites.removeAt(index);
  }
}
