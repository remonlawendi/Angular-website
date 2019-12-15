(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LXBhZ2UvYWJvdXQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "       <!--Introduction-->\n       <section id=\"about\" class=\"introduction scrollto\" *ngIf=\"intro\">\n\n        <div class=\"row clearfix\">\n\n            <div class=\"col-3\">\n                <div class=\"section-heading\">\n                    <h3>{{intro.tagline}}</h3>\n                    <h2 class=\"section-title\">{{intro.title}}</h2>\n                    <p class=\"section-subtitle\">{{intro.description}}</p>\n                </div>\n\n            </div>\n\n            <div class=\"col-2-3\" *ngIf=\"features\">\n                <div *ngFor=\"let feature of features\">\n                    <app-feature-block [feature]=\"feature\"></app-feature-block>\n                </div>\n            </div>\n\n        </div>\n\n\n    </section>\n    <!--End of Introduction-->"

/***/ }),

/***/ "./src/app/about/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(config) {
        this.config = config;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'intro');
        this.getBlockData('features');
    };
    AboutPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.intro = data;
            console.log(_this.intro);
        });
    };
    AboutPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.features = data;
            console.log(_this.features);
        });
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/about/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about/about-page/about-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]
    }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about/about-page/about-page.component.ts");
/* harmony import */ var _feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-block/feature-block.component */ "./src/app/about/feature-block/feature-block.component.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"]
            ],
            declarations: [_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"], _feature_block_feature_block_component__WEBPACK_IMPORTED_MODULE_3__["FeatureBlockComponent"]]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/about/feature-block/feature-block.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2ZlYXR1cmUtYmxvY2svZmVhdHVyZS1ibG9jay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/feature-block/feature-block.component.html":
/*!******************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Icon Block-->\n<div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\" >\n  <!--Icon-->\n  <div class=\"icon\">\n      <i class=\"fa fa-{{feature.icon}} fa-2x\"></i>\n  </div>\n  <!--Icon Block Description-->\n  <div class=\"icon-block-description\">\n      <h4>{{feature.title}}</h4>\n      <p>{{feature.description}}</p>\n  </div>\n</div>\n<!--End of Icon Block-->"

/***/ }),

/***/ "./src/app/about/feature-block/feature-block.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/about/feature-block/feature-block.component.ts ***!
  \****************************************************************/
/*! exports provided: FeatureBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureBlockComponent", function() { return FeatureBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeatureBlockComponent = /** @class */ (function () {
    function FeatureBlockComponent() {
    }
    FeatureBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeatureBlockComponent.prototype, "feature", void 0);
    FeatureBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-block',
            template: __webpack_require__(/*! ./feature-block.component.html */ "./src/app/about/feature-block/feature-block.component.html"),
            styles: [__webpack_require__(/*! ./feature-block.component.css */ "./src/app/about/feature-block/feature-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureBlockComponent);
    return FeatureBlockComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routegaurd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routegaurd.service */ "./src/app/routegaurd.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.module */ "./src/app/user-dashboard/user-dashboard.module.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
/* harmony import */ var _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notfound/notfound.module */ "./src/app/notfound/notfound.module.ts");
/* harmony import */ var _clients_clients_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients/clients.module */ "./src/app/clients/clients.module.ts");
/* harmony import */ var _testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testimonial/testimonial.module */ "./src/app/testimonial/testimonial.module.ts");
/* harmony import */ var _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pricing/pricing.module */ "./src/app/pricing/pricing.module.ts");
/* harmony import */ var _blog_blog_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/blog.module */ "./src/app/blog/blog.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: function () { return _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"]; } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_6__["ContactusComponent"], outlet: 'popup' },
    { path: 'about', loadChildren: function () { return _about_about_module__WEBPACK_IMPORTED_MODULE_10__["AboutModule"]; } },
    { path: 'services', loadChildren: function () { return _services_services_module__WEBPACK_IMPORTED_MODULE_11__["ServicesModule"]; } },
    { path: 'testimonials', loadChildren: function () { return _testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_15__["TestimonialModule"]; } },
    { path: 'gallery', loadChildren: function () { return _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_12__["GalleryModule"]; } },
    { path: 'clients', loadChildren: function () { return _clients_clients_module__WEBPACK_IMPORTED_MODULE_14__["ClientsModule"]; } },
    { path: 'pricing', loadChildren: function () { return _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_16__["PricingModule"]; } },
    { path: 'subscribe', component: _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_8__["SubscribeComponent"], outlet: 'popup' },
    { path: 'dashboard', loadChildren: function () { return _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["UserDashboardModule"]; }, canActivate: [_routegaurd_service__WEBPACK_IMPORTED_MODULE_3__["RoutegaurdService"]] },
    { path: 'blog', loadChildren: function () { return _blog_blog_module__WEBPACK_IMPORTED_MODULE_17__["BlogModule"]; }, canActivate: [_routegaurd_service__WEBPACK_IMPORTED_MODULE_3__["RoutegaurdService"]] },
    { path: '404', loadChildren: function () { return _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_13__["NotfoundModule"]; } },
    { path: '**', redirectTo: '/404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n  <div class=\"top-border wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\"></div>\n  <div class=\"right-border wow fadeInRight animated\" style=\"visibility: visible; animation-name: fadeInRight;\"></div>\n  <div class=\"bottom-border wow fadeInUp animated\" style=\"visibility: visible; animation-name: fadeInUp;\"></div>\n  <div class=\"left-border wow fadeInLeft animated\" style=\"visibility: visible; animation-name: fadeInLeft;\"></div>\n</div>\n    <!--Main Content Area-->\n    <main id=\"content\">        \n      <app-navigation></app-navigation>       \n        <router-outlet></router-outlet>\n      <app-footer></app-footer>\n      <router-outlet name=\"popup\"></router-outlet>\n    </main>\n    <!--End Main Content Area-->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My website';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navmenu/navmenu.component */ "./src/app/navmenu/navmenu.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.module */ "./src/app/user-dashboard/user-dashboard.module.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gallery/gallery.module */ "./src/app/gallery/gallery.module.ts");
/* harmony import */ var _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notfound/notfound.module */ "./src/app/notfound/notfound.module.ts");
/* harmony import */ var _clients_clients_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./clients/clients.module */ "./src/app/clients/clients.module.ts");
/* harmony import */ var _testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./testimonial/testimonial.module */ "./src/app/testimonial/testimonial.module.ts");
/* harmony import */ var _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pricing/pricing.module */ "./src/app/pricing/pricing.module.ts");
/* harmony import */ var _blog_blog_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blog/blog.module */ "./src/app/blog/blog.module.ts");
/* harmony import */ var _website_block_website_block_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./website-block/website-block.component */ "./src/app/website-block/website-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_4__["SocialComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
                _navmenu_navmenu_component__WEBPACK_IMPORTED_MODULE_15__["NavmenuComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__["SubscribeComponent"],
                _website_block_website_block_component__WEBPACK_IMPORTED_MODULE_27__["WebsiteBlockComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_18__["HomeModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_19__["AboutModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_20__["ServicesModule"],
                _gallery_gallery_module__WEBPACK_IMPORTED_MODULE_21__["GalleryModule"],
                _user_dashboard_user_dashboard_module__WEBPACK_IMPORTED_MODULE_16__["UserDashboardModule"],
                _notfound_notfound_module__WEBPACK_IMPORTED_MODULE_22__["NotfoundModule"],
                _clients_clients_module__WEBPACK_IMPORTED_MODULE_23__["ClientsModule"],
                _testimonial_testimonial_module__WEBPACK_IMPORTED_MODULE_24__["TestimonialModule"],
                _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_25__["PricingModule"],
                _blog_blog_module__WEBPACK_IMPORTED_MODULE_26__["BlogModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__["InMemoryDataService"], { dataEncapsulation: false,
                    passThruUnknownUrl: true })
            ],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = 'api/users';
    }
    AuthenticationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AuthenticationService.prototype.signup = function (formData) {
        return this.http.post(this.apiUrl + "/signup", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            console.log(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('signup', [])));
    };
    AuthenticationService.prototype.login = function (formData) {
        return this.http.post(this.apiUrl + "/login", formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('login', [])));
    };
    AuthenticationService.prototype.logout = function () {
        if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/home']);
        }
    };
    AuthenticationService.prototype.isloggedIn = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getUser = function () {
        if (this.isloggedIn) {
            return JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/blog/Post.ts":
/*!******************************!*\
  !*** ./src/app/blog/Post.ts ***!
  \******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    // id: number;
    // title: string;
    // author: User['id'];
    // image: string;
    // publishdate: Date;
    // excert: string;
    function Post(id, title, author, publishdate, excert, image) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.publishdate = publishdate;
        this.excert = excert;
        this.image = image;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/blog/article-create/article-create.component.css":
/*!******************************************************************!*\
  !*** ./src/app/blog/article-create/article-create.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 10%;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=password].form-control {\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n#preview {\n    min-height: 450px;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9hcnRpY2xlLWNyZWF0ZS9hcnRpY2xlLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLHNFQUFzRTtBQUMxRTtBQUVBLG1CQUFtQixrQkFBa0I7SUFDakMsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9hcnRpY2xlLWNyZWF0ZS9hcnRpY2xlLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgXG59XG5zZWN0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnBhbmVsLWJvZHl7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jZW50ZXItZm9ybSB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnBhbmVsLWJvZHl7XG5cbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2U1MWMyMztcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG59XG5cbi5mb3JtLWNvbnRyb2wtaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuODQ2O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5idG4tYmxvY2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXN1Y2Nlc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICBjb2xvcjojZmZmO1xufVxuLnNpZ251cC1vci1zZXBhcmF0b3J7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjlweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNpZ251cC1vci1zZXBhcmF0b3IgLnRleHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zaWdudXAtb3Itc2VwYXJhdG9yIGhyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogLTE2cHggYXV0byAxMHB4IGF1dG87XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2UwZTA7XG59XG5cblt0eXBlPXRleHRdLmZvcm0tY29udHJvbCwgW3R5cGU9cGFzc3dvcmRdLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbltjbGFzc149J2lvbi0nXSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuI3ByZXZpZXcge1xuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog/article-create/article-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/blog/article-create/article-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n  \n      <div class=\"col-3 container\">\n  \n        <div class=\"panel\">\n          <div class=\"panel-body\">\n          <h4 class=\"text-center\"><i class=\"ion-log-in\"></i> Create New Post</h4>\n  \n          <form [formGroup]=\"postCreateForm\" (ngSubmit)=\"addPost(postCreateForm.value)\">\n            <!-- <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-lg\" name=\"id\" placeholder=\"Id\" formControlName=\"id\">\n              <span class=\"ion-at form-control-icon\"></span> \n            </div> -->\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-lg\" name=\"title\" placeholder=\"Title\" formControlName=\"title\">\n                <span class=\"ion-at form-control-icon\"></span> \n            </div>\n            <div class=\"form-group\" hidden>\n              <input type=\"text\" class=\"form-control input-lg\" name=\"author\" placeholder=\"Author\" formControlName=\"author\">\n              <span class=\"ion-at form-control-icon\"></span> \n            </div>\n            <div class=\"form-group\" hidden>\n                <input type=\"text\" class=\"form-control input-lg\" name=\"publishdate\" placeholder=\"Publishdate\" formControlName=\"publishdate\">\n                <span class=\"ion-at form-control-icon\"></span> \n              </div>\n              <div class=\"form-group\">\n                  <textarea rows=\"10\" class=\"form-control input-lg\" name=\"excert\" placeholder=\"Post\" formControlName=\"excert\"></textarea>\n                  <span class=\"ion-at form-control-icon\"></span> \n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control input-lg\" name=\"image\" placeholder=\"Image\" formControlName=\"image\">\n                    <span class=\"ion-at form-control-icon\"></span> \n                  </div>\n  \n            <button type=\"submit\" class=\"btn btn-block btn-success\"> Save</button>\n  \n          </form>\n  \n        </div>\n        </div>\n  \n      </div>\n\n      <div class=\"col-2-3\">\n  \n        <div class=\"panel\">\n        <div class=\"panel-body\">\n          <div markdown [data]=\"postCreateForm.value.excert\" id=\"preview\">\n\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    </div>\n  <section>\n  "

/***/ }),

/***/ "./src/app/blog/article-create/article-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/blog/article-create/article-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: ArticleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCreateComponent", function() { return ArticleCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticleCreateComponent = /** @class */ (function () {
    function ArticleCreateComponent(fb, auth, config, route, location, router) {
        this.fb = fb;
        this.auth = auth;
        this.config = config;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ArticleCreateComponent.prototype.ngOnInit = function () {
        this.postCreateForm = this.fb.group({
            // 'id' : [null, Validators.required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'author': [this.getAuthor(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'publishdate': [Date.now(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'excert': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'image': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    ArticleCreateComponent.prototype.addPost = function (formData) {
        var _this = this;
        this.config.addPost(formData).subscribe(function (post) { return _this.router.navigate(["article/" + post['id']]); });
    };
    ArticleCreateComponent.prototype.getBack = function () {
        this.location.back();
    };
    ArticleCreateComponent.prototype.getAuthor = function () {
        return this.auth.getUser()['id'];
    };
    ArticleCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-create',
            template: __webpack_require__(/*! ./article-create.component.html */ "./src/app/blog/article-create/article-create.component.html"),
            styles: [__webpack_require__(/*! ./article-create.component.css */ "./src/app/blog/article-create/article-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ArticleCreateComponent);
    return ArticleCreateComponent;
}());



/***/ }),

/***/ "./src/app/blog/article-edit/article-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/blog/article-edit/article-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 10%;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=password].form-control {\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsc0VBQXNFO0FBQzFFO0FBRUEsbUJBQW1CLGtCQUFrQjtJQUNqQyxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9hcnRpY2xlLWVkaXQvYXJ0aWNsZS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBcbn1cbnNlY3Rpb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbi5wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ucGFuZWwtYm9keXtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmNlbnRlci1mb3JtIHtcbiAgICB3aWR0aDogMzE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ucGFuZWwtYm9keXtcblxufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMGVtO1xufVxuLmZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybS1jb250cm9se1xuICAgIHBhZGRpbmctbGVmdDogNDJweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbn1cblxuLmZvcm0tY29udHJvbC1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDZweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS44NDY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmJ0bi1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idG4tc3VjY2Vzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgIGNvbG9yOiNmZmY7XG59XG4uc2lnbnVwLW9yLXNlcGFyYXRvcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uc2lnbnVwLW9yLXNlcGFyYXRvciAudGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNpZ251cC1vci1zZXBhcmF0b3IgaHIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAtMTZweCBhdXRvIDEwcHggYXV0bztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcbn1cblxuW3R5cGU9dGV4dF0uZm9ybS1jb250cm9sLCBbdHlwZT1wYXNzd29yZF0uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAjZGRkZGRkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuW2NsYXNzXj0naW9uLSddIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog/article-edit/article-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/blog/article-edit/article-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n  <div class=\"row clearfix\">\n\n    <div class=\"container\">\n\n      <div class=\"panel\">\n        <div class=\"panel-body\">\n        <h4 class=\"text-center\"><i class=\"ion-log-in\"></i> Edit the post</h4>\n\n        <form [formGroup]=\"postEditForm\" (ngSubmit)=\"updatePost(postEditForm.value)\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control input-lg\" name=\"id\" placeholder=\"Id\" formControlName=\"id\">\n            <span class=\"ion-at form-control-icon\"></span> \n          </div>\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-lg\" name=\"title\" placeholder=\"Title\" formControlName=\"title\">\n              <span class=\"ion-at form-control-icon\"></span> \n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control input-lg\" name=\"author\" placeholder=\"Author\" formControlName=\"author\">\n            <span class=\"ion-at form-control-icon\"></span> \n          </div>\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-lg\" name=\"publishdate\" placeholder=\"Publishdate\" formControlName=\"publishdate\">\n              <span class=\"ion-at form-control-icon\"></span> \n            </div>\n            <div class=\"form-group\">\n                <textarea rows=\"10\" class=\"form-control input-lg\" name=\"excert\" placeholder=\"Post\" formControlName=\"excert\"></textarea>\n                <span class=\"ion-at form-control-icon\"></span> \n              </div>\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control input-lg\" name=\"image\" placeholder=\"Image\" formControlName=\"image\">\n                  <span class=\"ion-at form-control-icon\"></span> \n                </div>\n\n          <button type=\"submit\" class=\"btn btn-block btn-success\"> Update</button>\n\n        </form>\n\n      </div>\n      </div>\n\n    </div>\n\n  </div>\n<section>\n"

/***/ }),

/***/ "./src/app/blog/article-edit/article-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blog/article-edit/article-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: ArticleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEditComponent", function() { return ArticleEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArticleEditComponent = /** @class */ (function () {
    function ArticleEditComponent(fb, auth, config, route, location, router) {
        this.fb = fb;
        this.auth = auth;
        this.config = config;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ArticleEditComponent.prototype.ngOnInit = function () {
        this.postEditForm = this.fb.group({
            'id': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'publishdate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'excert': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'image': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.id = this.route.snapshot.params['id'] || null;
        if (this.id) {
            this.getPostById(this.id);
        }
    };
    ArticleEditComponent.prototype.getPostById = function (id) {
        var _this = this;
        this.config.getPostByID(id).subscribe(function (post) {
            _this.postEditForm.setValue({
                id: post.id,
                title: post.title,
                author: post.author,
                publishdate: post.publishdate,
                excert: post.excert,
                image: post.image
            });
        });
    };
    ArticleEditComponent.prototype.updatePost = function (formData) {
        var _this = this;
        this.config.updatePost(formData).subscribe(function () { return _this.getBack(); });
    };
    ArticleEditComponent.prototype.getBack = function () {
        this.location.back();
    };
    ArticleEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-edit',
            template: __webpack_require__(/*! ./article-edit.component.html */ "./src/app/blog/article-edit/article-edit.component.html"),
            styles: [__webpack_require__(/*! ./article-edit.component.css */ "./src/app/blog/article-edit/article-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ArticleEditComponent);
    return ArticleEditComponent;
}());



/***/ }),

/***/ "./src/app/blog/article/article.component.css":
/*!****************************************************!*\
  !*** ./src/app/blog/article/article.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/blog/article/article.component.html":
/*!*****************************************************!*\
  !*** ./src/app/blog/article/article.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "       <!--blog Tables-->\n       <section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n        <div class=\"row clearfix\" *ngIf=\"post\">\n\n            <div class=\"post-block col-1 wow fadeInUp\" data-wow-delay=\"0.4s\">\n              <app-post-block [post]=\"post\"></app-post-block>\n            </div>\n        </div>\n        <a (click)=\"getBack()\" class=\"button\">back</a>\n    </section>\n    <!--End of blog Tables-->"

/***/ }),

/***/ "./src/app/blog/article/article.component.ts":
/*!***************************************************!*\
  !*** ./src/app/blog/article/article.component.ts ***!
  \***************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(route, config, location) {
        this.route = route;
        this.config = config;
        this.location = location;
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getPostById(id);
        // this.post = this.getPostById(id);
    };
    ArticleComponent.prototype.getPostById = function (id) {
        var _this = this;
        return this.config.getPostByID(id).subscribe(function (post) { return _this.post = post; });
    };
    ArticleComponent.prototype.getBack = function () {
        this.location.back();
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/blog/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/blog/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-page/blog-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/blog/blog-page/blog-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add-button{\n    position: fixed;\n    top: 10%;\n    right: 30px;\n    border-radius: 50%;\n    z-index: 99999;\n    background-color: #000000;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLXBhZ2UvYmxvZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2ctcGFnZS9ibG9nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDEwJTtcbiAgICByaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBjb2xvcjogI2ZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog/blog-page/blog-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/blog/blog-page/blog-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "       <!--blog Tables-->\n       <section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n          <div class=\"row clearfix\" *ngIf=\"blog\">\n  \n              <div class=\"section-heading\">\n                  <h3>{{blog.tagline}}</h3>\n                  <h2 class=\"section-title\">{{blog.title | uppercase}}</h2>\n                  <a routerLink=\"article-create\" class=\"button\" id=\"add-button\"><i class=\"ion ion-plus\"></i></a>\n              </div>\n              <div *ngFor=\"let post of pages\" class=\"post-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n                <app-post-block [post]=\"post\"></app-post-block>\n              </div>\n          </div>\n          <div class=\"row clearfix\" >\n              <app-pagination [pager]=\"pager\" (setPage)=\"setPage($event)\"></app-pagination>\n          </div>\n      </section>\n      <!--End of blog Tables-->"

/***/ }),

/***/ "./src/app/blog/blog-page/blog-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/blog/blog-page/blog-page.component.ts ***!
  \*******************************************************/
/*! exports provided: BlogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function() { return BlogPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pager.service */ "./src/app/blog/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPageComponent = /** @class */ (function () {
    function BlogPageComponent(config, pagerService) {
        this.config = config;
        this.pagerService = pagerService;
        this.pageSize = 3;
        this.pager = {};
    }
    BlogPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'blog');
        this.getBlockData('posts');
    };
    BlogPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.blog = data;
            console.log(_this.blog);
        });
    };
    BlogPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.posts = data;
            _this.allItems = _this.posts;
            _this.setPage(1);
            console.log(_this.posts);
        });
    };
    BlogPageComponent.prototype.setPage = function (pageNumber) {
        // create a pager using paging service
        this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
        // current page posts
        this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        console.log(this.pager);
    };
    BlogPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page',
            template: __webpack_require__(/*! ./blog-page.component.html */ "./src/app/blog/blog-page/blog-page.component.html"),
            styles: [__webpack_require__(/*! ./blog-page.component.css */ "./src/app/blog/blog-page/blog-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"], _pager_service__WEBPACK_IMPORTED_MODULE_2__["PagerService"]])
    ], BlogPageComponent);
    return BlogPageComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog-page/blog-page.component */ "./src/app/blog/blog-page/blog-page.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/article.component */ "./src/app/blog/article/article.component.ts");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/blog/article-create/article-create.component.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/blog/article-edit/article-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_2__["BlogPageComponent"] },
    { path: 'article/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"] },
    { path: 'article-edit/:id', component: _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_5__["ArticleEditComponent"] },
    { path: 'article-create', component: _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_4__["ArticleCreateComponent"] }
];
var BlogRoutingModule = /** @class */ (function () {
    function BlogRoutingModule() {
    }
    BlogRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlogRoutingModule);
    return BlogRoutingModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.module.ts":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
/* harmony import */ var _blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-page/blog-page.component */ "./src/app/blog/blog-page/blog-page.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/article.component */ "./src/app/blog/article/article.component.ts");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/blog/article-create/article-create.component.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/blog/article-edit/article-edit.component.ts");
/* harmony import */ var _post_block_post_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-block/post-block.component */ "./src/app/blog/post-block/post-block.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/blog/pagination/pagination.component.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _blog_routing_module__WEBPACK_IMPORTED_MODULE_4__["BlogRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkdownModule"].forRoot({
                    loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    markedOptions: {
                        provide: ngx_markdown__WEBPACK_IMPORTED_MODULE_11__["MarkedOptions"],
                        useValue: {
                            gfm: true,
                            tables: true,
                            breaks: false,
                            pedantic: false,
                            sanitize: false,
                            smartLists: true,
                            smartypants: false,
                        },
                    },
                })
            ],
            declarations: [_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_5__["BlogPageComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"], _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_7__["ArticleCreateComponent"], _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_8__["ArticleEditComponent"], _post_block_post_block_component__WEBPACK_IMPORTED_MODULE_9__["PostBlockComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ }),

/***/ "./src/app/blog/pager.service.ts":
/*!***************************************!*\
  !*** ./src/app/blog/pager.service.ts ***!
  \***************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure that this do not fall out of bounds
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // if more that 10 pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end indexitems
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));
        // create and array of pages
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/blog/pagination/pagination.component.css":
/*!**********************************************************!*\
  !*** ./src/app/blog/pagination/pagination.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination> li{\n    display: inline-block;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    margin-left: -1px;\n    padding-top:10px;\n    padding-left:15px;\n    padding-right:15px;\n    padding-bottom:10px;\n    cursor: pointer;\n}\n.pagination> li.active {    \n    background-color: #005575;\n}\n.pagination> li.disabled {    \n    background-color: #ddd;\n    cursor:default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbj4gbGl7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYWdpbmF0aW9uPiBsaS5hY3RpdmUgeyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NTc1O1xufVxuXG4ucGFnaW5hdGlvbj4gbGkuZGlzYWJsZWQgeyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgIGN1cnNvcjpkZWZhdWx0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog/pagination/pagination.component.html":
/*!***********************************************************!*\
  !*** ./src/app/blog/pagination/pagination.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"pager\" class=\"pagination\">\n    <li [class.disabled]=\"pager.currentPage == 1\">\n      <a (click)=\"setCurrentPage(1)\">First</a>\n    </li>\n    <li [class.disabled]=\"pager.currentPage == 1\">\n      <a (click)=\"setCurrentPage(pager.currentPage - 1)\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [class.active]=\"pager.currentPage == page\">\n        <a (click)=\"setCurrentPage(page)\">{{page}}</a>\n    </li>\n    <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n      <a (click)=\"setCurrentPage(pager.currentPage + 1)\">Next</a>\n    </li>\n    <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n      <a (click)=\"setCurrentPage(pager.totalPages)\">Last</a>\n    </li>\n</ul> "

/***/ }),

/***/ "./src/app/blog/pagination/pagination.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/blog/pagination/pagination.component.ts ***!
  \*********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.setCurrentPage = function (pageNumber) {
        this.setPage.emit(pageNumber);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pager", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "setPage", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/blog/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/blog/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/blog/post-block/post-block.component.css":
/*!**********************************************************!*\
  !*** ./src/app/blog/post-block/post-block.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-block-content:hover {\n    border-color:#d2b356;    \n}\n.primary-color, .featured .post {\n    background-color:#d2b356;    \n}\n.primary-color, .primary-color .section-title, .primary-color .section-subtitle, .featured .post, .featured .post p {\n    color:#fff;    \n}\n.post-block-content {\n  background: #fff;\n  padding: 25px 0 25px 0;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\n  transition: all 0.2s ease-in-out 0s;\n  position: relative;\n  border: 10px solid #fff;\n}\n.post-block ul {\n  list-style: none;\n  margin: 25px 0 25px 0;\n}\n.post-block li {\n  padding: 14px 0;\n  border-bottom: 1px dotted #e1e1e1;\n}\n.post-block li:last-of-type {\n  border:none;\n}\n.post-block h3 {\n  font-size:17px;\n  text-transform:uppercase;\n  padding-bottom:0;\n}\n.post-sub {\n  font-style: italic;\n  color:#ccc;\n  margin:0 0 25px 0;\n}\n.post {\n  background: #f5f5f5;\n  padding: 25px;\n  position: relative;\n}\n.post-featured-image {\n  display: inline-block;\n  font-size: 62px;\n  font-weight: 700;\n  position: relative;\n}\n.post-featured-image span {\n  position: absolute;\n  top: 0;\n  left: -20px;\n  font-size: 22px;\n}\n.post  p {\n  font-style:italic;\n  color:#b4b4b4;\n  line-height:auto;\n  margin:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9wb3N0LWJsb2NrL3Bvc3QtYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsMkNBQTJDO0VBQzNDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9wb3N0LWJsb2NrL3Bvc3QtYmxvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWJsb2NrLWNvbnRlbnQ6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjojZDJiMzU2OyAgICBcbn1cbi5wcmltYXJ5LWNvbG9yLCAuZmVhdHVyZWQgLnBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2QyYjM1NjsgICAgXG59XG4ucHJpbWFyeS1jb2xvciwgLnByaW1hcnktY29sb3IgLnNlY3Rpb24tdGl0bGUsIC5wcmltYXJ5LWNvbG9yIC5zZWN0aW9uLXN1YnRpdGxlLCAuZmVhdHVyZWQgLnBvc3QsIC5mZWF0dXJlZCAucG9zdCBwIHtcbiAgICBjb2xvcjojZmZmOyAgICBcbn1cbi5wb3N0LWJsb2NrLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNXB4IDAgMjVweCAwO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDEwcHggc29saWQgI2ZmZjtcbn1cblxuLnBvc3QtYmxvY2sgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDI1cHggMCAyNXB4IDA7XG59XG5cbi5wb3N0LWJsb2NrIGxpIHtcbiAgcGFkZGluZzogMTRweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNlMWUxZTE7XG59XG5cbi5wb3N0LWJsb2NrIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlcjpub25lO1xufVxuXG4ucG9zdC1ibG9jayBoMyB7XG4gIGZvbnQtc2l6ZToxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gIHBhZGRpbmctYm90dG9tOjA7XG59XG4ucG9zdC1zdWIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiNjY2M7XG4gIG1hcmdpbjowIDAgMjVweCAwO1xufVxuLnBvc3Qge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wb3N0LWZlYXR1cmVkLWltYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDYycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBvc3QtZmVhdHVyZWQtaW1hZ2Ugc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMjBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ucG9zdCAgcCB7XG4gIGZvbnQtc3R5bGU6aXRhbGljO1xuICBjb2xvcjojYjRiNGI0O1xuICBsaW5lLWhlaWdodDphdXRvO1xuICBtYXJnaW46MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/blog/post-block/post-block.component.html":
/*!***********************************************************!*\
  !*** ./src/app/blog/post-block/post-block.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--Post Block-->  \n  <div class=\"post-block-content\">\n      <h3>{{post.title}}</h3>\n      <p class=\"post-sub\">By {{post.author}} | {{post.publishdate | date:'dd-MMM-yyyy'}}</p>\n      <div class=\"post-featured-image\">\n          <img src=\"../../assets/images/gallery-images/{{post.image}}\">\n      </div>\n      <ul>\n      <div markdown [data]=\"post.excert\" id=\"preview\"> </div>      \n      </ul>\n      <a routerLink=\"article/{{post.id}}\" class=\"button\"><i class=\"ion ion-heart\"></i></a>\n      <a routerLink=\"article-edit/{{post.id}}\" class=\"button\"><i class=\"ion ion-edit\"></i></a>\n  </div>\n<!--End Post Block--> "

/***/ }),

/***/ "./src/app/blog/post-block/post-block.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/blog/post-block/post-block.component.ts ***!
  \*********************************************************/
/*! exports provided: PostBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBlockComponent", function() { return PostBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Post */ "./src/app/blog/Post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostBlockComponent = /** @class */ (function () {
    function PostBlockComponent() {
    }
    PostBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Post__WEBPACK_IMPORTED_MODULE_1__["Post"])
    ], PostBlockComponent.prototype, "post", void 0);
    PostBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-block',
            template: __webpack_require__(/*! ./post-block.component.html */ "./src/app/blog/post-block/post-block.component.html"),
            styles: [__webpack_require__(/*! ./post-block.component.css */ "./src/app/blog/post-block/post-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostBlockComponent);
    return PostBlockComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients-page/clients-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/clients/clients-page/clients-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy1wYWdlL2NsaWVudHMtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clients/clients-page/clients-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/clients/clients-page/clients-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "       <!--Clients-->\n       <section id=\"clients\" class=\"scrollto clearfix\">\n          <div class=\"row clearfix\">\n  \n              <div class=\"col-3\" *ngIf=\"clients\">\n  \n                  <div class=\"section-heading\">\n                      <h3>{{clients.tagline}}</h3>\n                      <h2 class=\"section-title\">{{clients.title}}</h2>\n                      <p class=\"section-subtitle\">{{clients.description}}</p>\n                  </div>\n  \n              </div>\n  \n              <div class=\"col-2-3\">\n  \n                  \n                <div *ngFor= \"let company of companies\">\n\n                    <app-companies-block [company]=\"company\"></app-companies-block>\n\n                </div>\n  \n              </div>\n  \n          </div>\n      </section>\n      <!--End of Clients-->"

/***/ }),

/***/ "./src/app/clients/clients-page/clients-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/clients/clients-page/clients-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ClientsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPageComponent", function() { return ClientsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsPageComponent = /** @class */ (function () {
    function ClientsPageComponent(config) {
        this.config = config;
    }
    ClientsPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'clients');
        this.getBlockData('companies');
    };
    ClientsPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.clients = data;
            console.log(_this.clients);
        });
    };
    ClientsPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.companies = data;
            console.log(_this.companies);
        });
    };
    ClientsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients-page',
            template: __webpack_require__(/*! ./clients-page.component.html */ "./src/app/clients/clients-page/clients-page.component.html"),
            styles: [__webpack_require__(/*! ./clients-page.component.css */ "./src/app/clients/clients-page/clients-page.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ClientsPageComponent);
    return ClientsPageComponent;
}());



/***/ }),

/***/ "./src/app/clients/clients-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-page/clients-page.component */ "./src/app/clients/clients-page/clients-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_2__["ClientsPageComponent"]
    }];
var ClientsRoutingModule = /** @class */ (function () {
    function ClientsRoutingModule() {
    }
    ClientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ClientsRoutingModule);
    return ClientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/clients/clients.module.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/clients/clients-routing.module.ts");
/* harmony import */ var _clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-page/clients-page.component */ "./src/app/clients/clients-page/clients-page.component.ts");
/* harmony import */ var _companies_block_companies_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companies-block/companies-block.component */ "./src/app/clients/companies-block/companies-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ClientsModule = /** @class */ (function () {
    function ClientsModule() {
    }
    ClientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _clients_routing_module__WEBPACK_IMPORTED_MODULE_2__["ClientsRoutingModule"]
            ],
            declarations: [_clients_page_clients_page_component__WEBPACK_IMPORTED_MODULE_3__["ClientsPageComponent"], _companies_block_companies_block_component__WEBPACK_IMPORTED_MODULE_4__["CompaniesBlockComponent"]]
        })
    ], ClientsModule);
    return ClientsModule;
}());



/***/ }),

/***/ "./src/app/clients/companies-block/companies-block.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/clients/companies-block/companies-block.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY29tcGFuaWVzLWJsb2NrL2NvbXBhbmllcy1ibG9jay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clients/companies-block/companies-block.component.html":
/*!************************************************************************!*\
  !*** ./src/app/clients/companies-block/companies-block.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"{{company.weblink}}\" class=\"col-3\" >\n    <img src=\"assets/images/company-images/{{company.logo}}\" alt=\"{{company.name}}\"/>\n    <div class=\"client-overlay\"><span>{{company.name}}</span></div>\n</a>"

/***/ }),

/***/ "./src/app/clients/companies-block/companies-block.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/clients/companies-block/companies-block.component.ts ***!
  \**********************************************************************/
/*! exports provided: CompaniesBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesBlockComponent", function() { return CompaniesBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompaniesBlockComponent = /** @class */ (function () {
    function CompaniesBlockComponent() {
    }
    CompaniesBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompaniesBlockComponent.prototype, "company", void 0);
    CompaniesBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies-block',
            template: __webpack_require__(/*! ./companies-block.component.html */ "./src/app/clients/companies-block/companies-block.component.html"),
            styles: [__webpack_require__(/*! ./companies-block.component.css */ "./src/app/clients/companies-block/companies-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompaniesBlockComponent);
    return CompaniesBlockComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_1__["configuration"];
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].emailUrl;
        this.emailUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].emailUrl;
    }
    ConfigService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService.prototype.sendMessage = function (formData) {
        return this.http.post("" + this.emailUrl, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (message) { return console.log(message); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Sending Message', [])));
    };
    ConfigService.prototype.getPosts = function () {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) { return console.log(post); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Get Posts', [])));
    };
    ConfigService.prototype.getSettings = function (database, id) {
        var uid = id || null;
        var url;
        if (uid !== null) {
            url = "api/" + database + "/" + id;
        }
        else {
            url = "api/" + database;
        }
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (setting) { return console.log(setting); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(" get for " + database, [])));
    };
    ConfigService.prototype.updatePost = function (formData) {
        return this.http.put("" + this.apiUrl, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) { return console.log(post); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Update Post', [])));
    };
    ConfigService.prototype.addPost = function (formData) {
        return this.http.post("" + this.apiUrl, formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) { return console.log(post); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Add New Post', [])));
    };
    ConfigService.prototype.getPostByID = function (id) {
        return this.http.get(this.apiUrl + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (post) { return console.log(post); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Get Post by ID', [])));
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {
    header: {
        heading: 'My website',
        headingtext: 'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
        buttontext: 'do some action!',
        buttonlink: '\home'
    },
    intro: {
        tagline: 'SUCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        features: [
            { icon: 'html5', title: 'HTML5 &amp; CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
            { icon: 'bolt', title: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
            { icon: 'tablet', title: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
            { icon: 'rocket', title: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: '',
        feedbacks: [
            { name: 'John Doe', userimage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC' },
            { name: 'Roslyn Doe', userimage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ' },
            { name: 'Thomas Doe', userimage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR' },
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        companies: [
            { name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png' },
            { name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png' },
            { name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png' },
            { name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png' },
            { name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png' },
            { name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png' },
            { name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png' },
            { name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png' },
            { name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png' },
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plans: [
            { title: 'PERSONAL', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '₹',
                downloads: '5 Downloads', extensions: '2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates: '1 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            },
            { title: 'STUDENT', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '₹',
                downloads: '15 Downloads', extensions: '5 Extensions', tutorials: 'Tutorials with files', support: 'Forum Support', updates: '2 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: true
            },
            { title: 'BUSINESS', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '₹',
                downloads: 'Unlimited Downloads', extensions: 'Unlimited Downloads', tutorials: 'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            }
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },
    footer: {
        copyrighttext: 'Made with ❤ by',
        developer: 'AdMISTER STUDIO',
        developerlink: 'http://admister.in',
    },
    socialsites: [
        { title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook' },
        { title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus' },
        { title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter' },
        { title: 'Instagram', target: '_blank', username: 'jagmohan', icon: 'instagram' },
        { title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance' },
    ],
    blog: {
        tagline: 'MY BLOG',
        title: 'Thoughts become things..'
    }
};


/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{ position: fixed; bottom: 10px; right: 10px;}\n.container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sZUFBZSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUM7QUFDbEQ7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsc0VBQXNFO0FBQzFFO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysc0VBQXNFO0FBQzFFO0FBRUEsbUJBQW1CLGtCQUFrQjtJQUNqQyxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHsgcG9zaXRpb246IGZpeGVkOyBib3R0b206IDEwcHg7IHJpZ2h0OiAxMHB4O31cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIFxufVxuc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLnBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5wYW5lbC1ib2R5e1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY2VudGVyLWZvcm0ge1xuICAgIHdpZHRoOiAzMTVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5wYW5lbC1ib2R5e1xuXG59XG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwZW07XG59XG4uZm9ybS1ncm91cHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgcGFkZGluZy1sZWZ0OiA0MnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwICNlNTFjMjM7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuXG4uZm9ybS1uYW1lc3tcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDQycHg7ICovXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2U1MWMyMztcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG59XG5cbi5mb3JtLWNvbnRyb2wtaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuODQ2O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5idG4tYmxvY2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5idG4tc3VjY2Vzc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICAgIGNvbG9yOiNmZmY7XG59XG4uc2lnbnVwLW9yLXNlcGFyYXRvcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uc2lnbnVwLW9yLXNlcGFyYXRvciAudGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNpZ251cC1vci1zZXBhcmF0b3IgaHIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAtMTZweCBhdXRvIDEwcHggYXV0bztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcbn1cblxuW3R5cGU9dGV4dF0uZm9ybS1jb250cm9sLCBbdHlwZT10ZXh0XS5mb3JtLW5hbWVzLCBbdHlwZT1wYXNzd29yZF0uZm9ybS1jb250cm9sIHtcbiAgICAvKiBwYWRkaW5nOiAwOyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNkZGRkZGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5bY2xhc3NePSdpb24tJ10ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row clearfix\">\n  \n      <div class=\"container\">\n  \n        <div class=\"center-form panel\">\n          <div class=\"panel-body\">\n              <a (click)= cancel() ><i class=\"ion-close\"></i></a>\n          <h4 class=\"text-center\"><i class=\"ion-email\"></i> Contact Us</h4>\n  \n          <form [formGroup]=\"contactusForm\" (ngSubmit)=\"sendMessage(contactusForm.value)\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"Last name\">\n                  <span class=\"ion-person form-control-icon\"></span> \n              </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n              <span class=\"ion-at form-control-icon\"></span> \n            </div>\n            <div class=\"form-group\">\n                <textarea rows=\"10\" cols=\"20\" class=\"form-control input-lg\" formControlName=\"message\" name=\"message\" placeholder=\"message\"></textarea>\n                <span class=\"ion-edit form-control-icon\"></span> \n            </div>\n  \n            <button *ngIf=\"!sending\" type=\"submit\" class=\"btn btn-block btn-success\"> Send Message</button>\n     \n          </form>\n  \n        </div>\n        </div>\n  \n      </div>\n  \n    </div>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(fb, router, contactService) {
        this.fb = fb;
        this.router = router;
        this.contactService = contactService;
    }
    ContactusComponent.prototype.ngOnInit = function () {
        this.contactusForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.sending = false;
    };
    ContactusComponent.prototype.sendMessage = function (formData) {
        var _this = this;
        this.sending = true;
        console.log(formData);
        this.contactService.sendMessage(formData).subscribe(function (data) { return console.log(data); });
        setTimeout(function () {
            _this.sending = false;
            _this.cancelForm();
        }, 1000);
    };
    ContactusComponent.prototype.cancel = function () {
        this.cancelForm();
    };
    ContactusComponent.prototype.cancelForm = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer id=\"landing-footer\" class=\"clearfix\">\n  <div class=\"row clearfix\">\n    <p id=\"copyright\" class=\"col-2\">\n      {{ footer.copyrighttext }}\n      <a> Remon Lawendi </a>\n    </p>\n\n    <!--Social Icons in Footer-->\n    <div class=\"col-2\" style=\"text-align: right;\">\n      <app-social></app-social>\n    </div>\n    <!--End of Social Icons in Footer-->\n  </div>\n</footer>\n<!--End of Footer-->\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(config) {
        this.config = config;
        this.footer = {};
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.footer = this.getFooter();
    };
    FooterComponent.prototype.getFooter = function () {
        return this.config.getConfig().footer;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-page/gallery-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS1wYWdlL2dhbGxlcnktcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery-page/gallery-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!--Introduction-->\n  <section id=\"gallery\" class=\"introduction scrollto text-center\" *ngIf=\"gallery\">\n\n  <div class=\"row clearfix\">\n\n    \n        <div class=\"section-heading\">\n              <h3>{{gallery.tagline}}</h3>\n              <h2 class=\"section-title\">{{gallery.title}}</h2>\n              <p class=\"section-subtitle\">{{gallery.description}}</p>\n          </div>\n\n        <aside id=\"gallery\" class=\"row text-center scrollto clearfix\" data-featherlight-gallery\n          data-featherlight-filter=\"a\">\n          <div *ngFor=\"let image of images\">\n            <app-image-block [image]=\"image\"></app-image-block>\n          </div>\n        </aside>\n\n</div>\n\n</section>\n<!--End of Introduction-->\n"

/***/ }),

/***/ "./src/app/gallery/gallery-page/gallery-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/gallery/gallery-page/gallery-page.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent(config) {
        this.config = config;
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'gallery');
        this.getBlockData('images');
    };
    GalleryPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.gallery = data;
            console.log(_this.gallery);
        });
    };
    GalleryPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.images = data;
            console.log(_this.images);
        });
    };
    GalleryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-page',
            template: __webpack_require__(/*! ./gallery-page.component.html */ "./src/app/gallery/gallery-page/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.css */ "./src/app/gallery/gallery-page/gallery-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/gallery/gallery-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutingModule", function() { return GalleryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery/gallery-page/gallery-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '',
        component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_2__["GalleryPageComponent"] }
];
var GalleryRoutingModule = /** @class */ (function () {
    function GalleryRoutingModule() {
    }
    GalleryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GalleryRoutingModule);
    return GalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-routing.module */ "./src/app/gallery/gallery-routing.module.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/gallery/gallery-page/gallery-page.component.ts");
/* harmony import */ var _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-block/image-block.component */ "./src/app/gallery/image-block/image-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _gallery_routing_module__WEBPACK_IMPORTED_MODULE_2__["GalleryRoutingModule"]
            ],
            declarations: [_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPageComponent"], _image_block_image_block_component__WEBPACK_IMPORTED_MODULE_4__["ImageBlockComponent"]]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "./src/app/gallery/image-block/image-block.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvaW1hZ2UtYmxvY2svaW1hZ2UtYmxvY2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gallery/image-block/image-block.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"assets/images/gallery-images/{{image.name}}\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\ndata-wow-delay=\"0.1s\">\n<img src=\"assets/images/gallery-images/{{image.name}}\" alt=\"Landing Page\"/>\n</a>"

/***/ }),

/***/ "./src/app/gallery/image-block/image-block.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gallery/image-block/image-block.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlockComponent", function() { return ImageBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageBlockComponent = /** @class */ (function () {
    function ImageBlockComponent() {
    }
    ImageBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageBlockComponent.prototype, "image", void 0);
    ImageBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-block',
            template: __webpack_require__(/*! ./image-block.component.html */ "./src/app/gallery/image-block/image-block.component.html"),
            styles: [__webpack_require__(/*! ./image-block.component.css */ "./src/app/gallery/image-block/image-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageBlockComponent);
    return ImageBlockComponent;
}());



/***/ }),

/***/ "./src/app/home/home-page/home-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"header\">\n<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\"\n[style.background]=\"'url(../assets/images/banner-images/'+ header.image +' ) no-repeat center top;'\"\n>\n  <!--Banner Content-->\n  <div id=\"banner-content\" class=\"row clearfix\">\n\n      <div class=\"col-38\">\n\n          <div class=\"section-heading\">\n              <h1>{{header.heading}}</h1>\n              <h2>{{header.headingtext}}</h2>\n          </div>\n\n          <!--Call to Action-->\n          <a href=\"{{header.buttonlink}}\" class=\"button\">{{header.buttontext}}</a>\n          <!--End Call to Action-->\n\n      </div>\n\n  </div><!--End of Row-->\n</header> \n</div>"

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(config) {
        this.config = config;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'header');
    };
    HomePageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.header = data;
            console.log(_this.header);
        });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            { id: 11, firstName: 'rahul', lastName: 'gupta', email: 'test123@gmail.com', password: 'welcome',
                bio: 'this is my bio', role: 'admin', image: 'user-1.jpg' },
            { id: 12, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome',
                bio: 'i am a subscriber', role: 'subscriber', image: 'user-2.jpg' }
        ];
        var pages = [
            { id: 'intro',
                tagline: 'SUCESS',
                title: 'How We Help You To Sell Your Product',
                description: 'This is introduction!',
            },
            { id: 'clients',
                tagline: 'TRUST',
                title: 'Companies who use our services',
                description: 'Our clients',
            },
            { id: 'services',
                tagline: 'BELIEVING',
                title: 'Focusing On What Matters Most',
                description: 'Service Section'
            },
            { id: 'testimonials',
                tagline: 'FEEDBACK',
                title: 'What our customers are saying',
                description: 'This is what our customer\'s feel about us',
            },
            { id: 'pricing',
                tagline: 'YOUR CHOICE',
                title: 'We have the right package for you',
                description: '',
            },
            { id: 'gallery',
                tagline: 'We ❤ Doing amazing things',
                title: 'AdMISTER STUDIO',
                description: 'We are and amazing company',
            },
            { id: 'footer',
                copyrighttext: 'Made with ❤ by',
                developer: 'AdMISTER STUDIO',
                developerlink: 'http://admister.in',
            },
            { id: 'blog',
                tagline: 'My thoughts',
                title: 'Thoughts become things',
                description: 'We are and amazing company',
            },
            { id: 'header',
                heading: 'AdMister Studios',
                headingtext: 'This website was created using Angular 6',
                buttontext: 'do some action!',
                buttonlink: '/home',
                image: 'banner-image-1.jpg'
            },
        ];
        var features = [
            { id: 1, icon: 'html5', title: 'HTML5 & CSS3',
                description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
            { id: 2, icon: 'bolt', title: 'Easy to Use',
                description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
            { id: 3, icon: 'tablet', title: 'Fully Responsive',
                description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
            { id: 4, icon: 'rocket', title: 'Parallax Effect',
                description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
        ];
        var images = [
            { id: 1, name: 'gallery-image-1.jpg' },
            { id: 2, name: 'gallery-image-2.jpg' },
            { id: 3, name: 'gallery-image-3.jpg' },
            { id: 4, name: 'gallery-image-4.jpg' },
            { id: 5, name: 'gallery-image-5.jpg' },
            { id: 6, name: 'gallery-image-6.jpg' },
        ];
        var menu = [
            { id: 1, title: 'Home', link: '/home', outlet: '' },
            { id: 2, title: 'About', link: '/about', outlet: '' },
            { id: 3, title: 'Services', link: '/services', outlet: '' },
            { id: 4, title: 'Gallery', link: '/gallery', outlet: '' },
            { id: 5, title: 'Testimonials', link: '/testimonials', outlet: '' },
            { id: 6, title: 'Clients', link: '/clients', outlet: '' },
            { id: 7, title: 'Pricing', link: '/pricing', outlet: '' },
            { id: 8, title: 'Blog', link: '/blog', outlet: '' },
            { id: 9, title: 'Contact Us', link: 'contactus', outlet: 'popup' },
            { id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup' },
        ];
        var posts = [
            { id: 1, title: 'The first Article',
                author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 2, title: 'The second Article',
                author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 3, title: 'The third Article',
                author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 4, title: 'The fourth Article',
                author: 'AD', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 5, title: 'The fifth Article',
                author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 6, title: 'The sixth Article',
                author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 7, title: 'The seven Article',
                author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 8, title: 'The eight Article',
                author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 9, title: 'The nine Article',
                author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 10, title: 'The ten Article',
                author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 11, title: 'The eleven Article',
                author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
        ];
        var companies = [
            { id: 1, name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png' },
            { id: 2, name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png' },
            { id: 3, name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png' },
            { id: 4, name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png' },
            { id: 5, name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png' },
            { id: 6, name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png' },
            { id: 7, name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png' },
            { id: 8, name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png' },
            { id: 9, name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png' },
        ];
        var feedbacks = [
            { id: 1, name: 'John Doe', userimage: 'user-1.jpg',
                comments: 'This compamny doing excellent Job',
                company: 'ABC' },
            { id: 2, name: 'Roslyn Doe', userimage: 'user-2.jpg',
                comments: 'People seem to love the work they have done',
                company: 'XYZ' },
            { id: 3, name: 'Thomas Doe', userimage: 'user-3.jpg',
                comments: 'This work is great, i reall loved working with them',
                company: 'PQR' },
        ];
        var plans = [
            { id: 1, title: 'PERSONAL', subtitle: 'The standard version',
                description: 'Best Plan to buy', price: '19', currency: '₹',
                downloads: '5 Downloads', extensions: '2 Extensions',
                tutorials: 'Tutorials', support: 'Forum Support', updates: '1 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            },
            { id: 2, title: 'STUDENT', subtitle: 'Most popular choice',
                description: 'Best Plan for students', price: '29', currency: '₹',
                downloads: '15 Downloads', extensions: '5 Extensions',
                tutorials: 'Tutorials with files', support: 'Forum Support', updates: '2 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: true
            },
            { id: 3, title: 'BUSINESS', subtitle: 'For the whole team',
                description: 'Best plan for business', price: '49', currency: '₹',
                downloads: 'Unlimited Downloads', extensions: 'Unlimited Downloads',
                tutorials: 'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            }
        ];
        var websites = [
            { id: 1, link: 'https://facebook.com/', title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook' },
            { id: 2, link: 'https://googleplus.com/', title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus' },
            { id: 3, link: 'https://twitter.com/', title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter' },
            { id: 4, link: 'https://instagram.com/', title: 'Instagram', target: '_blank', username: 'admister_in', icon: 'instagram' },
            { id: 5, link: 'https://behance.com/', title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance' },
        ];
        return { users: users, posts: posts, menu: menu, pages: pages, features: features, images: images, companies: companies, feedbacks: feedbacks, plans: plans, websites: websites };
    };
    InMemoryDataService.prototype.getToken = function (user) {
        return 'this is a token';
    };
    InMemoryDataService.prototype.get = function (reqInfo) {
        if (reqInfo.collectionName === 'posts') {
            return this.getArticles(reqInfo);
        }
        return undefined;
    };
    InMemoryDataService.prototype.getArticles = function (reqInfo) {
        return reqInfo.utils.createResponse$(function () {
            var dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
            var collection = reqInfo.collection;
            var id = reqInfo.id;
            var data = id === undefined ? collection : reqInfo.utils.findById(collection, id);
            console.log(data);
            var options = data ?
                {
                    body: dataEncapsulation ? { data: data } : data,
                    status: 200
                } :
                {
                    body: { error: "Post not found" },
                    status: 404
                };
            options.statusText = options.status === 200 ? 'ok' : 'Not Found';
            options.headers = reqInfo.headers;
            options.url = reqInfo.url;
            return options;
        });
    };
    InMemoryDataService.prototype.post = function (reqInfo) {
        var _this = this;
        if (reqInfo.id === 'login') {
            console.log('from login');
            return reqInfo.utils.createResponse$(function () {
                var dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
                var users = reqInfo.collection.find(function (user) {
                    return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
                });
                var responseBody = {};
                if (users) {
                    responseBody = {
                        id: users.id,
                        firstName: users.firstName,
                        lastName: users.lastName,
                        bio: users.bio,
                        image: users.image,
                        email: users.email,
                        token: _this.getToken(users)
                    };
                }
                var options = responseBody ?
                    {
                        body: dataEncapsulation ? { responseBody: responseBody } : responseBody,
                        status: 200
                    } :
                    {
                        body: { error: "'User' with email='" + reqInfo.req['body'].email + "' not found" },
                        status: 404
                    };
                options.statusText = options.status === 200 ? 'ok' : 'Not Found';
                options.headers = reqInfo.headers;
                options.url = reqInfo.url;
                return options;
            });
        }
        else if (reqInfo.id === 'signup') {
            reqInfo.id = null;
            console.log(' from signup');
        }
    };
    InMemoryDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 10%;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=password].form-control {\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7SUFDWCxzRUFBc0U7QUFDMUU7QUFFQSxtQkFBbUIsa0JBQWtCO0lBQ2pDLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgXG59XG5zZWN0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnBhbmVsLWJvZHl7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jZW50ZXItZm9ybSB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnBhbmVsLWJvZHl7XG5cbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2U1MWMyMztcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG59XG5cbi5mb3JtLWNvbnRyb2wtaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuODQ2O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5idG4tYmxvY2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXN1Y2Nlc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgICBjb2xvcjojZmZmO1xufVxuLnNpZ251cC1vci1zZXBhcmF0b3J7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjlweDtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNpZ251cC1vci1zZXBhcmF0b3IgLnRleHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zaWdudXAtb3Itc2VwYXJhdG9yIGhyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogLTE2cHggYXV0byAxMHB4IGF1dG87XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2UwZTA7XG59XG5cblt0eXBlPXRleHRdLmZvcm0tY29udHJvbCwgW3R5cGU9cGFzc3dvcmRdLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbltjbGFzc149J2lvbi0nXSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n  <div class=\"row clearfix\">\n\n    <div class=\"container\">\n\n      <div class=\"center-form panel\">\n        <div class=\"panel-body\">\n        <h4 class=\"text-center\"><i class=\"ion-log-in\"></i> Login</h4>\n\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control input-lg\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n            <span class=\"ion-at form-control-icon\"></span> \n          </div>\n          <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control input-lg\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n              <span class=\"ion-key form-control-icon\"></span> \n          </div>\n\n          <button type=\"submit\" class=\"btn btn-block btn-success\"> Login</button>\n\n          <p class=\"text-center\">\n            <small>Don't have an account yet? <a routerLink=\"/signup\">Sign up</a></small>\n\n          </p>\n\n        </form>\n\n      </div>\n      </div>\n\n    </div>\n\n  </div>\n<section>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, auth, route, router) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function (formData) {
        var _this = this;
        return this.auth.login(formData).subscribe(function (user) {
            console.log(user);
            _this.router.navigate([_this.returnUrl]);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"nav-collapse nav-solid\">\n        <div class=\"row clearfix\">\n            <div class=\"col-1\">\n\n                <!--Logo-->\n                <div id=\"logo\">\n\n                    <!--Logo that is shown on the banner-->\n                    <img src=\"assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\"/>\n                    <!--End of Banner Logo-->\n\n                    <!--The Logo that is shown on the sticky Navigation Bar-->\n                    <img src=\"assets/images/logo-2.png\" id=\"navigation-logo\" alt=\"Landing Page\"/>\n                    <!--End of Navigation Logo-->\n\n                </div>\n                <!--End of Logo-->                \n\n                <aside>   \n                    <app-user-profile-icon [profileImage]=\"profileImage\"></app-user-profile-icon>\n                    <app-social></app-social>\n                    \n                </aside>\n\n\n                      <!--Main Navigation-->\n                <nav id=\"nav-main\">\n                    <app-navmenu [menu]=\"menu\" [menuOpen]=\"true\"></app-navmenu>\n                    \n                </nav>\n        <!--End of Main Navigation-->\n\n                <div id=\"nav-trigger\"><span [class.open]=\"menuOpen == true\" (click)=\"toggleMenu(!menuOpen)\"></span></div>\n                <nav id=\"nav-mobile\">\n                    <app-navmenu [menu]=\"menu\" *ngIf=\"menuOpen === true\" \n                    (menuStatus)=\"toggleMenu($event)\"\n                    [menuOpen]=\"menuOpen\"></app-navmenu>\n\n                </nav>\n\n            </div>\n        </div>\n    </div><!--End of Header-->"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(location, auth, config) {
        this.location = location;
        this.auth = auth;
        this.config = config;
        this.database = 'menu';
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.menuOpen = false;
        this.getMenu();
        this.isLoggedIn = this.auth.isloggedIn();
        this.getUser();
    };
    NavigationComponent.prototype.ngAfterContentChecked = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.auth.isloggedIn()).subscribe(function () {
            _this.getUser();
        });
    };
    NavigationComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavigationComponent.prototype.toggleMenu = function (status) {
        this.menuOpen = status;
    };
    NavigationComponent.prototype.getMenu = function () {
        var _this = this;
        this.config.getSettings(this.database).subscribe(function (setting) {
            _this.menu = setting;
            console.log(setting);
        });
    };
    NavigationComponent.prototype.getUser = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        if (this.user) {
            this.profileImage = this.user.image;
        }
        else {
            this.profileImage = 'default-user.jpg';
        }
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/navmenu/navmenu.component.css":
/*!***********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.html":
/*!************************************************!*\
  !*** ./src/app/navmenu/navmenu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul [class.expanded]=\"menuOpen === true\">\n  <li *ngFor=\"let menuItem of menu\">\n    <div *ngIf=\"menuItem.outlet === ''; then thenBlock; else elseBlock \" ></div>\n\n    <ng-template #thenBlock>\n      <a routerLink=\"{{menuItem.link}}\" (click)=\"toggleMenu($event)\"\n      routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">{{menuItem.title}}</a>\n    </ng-template>\n    \n    <ng-template #elseBlock>\n        <a [routerLink] = \"[{outlets: {popup: [menuItem.link] }}]\" (click)=\"toggleMenu($event)\"\n        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">{{menuItem.title}}</a>\n      </ng-template>\n\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/navmenu/navmenu.component.ts ***!
  \**********************************************/
/*! exports provided: NavmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavmenuComponent", function() { return NavmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent() {
        this.menuStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavmenuComponent.prototype.toggleMenu = function () {
        this.menuStatus.emit(!this.menuOpen);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavmenuComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavmenuComponent.prototype, "menuOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NavmenuComponent.prototype, "menuStatus", void 0);
    NavmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navmenu',
            template: __webpack_require__(/*! ./navmenu.component.html */ "./src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__(/*! ./navmenu.component.css */ "./src/app/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavmenuComponent);
    return NavmenuComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound-page/notfound-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-text {\n\n    font-size: 15em;\n}.big-text {\n\n    font-size: 15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQtcGFnZS9ub3Rmb3VuZC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtBQUNuQixDQUFDOztJQUVHLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ub3Rmb3VuZC9ub3Rmb3VuZC1wYWdlL25vdGZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWctdGV4dCB7XG5cbiAgICBmb250LXNpemU6IDE1ZW07XG59LmJpZy10ZXh0IHtcblxuICAgIGZvbnQtc2l6ZTogMTVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/notfound/notfound-page/notfound-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <!--404 section-->\n    <section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n      <div class=\"row clearfix\">\n        <h1 class=\"big-text\">\n          404\n        </h1>\n        <h2> Nothing Found Here!! try our <a routerLink=\"/home\">Home Page</a></h2>\n      </div>\n\n  </section>"

/***/ }),

/***/ "./src/app/notfound/notfound-page/notfound-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/notfound/notfound-page/notfound-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotfoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundPageComponent", function() { return NotfoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundPageComponent = /** @class */ (function () {
    function NotfoundPageComponent() {
    }
    NotfoundPageComponent.prototype.ngOnInit = function () {
    };
    NotfoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound-page',
            template: __webpack_require__(/*! ./notfound-page.component.html */ "./src/app/notfound/notfound-page/notfound-page.component.html"),
            styles: [__webpack_require__(/*! ./notfound-page.component.css */ "./src/app/notfound/notfound-page/notfound-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundPageComponent);
    return NotfoundPageComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/notfound/notfound-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NotfoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundRoutingModule", function() { return NotfoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ "./src/app/notfound/notfound-page/notfound-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundPageComponent"]
    }];
var NotfoundRoutingModule = /** @class */ (function () {
    function NotfoundRoutingModule() {
    }
    NotfoundRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NotfoundRoutingModule);
    return NotfoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.module.ts":
/*!*********************************************!*\
  !*** ./src/app/notfound/notfound.module.ts ***!
  \*********************************************/
/*! exports provided: NotfoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundModule", function() { return NotfoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _notfound_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound-routing.module */ "./src/app/notfound/notfound-routing.module.ts");
/* harmony import */ var _notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound-page/notfound-page.component */ "./src/app/notfound/notfound-page/notfound-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotfoundModule = /** @class */ (function () {
    function NotfoundModule() {
    }
    NotfoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _notfound_routing_module__WEBPACK_IMPORTED_MODULE_2__["NotfoundRoutingModule"]
            ],
            declarations: [_notfound_page_notfound_page_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundPageComponent"]]
        })
    ], NotfoundModule);
    return NotfoundModule;
}());



/***/ }),

/***/ "./src/app/pricing/pricing-block/pricing-block.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pricing/pricing-block/pricing-block.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy1ibG9jay9wcmljaW5nLWJsb2NrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pricing/pricing-block/pricing-block.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pricing/pricing-block/pricing-block.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Pricing Block-->\n<div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\"  [class.featured]=\"plan.featured\">\n    <div class=\"pricing-block-content\">\n        <h3>{{plan.title}}</h3>\n        <p class=\"pricing-sub\">{{plan.subtitle}}</p>\n        <div class=\"pricing\">\n            <div class=\"price\"><span>{{plan.currency}}</span>{{plan.price}}</div>\n            <p>{{plan.description}}</p>\n        </div>\n        <ul>\n            <li>{{plan.downloads}}</li>\n            <li>{{plan.extensions}}</li>\n            <li>{{plan.tutorials}}</li>\n            <li>{{plan.support}}</li>\n            <li>{{plan.updates}}</li>\n        </ul>\n        <a href=\"{{plan.buttonlink}}\" class=\"button\">{{plan.buttontext}}</a>\n    </div>\n</div>\n<!--End Pricing Block--> "

/***/ }),

/***/ "./src/app/pricing/pricing-block/pricing-block.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pricing/pricing-block/pricing-block.component.ts ***!
  \******************************************************************/
/*! exports provided: PricingBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingBlockComponent", function() { return PricingBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingBlockComponent = /** @class */ (function () {
    function PricingBlockComponent() {
    }
    PricingBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PricingBlockComponent.prototype, "plan", void 0);
    PricingBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing-block',
            template: __webpack_require__(/*! ./pricing-block.component.html */ "./src/app/pricing/pricing-block/pricing-block.component.html"),
            styles: [__webpack_require__(/*! ./pricing-block.component.css */ "./src/app/pricing/pricing-block/pricing-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingBlockComponent);
    return PricingBlockComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing-page/pricing-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pricing/pricing-page/pricing-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy1wYWdlL3ByaWNpbmctcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pricing/pricing-page/pricing-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pricing/pricing-page/pricing-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "       <!--Pricing Tables-->\n       <section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n          <div class=\"row clearfix\">\n  \n              <div class=\"section-heading\" *ngIf=\"pricing\">\n                  <h3>{{pricing.tagline}}</h3>\n                  <h2 class=\"section-title\">{{pricing.title}}</h2>\n              </div>\n  \n              <!--Pricing Block-->\n              <div *ngFor=\"let plan of plans\">\n                <app-pricing-block [plan]=\"plan\"></app-pricing-block>\n\n              </div>\n              <!--End Pricing Block--> \n  \n          </div>\n      </section>\n      <!--End of Pricing Tables-->"

/***/ }),

/***/ "./src/app/pricing/pricing-page/pricing-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pricing/pricing-page/pricing-page.component.ts ***!
  \****************************************************************/
/*! exports provided: PricingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPageComponent", function() { return PricingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PricingPageComponent = /** @class */ (function () {
    function PricingPageComponent(config) {
        this.config = config;
    }
    PricingPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'pricing');
        this.getBlockData('plans');
    };
    PricingPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.pricing = data;
            console.log(_this.pricing);
        });
    };
    PricingPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.plans = data;
            console.log(_this.plans);
        });
    };
    PricingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing-page',
            template: __webpack_require__(/*! ./pricing-page.component.html */ "./src/app/pricing/pricing-page/pricing-page.component.html"),
            styles: [__webpack_require__(/*! ./pricing-page.component.css */ "./src/app/pricing/pricing-page/pricing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], PricingPageComponent);
    return PricingPageComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pricing/pricing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PricingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingRoutingModule", function() { return PricingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing-page/pricing-page.component */ "./src/app/pricing/pricing-page/pricing-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_2__["PricingPageComponent"]
    }];
var PricingRoutingModule = /** @class */ (function () {
    function PricingRoutingModule() {
    }
    PricingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PricingRoutingModule);
    return PricingRoutingModule;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pricing/pricing.module.ts ***!
  \*******************************************/
/*! exports provided: PricingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingModule", function() { return PricingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing-routing.module */ "./src/app/pricing/pricing-routing.module.ts");
/* harmony import */ var _pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pricing-page/pricing-page.component */ "./src/app/pricing/pricing-page/pricing-page.component.ts");
/* harmony import */ var _pricing_block_pricing_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pricing-block/pricing-block.component */ "./src/app/pricing/pricing-block/pricing-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PricingModule = /** @class */ (function () {
    function PricingModule() {
    }
    PricingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pricing_routing_module__WEBPACK_IMPORTED_MODULE_2__["PricingRoutingModule"]
            ],
            declarations: [_pricing_page_pricing_page_component__WEBPACK_IMPORTED_MODULE_3__["PricingPageComponent"], _pricing_block_pricing_block_component__WEBPACK_IMPORTED_MODULE_4__["PricingBlockComponent"]]
        })
    ], PricingModule);
    return PricingModule;
}());



/***/ }),

/***/ "./src/app/routegaurd.service.ts":
/*!***************************************!*\
  !*** ./src/app/routegaurd.service.ts ***!
  \***************************************/
/*! exports provided: RoutegaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutegaurdService", function() { return RoutegaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutegaurdService = /** @class */ (function () {
    function RoutegaurdService(router) {
        this.router = router;
    }
    RoutegaurdService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    RoutegaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoutegaurdService);
    return RoutegaurdService;
}());



/***/ }),

/***/ "./src/app/services/services-page/services-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/services/services-page/services-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLXBhZ2Uvc2VydmljZXMtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/services/services-page/services-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/services/services-page/services-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <!--Content Section-->\n        <div id=\"services\" class=\"scrollto clearfix\" *ngIf=\"services\">\n\n          <div class=\"row no-padding-bottom clearfix\">\n\n\n              <!--Content Left Side-->\n              <div class=\"col-3\">\n                  <!--User Testimonial-->\n                  <blockquote class=\"testimonial text-right bigtest\">\n                      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                          labore\n                          et dolore magna aliqua</q>\n                      <footer>— John Doe, Happy Customer</footer>\n                  </blockquote>\n                  <!-- End of Testimonial-->\n\n              </div>\n              <!--End Content Left Side-->\n\n              <!--Content of the Right Side-->\n              <div class=\"col-3\">\n                  <div class=\"section-heading\">\n                      <h3>{{services.tagline}}</h3>\n                      <h2 class=\"section-title\">{{services.title}}</h2>\n                      <p class=\"section-subtitle\">{{services.description}}</p>\n                  </div>\n                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n                      dicta sunt explicabo.\n                  </p>\n                  <p>\n                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!\n                  </p>\n                  <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n                  <a href=\"#\" data-videoid=\"UYJ5IjBRlW8\" data-videosite=\"youtube\" class=\"button video link-lightbox\">\n                      WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                  </a>\n              </div>\n              <!--End Content Right Side-->\n\n              <div class=\"col-3\">\n                  <img src=\"assets/images/dancer.jpg\" alt=\"Dancer\"/>\n              </div>\n\n          </div>\n\n\n      </div>\n      <!--End of Content Section-->"

/***/ }),

/***/ "./src/app/services/services-page/services-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/services-page/services-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ServicesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageComponent", function() { return ServicesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesPageComponent = /** @class */ (function () {
    function ServicesPageComponent(config) {
        this.config = config;
    }
    ServicesPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'services');
    };
    ServicesPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.services = data;
            console.log(_this.services);
        });
    };
    ServicesPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-page',
            template: __webpack_require__(/*! ./services-page.component.html */ "./src/app/services/services-page/services-page.component.html"),
            styles: [__webpack_require__(/*! ./services-page.component.css */ "./src/app/services/services-page/services-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], ServicesPageComponent);
    return ServicesPageComponent;
}());



/***/ }),

/***/ "./src/app/services/services-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/services-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function() { return ServicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_services_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-page/services-page.component */ "./src/app/services/services-page/services-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '',
        component: _services_page_services_page_component__WEBPACK_IMPORTED_MODULE_2__["ServicesPageComponent"]
    }
];
var ServicesRoutingModule = /** @class */ (function () {
    function ServicesRoutingModule() {
    }
    ServicesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ServicesRoutingModule);
    return ServicesRoutingModule;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-routing.module */ "./src/app/services/services-routing.module.ts");
/* harmony import */ var _services_page_services_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services-page/services-page.component */ "./src/app/services/services-page/services-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"]
            ],
            declarations: [_services_page_services_page_component__WEBPACK_IMPORTED_MODULE_3__["ServicesPageComponent"]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.panel-body{\n\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLHNFQUFzRTtBQUMxRTtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHNFQUFzRTtBQUMxRTtBQUVBLG1CQUFtQixrQkFBa0I7SUFDakMsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgXG59XG5zZWN0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnBhbmVsLWJvZHl7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jZW50ZXItZm9ybSB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnBhbmVsLWJvZHl7XG5cbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2U1MWMyMztcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG59XG5cbi5mb3JtLW5hbWVze1xuICAgIC8qIHBhZGRpbmctbGVmdDogNDJweDsgKi9cbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbn1cblxuLmZvcm0tY29udHJvbC1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDZweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS44NDY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmJ0bi1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJ0bi1zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgY29sb3I6I2ZmZjtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9ye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9yIC50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2lnbnVwLW9yLXNlcGFyYXRvciBociB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IC0xNnB4IGF1dG8gMTBweCBhdXRvO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xufVxuXG5bdHlwZT10ZXh0XS5mb3JtLWNvbnRyb2wsIFt0eXBlPXRleHRdLmZvcm0tbmFtZXMsIFt0eXBlPXBhc3N3b3JkXS5mb3JtLWNvbnRyb2wge1xuICAgIC8qIHBhZGRpbmc6IDA7ICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbltjbGFzc149J2lvbi0nXSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n  \n      <div class=\"container\">\n  \n        <div class=\"center-form panel\">\n          <div class=\"panel-body\">\n          <h4 class=\"text-center\"><i class=\"ion-person-add\"></i> Sign up</h4>\n  \n          <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"Last name\">\n                  <span class=\"ion-person form-control-icon\"></span> \n              </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n              <span class=\"ion-at form-control-icon\"></span> \n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control input-lg\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\n                <span class=\"ion-key form-control-icon\"></span> \n            </div>\n  \n            <button type=\"submit\" class=\"btn btn-block btn-success\"> Sign up</button>\n  \n            <p class=\"text-center\">\n              <small>Aleary have an account! <a routerLink=\"/login\"> Login</a></small>\n  \n            </p>\n  \n          </form>\n  \n        </div>\n        </div>\n  \n      </div>\n  \n    </div>\n  <section>\n  "

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    SignupComponent.prototype.signup = function (formData) {
        var _this = this;
        return this.auth.signup(formData).subscribe(function (user) {
            console.log("added user " + JSON.stringify(user));
            _this.router.navigate(['login']);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Social Icons in Header-->\n<ul class=\"social-icons\">\n  <li *ngFor=\"let website of socialsites\">\n    <a target=\"/home\" title=\"{{ website.title }}\" href=\"/home\">\n      <i class=\"fa fa-{{ website.icon }} fa-1x\"></i\n      ><span>{{ website.title }}</span>\n    </a>\n  </li>\n</ul>\n<!--End of Social Icons in Header-->\n"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialComponent = /** @class */ (function () {
    function SocialComponent(config) {
        this.config = config;
    }
    SocialComponent.prototype.ngOnInit = function () {
        this.getSocialsites();
    };
    SocialComponent.prototype.getSocialsites = function () {
        var _this = this;
        return this.config.getSettings('websites').subscribe(function (data) { return _this.socialsites = data; });
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.css":
/*!***************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{position: fixed; right: 10px; bottom: 5px;}\n\n.container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\n\nsection{\n    background-color: #ddd;\n}\n\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n\n.panel-body{\n    padding: 15px;\n}\n\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n\n.text-center{\n    text-align: center;\n}\n\nform {\n    display: block;\n    margin-top: 0em;\n}\n\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n\n.btn-block{\n    display: block;\n    width: 100%;\n}\n\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7O0FBRWhEO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztBQUM1Qzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsV0FBVztJQUNYLHNFQUFzRTtBQUMxRTs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixzRUFBc0U7QUFDMUU7O0FBRUEsbUJBQW1CLGtCQUFrQjtJQUNqQyxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zdWJzY3JpYmUvc3Vic2NyaWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtwb3NpdGlvbjogZml4ZWQ7IHJpZ2h0OiAxMHB4OyBib3R0b206IDVweDt9XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIFxufVxuc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLnBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5wYW5lbC1ib2R5e1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY2VudGVyLWZvcm0ge1xuICAgIHdpZHRoOiAzMTVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDBlbTtcbn1cbi5mb3JtLWdyb3Vwe1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvcm0tY29udHJvbHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQycHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2U1MWMyMztcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG59XG5cbi5mb3JtLW5hbWVze1xuICAgIC8qIHBhZGRpbmctbGVmdDogNDJweDsgKi9cbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbn1cblxuLmZvcm0tY29udHJvbC1pY29ue3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNDZweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ2cHg7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMS44NDY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmJ0bi1ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJ0bi1zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgY29sb3I6I2ZmZjtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9ye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9yIC50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2lnbnVwLW9yLXNlcGFyYXRvciBociB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IC0xNnB4IGF1dG8gMTBweCBhdXRvO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xufVxuXG5bdHlwZT10ZXh0XS5mb3JtLWNvbnRyb2wsIFt0eXBlPXRleHRdLmZvcm0tbmFtZXMsIFt0eXBlPXBhc3N3b3JkXS5mb3JtLWNvbnRyb2wge1xuICAgIC8qIHBhZGRpbmc6IDA7ICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbltjbGFzc149J2lvbi0nXSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"row clearfix\">\n    <div class=\"container\">\n      <div class=\"center-form panel\">\n        <div class=\"panel-body\">\n          <a (click) = cancel() style=\"cursor:hand;\"> <i class=\"ion-close\"></i></a>\n        <form [formGroup]=\"subscribeForm\" (ngSubmit)=\"subscribe(subscribeForm.value)\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n            <span class=\"ion-at form-control-icon\"></span> \n          </div>\n          <p *ngIf=\"!sending\">\n          <button type=\"submit\" class=\"btn btn-block btn-success\"> Subscribe</button>\n        </p>\n        </form>\n\n      </div>\n      </div>\n\n    </div>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    SubscribeComponent.prototype.ngOnInit = function () {
        this.subscribeForm = this.fb.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
        this.sending = false;
    };
    SubscribeComponent.prototype.subscribe = function (formData) {
        var _this = this;
        this.sending = true;
        console.log(formData);
        setTimeout(function () {
            _this.sending = false;
            _this.cancelForm();
        }, 1000);
    };
    SubscribeComponent.prototype.cancel = function () {
        this.cancelForm();
    };
    SubscribeComponent.prototype.cancelForm = function () {
        this.router.navigate([{ outlets: { popup: null } }]);
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.css */ "./src/app/subscribe/subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/feedback-block/feedback-block.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/testimonial/feedback-block/feedback-block.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsL2ZlZWRiYWNrLWJsb2NrL2ZlZWRiYWNrLWJsb2NrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/testimonial/feedback-block/feedback-block.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/testimonial/feedback-block/feedback-block.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--User Testimonial-->\n<blockquote class=\"col-3 testimonial classic\" >\n    <img src=\"assets/images/user-images/{{feedback.userimage}}\" alt=\"User\"/>\n    <q>{{feedback.comments}}</q>\n    <footer>{{feedback.name}} - {{feedback.company}}</footer>\n</blockquote>\n<!-- End of Testimonial-->"

/***/ }),

/***/ "./src/app/testimonial/feedback-block/feedback-block.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/testimonial/feedback-block/feedback-block.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedbackBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackBlockComponent", function() { return FeedbackBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackBlockComponent = /** @class */ (function () {
    function FeedbackBlockComponent() {
    }
    FeedbackBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeedbackBlockComponent.prototype, "feedback", void 0);
    FeedbackBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback-block',
            template: __webpack_require__(/*! ./feedback-block.component.html */ "./src/app/testimonial/feedback-block/feedback-block.component.html"),
            styles: [__webpack_require__(/*! ./feedback-block.component.css */ "./src/app/testimonial/feedback-block/feedback-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackBlockComponent);
    return FeedbackBlockComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial-page/testimonial-page.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/testimonial/testimonial-page/testimonial-page.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLXBhZ2UvdGVzdGltb25pYWwtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/testimonial/testimonial-page/testimonial-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/testimonial/testimonial-page/testimonial-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "       <!--Testimonials-->\n       <aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n          <div class=\"row clearfix\">\n  \n              <div class=\"section-heading\" *ngIf=\"testimonials\">\n                  <h3>{{testimonials.tagline}}</h3>\n                  <h2 class=\"section-title\">{{testimonials.title}}</h2>\n              </div>\n  \n              <!--User Testimonial-->\n              <div *ngFor=\"let feedback of feedbacks\">\n                <app-feedback-block [feedback]=\"feedback\"></app-feedback-block>\n\n              </div>\n              <!-- End of Testimonial-->\n          </div>\n  \n      </aside>\n      <!--End of Testimonials-->"

/***/ }),

/***/ "./src/app/testimonial/testimonial-page/testimonial-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/testimonial/testimonial-page/testimonial-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: TestimonialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialPageComponent", function() { return TestimonialPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.service */ "./src/app/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestimonialPageComponent = /** @class */ (function () {
    function TestimonialPageComponent(config) {
        this.config = config;
    }
    TestimonialPageComponent.prototype.ngOnInit = function () {
        this.getPageData('pages', 'testimonials');
        this.getBlockData('feedbacks');
    };
    TestimonialPageComponent.prototype.getPageData = function (database, id) {
        var _this = this;
        this.config.getSettings(database, id).subscribe(function (data) {
            _this.testimonials = data;
            console.log(_this.testimonials);
        });
    };
    TestimonialPageComponent.prototype.getBlockData = function (database) {
        var _this = this;
        this.config.getSettings(database).subscribe(function (data) {
            _this.feedbacks = data;
            console.log(_this.feedbacks);
        });
    };
    TestimonialPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonial-page',
            template: __webpack_require__(/*! ./testimonial-page.component.html */ "./src/app/testimonial/testimonial-page/testimonial-page.component.html"),
            styles: [__webpack_require__(/*! ./testimonial-page.component.css */ "./src/app/testimonial/testimonial-page/testimonial-page.component.css")]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
    ], TestimonialPageComponent);
    return TestimonialPageComponent;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/testimonial/testimonial-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TestimonialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialRoutingModule", function() { return TestimonialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-page/testimonial-page.component */ "./src/app/testimonial/testimonial-page/testimonial-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_2__["TestimonialPageComponent"]
    }];
var TestimonialRoutingModule = /** @class */ (function () {
    function TestimonialRoutingModule() {
    }
    TestimonialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TestimonialRoutingModule);
    return TestimonialRoutingModule;
}());



/***/ }),

/***/ "./src/app/testimonial/testimonial.module.ts":
/*!***************************************************!*\
  !*** ./src/app/testimonial/testimonial.module.ts ***!
  \***************************************************/
/*! exports provided: TestimonialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialModule", function() { return TestimonialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _testimonial_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonial-routing.module */ "./src/app/testimonial/testimonial-routing.module.ts");
/* harmony import */ var _testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonial-page/testimonial-page.component */ "./src/app/testimonial/testimonial-page/testimonial-page.component.ts");
/* harmony import */ var _feedback_block_feedback_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback-block/feedback-block.component */ "./src/app/testimonial/feedback-block/feedback-block.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TestimonialModule = /** @class */ (function () {
    function TestimonialModule() {
    }
    TestimonialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _testimonial_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestimonialRoutingModule"]
            ],
            declarations: [_testimonial_page_testimonial_page_component__WEBPACK_IMPORTED_MODULE_3__["TestimonialPageComponent"], _feedback_block_feedback_block_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackBlockComponent"]]
        })
    ], TestimonialModule);
    return TestimonialModule;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardRoutingModule", function() { return UserDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["UserDashboardComponent"] }
];
var UserDashboardRoutingModule = /** @class */ (function () {
    function UserDashboardRoutingModule() {
    }
    UserDashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserDashboardRoutingModule);
    return UserDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: UserDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function() { return UserDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-dashboard-routing.module */ "./src/app/user-dashboard/user-dashboard-routing.module.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_profile_icon_user_profile_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile-icon/user-profile-icon.component */ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserDashboardModule = /** @class */ (function () {
    function UserDashboardModule() {
    }
    UserDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDashboardRoutingModule"]
            ],
            declarations: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"], _user_profile_icon_user_profile_icon_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileIconComponent"]],
            exports: [_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"], _user_profile_icon_user_profile_icon_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileIconComponent"]]
        })
    ], UserDashboardModule);
    return UserDashboardModule;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n  \n      <div class=\"col-3\">\n        <div class=\"panel\">\n          <div class=\"panel-body center\">\n              <blockquote class=\"testimonial classic\" >\n                  <img src=\"assets/images/user-images/{{user.image}}\" alt=\"User\"/>\n                  <q>{{user.bio}}</q>\n                  <footer>\n                      <a (click)=\"logout()\" class=\"button\">Sign out</a>\n                  </footer>\n              </blockquote>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-2-3\">\n          <div class=\"panel\">\n              <div class=\"panel-body\">\n                  <div class=\"pricing-block-content\">\n                      <h3>{{user.firstName}} {{user.lastName}}</h3>\n                      <div class=\"pricing\">\n                          <p>{{user.bio}}</p>\n                      </div>\n                      <ul>\n                          <li>{{user.email}}</li>\n                      </ul>\n                      \n                  </div>\n    \n              </div>\n            </div>        \n      </div>\n  \n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard/user-dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent(router) {
        this.router = router;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserDashboardComponent.prototype.getUser = function () {
        if (localStorage.getItem('currentUser')) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            this.isLoggedIn = true;
        }
    };
    UserDashboardComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.isLoggedIn = false;
        this.router.navigate(['/home']);
    };
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user-dashboard/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZGFzaGJvYXJkL3VzZXItcHJvZmlsZS1pY29uL3VzZXItcHJvZmlsZS1pY29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"testimonial classic\" routerLink=\"/dashboard\">\n  <img src=\"assets/images/user-images/{{profileImage}}\" alt=\"User\" \n  style=\"max-height:40px; vertical-align: middle; margin-bottom:0; \"/>\n</a>"

/***/ }),

/***/ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserProfileIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileIconComponent", function() { return UserProfileIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileIconComponent = /** @class */ (function () {
    function UserProfileIconComponent() {
    }
    UserProfileIconComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], UserProfileIconComponent.prototype, "profileImage", void 0);
    UserProfileIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile-icon',
            template: __webpack_require__(/*! ./user-profile-icon.component.html */ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-icon.component.css */ "./src/app/user-dashboard/user-profile-icon/user-profile-icon.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileIconComponent);
    return UserProfileIconComponent;
}());



/***/ }),

/***/ "./src/app/website-block/website-block.component.css":
/*!***********************************************************!*\
  !*** ./src/app/website-block/website-block.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYnNpdGUtYmxvY2svd2Vic2l0ZS1ibG9jay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/website-block/website-block.component.html":
/*!************************************************************!*\
  !*** ./src/app/website-block/website-block.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a target=\"{{website.target}}\" title=\"{{website.title}}\" href=\"{{website.link}}/{{website.username}}\">\n    <i class=\"fa fa-{{website.icon}} fa-1x\"></i><span>{{website.title}}</span>\n</a>"

/***/ }),

/***/ "./src/app/website-block/website-block.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/website-block/website-block.component.ts ***!
  \**********************************************************/
/*! exports provided: WebsiteBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteBlockComponent", function() { return WebsiteBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteBlockComponent = /** @class */ (function () {
    function WebsiteBlockComponent() {
    }
    WebsiteBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WebsiteBlockComponent.prototype, "website", void 0);
    WebsiteBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-website-block',
            template: __webpack_require__(/*! ./website-block.component.html */ "./src/app/website-block/website-block.component.html"),
            styles: [__webpack_require__(/*! ./website-block.component.css */ "./src/app/website-block/website-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebsiteBlockComponent);
    return WebsiteBlockComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'api/posts',
    emailUrl: 'https://localhost/api/contact.php'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Remon\Desktop\angular-6-website-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map