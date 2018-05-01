import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipe-book/recipes.module#RecipesModule' },
  { path: 'shopping', loadChildren: './shopping/shopping-list.module#ShoppingListModule'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}
