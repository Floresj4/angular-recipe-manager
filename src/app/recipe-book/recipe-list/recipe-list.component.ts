import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
	recipes: Recipe[] = [
	  new Recipe('Macaroni & cheese', 'nom nom nom', 'https://d3cizcpymoenau.cloudfront.net/images/legacy/34780/SFS_SouthernMacandCheese_20V216.jpg')
	];
}