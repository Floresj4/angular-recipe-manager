import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;

  editMode: boolean =  false;

  recipeEditForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) {
  }

  ngOnInit() {

    //custom observables will need to be clean-up ngOnDestroy or similar
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    let currentRecipe: Recipe = (this.editMode) ?
      this.recipeService.getRecipe(this.id)
      : Recipe.emptyRecipe();

    let ingredientsData: FormArray = new FormArray([]);
    currentRecipe.ingredients.forEach((ingredient) => {
      ingredientsData.push(new FormGroup({
        'name': new FormControl(ingredient.name, Validators.required),
        'amount': new FormControl(ingredient.amount, Validators.required)
      }))
    });

    this.recipeEditForm = new FormGroup({
      'recipeName': new FormControl(currentRecipe.name, Validators.required),
      'imagePath': new FormControl(currentRecipe.imagePath),
      'recipeDescription': new FormControl(currentRecipe.description, Validators.required),
      'ingredients': ingredientsData
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    )
  }

  onCancel() {
    this.recipeEditForm.reset();
    this.router.navigate(['../'],
      {'relativeTo': this.route});
  }

  onSubmit() {

    if(!this.editMode) {
      var submitRecipe: Recipe = new Recipe(-1,
        this.recipeEditForm.value.name,
        this.recipeEditForm.value.description,
        this.recipeEditForm.value.imagePath,
        null);

      this.recipeService.addRecipe(submitRecipe);
    }
  }
}
