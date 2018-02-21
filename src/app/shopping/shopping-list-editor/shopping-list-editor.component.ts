import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shopping.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent {

	@ViewChild('shoppingListForm') shoppingListForm: NgForm;

	constructor(private shoppingservice:ShoppingService) {
	}

	onSubmit() {
    console.log(this.shoppingListForm);

	  if(this.shoppingListForm.valid) {
      this.shoppingservice.addIngredient(
        new Ingredient(this.shoppingListForm.value.name
          , this.shoppingListForm.value.amount));
    }
	}

	onDelete() {
		console.log("deleting ingredient");
	}
}
