webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n\t<div class='row'>\n\t\t<div class='col-md-12'>\n\t\t\t<h2>Udemy Course Project</h2>\n\t\t</div>\n\t</div>\n\n\t<app-header (navigationEvent)=\"onNavigationEvent($event)\"></app-header>\n\n\t<app-recipes [ngStyle]=\"getRecipeVisibility()\"></app-recipes>\n\t\n\t<app-shopping-list [ngStyle]=\"getShoppingListVisibility()\"></app-shopping-list>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_book_recipe_service__ = __webpack_require__("../../../../../src/app/recipe-book/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        //default to recipes first
        this.currentNavigation = 'Recipes';
    }
    AppComponent.prototype.onNavigationEvent = function (event) {
        this.currentNavigation = event;
    };
    AppComponent.prototype.getRecipeVisibility = function () {
        return this.currentNavigation == 'Recipes'
            ? { display: 'inline' } : { display: 'none' };
    };
    AppComponent.prototype.getShoppingListVisibility = function () {
        return this.currentNavigation == 'Shopping List'
            ? { display: 'inline' } : { display: 'none' };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__recipe_book_recipe_service__["a" /* RecipeService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_shopping_list_editor_shopping_list_editor_component__ = __webpack_require__("../../../../../src/app/shopping/shopping-list-editor/shopping-list-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_ingredient_ingredient_component__ = __webpack_require__("../../../../../src/app/shopping/ingredient/ingredient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipe_book_recipes_recipes_component__ = __webpack_require__("../../../../../src/app/recipe-book/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipe_book_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipe-book/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_book_recipe_item_recipe_item_component__ = __webpack_require__("../../../../../src/app/recipe-book/recipe-item/recipe-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_book_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/recipe-book/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__shopping_shopping_list_shopping_list_component__["a" /* ShoppingListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shopping_shopping_list_editor_shopping_list_editor_component__["a" /* ShoppingListEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shopping_ingredient_ingredient_component__["a" /* IngredientComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recipe_book_recipes_recipes_component__["a" /* RecipesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__recipe_book_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__recipe_book_recipe_item_recipe_item_component__["a" /* RecipeItemComponent */],
            __WEBPACK_IMPORTED_MODULE_9__recipe_book_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared_dropdown_directive__["a" /* DropDownDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-default'>\n\t<div class='navbar-header'>\n\t\t<a href='#' class='navbar-brand'>Recipe Book</a>\n\t</div>\n\t<div class='collapse navbar-collapse'>\n\t\t<ul class='nav navbar-nav'>\n\t\t\t<li><a href='#' (click)=\"onNavigationClick($event)\">Recipes</a></li>\n\t\t\t<li><a href='#' (click)=\"onNavigationClick($event)\">Shopping List</a></li>\n\t\t</ul>\n\t\t<ul class='nav navbar-nav navbar-right'>\n\t\t\t<li class='dropdown' appDropdown>\n\t\t\t\t<a href='#' class='dropdown-toggle' role='button'>Manage <span class='caret'></span></a>\n\t\t\t\t<ul class='dropdown-menu'>\n\t\t\t\t\t<li><a href='#'>Save Data</a></li>\n\t\t\t\t\t<li><a href='#'>Fetch Data</a></li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.navigationEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onNavigationClick = function (event) {
        this.displayContent = event.srcElement.textContent;
        this.navigationEvent.emit(this.displayContent);
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "navigationEvent", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-detail/recipe-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n\t<div class='col-md-12'>\r\n\t\t<h3>Recipe Details</h3>\r\n\r\n\t\t<div class='btn-group'\r\n\t\t\tappDropdown>\r\n\t\t\t<button type='button' class='btn btn-primary dropdown-toggle'>\r\n\t\t\t\tManage Recipe <span class='caret'></span>\r\n\t\t\t</button>\r\n\t\t\t\r\n\t\t\t<ul class='dropdown-menu'>\r\n\t\t\t\t<li><a href='#'>To Shopping List</a></li>\r\n\t\t\t\t<li><a href='#'>Edit Recipe</a></li>\r\n\t\t\t\t<li><a href='#'>Delete Recipe</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class='row'>\r\n\t<div class='col-md-12'>\r\n\t\t<h2>{{recipe.name}}</h2>\r\n\t\t<img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" \r\n\t\t\t class='img-responsive'\r\n\t\t\t style='max-height:300px'/>\r\n\t</div>\r\n</div>\r\n\r\n<div class='row'>\r\n\t<div class='col-md-12'>\r\n\t\t<p>{{recipe.description}}</p>\r\n\t</div>\r\n</div>\r\n\r\n<div class='row'>\r\n\t<div class='col-md-12'>\r\n\t\t<h4>Ingredients</h4>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/recipe-book/recipe.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeDetailComponent = (function () {
    function RecipeDetailComponent() {
        //todo, fix this with templating or something else
        this.recipe = new __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]("", "", "");
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
    };
    return RecipeDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]) === "function" && _a || Object)
], RecipeDetailComponent.prototype, "recipe", void 0);
RecipeDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-recipe-detail',
        template: __webpack_require__("../../../../../src/app/recipe-book/recipe-detail/recipe-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipe-book/recipe-detail/recipe-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RecipeDetailComponent);

var _a;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-item/recipe-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-item/recipe-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a href='#' class='list-group-item clearfix'>\r\n\t<div class='pull-left'>\r\n\t\t<h4 class='list-group-item-heading'>{{recipe.name}}</h4>\r\n\t\t<p class='list-group-item-text'>{{recipe.description}}</p>\r\n\t</div>\r\n\t<span class='pull-right'>\r\n\t\t<img [src]='recipe.imagePath'\r\n\t\t\t alt='{{recipe.description}}' \r\n\t\t\t class='img-responsive' \r\n\t\t\t style='max-height: 50px' />\r\n\t</span>\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-item/recipe-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/recipe-book/recipe.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipe-book/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeItemComponent = (function () {
    function RecipeItemComponent(recipeservice) {
        this.recipeservice = recipeservice;
    }
    return RecipeItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('recipe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]) === "function" && _a || Object)
], RecipeItemComponent.prototype, "recipe", void 0);
RecipeItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-recipe-item',
        template: __webpack_require__("../../../../../src/app/recipe-book/recipe-item/recipe-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipe-book/recipe-item/recipe-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]) === "function" && _b || Object])
], RecipeItemComponent);

var _a, _b;
//# sourceMappingURL=recipe-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-list/recipe-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n\t<div class='col-md-12'>\r\n\t\t<h3>Recipe List</h3>\r\n\t\t\r\n\t\t<button class='btn btn-success'>New Recipe</button>\r\n\r\n\t</div>\r\n</div>\r\n\r\n<hr/>\r\n\r\n<div class = 'row'>\r\n\t<div class='col-xs-12'>\r\n\r\n\t\t<app-recipe-item \r\n            *ngFor=\"let r of recipes\"\r\n            [recipe]='r'\r\n            (click)=\"onRecipeClick(r)\">\r\n\t\t</app-recipe-item>\r\n\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe-list/recipe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("../../../../../src/app/recipe-book/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeListComponent = (function () {
    function RecipeListComponent(recipeservice) {
        this.recipeservice = recipeservice;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipes = this.recipeservice.getRecipes();
    };
    RecipeListComponent.prototype.onRecipeClick = function (recipe) {
        this.recipeservice.recipeSelected.emit(recipe);
    };
    return RecipeListComponent;
}());
RecipeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-recipe-list',
        template: __webpack_require__("../../../../../src/app/recipe-book/recipe-list/recipe-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipe-book/recipe-list/recipe-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]) === "function" && _a || Object])
], RecipeListComponent);

var _a;
//# sourceMappingURL=recipe-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(name, description, imagePath) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.model.js.map

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/recipe-book/recipe.model.ts");


var RecipeService = (function () {
    function RecipeService() {
        this.recipeSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.recipes = [
            new __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]('Macaroni & cheese', 'nom nom nom', 'https://d3cizcpymoenau.cloudfront.net/images/legacy/34780/SFS_SouthernMacandCheese_20V216.jpg'),
            new __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]('Beef Stew', 'Thick beef stew good eaten from a bowl or poured over biscuits', 'http://images.media-allrecipes.com/userphotos/720x405/729310.jpg'),
            new __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]('French Onion Soup', 'Classic simple French onion soup recipe, with beef stock base, slow-cooked caramelized onions', 'http://www.recipetineats.com/wp-content/uploads/2016/09/French-Onion-Soup-3-680x952.jpg')
        ];
    }
    RecipeService.prototype.ngOnInit = function () {
    };
    RecipeService.prototype.getRecipes = function () {
        //return a copy of the array
        return this.recipes.slice();
    };
    return RecipeService;
}());

//# sourceMappingURL=recipe.service.js.map

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipes/recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n\t<h3>Recipes</h3>\r\n</div>\r\n<div class='row'>\r\n\t<div class='col-lg-5 col-md-5 col-sm-5 col-xs-12'>\r\n\t\t<app-recipe-list></app-recipe-list>\r\n\t</div>\r\n\t<div class='col-lg-7 col-md-7 col-sm-7 col-xs-12'>\r\n\t\t<app-recipe-detail \r\n\t\t\t*ngIf=\"currentRecipe; else infoText\"\r\n            [recipe]='currentRecipe'>\r\n\t\t</app-recipe-detail>\r\n\t\t<ng-template #infoText>\r\n\t\t\t<h3>Please select a recipe!</h3>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipe-book/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("../../../../../src/app/recipe-book/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipesComponent = (function () {
    function RecipesComponent(recipeservice) {
        this.recipeservice = recipeservice;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //subscribe to the event emitted by the list component
        this.recipeservice.recipeSelected
            .subscribe(function (recipe) {
            _this.currentRecipe = recipe;
        });
    };
    return RecipesComponent;
}());
RecipesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-recipes',
        template: __webpack_require__("../../../../../src/app/recipe-book/recipes/recipes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipe-book/recipes/recipes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]) === "function" && _a || Object])
], RecipesComponent);

var _a;
//# sourceMappingURL=recipes.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropDownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropDownDirective = (function () {
    function DropDownDirective() {
        this.isOpen = false;
    }
    DropDownDirective.prototype.ngOnInit = function () {
    };
    DropDownDirective.prototype.onclick = function () {
        this.isOpen = !this.isOpen;
    };
    return DropDownDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])("class.open"),
    __metadata("design:type", Boolean)
], DropDownDirective.prototype, "isOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropDownDirective.prototype, "onclick", null);
DropDownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [])
], DropDownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/Ingredient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=Ingredient.model.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/ingredient/ingredient.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/ingredient/ingredient.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n\t<div class='col-md-12'>\r\n\t\t<h3>Ingredient</h3>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping/ingredient/ingredient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IngredientComponent = (function () {
    function IngredientComponent() {
    }
    return IngredientComponent;
}());
IngredientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-ingredient',
        template: __webpack_require__("../../../../../src/app/shopping/ingredient/ingredient.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/ingredient/ingredient.component.css")]
    })
], IngredientComponent);

//# sourceMappingURL=ingredient.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/shopping-list-editor/shopping-list-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/shopping-list-editor/shopping-list-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n\t<div class='col-md-12'>\r\n\t\t<h3>Shopping List Editor</h3>\r\n\t\t<form>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-sm-5 form-group'>\r\n\t\t\t\t\t<label for='name'>Name</label>\r\n\t\t\t\t\t<input\r\n\t\t\t\t\t\ttype='text'\r\n\t\t\t\t\t\tid='name'\r\n\t\t\t\t\t\tclass='form-control'\r\n\t\t\t\t\t\t#nameInput>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class='col-sm-2 form-group'>\r\n\t\t\t\t\t<label for='amount'>Amount</label>\r\n\t\t\t\t\t<input\r\n\t\t\t\t\t\ttype='number' \r\n\t\t\t\t\t    id='amount' \r\n\t\t\t\t\t    class='form-control'\t\t\t\t\t   \r\n\t\t\t\t\t\t   #amountInput>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class='row'>\r\n\t\t\t\t<div class='col-xs-12'>\r\n\t\t\t\t\t<button class='btn btn-success' \r\n\t\t\t\t\t\ttype='button'\r\n\t\t\t\t\t\t(click)=\"onAdd()\">Add</button>\r\n\t\t\t\t\t<button class='btn btn-danger'\r\n\t\t\t\t\t\ttype='button'\r\n\t\t\t\t\t\t(click)=\"onDelete()\">Delete</button>\r\n\t\t\t\t\t<button class='btn btn-primary' type='button'>Clear</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping/shopping-list-editor/shopping-list-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__ = __webpack_require__("../../../../../src/app/shopping/Ingredient.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListEditorComponent = (function () {
    function ShoppingListEditorComponent() {
        this.ingredientCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ShoppingListEditorComponent.prototype.onAdd = function () {
        var name = this.nameInput.nativeElement.value;
        var amount = this.amountInput.nativeElement.value;
        this.ingredientCreated.emit(new __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__["a" /* Ingredient */](name, amount));
    };
    ShoppingListEditorComponent.prototype.onDelete = function () {
        console.log("deleting ingredient");
    };
    return ShoppingListEditorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('nameInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], ShoppingListEditorComponent.prototype, "nameInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('amountInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _b || Object)
], ShoppingListEditorComponent.prototype, "amountInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('ingredientCreated'),
    __metadata("design:type", Object)
], ShoppingListEditorComponent.prototype, "ingredientCreated", void 0);
ShoppingListEditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-shopping-list-editor',
        template: __webpack_require__("../../../../../src/app/shopping/shopping-list-editor/shopping-list-editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/shopping-list-editor/shopping-list-editor.component.css")]
    })
], ShoppingListEditorComponent);

var _a, _b;
//# sourceMappingURL=shopping-list-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping/shopping-list/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<h3>Shopping List</h3>\n</div>\n<div class='row'>\n\t<div class='col-md-12'>\n\t\t<app-shopping-list-editor\n\t\t\t(ingredientCreated)=\"onIngredientCreated($event)\"\n\t\t></app-shopping-list-editor>\n\n\t\t<hr/>\n\t\t\n\t\t<ul class='list-group'>\n\t\t\t<a class='list-group-item' style='cursor: pointer'\n\t\t\t   *ngFor='let i of ingredients'>\n\t\t\t\t{{ i.name }} ({{ i.amount }})\n\t\t\t</a>\n\t\t</ul>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__ = __webpack_require__("../../../../../src/app/shopping/Ingredient.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingListComponent = (function () {
    function ShoppingListComponent() {
        this.ingredients = [
            new __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__["a" /* Ingredient */]('Tomatoes', 3),
            new __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__["a" /* Ingredient */]('Celery', 1),
            new __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__["a" /* Ingredient */]('Carrot', 6),
            new __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__["a" /* Ingredient */]('Potato', 2),
            new __WEBPACK_IMPORTED_MODULE_1__Ingredient_model__["a" /* Ingredient */]('Pasta', 1)
        ];
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
    };
    ShoppingListComponent.prototype.onIngredientCreated = function (ingredient) {
        console.log("adding new ingredient" + ingredient);
        this.ingredients.push(ingredient);
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-shopping-list',
        template: __webpack_require__("../../../../../src/app/shopping/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping/shopping-list/shopping-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShoppingListComponent);

//# sourceMappingURL=shopping-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map