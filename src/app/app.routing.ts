import { Router, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { MymenuComponent } from './mymenu/mymenu.component';

export const routing = RouterModule.forRoot([

	{ path: '', component: MymenuComponent },
	{ path: 'profile', component: ProfileComponent }

]);