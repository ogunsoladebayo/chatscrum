import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import { AuthGuard } from './auth.guard';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{
		path: 'scrumboard/:project_id',
		component: ScrumboardComponent,
		canActivate: [AuthGuard],
	},
	{ path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
