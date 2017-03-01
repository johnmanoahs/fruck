import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import {Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private as: AuthService){
  	Observable.of(as.authservice).subscribe(displayname => {

  		console.log('displayname',displayname)

  	});
  }

}
