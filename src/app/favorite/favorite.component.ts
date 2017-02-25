import {Component, Input, OnInit} from '@angular/core'

@Component({
	selector: 'favorite',
	template: `
		<i class="glyphicon glyphicon-heart"
			[class.like]="blnLiked"
			[class.dislike]="!blnLliked"

			(click)="toggleLike($event)"
		></i>
		<span>{{ likes }}</span>
	`,
	styles: [`

	.glyphicon-heart, .dislike{
		color: #ccc;
		cursor: pointer;
	}	

	.like{
		color: deeppink;
	}

	`]
})
export class FavoriteComponent implements OnInit{
	@Input() likes: number = 10;
	@Input() blnLiked = false;

	toggleLike($event){ 
		this.blnLiked = !this.blnLiked;
		(this.blnLiked)? this.likes= this.likes-0+1  : this.likes-=1;
		//if(this.blnLiked){ this.likes += 1}
		//if(!this.blnLiked) { this.likes -= 1 }
	}

	ngOnInit(){

	}
}