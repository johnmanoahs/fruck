import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/fromPromise';

@Injectable()
export class AuthService {
	isLoggedIn = false;
	displayName;
	photoURL;
	fbdata;

	constructor(private _af: AngularFire){
	}


	loginFB(): firebase.Promise<FirebaseAuthState>{
		
		var promise = this._af.auth.login({
			provider: AuthProviders.Facebook,
			method: AuthMethods.Popup,
			scope: ['public_profile']
		});

		promise.then(success => {
			this.isLoggedIn = true}, 
			error => {
			this.isLoggedIn = false;
		})
		console.log(promise);
		console.log(typeof promise);
		return promise;

		// .then(authstate =>{
		// 	//console.log(authstate);
		// 	this.displayName = authstate.auth.displayName;
		// 	this.photoURL = authstate.auth.photoURL;
		// 	this.isLoggedIn = true;
		// 	return authstate;
		// })
		//return true;
	}

	// loginFB(){
	// 	var subscription = Observable.of(this._af.auth.login({
	// 		provider: AuthProviders.Facebook,
	// 		method: AuthMethods.Popup,
	// 		scope: ['public_profile']
	// 	})
	// 	// .then((authState: any) => {
	// 	// 	if(authState){
	// 	// 		this._af.database.object('/users/' + authState.uid).update({
	// 	// 			accessToken: authState.facebook.accessToken
	// 	// 		})
	// 	// 		// this.fbdata.displayName = authState.auth.displayName;
	// 	// 		// this.fbdata.photoURL = authState.auth.photoURL;
	// 	// 		// this.fbdata.isLoggedIn = true;
	// 	// 		return authState;
	// 	// 	}
	// 	// 	else{
	// 	// 		// this.fbdata.displayName= null;
	// 	// 		// this.fbdata.photoURL = null;
	// 	// 		// this.fbdata.isLoggedIn = false;
	// 	// 		return false;
	// 	// 	}
	// 	// })
	// 	);

	// 	return subscription;

	// 	////Observable.fromPromise

	// 	}

		logout(){
			this.isLoggedIn = false;
			return false;
		}
	}