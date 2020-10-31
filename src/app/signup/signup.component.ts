import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  usertypes: any = ['Developer', 'Owner'];
  signupForm: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.fb.group({
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
      fullname: ['', Validators.required],
      usertype: ['', Validators.required],
    });
  }
  changeType(e) {
    this.f.usertype.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  constructor(private fb: FormBuilder) {}
  get f() {
    return this.signupForm.controls;
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    console.log(this.f.email.touched);
    console.log(this.f.email.dirty);
  }
}
