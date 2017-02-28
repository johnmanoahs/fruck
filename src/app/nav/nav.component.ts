import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routing } from '../app.routing';

import { AngularFire, FirebaseAuthState} from 'angularfire2';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isLoggedIn: boolean = false;
  displayName;
  photoURL;
  FBSubscription: firebase.Promise<FirebaseAuthState>;

  constructor(
  		private _af: AngularFire,
  		private authservice: AuthService,
  		private _router: Router
  		){}

  ngOnInit(){
  
  }

  ngOnDestroy(){
  	//this.FBSubscription.unsubscribe();
  }

  
  loginFB(){
  	this.authservice.loginFB().then(data => {
  		console.log('data', data);
  		this.displayName = data.auth.displayName;
  		this.photoURL = data.auth.photoURL;
  		this.isLoggedIn = true;
  		this._router.navigate(['']);
  	})

  }

  logout(){
  	this.authservice.logout();
  	this.isLoggedIn = false;
  	this.displayName = null;
  	this.photoURL = null;
  	this._router.navigate(['login']);
  	console.log('at nav', this.isLoggedIn);
  }

}

