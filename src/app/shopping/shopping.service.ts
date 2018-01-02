import { OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

export class ShoppingService implements OnInit {

	ingredientCreated = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Tomato', 3),
		new Ingredient('Celery', 1),
		new Ingredient('Carrot', 6),
		new Ingredient('Potato', 2),
		new Ingredient('Pasta', 1)
	];

	constructor() {

	}

	ngOnInit() {

	}

	addIngredients(ing: Ingredient[]) {
	  this.ingredients.concat(ing);
		this.ingredientCreated.emit(this.ingredients);
	}

	addIngredient(ingredient:Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientCreated.emit(this.ingredients);
	}

	getIngredients() {
		return this.ingredients.slice();
	}
}
