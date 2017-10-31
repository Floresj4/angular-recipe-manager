import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../Ingredient.model';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent {
	@ViewChild('nameInput') nameInput: ElementRef;
	@ViewChild('amountInput') amountInput: ElementRef;
	
	@Output('ingredientCreated') ingredientCreated = new EventEmitter<Ingredient>();

	onAdd() {
		let name = this.nameInput.nativeElement.value;
		let amount = this.amountInput.nativeElement.value;
		
		this.ingredientCreated.emit(new Ingredient(name, amount));
	}
	
	onDelete() {
		console.log("deleting ingredient");
	}
}