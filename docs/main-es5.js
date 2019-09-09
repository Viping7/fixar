(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-md fixed-top navbar-light\">\n        <div class=\"container\">\n            <a class=\"navbar-brand\" href=\"#\">fixar</a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">How it Works</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">Find a Job</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">Login</a>\n                    </li>\n                    <li class=\"nav-item active\">\n                        <a class=\"nav-link\" href=\"#\">Signup</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/search/search.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/search/search.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\n    <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><img src='assets/images/icons/path.svg'/></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"What service you need\" autofocus>\n            <div class=\"input-group-append\">\n                <span class=\"input-group-text\"><img src='assets/images/icons/format-paint-material.svg'/></span>\n            </div>\n            <div class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn\">Find Service</button>\n                </div>\n        </div>\n        <ul class=\"tags\">\n            <li *ngFor='let tag of tags'>{{tag}}</li>\n            <li><span>...</span></li>\n        </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-header></app-header>\n    <section class=\"banner\">\n        <div class=\"container d-flex vh-100\">\n            <div class=\"row contents  align-self-center\">\n                <div class=\"col-md-7\">\n                    <h1>Find Reliable & Verified\n                        Home Service Providers<span>.</span></h1>\n                    <app-search></app-search>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class=\"links\">\n        <div class=\"container\">\n            <ul>\n                <li class=\"active\">\n                    <span><img src=\"assets/images/icons/group-8.svg\" alt=''></span>\n                    All Categories\n                </li>\n                <li>\n                    <span><img src=\"assets/images/icons/home-interface.svg\" alt=''></span>\n                    Home\n                </li>\n                <li>\n                    <span><img src=\"assets/images/icons/ic-business-center-24-px.svg\" alt=''></span>\n                    Business\n                </li>\n                <li>\n                    <span><img src=\"assets/images/icons/ic-camera-24-px.svg\" alt=''></span>\n                    Camera\n                </li>\n                <li>\n                    <span><img src=\"assets/images/icons/ic-book-24-px.svg\" alt=''></span>\n                    Lessons\n                </li>\n                <li>\n                    <span><img src=\"assets/images/icons/theater.svg\" alt=''></span>\n                    Entertainment\n                </li>\n            </ul>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fiksar';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/search/search.component */ "./src/app/common/search/search.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _common_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .navbar {\n  background: none; }\n  header .navbar .navbar-brand {\n    font-size: 24px;\n    font-weight: 500;\n    color: #ffffff;\n    border-radius: 6px;\n    background-color: #0f77ff;\n    padding: 32px 11px 16px 11px;\n    margin-top: -20px;\n    box-shadow: 0px 5px 8px rgba(15, 119, 255, 0.1); }\n  header .navbar .navbar-toggler {\n    border: none; }\n  header .navbar .navbar-nav {\n    margin-left: 50px; }\n  header .navbar .navbar-nav li a {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: 1.5;\n      letter-spacing: 0.33px;\n      padding: 10px 17px;\n      color: #636b75; }\n  header .navbar .navbar-nav li.active a, header .navbar .navbar-nav li:hover a {\n      color: #0f77ff; }\n  @media screen and (max-width: 600px) {\n  header .navbar {\n    background: #ffffff; }\n    header .navbar .navbar-nav {\n      margin-left: 0px;\n      margin-top: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vbm9jZXB0L2Zpa3Nhci9zcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9ub2NlcHQvZmlrc2FyL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxnQkFBZ0IsRUFBQTtFQUZ4QjtJQUlZLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkNUSztJRFVMLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsK0NBQStDLEVBQUE7RUFYM0Q7SUFjWSxZQUFZLEVBQUE7RUFkeEI7SUFpQlksaUJBQWlCLEVBQUE7RUFqQjdCO01Bb0JvQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtFQXpCbEM7TUE2QndCLGNDOUJQLEVBQUE7RUR1Q2I7RUF0Q0o7SUF3Q1ksbUJBQW1CLEVBQUE7SUF4Qy9CO01BMENnQixnQkFBZ0I7TUFDaEIsZ0JBQWdCLEVBQUEsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG5oZWFkZXJ7XG4gICAgLm5hdmJhcntcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgLm5hdmJhci1icmFuZHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgcGFkZGluZzogMzJweCAxMXB4IDE2cHggMTFweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA4cHggcmdiYSgxNSwgMTE5LCAyNTUsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdmJhci10b2dnbGVye1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItbmF2e1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjMzcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTdweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MzZiNzU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xuICAgICAgICAgICAgICAgICAgICBhe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgLmFjdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAubmF2YmFye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIC5uYXZiYXItbmF2e1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIkcHJpbWFyeTogIzBmNzdmZjsiXX0= */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/search/search.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/search/search.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search .input-group {\n  border-radius: 8px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);\n  background-color: #ffffff; }\n  .search .input-group .input-group-text {\n    border: 0px;\n    background: #fff;\n    padding: 0px 20px;\n    border-radius: 8px; }\n  .search .input-group .form-control {\n    border: 0px;\n    font-size: 20px;\n    padding: 24px 0px;\n    height: 72px; }\n  .search .input-group .form-control:focus {\n      outline: none !important;\n      box-shadow: none; }\n  .search .input-group .input-group-append button {\n    background: #0f77ff;\n    padding: 24px 45px;\n    color: #fff;\n    font-size: 17px;\n    font-weight: 800;\n    border-radius: 0px 8px 8px 0px;\n    transition: opacity 0.5s; }\n  .search .input-group .input-group-append button:hover {\n      opacity: 0.8; }\n  .search .tags {\n  margin-top: 30px;\n  padding-left: 0px;\n  cursor: pointer; }\n  .search .tags li {\n    display: inline-block;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.03);\n    background-color: #fdfcfa;\n    border-radius: 100px;\n    font-size: 13px;\n    font-weight: 500;\n    padding: 10px 22px;\n    margin-right: 10px;\n    transition: all 0.5s;\n    color: #a1a9b3; }\n  .search .tags li:last-child {\n      font-weight: 800;\n      height: 36px;\n      padding: 8px 22px;\n      line-height: 0px;\n      font-size: 40px; }\n  .search .tags li:hover {\n      background: #0f77ff;\n      color: #fff; }\n  @media screen and (max-width: 1190px) {\n      .search .tags li {\n        padding: 10px 12px;\n        margin-bottom: 10px; } }\n  @media screen and (max-width: 600px) {\n  .search .input-group .form-control {\n    font-size: 15px; }\n  .search .input-group .input-group-append button {\n    padding: 24px;\n    font-size: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vbm9jZXB0L2Zpa3Nhci9zcmMvYXBwL2NvbW1vbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbW9ub2NlcHQvZmlrc2FyL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFUSxrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLHlCQUF5QixFQUFBO0VBSmpDO0lBTVksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFUOUI7SUFZWSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUFmeEI7TUFpQmdCLHdCQUF3QjtNQUN4QixnQkFBZ0IsRUFBQTtFQWxCaEM7SUF1QmdCLG1CQ3hCQztJRHlCRCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLHdCQUF3QixFQUFBO0VBN0J4QztNQStCb0IsWUFBWSxFQUFBO0VBL0JoQztFQXFDUSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtFQXZDdkI7SUF5Q1UscUJBQXFCO0lBQ3JCLDJDQUEyQztJQUMzQyx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYyxFQUFBO0VBbER4QjtNQW9EWSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0VBeEQzQjtNQTJEYyxtQkM1REc7TUQ2REgsV0FBVyxFQUFBO0VBRWY7TUE5RFY7UUErRFksa0JBQWtCO1FBQ2xCLG1CQUFtQixFQUFBLEVBRXhCO0VBRUg7RUFwRUo7SUF1RWdCLGVBQWUsRUFBQTtFQXZFL0I7SUEyRW9CLGFBQWE7SUFDYixlQUFlLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG4uc2VhcmNoe1xuICAgIC5pbnB1dC1ncm91cHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAuaW5wdXQtZ3JvdXAtdGV4dHtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWNvbnRyb2x7XG4gICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgICAgJjpmb2N1c3tcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW5wdXQtZ3JvdXAtYXBwZW5ke1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggNDVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggOHB4IDhweCAwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRhZ3N7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBsaXtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmY2ZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjJweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgY29sb3I6ICNhMWE5YjM7XG4gICAgICAgICAgJjpsYXN0LWNoaWxke1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExOTBweCkge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICB9ICBcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAuaW5wdXQtZ3JvdXB7XG4gICAgICAgICAgICAuZm9ybS1jb250cm9se1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnB1dC1ncm91cC1hcHBlbmR7XG4gICAgICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG59IiwiJHByaW1hcnk6ICMwZjc3ZmY7Il19 */"

/***/ }),

/***/ "./src/app/common/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.tags = ['House Cleaning', 'Painting', 'Photography', 'Personal Training'];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/common/search/search.component.scss")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner {\n  background-image: linear-gradient(221deg, #fcfaf7, #f8f2ec);\n  height: 100vh;\n  width: 100%; }\n  .banner:after {\n    content: '';\n    position: absolute;\n    background-image: url('kari-shea-207221.png');\n    width: 54%;\n    height: 100%;\n    top: 0;\n    right: 0;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: right; }\n  .banner .container {\n    position: relative;\n    z-index: 99; }\n  .banner h1 {\n    font-size: 48px;\n    font-weight: bold;\n    line-height: 1.31;\n    letter-spacing: 0.53px;\n    color: #363637;\n    margin-bottom: 50px; }\n  .banner h1 span {\n      color: #0f77ff; }\n  @media screen and (max-width: 600px) {\n    .banner:after {\n      display: none; }\n    .banner h1 {\n      font-size: 34px; } }\n  .links ul {\n  padding: 40px 0px;\n  margin: 0px; }\n  .links ul li {\n    display: inline-block;\n    font-size: 18px;\n    font-weight: 500;\n    letter-spacing: 0.38px;\n    margin-right: 59px;\n    color: #a1a9b3; }\n  .links ul li.active {\n      color: #0f77ff; }\n  .links ul li span {\n      vertical-align: middle;\n      display: inline-flex;\n      margin-right: 15px; }\n  .links ul li:last-child {\n      margin-right: 0px; }\n  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {\n  .links ul li {\n    font-size: 14px;\n    width: 33.3%;\n    margin: 15px 0px; } }\n  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n  .links ul li {\n    font-size: 14px;\n    margin-right: 45px; } }\n  @media screen and (max-width: 600px) {\n  .links ul li {\n    font-size: 14px;\n    width: 50%;\n    margin: 10px 0px; }\n    .links ul li img {\n      width: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vbm9jZXB0L2Zpa3Nhci9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL21vbm9jZXB0L2Zpa3Nhci9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkRBQTJEO0VBQzNELGFBQWE7RUFDYixXQUFXLEVBQUE7RUFIZjtJQUtRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNkNBQXdFO0lBQ3hFLFVBQVU7SUFDVixZQUFZO0lBQ1osTUFBTTtJQUNOLFFBQVE7SUFDUixxQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLDBCQUEwQixFQUFBO0VBZGxDO0lBaUJRLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFsQm5CO0lBcUJRLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUExQjNCO01BNEJZLGNDN0JLLEVBQUE7RURnQ2I7SUEvQko7TUFpQ1csYUFBYSxFQUFBO0lBakN4QjtNQW9DWSxlQUFlLEVBQUEsRUFDbEI7RUFHVDtFQUVRLGlCQUFnQjtFQUNoQixXQUFXLEVBQUE7RUFIbkI7SUFLWSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWMsRUFBQTtFQVYxQjtNQVlnQixjQ3JEQyxFQUFBO0VEeUNqQjtNQWVnQixzQkFBc0I7TUFDdEIsb0JBQW9CO01BQ3BCLGtCQUFrQixFQUFBO0VBakJsQztNQW9CZ0IsaUJBQWlCLEVBQUE7RUFJN0I7RUF4Qko7SUEyQmdCLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCLEVBQUEsRUFFbkI7RUFJVDtFQW5DSjtJQXNDZ0IsZUFBZTtJQUNmLGtCQUFrQixFQUFBLEVBQ3JCO0VBSVQ7RUE1Q0o7SUErQ2dCLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7SUFqRGhDO01BbURvQixXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlcyc7XG4uYmFubmVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMjFkZWcsICNmY2ZhZjcsICNmOGYyZWMpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci9rYXJpLXNoZWEtMjA3MjIxLnBuZycpO1xuICAgICAgICB3aWR0aDogNTQlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZToxMDAlOyBcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgfVxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTNweDtcbiAgICAgICAgY29sb3I6ICMzNjM2Mzc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGgxe1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmxpbmtze1xuICAgIHVse1xuICAgICAgICBwYWRkaW5nOjQwcHggMHB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbGl7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMzhweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYTFhOWIzO1xuICAgICAgICAgICAgJi5hY3RpdmV7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3NjhweCkgYW5kIChtYXgtd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMyU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3NjhweCkgYW5kIChtYXgtd2lkdGggOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgdWx7XG4gICAgICAgICAgICBsaXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgICAgICB1bHtcbiAgICAgICAgICAgIGxpe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIFxuXG59IiwiJHByaW1hcnk6ICMwZjc3ZmY7Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/monocept/fiksar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map