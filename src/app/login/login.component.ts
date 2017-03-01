import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

import { AngularFire, FirebaseAuthState} from 'angularfire2';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

displayName;
photoURL;
isLoggedIn;

@Output() change = new EventEmitter();

 constructor(
  		private _af: AngularFire,
  		private authservice: AuthService,
  		private _router: Router
  		){}

  ngOnInit() {
  }

   loginFB(){

  	//console.log(this.authservice.loginFB().then());
  	this.authservice.loginFB().then(data => console.log('asdf asdf', data))

  	// .then(data => {
  	// 	console.log('data', data);
  	// 	this.displayName = data.auth.displayName;
  	// 	this.photoURL = data.auth.photoURL;
  	// 	this.isLoggedIn = true;
  	// 	this._router.navigate(['']);

  	// 	this.change.emit({displayName: this.displayName, photoURL: this.photoURL, isLoggedIn: this.isLoggedIn});

  	// });

  }

}
