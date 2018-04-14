import {Component, OnInit} from '@angular/core';
import { RecipeService } from './recipe-book/recipe.service';
import { ShoppingService } from './shopping/shopping.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShoppingService]
})
export class AppComponent implements OnInit {

  //default to recipes first
  currentNavigation:string = 'Shopping List';

  ngOnInit() {
    //add firebase api key here
  }

  onNavigationEvent(event) {
    this.currentNavigation = event;
  }

  getRecipeVisibility() {
    return this.currentNavigation == 'Recipes'
	  ? { display: 'inline' } : { display: 'none' };
  }

  getShoppingListVisibility() {
    return this.currentNavigation == 'Shopping List'
	  ? { display: 'inline' } : { display: 'none' };
  }
}
