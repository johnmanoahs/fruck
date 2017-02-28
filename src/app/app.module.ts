import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule }  from 'angularfire2';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { MymenuComponent } from './mymenu/mymenu.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthGuard} from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {

    apiKey: "AIzaSyCfEy8iQQg2uVUOrcgkDyCHlfL_lR91Puc",
    authDomain: "fruck-35855.firebaseapp.com",
    databaseURL: "https://fruck-35855.firebaseio.com",
    storageBucket: "fruck-35855.appspot.com",
    messagingSenderId: "362172422666"
 
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    MymenuComponent,
    FavoriteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule,
    routing
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
