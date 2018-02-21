import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shopping.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  ingredientSubscription: Subscription;

  constructor(private shoppingservice:ShoppingService) { }

  ngOnInit() {
	  this.ingredients = this.shoppingservice.getIngredients();
	  this.ingredientSubscription = this.shoppingservice.ingredientChanged
      .subscribe((ingredients:Ingredient[]) =>{
		    console.log("receiving ingredients..." + ingredients.length);
		    this.ingredients = ingredients.slice();
	  });
  }

  onEditItem(index: number) {
    this.shoppingservice.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }
}
