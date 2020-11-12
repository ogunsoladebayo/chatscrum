import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ScrumdataService } from '../scrumdata.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	feedback = '';
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
	constructor(
		private fb: FormBuilder,
		private _scrumdataService: ScrumdataService
	) {}
	get f() {
		return this.loginForm.controls;
	}
	onSubmit(): void {
		this._scrumdataService.login(this.loginForm.value).subscribe(
			(data) => {
				console.log('Success', data);
				this.feedback = 'Login successful';
			},
			(error) => {
				console.log('Error', error);
				this.feedback = 'Error logging in, please try again';
			}
		);
	}
}
