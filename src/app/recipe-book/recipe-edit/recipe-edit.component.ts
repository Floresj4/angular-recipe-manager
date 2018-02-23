import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean =  false;

  currentRecipe: Recipe;

  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.recipeEditForm = new FormGroup({
      'recipeName': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'recipeDescription': new FormControl(null, Validators.required)
    });

    //custom observables will need to be clean-up ngOnDestroy or similar
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;

      if(this.editMode) {
        this.currentRecipe = this.recipeService.getRecipe(this.id);
        console.log("editing recipe " + JSON.stringify(this.currentRecipe));
      } else {
        this.currentRecipe = new Recipe(-1, "", "", "", []);
      }
    });
  }

  onCancel() {
    this.recipeEditForm.reset();
  }

  onSubmit() {
    console.log(this.recipeEditForm.value);
  }
}
