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
	
	@Output('ingredientCreated') ingredientAdded = new EventEmitter<Ingredient>();

	onAdd() {
		let name = this.nameInput.nativeElement.value;
		let amount = this.amountInput.nativeElement.value;
		
		this.ingredientAdded.emit(new Ingredient(name, amount));
		
		this.nameInput.nativeElement.value = "";
		this.amountInput.nativeElement.value = "";
	}
	
	onDelete() {
		console.log("deleting ingredient");
	}
}