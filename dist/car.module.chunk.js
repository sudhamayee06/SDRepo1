webpackJsonp(["car.module"],{

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.userAuthenticated) {
            return true;
        }
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-details/car-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"info\">\n        <mat-expansion-panel [expanded]=\"true\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    General information\n                </mat-panel-title>\n                <mat-panel-description>\n                    Common / static information about the car\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <div class=\"common-content\">\n                <label>Id: {{car?.id}}</label>\n                <label>Model: {{car?.model}}</label>\n                <label>Type: {{car?.type}}</label>\n                <label>Age: {{car?.age}}</label>\n                <label>Total Balance: {{car?.totalBalance | currency:'USD':'symbol':'1.2-2'}}</label>\n            </div>\n        </mat-expansion-panel>\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Detailed information\n                </mat-panel-title>\n                <mat-panel-description>\n                    Editable information\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <div class=\"detailed-content\">\n                <label>Available: {{car?.isAvailable | yesNo}}</label>\n                <label>Damaged: {{car?.isDamaged | yesNo}}</label>\n                <label>Comments: {{car?.Comments}}</label>\n                <label>Picture: {{car?.picture}}</label>\n                <label>Last Maintenance Date: {{car?.lastMaintenance | datetimetransform}}</label>\n                <label>Location: {{car?.address?.city}}, {{car?.address?.street}} {{car?.address?.building}},\n                    {{car?.address?.state}}, USA, {{car?.address?.zip}}\n                </label>\n                <label>Lat: {{car?.location?.latitude}}</label>\n                <label>Long: {{car?.location?.longitude}}</label>\n            </div>\n        </mat-expansion-panel>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-details/car-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info {\n  margin: 20px; }\n  .info .common-content {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n  .info .detailed-content {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n  .info label {\n    color: dimgray;\n    margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-details/car-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts");
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



var CarDetailsComponent = /** @class */ (function () {
    function CarDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    CarDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id !== 0) {
                _this.getCar(id);
            }
        });
    };
    CarDetailsComponent.prototype.getCar = function (id) {
        var _this = this;
        this.dataService.getCar(id).subscribe(function (car) {
            _this.car = car;
        });
    };
    CarDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-car-details',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-details/car-details.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-details/car-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__core_services_data_service__["a" /* DataService */]])
    ], CarDetailsComponent);
    return CarDetailsComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-edit/car-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"car-edit\">\n    <form (ngSubmit)=\"submit()\" #carForm=\"ngForm\" class=\"car-edit-form\" novalidate>\n        <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"Model\" name=\"model\" [(ngModel)]=\"car.model\" #model=\"ngModel\"\n                required>\n            <mat-error *ngIf=\"!car.model\">Model is required</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <mat-select placeholder=\"Type\" [(ngModel)]=\"car.type\" name=\"type\" required>\n                <mat-option *ngFor=\"let type of carTypes\" [value]=\"type\">\n                    {{type}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input type=\"string\" matInput placeholder=\"City\" name=\"city\" [(ngModel)]=\"car.address.city\" #city=\"ngModel\"\n                required>\n            <mat-error *ngIf=\"!car.address?.city\">Please provide a city where the car is currently located</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input type=\"number\" matInput placeholder=\"Age\" name=\"age\" [(ngModel)]=\"car.age\" #age=\"ngModel\" required>\n            <mat-error *ngIf=\"!car.age\">Age is required and should be greater than 0</mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"picker\" [max]=\"maxDate\" placeholder=\"Last maintenance date\" name=\"lastMaintenance\"\n                [(ngModel)]=\"car.lastMaintenance\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field>\n            <textarea type=\"text\" matInput placeholder=\"Description\" name=\"description\" [(ngModel)]=\"car.description\"\n                #description=\"ngModel\">\n\n            </textarea>\n        </mat-form-field>\n\n        <mat-form-field>\n            <textarea type=\"text\" matInput placeholder=\"Comments\" name=\"comments\" [(ngModel)]=\"car.comments\" #comments=\"ngModel\">\n\n            </textarea>\n        </mat-form-field>\n\n        <mat-checkbox [(ngModel)]=\"car.isAvailable\" name=\"available\" #available=\"ngModel\">Available</mat-checkbox>\n        <mat-checkbox [(ngModel)]=\"car.isDamaged\" name=\"damaged\" #damaged=\"ngModel\">Damaged</mat-checkbox>\n    </form>\n</div>\n\n<div class=\"actions\">\n    <button mat-raised-button color=\"primary\" (click)=\"postCar()\">\n        <mat-icon>done</mat-icon>\n        <span>\n            {{addOrUpdate}}\n        </span>\n    </button>\n\n    <div *ngIf=\"car.id !== 0\">\n        <button mat-raised-button color=\"warn\" (click)=\"deleteCar()\">\n            <mat-icon>delete_outline</mat-icon>\n            <span>\n                Delete\n            </span>\n        </button>\n    </div>\n\n    <button mat-raised-button (click)=\"cancel()\">\n        <mat-icon>replay</mat-icon>\n        <span>\n            Cancel\n        </span>\n    </button>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-edit/car-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".car-edit {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .car-edit .car-edit-form {\n    width: 50%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .car-edit .car-edit-form mat-checkbox {\n      margin-bottom: 10px; }\n\n.actions {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  .actions button {\n    margin: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-edit/car-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_car_model__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/models/car.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_types_const__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/models/types.const.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_data_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_address_model__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/models/address.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_dialog_modal_dialog_modal_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/dialog-modal/dialog-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CarEditComponent = /** @class */ (function () {
    function CarEditComponent(router, route, dataService, snackService, dialog) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.snackService = snackService;
        this.dialog = dialog;
        this.car = new __WEBPACK_IMPORTED_MODULE_1__shared_models_car_model__["a" /* Car */]();
        this.carTypes = __WEBPACK_IMPORTED_MODULE_2__shared_models_types_const__["a" /* CarTypes */];
        this.addOrUpdate = 'Add';
        this.maxDate = __WEBPACK_IMPORTED_MODULE_10_moment__();
        this.messages = {
            newCarAdded: 'New car has been successfully added',
            errorOnAdd: 'There was a problem adding a new car, please try again later',
            changesApplied: 'Changes successfully applied',
            errorOnChange: 'There was a problem with saving changes, please try again',
            losingChangesConfirmation: 'All changes will be lost. Are you sure you want to continue?',
            areYouSureOnDelete: 'Are you sure you want to delete',
            carRemoved: 'Car has been removed',
            errorOnRemove: 'There was a problem with removing the car, please try again'
        };
    }
    CarEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.car.address = new __WEBPACK_IMPORTED_MODULE_6__shared_models_address_model__["a" /* Address */]();
        // Or we can check id via this.route.parent.snapshot.params["id"]
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id !== 0) {
                _this.addOrUpdate = 'Update';
                _this.getCar(id);
            }
        });
    };
    CarEditComponent.prototype.getCar = function (id) {
        var _this = this;
        this.dataService.getCar(id).subscribe(function (car) {
            _this.car = car;
        });
    };
    CarEditComponent.prototype.postCar = function () {
        this.validateAllFormFields();
        if (!this.carForm.form.valid) {
            return;
        }
        this.car.id === 0 ? this.addCar() : this.updateCar();
    };
    CarEditComponent.prototype.addCar = function () {
        var _this = this;
        this.dataService.addCar(this.car)
            .subscribe(function (createdCar) {
            if (createdCar) {
                _this.carForm.form.markAsPristine();
                _this.snackService.open(_this.messages.newCarAdded, null, {
                    duration: 2500,
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
                _this.router.navigate(['/cars']);
            }
            else {
                _this.snackService.open(_this.messages.errorOnAdd, null, {
                    duration: 2500,
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
            }
        }, function (err) { return console.log(err); });
    };
    CarEditComponent.prototype.updateCar = function () {
        var _this = this;
        this.dataService.updateCar(this.car).subscribe(function (success) {
            if (success) {
                _this.carForm.form.markAsPristine();
                _this.snackService.open(_this.messages.changesApplied, null, {
                    duration: 2500,
                    horizontalPosition: 'right',
                    verticalPosition: 'top',
                });
                _this.router.navigate(['/cars']);
            }
            else {
                _this.snackService.open(_this.messages.errorOnChange, null, {
                    duration: 2500,
                    horizontalPosition: 'right',
                    verticalPosition: 'top',
                });
            }
        });
    };
    CarEditComponent.prototype.cancel = function () {
        var _this = this;
        if (!this.carForm.dirty) {
            this.router.navigate(['/cars']);
            return;
        }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__shared_dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */], {
            width: '300px',
            disableClose: true,
            autoFocus: false,
            data: {
                message: this.messages.losingChangesConfirmation,
                cancelButton: true,
                confirmButtonText: 'Confirm'
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.router.navigate(['/cars']);
            }
        });
    };
    CarEditComponent.prototype.validateAllFormFields = function () {
        var _this = this;
        Object.keys(this.carForm.controls).forEach(function (field) {
            var control = _this.carForm.controls[field];
            if (control instanceof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
        });
    };
    CarEditComponent.prototype.deleteCar = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__shared_dialog_modal_dialog_modal_component__["a" /* DialogModalComponent */], {
            width: '300px',
            disableClose: true,
            autoFocus: false,
            data: {
                message: this.messages.areYouSureOnDelete + " " + this.car.model + "?",
                cancelButton: true,
                confirmButtonText: 'Confirm'
            }
        });
        dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
                _this.delete();
            }
        });
    };
    CarEditComponent.prototype.delete = function () {
        var _this = this;
        this.dataService.deleteCar(this.car.id).subscribe(function (success) {
            if (success) {
                _this.snackService.open(_this.messages.carRemoved, null, {
                    duration: 2500,
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
            }
            else {
                _this.snackService.open(_this.messages.errorOnRemove, null, {
                    duration: 2500,
                    horizontalPosition: 'right',
                    verticalPosition: 'top'
                });
            }
            _this.router.navigate(['/cars']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('carForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* NgForm */])
    ], CarEditComponent.prototype, "carForm", void 0);
    CarEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-car-edit',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-edit/car-edit.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-edit/car-edit.component.scss")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_material_moment_adapter__["c" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: __WEBPACK_IMPORTED_MODULE_9__angular_material_moment_adapter__["a" /* MAT_MOMENT_DATE_FORMATS */] },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatDialog */]])
    ], CarEditComponent);
    return CarEditComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-history/car-history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card>\n        <mat-card-content>\n            <div class=\"general-info\">\n                <label>Model: {{car?.model}}</label>\n                <label>Type: {{car?.type}}</label>\n            </div>\n            <div>\n                <label>Total balance: {{car?.totalBalance | currency:'USD':'symbol':'1.2-2'}}</label>\n            </div>\n        </mat-card-content>\n    </mat-card>\n\n    <div class=\"table\">\n        <mat-table #table [dataSource]=\"historyData\" class=\"mat-elevation-z8\">\n\n            <ng-container matColumnDef=\"timestamp\">\n                <mat-header-cell *matHeaderCellDef> Date </mat-header-cell>\n                <mat-cell *matCellDef=\"let record\"> {{record?.timestamp | datetimetransform }} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"event\">\n                <mat-header-cell *matHeaderCellDef> Event </mat-header-cell>\n                <mat-cell *matCellDef=\"let record\"> {{record?.event | capitalize }} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"amount\">\n                <mat-header-cell *matHeaderCellDef> Amount </mat-header-cell>\n                <mat-cell *matCellDef=\"let record\"> {{record?.amount | currency:'USD':'symbol':'1.2-2'}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-history/car-history.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  margin-top: 30px;\n  margin-bottom: 20px; }\n\nmat-card {\n  margin-top: 20px; }\n  mat-card mat-card-content {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n    mat-card mat-card-content .general-info {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n    mat-card mat-card-content label {\n      color: dimgray; }\n    mat-card mat-card-content label:first-of-type {\n      margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-history/car-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_data_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarHistoryComponent = /** @class */ (function () {
    function CarHistoryComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.displayedColumns = ['timestamp', 'event', 'amount'];
    }
    CarHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id !== 0) {
                _this.getCar(id);
            }
        });
    };
    CarHistoryComponent.prototype.getCar = function (id) {
        var _this = this;
        this.dataService.getCar(id).subscribe(function (car) {
            _this.car = car;
            _this.historyData = car.history;
        });
    };
    CarHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-car-history',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-history/car-history.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-history/car-history.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__core_services_data_service__["a" /* DataService */]])
    ], CarHistoryComponent);
    return CarHistoryComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_history_car_history_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-history/car-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__car_details_car_details_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-details/car-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__car_edit_car_edit_component__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-edit/car-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_guards_auth_guard__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__car_component__["a" /* CarComponent */],
        children: [
            { path: 'history', component: __WEBPACK_IMPORTED_MODULE_3__car_history_car_history_component__["a" /* CarHistoryComponent */] },
            { path: 'details', component: __WEBPACK_IMPORTED_MODULE_4__car_details_car_details_component__["a" /* CarDetailsComponent */] },
            {
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_5__car_edit_car_edit_component__["a" /* CarEditComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_6__core_guards_auth_guard__["a" /* AuthGuard */]]
            }
        ]
    }
];
var CarRoutingModule = /** @class */ (function () {
    function CarRoutingModule() {
    }
    CarRoutingModule.components = [
        __WEBPACK_IMPORTED_MODULE_2__car_component__["a" /* CarComponent */],
        __WEBPACK_IMPORTED_MODULE_3__car_history_car_history_component__["a" /* CarHistoryComponent */],
        __WEBPACK_IMPORTED_MODULE_4__car_details_car_details_component__["a" /* CarDetailsComponent */],
        __WEBPACK_IMPORTED_MODULE_5__car_edit_car_edit_component__["a" /* CarEditComponent */]
    ];
    CarRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__core_guards_auth_guard__["a" /* AuthGuard */]]
        })
    ], CarRoutingModule);
    return CarRoutingModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"header\">\n        <mat-icon>bar_chart</mat-icon>\n        <span>Car's Information</span>\n    </div>\n    <div class=\"actions-row\">\n        <a mat-button color=\"primary\" routerLink=\"details\">Details</a>\n        <a mat-button color=\"primary\" routerLink=\"history\">View history</a>\n        <a mat-button color=\"accent\" routerLink=\"edit\">Add/Edit car</a>\n    </div>\n    <div class=\"container\">\n        <router-outlet></router-outlet>\n        <div class=\"bottom-section\">\n            <a mat-button color=\"primary\" routerLink=\"/cars\">Back</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  font-size: 24px;\n  font-weight: 500;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  margin: 20px 10px; }\n\n.bottom-section {\n  margin-top: 15px;\n  margin-left: -15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarComponent; });
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

var CarComponent = /** @class */ (function () {
    function CarComponent() {
    }
    CarComponent.prototype.ngOnInit = function () {
    };
    CarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pms-car',
            template: __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.component.html"),
            styles: [__webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModule", function() { return CarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_routing_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/features/car/car-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_data_service__ = __webpack_require__("../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/core/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CarModule = /** @class */ (function () {
    function CarModule() {
    }
    CarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__car_routing_module__["a" /* CarRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_module__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__car_routing_module__["a" /* CarRoutingModule */].components],
            providers: [__WEBPACK_IMPORTED_MODULE_6__core_services_data_service__["a" /* DataService */]]
        })
    ], CarModule);
    return CarModule;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/models/address.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "../../../../../../candidate_files/preview/32666/editablequestions-angular5-q1583311843874/application/src/app/shared/models/types.const.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarTypes; });
var CarTypes = [
    'Small family / Compact',
    'Large family / Mid-size',
    'Crossover SUV',
    'Minivan / MVP',
    'Luxury / Executive',
    'Other'
];


/***/ })

});
//# sourceMappingURL=car.module.chunk.js.map