import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from './shopping/shopping-list-editor/shopping-list-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
	ShoppingListEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
