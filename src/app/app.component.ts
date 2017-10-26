import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //default to recipes first
  currentNavigation:string = 'Recipes';
  
  onNavigationEvent(event) {
    this.currentNavigation = event;
  }
  
  getRecipeVisibility() {
    return this.currentNavigation == 'Recipes'
	  ? { display: 'inline' } : { display: 'none' };
  }
  
  getShoppingListVisibility() {
    return this.currentNavigation == 'Shopping List'
	  ? { display: 'inline' } : { display: 'none' };
  }
}
