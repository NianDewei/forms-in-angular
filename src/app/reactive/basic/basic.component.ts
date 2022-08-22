import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  // myFormProduct: FormGroup = new FormGroup({
  //   name: new FormControl('Ryzen 77600x'),
  //   price: new FormControl(700),
  //   stock: new FormControl(5),
  // });

  myFormProduct: FormGroup = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}

  //validators
  filedIsValid(field: string) {
    const inputName = this.myFormProduct.controls[field];
    return inputName.invalid && (inputName.dirty || inputName.touched);
  }
  isValidBy(field: string, namevalid: string) {
    const inputName = this.myFormProduct.controls[field];
    return inputName.errors?.[namevalid];
  }

  save() {
    if (this.myFormProduct.invalid) {
      this.myFormProduct.markAllAsTouched();
      return;
    }
    console.table(this.myFormProduct.value);
  }
}
