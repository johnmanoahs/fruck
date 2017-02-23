import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mymenu',
  templateUrl: './mymenu.component.html',
  styleUrls: ['./mymenu.component.css']
})
export class MymenuComponent implements OnInit {

	mymenu = [

		{	id: 1, menuname: 'Khati roll', 
			description: 'This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. ',
			availability: true, price: 50, rating: 4, 
			img: 'http://lorempixel.com/150/150/food/?random=1'
		},
		{	id: 2, menuname: 'Khati roll', 
			description: 'This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. ',
			availability: true, price: 50, rating: 4, 
			img: 'http://lorempixel.com/150/150/food/?random=1'
		},
		{	id: 3, menuname: 'Khati roll', 
			description: 'This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. ',
			availability: true, price: 50, rating: 4, 
			img: 'http://lorempixel.com/150/150/food/?random=1'
		},
		{	id: 4, menuname: 'Khati roll', 
			description: 'This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. ',
			availability: true, price: 50, rating: 4, 
			img: 'http://lorempixel.com/150/150/food/?random=1'
		},
		{	id: 5, menuname: 'Khati roll', 
			description: 'This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. ',
			availability: true, price: 50, rating: 4, 
			img: 'http://lorempixel.com/150/150/food/?random=1'
		},
		{	id: 6, menuname: 'Khati roll', 
			description: 'This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. This is a lorem ipsum. ',
			availability: true, price: 50, rating: 4, 
			img: 'http://lorempixel.com/150/150/food/?random=1'
		},
	];

  constructor() { }

  ngOnInit() {
  }

}
