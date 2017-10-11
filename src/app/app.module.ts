import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from './shopping/shopping-list-editor/shopping-list-editor.component';
import { IngredientComponent } from './shopping/ingredient/ingredient.component';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-book/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
	ShoppingListEditorComponent,
	IngredientComponent,
	RecipeComponent,
	RecipeDetailComponent,
	RecipeItemComponent,
	RecipeListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
