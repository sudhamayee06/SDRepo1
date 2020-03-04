webpackJsonp(["main"],{

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/features/car/car.module": [
		"../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.module.ts",
		"car.module",
		"common"
	],
	"app/features/cars/cars.module": [
		"../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.module.ts",
		"cars.module",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_moment_adapter__["b" /* MatMomentDateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_moment_adapter__["b" /* MatMomentDateModule */]
            ],
            declarations: []
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/cars' },
    { path: 'car/:id', loadChildren: 'app/features/car/car.module#CarModule' },
    { path: 'cars', loadChildren: 'app/features/cars/cars.module#CarsModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/cars' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(app_routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <pms-nav-bar></pms-nav-bar>\n    <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            // tslint:disable-next-line:component-selector
            selector: 'app-root',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export getBaseHref */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_login_form_login_form_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__features_registration_form_registration_form_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__base_url_interceptor__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/base-url-interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__features_login_form_login_form_module__["a" /* LoginFormModule */],
                __WEBPACK_IMPORTED_MODULE_9__features_registration_form_registration_form_module__["a" /* RegistrationFormModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* APP_BASE_HREF */],
                    useFactory: getBaseHref,
                    deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common__["i" /* PlatformLocation */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12__base_url_interceptor__["a" /* BaseUrlInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseHref(platformLocation) {
    return platformLocation.getBaseHrefFromDOM();
}


/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/base-url-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrlInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BaseUrlInterceptor = /** @class */ (function () {
    function BaseUrlInterceptor(baseHref) {
        this.baseHref = baseHref;
    }
    BaseUrlInterceptor.prototype.intercept = function (request, next) {
        var apiReq = request.clone({ url: "" + this.baseHref + request.url });
        return next.handle(apiReq);
    };
    BaseUrlInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* APP_BASE_HREF */])),
        __metadata("design:paramtypes", [String])
    ], BaseUrlInterceptor);
    return BaseUrlInterceptor;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_import_guard__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/module-import.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var CoreModule = /** @class */ (function () {
    // Checks if module has already been loaded through the parent injector
    function CoreModule(parentModule) {
        Object(__WEBPACK_IMPORTED_MODULE_6__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, this.constructor.name);
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_module__["a" /* AngularMaterialModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]]
        })
        // CoreModule should be loaded once and only in AppModule, as it stores services which intended to be singletones
        ,
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/module-import.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar color=\"primary\">\n        <mat-icon class=\"logo\">commute</mat-icon>\n        <span class=\"title\">Car Rental Management System</span>\n        <div class=\"menu-buttons\">\n            <a mat-button routerLink=\"/cars\">Cars</a>\n            <button mat-button (click)=\"reports()\">Reports</button>\n        </div>\n\n        <span class=\"space-filler\"></span>\n\n        <div *ngIf=\"!isLoggedIn\">\n            <button mat-button (click)=\"register()\">Register</button>\n            <button mat-button (click)=\"logIn()\">Login</button>\n        </div>\n        <div *ngIf=\"isLoggedIn\" class=\"logged-in\">\n            <span>Logged in as: {{username}}</span>\n            <button mat-button (click)=\"logOut()\">Logout</button>\n        </div>\n    </mat-toolbar>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/nav-bar/nav-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space-filler {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto; }\n\n.logo {\n  margin-right: 5px;\n  margin-bottom: 3px; }\n\n.menu-buttons {\n  margin-left: 40px; }\n\n.title {\n  font-size: 18px; }\n\n.logged-in span {\n  font-size: 12px; }\n\n.success-message {\n  background-color: green; }\n\n.error-message {\n  background-color: firebrick; }\n\n.warning-message {\n  background-color: goldenrod; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dialog_modal_dialog_modal_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router, authService, snackService, dialog) {
        this.router = router;
        this.authService = authService;
        this.snackService = snackService;
        this.dialog = dialog;
        this.isLoggedIn = false;
        this.username = '';
        this.LOGOUT_SUCCESSFUL = "You've been successfully logged out";
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSubscription = this.authService.authChanged
            .subscribe(function (authStatus) {
            _this.isLoggedIn = authStatus;
            _this.username = _this.authService.currentUser;
        }, function (err) { return console.log(err); });
    };
    NavBarComponent.prototype.logIn = function () {
        this.router.navigate(['/login']);
    };
    NavBarComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    NavBarComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logout()
            .subscribe(function (status) {
            _this.snackService.open(_this.LOGOUT_SUCCESSFUL, null, {
                duration: 2500,
                horizontalPosition: 'right',
                verticalPosition: 'top'
            });
            _this.router.navigate(['/cars']);
            return;
        }, function (err) { return console.log(err); });
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    };
    NavBarComponent.prototype.reports = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */], {
            width: '300px',
            disableClose: false,
            autoFocus: false,
            data: {
                message: 'Feature is under development. Please check later.',
                confirmButtonText: 'OK',
                cancelButton: false,
                headerText: 'Under development'
            }
        });
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-nav-bar',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'api/auth';
        this.isAuthenticated = false;
        this.username = '';
        this.authChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "userAuthenticated", {
        get: function () {
            return this.isAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (userData) {
        var _this = this;
        return this.http.post(this.authUrl + '/login', userData)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (isLoggedIn) {
            _this.updateAuthState(isLoggedIn, userData.login);
            _this.userAuthChanged(_this.isAuthenticated);
            return _this.isAuthenticated;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    AuthService.prototype.register = function (userData) {
        var _this = this;
        return this.http.post(this.authUrl + '/register', userData)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (isRegistered) {
            _this.updateAuthState(isRegistered, userData.login);
            _this.userAuthChanged(_this.isAuthenticated);
            return _this.isAuthenticated;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.authUrl + '/logout', null)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (isLoggedOut) {
            _this.updateAuthState(!isLoggedOut, '');
            _this.userAuthChanged(!isLoggedOut);
            return isLoggedOut;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    AuthService.prototype.userAuthChanged = function (status) {
        this.authChanged.emit(status);
    };
    AuthService.prototype.updateAuthState = function (isAuthenticated, username) {
        this.username = username;
        this.isAuthenticated = isAuthenticated;
    };
    AuthService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], AuthService.prototype, "authChanged", void 0);
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.apiBaseUrl = 'api/cars';
    }
    DataService.prototype.takeAllCars = function () {
        var _this = this;
        return this.http.get(this.apiBaseUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (cars) {
            _this.calculateTotalBalances(cars);
            return cars;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.takeCars = function (page, pageSize) {
        var _this = this;
        return this.http.get(this.apiBaseUrl + "/page/" + page * pageSize + "/" + pageSize, { observe: 'response' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (res) {
            var totalRecords = +res.headers.get('X-InlineCount');
            var cars = res.body;
            _this.calculateTotalBalances(cars);
            return {
                results: cars,
                totalRecords: totalRecords
            };
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.getCar = function (id) {
        var _this = this;
        return this.http.get(this.apiBaseUrl + '/' + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (car) {
            _this.calculateTotalBalances([car]);
            return car;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.addCar = function (car) {
        return this.http.post(this.apiBaseUrl, car)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.updateCar = function (car) {
        return this.http.put(this.apiBaseUrl + '/' + car.id, car)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (res) { return res.status; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.deleteCar = function (id) {
        return this.http.delete(this.apiBaseUrl + '/' + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (res) { return res.status; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.calculateTotalBalances = function (cars) {
        for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
            var car = cars_1[_i];
            if (car && car.history) {
                var total = 0;
                for (var _a = 0, _b = car.history; _a < _b.length; _a++) {
                    var event_1 = _b[_a];
                    total += event_1.amount;
                }
                car.totalBalance = total;
            }
        }
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMessage);
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || 'Server error');
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.emailValidator = function (control) {
        return control.value.match(ValidationService.emailRegex) ?
            null : { 'invalidEmailAddress': true };
    };
    ValidationService.passwordValidator = function (control) {
        return (control.value.match(ValidationService.passwordRegex)) ?
            null : { 'invalidPassword': true };
    };
    ValidationService.passwordsMatchValidator = function (group) {
        var password = group.get('password').value;
        var confirmationPassword = group.get('passwordConfirmation').value;
        return password === confirmationPassword ?
            null : { 'mismatch': true };
    };
    ValidationService.passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,20}$/;
    // RFC 2822
    // tslint:disable-next-line
    ValidationService.emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return ValidationService;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_form_component__["a" /* LoginFormComponent */] }
];
var LoginFormRoutingModule = /** @class */ (function () {
    function LoginFormRoutingModule() {
    }
    LoginFormRoutingModule.components = [__WEBPACK_IMPORTED_MODULE_2__login_form_component__["a" /* LoginFormComponent */]];
    LoginFormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], LoginFormRoutingModule);
    return LoginFormRoutingModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"header\">\n        <mat-icon>how_to_reg</mat-icon>\n        <span>Login</span>\n    </div>\n    <div class=\"login-form\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm)\" class=\"login-form\" novalidate>\n            <div class=\"login\">\n                <div class=\"row\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Enter your email\" formControlName=\"login\" required>\n                    </mat-form-field>\n                </div>\n                <br />\n                <div class=\"row\">\n                    <mat-form-field>\n                        <input type=\"password\" matInput placeholder=\"Enter your password\" formControlName=\"password\"\n                            required>\n                    </mat-form-field>\n                </div>\n                <br />\n                <div class=\"row centered\">\n                    <span matTooltip=\"Please provide an e-mail and password\" [matTooltipDisabled]=\"loginForm.valid\">\n                        <button mat-stroked-button color=\"primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">\n                            Login\n                        </button>\n                    </span>\n                </div>\n                <br />\n                <div class=\"row demo\">\n                    <span>*For demo\\task mode, you can use demo@domain.com/demo01 as a login and password</span>\n                </div>\n            </div>\n        </form>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  font-size: 24px;\n  font-weight: 500;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 20px 10px; }\n\n.login-form {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .login-form mat-form-field {\n    width: 400px; }\n  .login-form .centered {\n    -ms-flex-pack: center;\n        justify-content: center; }\n  .login-form .demo {\n    margin-top: 15px;\n    font-style: italic;\n    font-size: 14px;\n    color: gray;\n    max-width: 400px;\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_auth_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_dialog_modal_dialog_modal_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, router, authService, dialog) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.login = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.messages = {
            incorrectFormat: 'Login or password has an incorrect format.',
            loginFailed: 'Unable to login, please check your e-mail and password',
            OK: 'OK'
        };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginFormComponent.prototype.buildForm = function () {
        this.loginForm = this.formBuilder.group({
            login: this.login,
            password: this.password
        });
    };
    LoginFormComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (this.loginForm.invalid) {
            this.showError(this.messages.incorrectFormat);
            return;
        }
        this.authService.login(value)
            .subscribe(function (success) {
            if (!success) {
                _this.showError(_this.messages.loginFailed);
                return;
            }
            if (_this.authService.redirectUrl) {
                var redirectUrl = _this.authService.redirectUrl;
                _this.authService.redirectUrl = '';
                _this.router.navigate([redirectUrl]);
            }
            else {
                _this.router.navigate(['/cars']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginFormComponent.prototype.showError = function (message) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__shared_dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */], {
            width: '300px',
            autoFocus: true,
            disableClose: false,
            data: {
                message: message,
                confirmButtonText: this.messages.OK,
                cancelButton: false,
                headerText: 'Login failed'
            }
        });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-login-form',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_form_routing_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/login-form/login-form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginFormModule = /** @class */ (function () {
    function LoginFormModule() {
    }
    LoginFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_form_routing_module__["a" /* LoginFormRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_module__["a" /* AngularMaterialModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_form_routing_module__["a" /* LoginFormRoutingModule */].components]
        })
    ], LoginFormModule);
    return LoginFormModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_form_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__registration_form_component__["a" /* RegistrationFormComponent */] }
];
var RegistrationFormRoutingModule = /** @class */ (function () {
    function RegistrationFormRoutingModule() {
    }
    RegistrationFormRoutingModule.components = [__WEBPACK_IMPORTED_MODULE_2__registration_form_component__["a" /* RegistrationFormComponent */]];
    RegistrationFormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RegistrationFormRoutingModule);
    return RegistrationFormRoutingModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"header\">\n        <mat-icon>person_add</mat-icon>\n        <span>Register</span>\n    </div>\n    <div class=\"registration-form\">\n        <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit(registrationForm)\" class=\"registration-form\" novalidate>\n            <div class=\"registration\">\n                <div class=\"row\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Enter your email\" formControlName=\"login\">\n                        <mat-error>Invalid e-mail</mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"row\">\n                    <mat-form-field>\n                        <input type=\"password\" matInput placeholder=\"Enter your password\" formControlName=\"password\">\n                        <mat-error>\n                            Invalid password, it should have 6 to 20 symbols, at least 1 digit and no spaces\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"row\">\n                    <mat-form-field>\n                        <input type=\"password\" matInput placeholder=\"Confirm your password\" formControlName=\"passwordConfirmation\">\n                        <mat-error>\n                            Invalid password, it should have 6 to 20 symbols, at least 1 digit and no spaces\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n                <div class=\"row centered\">\n                    <span matTooltip=\"Please provide an e-mail and password\" [matTooltipDisabled]=\"registrationForm.valid\">\n                        <button mat-stroked-button color=\"primary\" type=\"submit\" [disabled]=\"!registrationForm.valid\">\n                            Create account\n                        </button>\n                    </span>\n                </div>\n\n                <div class=\"registration-errors\">\n                    <div *ngIf=\"registrationErrorMessage\">\n                        <span class=\"\">{{ registrationErrorMessage }}</span>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  font-size: 24px;\n  font-weight: 500;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 20px 10px; }\n\n.registration-form {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .registration-form mat-form-field {\n    width: 400px; }\n  .registration-form .centered {\n    -ms-flex-pack: center;\n        justify-content: center; }\n  .registration-form .registration-errors {\n    color: firebrick; }\n  .registration-form div {\n    margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_validation_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.messages = {
            passwordMismatchError: 'Password and confirmation password do not match',
            registrationFailed: 'Registration attempt failed, please try again later'
        };
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.createForm();
    };
    RegistrationFormComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (this.hasPasswordMismatch()) {
            this.registrationErrorMessage = this.messages.passwordMismatchError;
            return;
        }
        this.authService.register(value)
            .subscribe(function (success) {
            if (success) {
                if (_this.authService.redirectUrl) {
                    var redirectUrl = _this.authService.redirectUrl;
                    _this.authService.redirectUrl = '';
                    _this.router.navigate([redirectUrl]);
                }
                else {
                    _this.router.navigate(['/cars']);
                }
            }
            else {
                _this.registrationErrorMessage = _this.messages.registrationFailed;
            }
        }, function (err) {
            console.log(err);
        });
    };
    RegistrationFormComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            login: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__core_services_validation_service__["a" /* ValidationService */].emailValidator]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__core_services_validation_service__["a" /* ValidationService */].passwordValidator]],
            passwordConfirmation: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__core_services_validation_service__["a" /* ValidationService */].passwordValidator]]
        });
    };
    RegistrationFormComponent.prototype.hasPasswordMismatch = function () {
        var password = this.registrationForm.controls['password'].value;
        var confirmationPassword = this.registrationForm.controls['passwordConfirmation'].value;
        return password !== confirmationPassword;
    };
    RegistrationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-registration-form',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_auth_service__["a" /* AuthService */]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_form_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration_form_routing_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/registration-form/registration-form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_validation_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RegistrationFormModule = /** @class */ (function () {
    function RegistrationFormModule() {
    }
    RegistrationFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__registration_form_routing_module__["a" /* RegistrationFormRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_module__["a" /* AngularMaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registration_form_component__["a" /* RegistrationFormComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__core_services_validation_service__["a" /* ValidationService */]
            ]
        })
    ], RegistrationFormModule);
    return RegistrationFormModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>\n    <div *ngIf=\"!data.headerText\" class=\"header\">\n        <mat-icon>help_outline</mat-icon>\n        <span>Confirmation</span>\n    </div>\n    <div *ngIf=\"data.headerText\" class=\"header\">\n        <span>{{data.headerText}}</span>\n    </div>\n</h3>\n<mat-dialog-content>{{data.message}}</mat-dialog-content>\n<mat-divider></mat-divider>\n<mat-dialog-actions>\n    <button mat-button (click)=\"dialogRef.close(true)\">{{data.confirmButtonText}}</button>\n    <button *ngIf=\"data.cancelButton\" mat-button (click)=\"dialogRef.close(false)\">Cancel</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center; }\n  .header span {\n    margin-left: 10px; }\n\nmat-dialog-content {\n  margin-bottom: 20px;\n  text-align: center; }\n\nmat-dialog-actions {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogModalComponent = /** @class */ (function () {
    function DialogModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], DialogModalComponent.prototype, "message", void 0);
    DialogModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-dialog',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogModalComponent);
    return DialogModalComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"paginator\">\n    <mat-paginator [length]=\"totalItems\" [pageSize]=\"itemsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageParamChanged($event)\">\n    </mat-paginator>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paginator {\n  width: 85%; }\n  .paginator mat-paginator {\n    font-size: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageSizeOptions = [5, 10, 25];
        this.pageChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PaginationComponent.prototype.pageParamChanged = function (params) {
        this.pageChanges.emit(params);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "itemsPerPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageSizeOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageChanges", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-pagination',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_module__["a" /* AngularMaterialModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__pagination_component__["a" /* PaginationComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__pagination_component__["a" /* PaginationComponent */]]
        })
    ], PaginationModule);
    return PaginationModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        return typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1) || value;
    };
    CapitalizePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/date-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatterPipe = /** @class */ (function () {
    function DateFormatterPipe() {
    }
    DateFormatterPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        var date = __WEBPACK_IMPORTED_MODULE_1_moment__(value).format('LL');
        return date;
    };
    DateFormatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'datetransform' })
    ], DateFormatterPipe);
    return DateFormatterPipe;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/date-time-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeFormatterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateTimeFormatterPipe = /** @class */ (function () {
    function DateTimeFormatterPipe() {
    }
    DateTimeFormatterPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        var date = __WEBPACK_IMPORTED_MODULE_1_moment__(value).format('llll');
        return date;
    };
    DateTimeFormatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'datetimetransform' })
    ], DateTimeFormatterPipe);
    return DateTimeFormatterPipe;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/yes-no.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YesNoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var YesNoPipe = /** @class */ (function () {
    function YesNoPipe() {
    }
    YesNoPipe.prototype.transform = function (value) {
        if (typeof value !== 'boolean') {
            return '';
        }
        return value ? 'yes' : 'no';
    };
    YesNoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'yesNo' })
    ], YesNoPipe);
    return YesNoPipe;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_pagination_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pagination/pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_date_formatter_pipe__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/date-formatter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_modal_dialog_modal_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_yes_no_pipe__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/yes-no.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_date_time_formatter_pipe__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/date-time-formatter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_capitalize_pipe__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/pipes/capitalize.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__pagination_pagination_module__["a" /* PaginationModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_module__["a" /* AngularMaterialModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__pagination_pagination_module__["a" /* PaginationModule */], __WEBPACK_IMPORTED_MODULE_4__pipes_date_formatter_pipe__["a" /* DateFormatterPipe */], __WEBPACK_IMPORTED_MODULE_5__dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */], __WEBPACK_IMPORTED_MODULE_6__pipes_yes_no_pipe__["a" /* YesNoPipe */], __WEBPACK_IMPORTED_MODULE_7__pipes_date_time_formatter_pipe__["a" /* DateTimeFormatterPipe */], __WEBPACK_IMPORTED_MODULE_8__pipes_capitalize_pipe__["a" /* CapitalizePipe */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__pipes_date_formatter_pipe__["a" /* DateFormatterPipe */], __WEBPACK_IMPORTED_MODULE_5__dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */], __WEBPACK_IMPORTED_MODULE_6__pipes_yes_no_pipe__["a" /* YesNoPipe */], __WEBPACK_IMPORTED_MODULE_7__pipes_date_time_formatter_pipe__["a" /* DateTimeFormatterPipe */], __WEBPACK_IMPORTED_MODULE_8__pipes_capitalize_pipe__["a" /* CapitalizePipe */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map