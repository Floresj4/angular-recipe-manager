import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from './shopping/shopping-list-editor/shopping-list-editor.component';
import { IngredientComponent } from './shopping/ingredient/ingredient.component';
import { RecipeService } from './recipe-book/recipe.service';
import { RecipeResolver } from './recipe-book/recipe-resolver.service';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './account/signup/signup.component';
import { SigninComponent } from './account/signin/signin.component';
import {AuthService} from './account/auth.service';
import {AuthGuard} from './account/auth-guard.service';
import {RecipesModule} from './recipe-book/recipes.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
	  ShoppingListEditorComponent,
	  IngredientComponent,
	  HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
	  AppRoutingModule,
    RecipesModule,
    HttpModule,
    SharedModule
  ],
  providers: [RecipeService, RecipeResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
