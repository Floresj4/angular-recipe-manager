import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesComponent} from './recipes/recipes.component';
import {AuthGuard} from '../account/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent,  },
      {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] }, //order matters in terms of parsing 'new' versus resolving an ID
      {path: ':id', component: RecipeDetailComponent },
      {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {

}
