import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3),
	new Ingredient('Celery', 1),
	new Ingredient('Carrot', 6),
	new Ingredient('Potato', 2),
	new Ingredient('Pasta', 1)
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
