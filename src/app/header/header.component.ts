import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-book/recipe.service';
import { ShoppingService } from '../shopping/shopping.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { IHttpService } from '../shared/http-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  httpservice: IHttpService;

  urlSubscription: Subscription;

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingService,
              private router: Router) { }

  ngOnInit() {
    this.urlSubscription =
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        let root = this.getNavigationRoot(event.urlAfterRedirects);

        switch(root) {
          case 'recipes':
            this.httpservice = this.recipeService;
            break;

          case 'shopping-list':
            this.httpservice = this.shoppingListService;
            break;

          case 'signup':
          case 'signin':
            break;

          default:
            throw `An error occurred selecting the service for ${root}`;
        }
      }
    });
  }

  ngOnDestroy() {
    this.urlSubscription.unsubscribe();
  }

  /**
   * get the navigation root to determine which service to invoke
   */
  getNavigationRoot(url: string) {
    for(let i = 1; i < url.length; i++) {
      let char = url.charAt(i);
      if(char === '?' || char === '/')
        return url.substring(1, i);
    }

    return url.substr(1);
  }

  onSave() {
    this.httpservice.save();
  }

  onFetch() {
    this.httpservice.fetch();
  }
}
