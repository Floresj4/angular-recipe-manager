import { Injectable, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping/Ingredient.model';
import { Subject } from 'rxjs/Subject';
import { IHttpService } from '../shared/http-service';
import {Http, Response} from '@angular/http';

@Injectable()
export class RecipeService implements OnInit, IHttpService {

  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
	  new Recipe(0, 'Macaroni & cheese',
				 'nom nom nom',
				 'https://d3cizcpymoenau.cloudfront.net/images/legacy/34780/SFS_SouthernMacandCheese_20V216.jpg',
				[
		  new Ingredient("Pasta", 1),
		  new Ingredient("Cheese", 2)
	  ]),
      new Recipe(1, 'Beef Stew',
				 'Thick beef stew good eaten from a bowl or poured over biscuits',
				 'http://images.media-allrecipes.com/userphotos/720x405/729310.jpg',
				[
		  new Ingredient("Beef", 1),
		  new Ingredient("Tomato", 2),
		  new Ingredient("Pepper", 1)
	  ]),
	  new Recipe(2, 'French Onion Soup',
				 'Classic simple French onion soup recipe, with beef stock base, slow-cooked caramelized onions',
				 'http://www.recipetineats.com/wp-content/uploads/2016/09/French-Onion-Soup-3-680x952.jpg',
				[
		  new Ingredient("Onions", 3),
		  new Ingredient("Beef stock", 2),
		  new Ingredient("Cheese", 2)
	  ])
	];

	constructor(private http: Http) {
  }

	ngOnInit() {
	}

	addRecipe(recipe: Recipe) {
	  recipe.id = this.recipes.length;
	  this.recipes.push(recipe);
	  this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
	  this.recipes.splice(id, 1);
	  this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
	  this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

	getRecipes() {
		//return a copy of the array
		return this.recipes.slice();
	}

	getRecipe(id: number) {
		let recipe = null;
		this.recipes.forEach((r) => {
			if(r.id === id)
				recipe = r;
		});

		return recipe;
	}

	fetch() {
    this.http.get('https://ng-recipe-book-24918.firebaseio.com/recipes.json')
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  save() {
    return this.http.put('https://ng-recipe-book-24918.firebaseio.com/recipes.json', this.recipes)
      .subscribe((response: Response) => {
        console.log(response);
      });
  }
}
