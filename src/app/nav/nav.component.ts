import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routing } from '../app.routing'
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn: boolean = false;
  displayName;
  photoURL;

  constructor(private af: AngularFire){
  	console.log(af);
  }

  ngOnInit() {
  	this.af.auth.subscribe(authState => {
  		if(!authState){
  			console.log("Not logged in")
  			this.isLoggedIn = false;
  			this.displayName = null;
  			this.photoURL = null;
  		}
  		else{
  			this.isLoggedIn = true;
  			this.displayName = authState.auth.displayName;
  			this.photoURL = authState.auth.photoURL;
  			console.log('logged in', authState)
  		}
  	})
  }

  login(){
  	this.af.auth.login({
  		provider: AuthProviders.Facebook,
  		method: AuthMethods.Popup
  	}).then(authState =>{
  		console.log("After Login", authState);
  	})

  }

  logout(){
  	this.af.auth.logout();
  }
}
