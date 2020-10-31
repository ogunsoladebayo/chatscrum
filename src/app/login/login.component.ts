import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*([^a-zA-Z\d\s])).{8,}$/
          ),
        ],
      ],
      projname: ['', [Validators.required]],
    });
  }
  constructor(private fb: FormBuilder) {}
  get f() {
    return this.loginForm.controls;
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    console.log(this.f.email.touched);
    console.log(this.f.email.dirty);
  }
}
