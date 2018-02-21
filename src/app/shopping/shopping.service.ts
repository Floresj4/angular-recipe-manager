import { OnInit} from '@angular/core';
import { Ingredient } from './ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingService implements OnInit {

	ingredientCreated = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

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
		this.ingredientCreated.next(this.ingredients.slice());
	}

	addIngredient(ingredient:Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientCreated.next(this.ingredients.slice());
	}

	getIngredient(index: number) {
    return this.ingredients[index];
  }

	getIngredients() {
		return this.ingredients.slice();
	}
}
