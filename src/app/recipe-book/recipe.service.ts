import { OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping/ingredient.model';

export class RecipeService implements OnInit {
	
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
	  new Recipe(1, 'Macaroni & cheese', 
				 'nom nom nom',
				 'https://d3cizcpymoenau.cloudfront.net/images/legacy/34780/SFS_SouthernMacandCheese_20V216.jpg',
				[
		  new Ingredient("Pasta", 1),
		  new Ingredient("Cheese", 2)
	  ]),
      new Recipe(2, 'Beef Stew',
				 'Thick beef stew good eaten from a bowl or poured over biscuits',
				 'http://images.media-allrecipes.com/userphotos/720x405/729310.jpg',
				[
		  new Ingredient("Beef", 1),
		  new Ingredient("Tomato", 2),
		  new Ingredient("Pepper", 1)
	  ]),
	  new Recipe(3, 'French Onion Soup',
				 'Classic simple French onion soup recipe, with beef stock base, slow-cooked caramelized onions',
				 'http://www.recipetineats.com/wp-content/uploads/2016/09/French-Onion-Soup-3-680x952.jpg',
				[
		  new Ingredient("Onions", 3),
		  new Ingredient("Beef stock", 2),
		  new Ingredient("Cheese", 2)
	  ])
	];
	
	constructor() {
		
	}

	ngOnInit() {
		
	}

	getRecipes() {
		//return a copy of the array
		return this.recipes.slice();
	}
}