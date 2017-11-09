import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  currentRecipe: Recipe;
  
  constructor(private recipeservice:RecipeService){
	  
  }
	
  ngOnInit() {
    //subscribe to the event emitted by the list component
    this.recipeservice.recipeSelected
      .subscribe((recipe:Recipe) => {
        this.currentRecipe = recipe;
	});
  }
}