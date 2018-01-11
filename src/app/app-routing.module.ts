import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeResolver } from './recipe-book/recipe-resolver.service';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipe-book/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-book/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
	{ path: 'recipes', component: RecipesComponent, children: [
		{path: '', component: RecipeStartComponent,  },
		{path: 'new', component: RecipeEditComponent }, //order matters in terms of parsing 'new' versus resolving an ID
		{path: ':id', component: RecipeDetailComponent, resolve: { recipe: RecipeResolver } },
		{path: ':id/edit', component: RecipeEditComponent }
	]},
	{ path: 'shopping-list', component: ShoppingListComponent }
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
