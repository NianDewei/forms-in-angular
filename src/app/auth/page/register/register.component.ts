import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myFormLogin: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    email: ['admi.jmb@gmail.com', [Validators.required, Validators.email]],
    username:['',[Validators.required,Validators.minLength(3)]],
    password:['',Validators.required]
  });

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {}
}
