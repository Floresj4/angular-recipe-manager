import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipeSubscription: Subscription;

	recipes:Recipe[];

	constructor(private recipeservice:RecipeService, private router: Router) {
	}

	ngOnInit() {
	  // get the initial recipe list
		this.recipes = this.recipeservice.getRecipes();

		//also allow updating based on received events
    this.recipeSubscription = this.recipeservice.recipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
	}

	onNewRecipe() {
    this.router.navigate(['/recipes/new']);
  }

  ngOnDestroy(){

  }
}
