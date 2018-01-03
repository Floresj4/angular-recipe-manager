import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Recipe } from '../recipe.model';
import { ShoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingservice: ShoppingService,
        private route: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to the data coming in from the routing parameter
    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });
  }

  onToShoppingList() {
    const ingredients = this.recipe.ingredients.slice();
    this.shoppingservice.addIngredients(ingredients);
  }
}
