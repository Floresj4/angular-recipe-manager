import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import { Recipe } from '../recipe.model';
import { ShoppingService } from '../../shopping/shopping.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingservice: ShoppingService,
        private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to the data coming in from the routing parameter
    this.route.params.subscribe((data: Params)=> {
      this.recipe = this.recipeService.getRecipe(+data['id']);
    });
  }

  onDelete() {
    let id = +this.route.snapshot.params['id'];
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onToShoppingList() {
    const ingredients = this.recipe.ingredients.slice();
    this.shoppingservice.addIngredients(ingredients);
  }
}
