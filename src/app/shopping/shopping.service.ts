import {Injectable, OnInit} from '@angular/core';
import { Ingredient } from './Ingredient.model';
import { Subject } from 'rxjs/Subject';
import { IHttpService } from '../shared/http-service';
import { Http } from '@angular/http';

@Injectable()
export class ShoppingService implements OnInit, IHttpService {

  ingredientChanged = new Subject<Ingredient[]>();

  startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('Tomato', 3),
		new Ingredient('Celery', 1),
		new Ingredient('Carrot', 6),
		new Ingredient('Potato', 2),
		new Ingredient('Pasta', 1)
	];

	constructor(private http: Http) {
	}

	ngOnInit() {
	}

	addIngredients(ing: Ingredient[]) {
	  this.ingredients.concat(ing);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	addIngredient(ingredient:Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index: number) {
	  this.ingredients.splice(index, 1);
	  this.ingredientChanged.next(this.ingredients.slice());
  }

	getIngredient(index: number) {
    return this.ingredients[index];
  }

	getIngredients() {
		return this.ingredients.slice();
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
	  this.ingredients[index] = newIngredient;
	  this.ingredientChanged.next(this.ingredients.slice());
  }

  fetch() {
	  console.log('shopping.service fetch');
  }

  save() {
    console.log('shopping.service save');
    // return this.http.post('https://ng-recipe-book-24918.firebaseio.com/ingredients.json',
    //   this.ingredients);
  }
}
