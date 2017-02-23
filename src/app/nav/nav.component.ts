import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routing } from '../app.routing'

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
