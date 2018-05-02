import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesModule } from './recipe-book/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping/shopping-list.module';
import { AccountModule } from './account/account.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	  AppRoutingModule,
    SharedModule,
    CoreModule,
    AccountModule,
    RecipesModule,
    ShoppingListModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
