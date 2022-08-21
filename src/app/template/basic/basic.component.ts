import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})


export class BasicComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;
  initProduct = {
    product: 'Ryzen 7 7500X',
    price: 1000,
    stock: 10,
  };
  constructor() {}

  ngOnInit(): void {}

  nameValidate(): boolean {
    return (
      this.myForm?.controls['product']?.invalid &&
      this.myForm?.controls['product']?.touched
    );
  }

  priceValidate(): boolean {
    return (
      this.myForm?.controls['price']?.touched &&
      this.myForm?.controls['price']?.value < 0
    );
  }

  save() {
    if (this.myForm.invalid) return;
    console.log('Saving changes...');
    // console.log(dataForm);
    console.log(this.myForm);
    console.log('Finished...');
    this.myForm.resetForm({
      product: '',
      price: 0,
      stock: 0,
    });
  }
}
