import {Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingService } from '../shopping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent implements OnInit, OnDestroy {

  editingSubscription: Subscription;

	@ViewChild('shoppingListForm') shoppingListForm: NgForm;

	editingMode: boolean = false;
	editingIndex: number;
  editingItem: Ingredient;

	constructor(private shoppingservice:ShoppingService) {
	}

	ngOnInit() {
	  this.editingSubscription = this.shoppingservice.startedEditing
      .subscribe((index: number) => {
	      this.editingMode = true;
	      this.editingIndex = index;
	      this.editingItem = this.shoppingservice.getIngredient(index);

	      //update the form to display the values
        this.shoppingListForm.setValue({
          name: this.editingItem.name,
          amount: this.editingItem.amount
        });
    });
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

	onClear() {

	  // this can be done via this.shoppingListForm.reset as well
	  this.shoppingListForm.setValue({
      'name': '',
      'amount': ''
    });
  }

  ngOnDestroy() {
	  this.editingSubscription.unsubscribe();
  }
}
