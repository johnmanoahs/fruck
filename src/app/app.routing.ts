import { Router, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MymenuComponent } from './mymenu/mymenu.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth-guard.service';

export const routing = RouterModule.forRoot([

	{ 
		path: '', 
		component: MymenuComponent,
		canActivate: [ AuthGuard ]  
	},

	{ 
		path: 'profile', 
		component: ProfileComponent,
		canActivate: [ AuthGuard ] 
	},
	
	{ path: 'login' , component: LoginComponent }

]);