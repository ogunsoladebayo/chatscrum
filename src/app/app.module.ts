import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import { AuthGuard } from './auth.guard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChatComponent } from './chat/chat.component'

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		LoginComponent,
		HomeComponent,
		ScrumboardComponent,
		ChatComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		DragDropModule
	],
	providers: [AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}
