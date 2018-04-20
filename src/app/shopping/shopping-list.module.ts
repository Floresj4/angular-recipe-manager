import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IngredientComponent } from './ingredient/ingredient.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from './shopping-list-editor/shopping-list-editor.component';
import { ShoppingRoutingModule } from './shopping-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    IngredientComponent,
    ShoppingListComponent,
    ShoppingListEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingListModule {

}
