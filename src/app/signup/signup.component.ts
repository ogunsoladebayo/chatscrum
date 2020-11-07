import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ScrumdataService } from '../scrumdata.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
	usertypes: any = ['Developer', 'Owner'];
	feedback = '';
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
	constructor(
		private fb: FormBuilder,
		private _scrumdataService: ScrumdataService
	) {}
	changeType(e) {
		this.f.usertype.setValue(e.target.value, {
			onlySelf: true,
		});
	}
	get f() {
		return this.signupForm.controls;
	}
	onSubmit(): void {
		this._scrumdataService.signup(this.signupForm.value).subscribe(
			(data) => {
				console.log('Success', data);
				this.feedback = 'Account created successfully';
			},
			(error) => {
				console.log('Error', error);
				this.feedback = 'Error creating account, please try again';
			}
		);
	}
}
