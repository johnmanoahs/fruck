import { Component, Input, Output, OnInit, OnDestroy, OnChanges } from '@angular/core';
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
export class NavComponent implements OnInit, OnDestroy{

  isLoggedIn: boolean = false;
  displayName;
  photoURL;
  profile;
  FBSubscription: firebase.Promise<FirebaseAuthState>;
  subs;
  ary = [];

  constructor(
  		private _af: AngularFire,
  		private authservice: AuthService,
  		private _router: Router
  		){}

  changeobs(){
	this.authservice.changeobs().subscribe(data => console.log('changeobs', data));
}


  ngOnInit(){
  	
  	this.profile = this.authservice.observeProfile();
  	this.profile.subscribe(profiledata  => {
  		if(profiledata.displayName){
  			console.log('profiledata', profiledata);
  			this._router.navigate(['']);
  		}
  	});
  	console.log("PROFILE", this.profile);
  	console.log("PROFILE", this.profile.array[0].displayName);
  
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

