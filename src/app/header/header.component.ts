import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe-book/recipe.service';
import {ShoppingService} from '../shopping/shopping.service';
import {ActivatedRoute, Router, Event, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd) {
        let root = this.getNavigationRoot(event.urlAfterRedirects);
        console.log(root);
      }
    });
  }

  /**
   * get the navigation root to determine which service to invoke
   */
  getNavigationRoot(url: string) {
    for(let i = 1; i < url.length; i++) {
      let char = url.charAt(i);
      if(char === '?' || char === '/')
        return url.substring(1, i - 1);
    }

    return url.substr(1);
  }

  onSave() {

  }

  onFetch() {

  }
}
