import { Component, Input, Output, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routing } from '../app.routing';

import { AngularFire, FirebaseAuthState} from 'angularfire2';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy{

  isLoggedIn: boolean = false;
  displayName = null;
  photoURL;
  profile;
  FBSubscription: firebase.Promise<FirebaseAuthState>;
  subs;
  ary = [];
  subscription: Subscription;

  constructor(
  		private _af: AngularFire,
  		private authservice: AuthService,
  		private _router: Router
  		//private subscription: Subscription
  		){

  	
  }

//   changeobs(){
// 	this.authservice.changeobs().subscribe(data => console.log('changeobs', data));
// }


  ngOnInit(){
  	
this.subscription = this.authservice.observeProfile()
  	.subscribe(data => {
  		this.isLoggedIn = data.profile.isLoggedIn;
  		this.displayName = data.profile.displayName;
  		this.photoURL = data.profile.photoURL;
  		this._router.navigate(['']);
  	});
  	//this.profile = this.authservice.observeProfile();

  	// this.profile.subscribe(profiledata  => {
  	// 	console.log('at subs', profiledata.redirect);
  	// 	this._router.navigate([profiledata.redirect]);
  	// 	this.displayName = profiledata.displayName;
  	// 	if(profiledata.redirect !== 'login'){
  	// 		//console.log('profiledata', profiledata);
  	// 		this._router.navigate(['']);
  	// 	}
  	// });
  	// console.log("PROFILE", this.profile);
  	// console.log("PROFILE", this.profile.array[0].displayName);
  
  }

  ngOnDestroy(){
  	this.profile.unsubscribe();
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

