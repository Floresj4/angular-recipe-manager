import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeClicked = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
	  new Recipe('Macaroni & cheese', 'nom nom nom', 
	    'https://d3cizcpymoenau.cloudfront.net/images/legacy/34780/SFS_SouthernMacandCheese_20V216.jpg'),
      new Recipe('Beef Stew', 'Thick beef stew good eaten from a bowl or poured over biscuits',
	    'http://images.media-allrecipes.com/userphotos/720x405/729310.jpg'),
	  new Recipe('French Onion Soup', 'Classic simple French onion soup recipe, with beef stock base, slow-cooked caramelized onions',
	    'http://www.recipetineats.com/wp-content/uploads/2016/09/French-Onion-Soup-3-680x952.jpg')
	];
	
	constructor(private recipeservice:RecipeService) {
		
	}
	
	ngOnInit() {
		console.log("RecipeListComponent initialized...");
		console.log("recipes loaded from service: " + 
			this.recipeservice.getRecipes().length);
	}

	onRecipeClick(recipe: Recipe) {
	  this.recipeClicked.emit(recipe);
	}
}