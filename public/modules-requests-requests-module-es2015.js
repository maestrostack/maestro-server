(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-requests-requests-module"],{

/***/ "./src/app/modules/requests/requests-home/requests-home.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/requests/requests-home/requests-home.component.ts ***!
  \***************************************************************************/
/*! exports provided: RequestsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsHomeComponent", function() { return RequestsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RequestsHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequestsHomeComponent.ɵfac = function RequestsHomeComponent_Factory(t) { return new (t || RequestsHomeComponent)(); };
RequestsHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestsHomeComponent, selectors: [["app-requests-home"]], decls: 2, vars: 0, template: function RequestsHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "requests-home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdHMvcmVxdWVzdHMtaG9tZS9yZXF1ZXN0cy1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requests-home',
                templateUrl: './requests-home.component.html',
                styleUrls: ['./requests-home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/requests/requests-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/requests/requests-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RequestsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsRoutingModule", function() { return RequestsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests.component */ "./src/app/modules/requests/requests.component.ts");





const routes = [{ path: '', component: _requests_component__WEBPACK_IMPORTED_MODULE_2__["RequestsComponent"] }];
class RequestsRoutingModule {
}
RequestsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestsRoutingModule });
RequestsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestsRoutingModule_Factory(t) { return new (t || RequestsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/requests/requests.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/requests/requests.component.ts ***!
  \********************************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RequestsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequestsComponent.ɵfac = function RequestsComponent_Factory(t) { return new (t || RequestsComponent)(); };
RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestsComponent, selectors: [["app-requests"]], decls: 2, vars: 0, template: function RequestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "requests works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requests',
                templateUrl: './requests.component.html',
                styleUrls: ['./requests.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/requests/requests.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/requests/requests.module.ts ***!
  \*****************************************************/
/*! exports provided: RequestsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsModule", function() { return RequestsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requests-routing.module */ "./src/app/modules/requests/requests-routing.module.ts");
/* harmony import */ var _requests_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requests.component */ "./src/app/modules/requests/requests.component.ts");
/* harmony import */ var _requests_home_requests_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requests-home/requests-home.component */ "./src/app/modules/requests/requests-home/requests-home.component.ts");






class RequestsModule {
}
RequestsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestsModule });
RequestsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestsModule_Factory(t) { return new (t || RequestsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequestsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestsModule, { declarations: [_requests_component__WEBPACK_IMPORTED_MODULE_3__["RequestsComponent"], _requests_home_requests_home_component__WEBPACK_IMPORTED_MODULE_4__["RequestsHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequestsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_requests_component__WEBPACK_IMPORTED_MODULE_3__["RequestsComponent"], _requests_home_requests_home_component__WEBPACK_IMPORTED_MODULE_4__["RequestsHomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _requests_routing_module__WEBPACK_IMPORTED_MODULE_2__["RequestsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-requests-requests-module-es2015.js.map