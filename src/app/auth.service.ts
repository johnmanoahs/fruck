import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/fromPromise';

@Injectable()
export class AuthService {
	authservice;
	obs;
	profileObservable;
	ary = [1,2,3];
	profile = {
		displayName: null,
		photoURL: null,
		isLoggedIn: null,
		redirect: 'login'
	}

	constructor(private _af: AngularFire, private subject: Subject<any>){
		this.authservice = this._af.auth;
	}

	observeAuthService(){
		return this.authservice;
	}

	newobs(){
		this.obs = Observable.from([this.ary]);
		return this.obs;
	}

	changeobs(){
		this.ary.push(4);
		return this.obs;
		//console.log(this.ary);
	}

	observeProfile(){
		// this.profileObservable = Observable.from([this.profile]);
		// return this.profileObservable;
		return this.subject.asObservable();
	}


	loginFB(){
		
		var promise = this._af.auth.login({
			provider: AuthProviders.Facebook,
			method: AuthMethods.Popup,
			scope: ['public_profile']
		})

		promise.then(
			success => {
				if(success) {
					this.profile.displayName = success.auth.displayName;
					this.profile.photoURL = success.auth.photoURL;
					this.profile.isLoggedIn = true;
					this.profile.redirect = ''
					this.subject.next({ profile: this.profile});
					//return this.profileObservable;
				}
			}, 
			error => {
				this.profile.isLoggedIn = false;
		})
		return promise;

	}


	logout(){
		this._af.auth.logout();
		this.profile.displayName = null;
		this.profile.photoURL = null;
		this.profile.isLoggedIn = false;
		this.profile.redirect = 'login';
		return this.profileObservable;
	}
	}