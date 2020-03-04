webpackJsonp(["cars.module"],{

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_property_resolver__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/property.resolver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    FilterService.prototype.filter = function (items, data, props) {
        return items.filter(function (item) {
            var match = false;
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                if (prop.indexOf('.') > -1) {
                    var value = __WEBPACK_IMPORTED_MODULE_1__core_services_property_resolver__["a" /* PropertyResolver */].resolve(prop, item);
                    if (value && value.toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                    continue;
                }
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                    match = true;
                    break;
                }
            }
            return match;
        });
    };
    FilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/property.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyResolver; });
var PropertyResolver = /** @class */ (function () {
    function PropertyResolver() {
    }
    PropertyResolver.resolve = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return PropertyResolver;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/car-tile/car-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pms-card\">\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>{{car.model}}</mat-card-title>\n            <mat-card-subtitle>{{car.type}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-divider></mat-divider>\n        <mat-card-content>\n            <mat-list dense>\n                <mat-list-item>\n                    <mat-icon matListIcon>done</mat-icon>\n                    <span>Available: {{car.isAvailable | yesNo }}</span>\n                </mat-list-item>\n                <mat-list-item>\n                    <mat-icon matListIcon>build</mat-icon>\n                    <span>Damaged: {{car.isDamaged | yesNo }}</span>\n                </mat-list-item>\n                <mat-list-item>\n                    <mat-icon matListIcon>home</mat-icon>\n                    <span>City: {{car.address?.city}}</span>\n                </mat-list-item>\n                <mat-list-item>\n                    <mat-icon>schedule</mat-icon>\n                    <span>Last maintenance: {{car.lastMaintenance | datetransform }}</span>\n                </mat-list-item>\n                <mat-list-item>\n                    <mat-icon>attach_money</mat-icon>\n                    <b>Total: {{car.totalBalance | currency:'USD':'symbol':'1.2-2'}}</b>\n                </mat-list-item>\n            </mat-list>\n        </mat-card-content>\n        <mat-divider></mat-divider>\n        <mat-card-actions>\n            <button mat-button color=\"primary\" (click)=\"onEdit()\">\n                Edit\n            </button>\n            <button mat-button color=\"primary\" (click)=\"onDetails()\">\n                View details\n            </button>\n        </mat-card-actions>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/car-tile/car-tile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pms-card {\n  margin-bottom: 20px; }\n\nmat-card-actions {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/car-tile/car-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_car_model__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/models/car.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarTileComponent = /** @class */ (function () {
    function CarTileComponent(router) {
        this.router = router;
    }
    CarTileComponent.prototype.onEdit = function () {
        this.router.navigate(['/car', this.car.id, 'edit']);
    };
    CarTileComponent.prototype.onDetails = function () {
        this.router.navigate(['/car', this.car.id, 'details']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_models_car_model__["a" /* Car */])
    ], CarTileComponent.prototype, "car", void 0);
    CarTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-car-tile',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/car-tile/car-tile.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/car-tile/car-tile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CarTileComponent);
    return CarTileComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cars_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_tile_car_tile_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/car-tile/car-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cars_tile_view_cars_tile_view_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-tile-view/cars-tile-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_selector_view_selector_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-selector/view-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cars_table_view_cars_table_view_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-table-view/cars-table-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__cars_component__["a" /* CarsComponent */] }
];
var CarsRoutingModule = /** @class */ (function () {
    function CarsRoutingModule() {
    }
    CarsRoutingModule.components = [
        __WEBPACK_IMPORTED_MODULE_2__cars_component__["a" /* CarsComponent */],
        __WEBPACK_IMPORTED_MODULE_3__car_tile_car_tile_component__["a" /* CarTileComponent */],
        __WEBPACK_IMPORTED_MODULE_4__cars_tile_view_cars_tile_view_component__["a" /* CarsTileViewComponent */],
        __WEBPACK_IMPORTED_MODULE_5__view_selector_view_selector_component__["a" /* ViewSelectorComponent */],
        __WEBPACK_IMPORTED_MODULE_6__cars_table_view_cars_table_view_component__["a" /* CarsTableViewComponent */]
    ];
    CarsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CarsRoutingModule);
    return CarsRoutingModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-table-view/cars-table-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container table\">\n    <mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"model\">\n            <mat-header-cell *matHeaderCellDef> Model </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.model}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"type\">\n            <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"address.city\">\n            <mat-header-cell *matHeaderCellDef> City </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.address?.city}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"isAvailable\">\n            <mat-header-cell *matHeaderCellDef> Available </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.isAvailable | yesNo }} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"isDamaged\">\n            <mat-header-cell *matHeaderCellDef> Damaged </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.isDamaged | yesNo }} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"age\">\n            <mat-header-cell *matHeaderCellDef> Age </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.age}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"totalBalance\">\n            <mat-header-cell *matHeaderCellDef> Total Balance </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\"> {{element.totalBalance | currency:'USD':'symbol':'1.2-2'}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>menu</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                    <a mat-menu-item routerLink='/car/{{element.id}}/details'>\n                        <mat-icon>visibility</mat-icon>\n                        <span>View details</span>\n                    </a>\n                    <a mat-menu-item routerLink=\"/car/{{element.id}}/edit\">\n                        <mat-icon>create</mat-icon>\n                        <span>Edit</span>\n                    </a>\n                </mat-menu>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-table-view/cars-table-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-table-view/cars-table-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsTableViewComponent; });
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

var CarsTableViewComponent = /** @class */ (function () {
    function CarsTableViewComponent() {
        this.cars = [];
        this.displayedColumns = ['model', 'type', 'address.city', 'age', 'isDamaged', 'isAvailable', 'totalBalance', 'actions'];
    }
    CarsTableViewComponent.prototype.ngOnInit = function () {
        this.dataSource = this.cars;
    };
    CarsTableViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes && changes.cars) {
            this.dataSource = this.cars;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CarsTableViewComponent.prototype, "cars", void 0);
    CarsTableViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-cars-table-view',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-table-view/cars-table-view.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-table-view/cars-table-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsTableViewComponent);
    return CarsTableViewComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-tile-view/cars-tile-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row card-container\">\n        <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let car of cars\">\n            <pms-car-tile [car]=\"car\"></pms-car-tile>\n        </div>\n        <div *ngIf=\"!cars.length\">\n            No cars found\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-tile-view/cars-tile-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-tile-view/cars-tile-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsTileViewComponent; });
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

var CarsTileViewComponent = /** @class */ (function () {
    function CarsTileViewComponent() {
        this.cars = [];
    }
    CarsTileViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CarsTileViewComponent.prototype, "cars", void 0);
    CarsTileViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-cars-tile-view',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-tile-view/cars-tile-view.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-tile-view/cars-tile-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsTileViewComponent);
    return CarsTileViewComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view indent\">\n    <div class=\"container\">\n        <div class=\"header\">\n            <span>Cars</span>\n        </div>\n\n        <div class=\"actions-panel\">\n            <div>\n                <button mat-button color=\"primary\" (click)=\"addNewCar()\">\n                    <mat-icon>add</mat-icon>\n                    <span>Add new car</span>\n                </button>\n                <pms-view-selector (viewModeChanged)=\"changeViewMode($event)\"></pms-view-selector>\n            </div>\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilter()\" [(ngModel)]=\"searchString\" matTooltip=\"Filter by model, type or city\"\n                    placeholder=\"Filter\" />\n                <button mat-button *ngIf=\"searchString\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearFilter()\">\n                    <mat-icon>close</mat-icon>\n                </button>\n            </mat-form-field>\n        </div>\n    </div>\n\n    <div [ngSwitch]=\"selectedViewMode\">\n        <pms-cars-tile-view *ngSwitchCase=\"viewMode.Tile\" [cars]=\"filteredCars\"></pms-cars-tile-view>\n        <pms-cars-table-view *ngSwitchCase=\"viewMode.Table\" [cars]=\"filteredCars\"></pms-cars-table-view>\n    </div>\n\n    <!-- \n        To interact with pagination component, please add required bindings:\n        1) property: to pass a total number of items to the pagination component;\n        2) property: to pass a page size to the pagination component;\n        3) event: to listen `pageChanges` event raised by pagination component and calling `onPageParamsChanged()` method \n    -->\n    <pms-pagination [totalItems]=\"totalRecords\" [itemsPerPage]=\"pageSize\" (pageChanges)=\"onPageParamsChanged($event)\">\n    </pms-pagination>\n</div>\n"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  font-size: 24px;\n  font-weight: 500;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 20px 10px; }\n\n.actions-panel {\n  margin-bottom: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin-right: 25px; }\n  .actions-panel button {\n    margin-left: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_mode_enum__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-mode.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_filter_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
    To make pagination work, you'd need to implement 2 methods:
    1) `getCarsPage()`;
    2) `onPageParamsChanged()`.
*/
var CarsComponent = /** @class */ (function () {
    function CarsComponent(dataService, filterService, router) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.router = router;
        this.selectedViewMode = __WEBPACK_IMPORTED_MODULE_2__view_mode_enum__["a" /* ViewMode */].Tile;
        this.viewMode = __WEBPACK_IMPORTED_MODULE_2__view_mode_enum__["a" /* ViewMode */];
        this.cars = [];
        this.filteredCars = [];
        this.pageSize = 10;
        this.searchString = '';
        this.currentPageIndex = 0;
    }
    CarsComponent.prototype.ngOnInit = function () {
        this.getCarsPage(this.currentPageIndex);
    };
    /*
        This method should:
        1) call takeCars() method of dataService, passing correct prameters (current page index and page size);
        2) handle response of type PagedResult<Car>, by keeping totalRecords and cars (assign them to local variables);
        3) to make it work alongside with filtering, consider updating filteredCars value as well.
    */
    CarsComponent.prototype.getCarsPage = function (page) {
        var _this = this;
        this.dataService.takeCars(page, this.pageSize)
            .subscribe(function (response) {
            _this.cars = response.results;
            _this.filteredCars = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { console.log(err); });
    };
    /*
        This method should:
        1) do nothing if neither page size nor page index changed;
        2) if page size or page index changed, it should:
            - update current page index;
            - update current page size;
            - request new set of paged data by calling getCarsPage() with correct parameter;
            - clear filtering results by calling clearFilter() method.
    */
    CarsComponent.prototype.onPageParamsChanged = function (params) {
        if (this.pageSize !== params.pageSize || this.currentPageIndex !== params.pageIndex) {
            this.pageSize = params.pageSize;
            this.currentPageIndex = params.pageIndex;
            this.getCarsPage(params.pageIndex);
            this.clearFilter();
        }
    };
    CarsComponent.prototype.applyFilter = function () {
        if (!this.searchString) {
            this.filteredCars = this.cars;
            return;
        }
        var filterBy = this.searchString.toUpperCase();
        var propsToFilterBy = ['model', 'type', 'address.city'];
        this.filteredCars = this.filterService.filter(this.cars, filterBy, propsToFilterBy);
    };
    CarsComponent.prototype.changeViewMode = function (newMode) {
        this.selectedViewMode = newMode;
    };
    CarsComponent.prototype.clearFilter = function () {
        this.searchString = '';
        this.applyFilter();
    };
    CarsComponent.prototype.addNewCar = function () {
        this.router.navigate(['/car/0/edit']);
    };
    CarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-cars',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_filter_service__["a" /* FilterService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cars_routing_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/cars-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_data_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_filter_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CarsModule = /** @class */ (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__cars_routing_module__["a" /* CarsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__cars_routing_module__["a" /* CarsRoutingModule */].components],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__core_services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_7__core_services_filter_service__["a" /* FilterService */]
            ]
        })
    ], CarsModule);
    return CarsModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-mode.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMode; });
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["Tile"] = 1] = "Tile";
    ViewMode[ViewMode["Table"] = 2] = "Table";
    ViewMode[ViewMode["Map"] = 3] = "Map";
})(ViewMode || (ViewMode = {}));


/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-selector/view-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"viewMenu\">\n    <mat-icon>menu</mat-icon>\n    <span>View Mode</span>\n</button>\n\n<mat-menu #viewMenu=\"matMenu\">\n    <button mat-menu-item (click)=\"changeViewMode(viewMode.Tile)\">\n        <mat-icon>view_module</mat-icon>\n        <span>Tile View</span>\n    </button>\n    <button mat-menu-item (click)=\"changeViewMode(viewMode.Table)\">\n        <mat-icon>view_headline</mat-icon>\n        <span>Table View</span>\n    </button>\n    <button mat-menu-item (click)=\"changeViewMode(viewMode.Map)\">\n        <mat-icon>place</mat-icon>\n        <span>Map View</span>\n    </button>\n</mat-menu>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-selector/view-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-selector/view-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSelectorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_mode_enum__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-mode.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewSelectorComponent = /** @class */ (function () {
    function ViewSelectorComponent() {
        this.viewModeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.viewMode = __WEBPACK_IMPORTED_MODULE_1__view_mode_enum__["a" /* ViewMode */];
    }
    ViewSelectorComponent.prototype.changeViewMode = function (newMode) {
        this.viewModeChanged.emit(newMode);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], ViewSelectorComponent.prototype, "viewModeChanged", void 0);
    ViewSelectorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-view-selector',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-selector/view-selector.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/cars/view-selector/view-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewSelectorComponent);
    return ViewSelectorComponent;
}());



/***/ })

});
//# sourceMappingURL=cars.module.chunk.js.map