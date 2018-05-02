import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import {RecipeResolver} from '../recipe-book/recipe-resolver.service';
import {RecipeService} from '../recipe-book/recipe.service';
import {AuthGuard} from '../account/auth-guard.service';
import {AuthService} from '../account/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    RecipeService,
    RecipeResolver,
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {

}
