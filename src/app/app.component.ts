import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private as: AuthService){
  	// Observable.of(as.).subscribe(displayname => {

  	// 	console.log('displayname',displayname)

  	// });
  }

}
