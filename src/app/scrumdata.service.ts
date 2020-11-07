import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ScrumdataService {
	constructor(private _http: HttpClient) {}
	_signupUrl = 'https://liveapi.chatscrum.com/scrum/api/scrumusers/';
	_loginUrl = 'https://liveapi.chatscrum.com/scrum/api-token-auth/';

	public httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
	};

	signup(user) {
		return this._http.post<any>(
			this._signupUrl,
			{
				email: user['email'],
				password: user['password'],
				full_name: user['fullname'],
				usertype: user['usertype'],
				projname: user['projname'],
			},
			this.httpOptions
		);
	}

	login(user) {
		return this._http.post<any>(
			this._loginUrl,
			{
				username: user['email'],
				password: user['password'],
				project: user['projname'],
			},
			this.httpOptions
		);
	}
}
