import { OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class ShoppingService implements OnInit {

	ingredientCreated = new EventEmitter<Ingredient>();

	ingredients: Ingredient[] = [
    	new Ingredient('Tomatoes', 3),
		new Ingredient('Celery', 1),
		new Ingredient('Carrot', 6),
		new Ingredient('Potato', 2),
		new Ingredient('Pasta', 1)
	];
	
	constructor() {
		
	}
	
	ngOnInit() {
		
	}
	
	getIngredients() {
		return this.ingredients.slice();
	}
}