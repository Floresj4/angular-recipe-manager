import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //todo, fix this with templating or something else
  @Input() recipe: Recipe = new Recipe("", "", "");
  
  constructor() {
  
  }
	
  ngOnInit() {

  }
}