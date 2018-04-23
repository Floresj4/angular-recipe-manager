import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from './recipe-book/recipe.service';
import { RecipeResolver } from './recipe-book/recipe-resolver.service';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './account/auth.service';
import { AuthGuard } from './account/auth-guard.service';
import { RecipesModule } from './recipe-book/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping/shopping-list.module';
import { AccountModule } from './account/account.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
	  HeaderComponent,
	  HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
	  AppRoutingModule,
    AccountModule,
    RecipesModule,
    ShoppingListModule,
    HttpModule,
    SharedModule
  ],
  providers: [RecipeService, RecipeResolver, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
