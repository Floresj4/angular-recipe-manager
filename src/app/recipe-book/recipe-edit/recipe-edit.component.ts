import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shopping/Ingredient.model';

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
    currentRecipe.ingredients.forEach((ing) => {
      ingredientsData.push(new FormGroup({
        'name': new FormControl(ing.name, Validators.required),
        'amount': new FormControl(ing.amount, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      }))
    });

    this.recipeEditForm = new FormGroup({
      'recipeName': new FormControl(currentRecipe.name, Validators.required),
      'imagePath': new FormControl(currentRecipe.imagePath, Validators.required),
      'recipeDescription': new FormControl(currentRecipe.description, Validators.required),
      'ingredients': ingredientsData
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel() {
    this.recipeEditForm.reset();
    this.router.navigate(['../'],
      {'relativeTo': this.route});
  }

  onDeleteIngredient(index: number) {
    // remove the form control
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }

  onSubmit() {

    //build a recipe to submit
    var submitRecipe: Recipe = new Recipe(
      this.id,
      this.recipeEditForm.value.recipeName,
      this.recipeEditForm.value.recipeDescription,
      this.recipeEditForm.value.imagePath,
      this.recipeEditForm.value.ingredients);

    //add or update depending on the mode
    if(this.editMode) {
      this.recipeService.updateRecipe(this.id, submitRecipe);
    } else {
      this.recipeService.addRecipe(submitRecipe);
    }

    this.editMode = false;
    this.recipeEditForm.reset();

    this.router.navigate(['../'],
      {'relativeTo': this.route});
  }
}
