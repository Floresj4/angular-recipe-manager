import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  
  constructor(private shoppingservice:ShoppingService) { }

  ngOnInit() {
	  this.ingredients = this.shoppingservice.getIngredients();
	  this.shoppingservice.ingredientCreated.subscribe((ingredients:Ingredient[]) =>{
		  console.log("receiving ingredients..." + ingredients.length);
		  this.ingredients = ingredients.slice();
	  });
  }
}
