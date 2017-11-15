import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent {
	
	@ViewChild('nameInput') nameInput: ElementRef;
	@ViewChild('amountInput') amountInput: ElementRef;

	constructor(private shoppingservice:ShoppingService) {
	}

	onAdd() {
		const name = this.nameInput.nativeElement.value;
		const amount = this.amountInput.nativeElement.value;

		this.shoppingservice.ingredientCreated.emit(
			new Ingredient(name, amount));
	}
	
	onDelete() {
		console.log("deleting ingredient");
	}
}