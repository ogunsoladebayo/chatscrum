import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrumdataService } from '../scrumdata.service';
import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
	selector: 'app-scrumboard',
	templateUrl: './scrumboard.component.html',
	styleUrls: ['./scrumboard.component.css'],
})
export class ScrumboardComponent implements OnInit {
	project_id = 0;
	scrum_users: any;
	public tftw: any[] = [];
	public tftd: any[] = [];
	public verify: any[] = [];
	public done: any[] = [];

	constructor(
		private _route: ActivatedRoute,
		private _scrumdataService: ScrumdataService
	) {}

	ngOnInit(): void {
		this.project_id = parseInt(
			this._route.snapshot.paramMap.get('project_id')
		);
		this.getProjectGoals();
	}

	getProjectGoals() {
		this._scrumdataService.scrumProject(this.project_id).subscribe(
			(data) => {
				console.log(data);
				this.scrum_users = data['data'];
				for (let scrum_user of this.scrum_users) {
					for (let goal of scrum_user['scrumgoal_set']) {
						if (goal['status'] == 0) {
							this.tftw.push(goal);
						} else if (goal['status'] == 1) {
							this.tftd.push(goal);
						} else if (goal['status'] == 2) {
							this.verify.push(goal);
						} else {
							this.done.push(goal);
						}
					}
				}
				console.log(this.tftw);
			},
			(error) => {
				console.log('error', error);
			}
		);
	}

	drop(event: CdkDragDrop<string[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
		} else {
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex
			);
			console.log(this.tftd);
		}
	}
}
