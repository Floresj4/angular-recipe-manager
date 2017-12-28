import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shopping/ingredient.model';
import { ShoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	
	//todo, fix this with templating or something else
	@Input() recipe: Recipe = new Recipe(1, "", "", "", []);
  
	constructor(private shoppingservice: ShoppingService,
				private route: ActivatedRoute) {
	}
	
	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			const id = +params['id'];
			console.log("current url param: " + id);
		});
	}
	
	onToShoppingList() {
		this.shoppingservice.addIngredients(this.recipe.ingredients.slice());
	}
}