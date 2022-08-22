import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this._fb.group({
    gender: ['M', [Validators.required]],
    notifications: [true, [Validators.required]],
    conditions: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'F',
    notifications: true,
  };
  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, conditions: false });

    this.myForm.get('conditions')?.valueChanges.subscribe({next: (conditions) => console.log(conditions)})
    this.myForm.valueChanges.subscribe({
      next: (formValue) => {
        const { conditions, ...form } = formValue;
        this.person = form;
        console.log(form);
      },
    });
  }

  save() {
    const formValue = { ...this.myForm.value };
    delete formValue.conditions;
    this.person = formValue;
  }
}
