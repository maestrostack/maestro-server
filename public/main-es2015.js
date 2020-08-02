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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shared/layout/layout.component */ "./src/app/modules/shared/layout/layout.component.ts");
/* harmony import */ var _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/core/guards/auth.guard */ "./src/app/modules/core/guards/auth.guard.ts");






const routes = [
    {
        path: '',
        component: _modules_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        canActivate: [
            _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
        ],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'pages/home'
            },
            {
                path: 'home',
                canActivate: [
                    _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-home-home-module */ "modules-home-home-module").then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts")).then(m => m.HomeModule)
            },
            {
                path: 'pages',
                canActivate: [
                    _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-pages-pages-module */ "modules-pages-pages-module").then(__webpack_require__.bind(null, /*! ./modules/pages/pages.module */ "./src/app/modules/pages/pages.module.ts")).then(m => m.PagesModule)
            },
            {
                path: 'stacks',
                canActivate: [
                    _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-stacks-stacks-module */ "modules-stacks-stacks-module").then(__webpack_require__.bind(null, /*! ./modules/stacks/stacks.module */ "./src/app/modules/stacks/stacks.module.ts")).then(m => m.StacksModule)
            },
            {
                path: 'dashboard',
                canActivate: [
                    _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            { path: 'requests', loadChildren: () => __webpack_require__.e(/*! import() | modules-requests-requests-module */ "modules-requests-requests-module").then(__webpack_require__.bind(null, /*! ./modules/requests/requests.module */ "./src/app/modules/requests/requests.module.ts")).then(m => m.RequestsModule) },
            {
                path: 'terraform-modules',
                canActivate: [
                    _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-terraform-modules-terraform-modules-module */ "modules-terraform-modules-terraform-modules-module").then(__webpack_require__.bind(null, /*! ./modules/terraform-modules/terraform-modules.module */ "./src/app/modules/terraform-modules/terraform-modules.module.ts")).then(m => m.TerraformModulesModule)
            },
            {
                path: 'design',
                canActivate: [
                    _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-design-design-module */ "modules-design-design-module").then(__webpack_require__.bind(null, /*! ./modules/design/design.module */ "./src/app/modules/design/design.module.ts")).then(m => m.DesignModule)
            },
            {
                path: 'scripts',
                canActivate: [
                    _modules_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
                ],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-scripts-scripts-module */ "modules-scripts-scripts-module").then(__webpack_require__.bind(null, /*! ./modules/scripts/scripts.module */ "./src/app/modules/scripts/scripts.module.ts")).then(m => m.ScriptsModule)
            },
            { path: 'catalog', loadChildren: () => __webpack_require__.e(/*! import() | modules-catalog-catalog-module */ "modules-catalog-catalog-module").then(__webpack_require__.bind(null, /*! ./modules/catalog/catalog.module */ "./src/app/modules/catalog/catalog.module.ts")).then(m => m.CatalogModule) },
            { path: 'tower-workflows', loadChildren: () => __webpack_require__.e(/*! import() | modules-tower-workflows-tower-workflows-module */ "modules-tower-workflows-tower-workflows-module").then(__webpack_require__.bind(null, /*! ./modules/tower-workflows/tower-workflows.module */ "./src/app/modules/tower-workflows/tower-workflows.module.ts")).then(m => m.TowerWorkflowsModule) },
            { path: 'workflows', loadChildren: () => __webpack_require__.e(/*! import() | modules-workflows-workflows-module */ "modules-workflows-workflows-module").then(__webpack_require__.bind(null, /*! ./modules/workflows/workflows.module */ "./src/app/modules/workflows/workflows.module.ts")).then(m => m.WorkflowsModule) },
            { path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | modules-admin-admin-module */ "modules-admin-admin-module").then(__webpack_require__.bind(null, /*! ./modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts")).then(m => m.AdminModule) },
        ]
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-auth-auth-module */ "modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then(m => m.AuthModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



// import { ClarityIcons } from '@clr/icons';
class AppComponent {
    constructor() {
        this.title = 'stacks-web-client';
        // @ts-ignore
        ClarityIcons.get();
        // @ts-ignore
        ClarityIcons.add({
            'maestro': '<svg height="512" viewBox="0 0 46 58" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="041---Train-Conductor" fill-rule="nonzero"><path id="Shape" d="m29.98 33.02v.07c.1962342 1.9935875 1.3136109 3.7806502 3.02 4.83l-10 20.08-10-20.08c1.7063891-1.0493498 2.8237658-2.8364125 3.02-4.83v-.07z" fill="#f9c795"/><path id="Shape" d="m35 20c0 5.37-1.98 10.12-5.02 13.02-1.8475692 1.8677115-4.3532058 2.9374531-6.98 2.98-2.6267942-.0425469-5.1324308-1.1122885-6.98-2.98-3.04-2.9-5.02-7.65-5.02-13.02.0018249-1.0371678.0753334-2.0729693.22-3.1l.01-.01c3.0464481 3.2597102 7.3083236 5.1100364 11.77 5.1100364s8.7235519-1.8503262 11.77-5.1100364l.01.01c.1446666 1.0270307.2181751 2.0628322.22 3.1z" fill="#fdd7ad"/><path id="Shape" d="m23 58h-22c-.55228475 0-1-.4477153-1-1 0-4.68.13-10.01 3.53-13.57 2.41-2.53 6.02-3.25 8.89-5.11.19-.13.39-.26.58-.39z" fill="#3b97d3"/><path id="Shape" d="m14.634 51.154 1.647-2.2c.1799976-.2375242.2446748-.5429536.1764053-.8330504s-.2623704-.534627-.5294053-.6669496l-2.375-1.188c-.3355308-.1676391-.5490385-.5089425-.553-.884v-7.462c8 5 10 20.08 10 20.08l-8.12-5.414c-.2287808-.1523452-.3847684-.3921421-.4313049-.663037-.0465364-.2708949.0204818-.5490015.1853049-.768963z" fill="#ecf0f1"/><path id="Shape" d="m33 37.93c.19.13.39.26.58.39 2.87 1.86 6.48 2.58 8.89 5.11 3.4 3.56 3.53 8.89 3.53 13.57 0 .5522847-.4477153 1-1 1h-22z" fill="#3b97d3"/><path id="Shape" d="m33 37.92v7.462c-.0002022.3786657-.2142706.7247365-.553.894l-2.375 1.188c-.2670349.1323226-.4611358.3768528-.5294053.6669496s-.0035923.5955262.1764053.8330504l1.647 2.2c.1648231.2199615.2318413.4980681.1853049.768963-.0465365.2708949-.2025241.5106918-.4313049.663037l-8.12 5.404s2-15.08 10-20.08z" fill="#ecf0f1"/><path id="Shape" d="m36.37 15c-.4924351.6635137-1.0268624 1.2948059-1.6 1.89-3.0464481 3.2597102-7.3083236 5.1100364-11.77 5.1100364s-8.7235519-1.8503262-11.77-5.1100364c-.5731376-.5951941-1.1075649-1.2264863-1.6-1.89z" fill="#35495e"/><path id="Shape" d="m39.79 8.65c-.8285906 2.270168-1.9804624 4.4088774-3.42 6.35h-26.74c-1.43953755-1.9411226-2.59140936-4.079832-3.42-6.35-.12891664-.39058734-.01062318-.82038693.3-1.09 4.6892791-3.91982503 10.3347165-6.52514606 16.36-7.55.086378-.01000371.173622-.01000371.26 0 6.0252835 1.02485394 11.6707209 3.63017497 16.36 7.55.3106232.26961307.4289166.69941266.3 1.09z" fill="#3b97d3"/><path id="Shape" d="m26 9.63h-6c-.5522847 0-1-.44771525-1-1s.4477153-1 1-1h6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1z" fill="#f3d55b"/></g></g></svg>',
            'terraform': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Terraform icon</title><path d="M8.283 4.265l7.433 3.776v7.551l-7.433-3.776V4.265zm8.248 3.776v7.551l7.436-3.776V4.265l-7.436 3.776zM.035.051v7.551l7.433 3.776V3.827L.035.051zm8.248 20.141l7.433 3.776V16.42l-7.433-3.776v7.548z"/></svg>',
            'ansible': '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ansible icon</title><path d="M10.617 11.473l4.686 3.695-3.102-7.662zM12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm5.797 17.305c-.011.471-.403.842-.875.83-.236 0-.416-.09-.664-.293l-6.19-5-2.079 5.203H6.191L11.438 5.44c.124-.314.427-.52.764-.506.326-.014.63.189.742.506l4.774 11.494c.045.111.08.234.08.348-.001.009-.001.009-.001.023z"/></svg>',
            'powershell': '<?xml version="1.0"?><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M49.324,7.34c-0.94-1.17-2.61-1.32-3.96-1.33C41.435,6,16.578,6,12.978,6.01c-3.999,0.01-5.579,1.27-6.479,5.17 C4.409,20.19,2.33,29.21,0.27,38.23c-0.31,1.37-0.55,3.11,0.42,4.33c0.99,1.24,2.79,1.41,4.249,1.41 c5.159,0.02,26.657,0.02,32.376,0c3.55-0.01,5.469-1.51,6.239-4.88c2.28-9.98,4.309-19.02,6.199-27.64 C50.044,10.15,50.254,8.5,49.324,7.34z M14.758,38.28c-1.2,0.88-2.34,1.11-3.3-0.2c-1.07-1.45-0.08-2.31,1.02-3.12 c3.96-2.89,7.909-5.8,11.839-8.72c0.55-0.41,1.27-0.97,1.74-1.32c-0.61-0.69-1.12-1.26-1.53-1.73c-2.43-2.73-4.659-5.27-7.069-7.87 c-1.1-1.19-1.45-2.34-0.13-3.52c1.31-1.16,2.6-1.06,3.789,0.28c3.34,3.72,6.679,7.44,10.069,11.1c1.27,1.37,0.98,2.3-0.42,3.32 C25.407,30.39,20.077,34.33,14.758,38.28z M32.246,38h-9.499c-1.13,0-1.75-1-1.75-2s0.62-2,1.75-2h9.499c1.13,0,1.75,1,1.75,2 S33.376,38,32.246,38z"/></svg>',
            'pwsh': '<?xml version="1.0"?><svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">    <path d="M49.324,7.34c-0.94-1.17-2.61-1.32-3.96-1.33C41.435,6,16.578,6,12.978,6.01c-3.999,0.01-5.579,1.27-6.479,5.17 C4.409,20.19,2.33,29.21,0.27,38.23c-0.31,1.37-0.55,3.11,0.42,4.33c0.99,1.24,2.79,1.41,4.249,1.41 c5.159,0.02,26.657,0.02,32.376,0c3.55-0.01,5.469-1.51,6.239-4.88c2.28-9.98,4.309-19.02,6.199-27.64 C50.044,10.15,50.254,8.5,49.324,7.34z M14.758,38.28c-1.2,0.88-2.34,1.11-3.3-0.2c-1.07-1.45-0.08-2.31,1.02-3.12 c3.96-2.89,7.909-5.8,11.839-8.72c0.55-0.41,1.27-0.97,1.74-1.32c-0.61-0.69-1.12-1.26-1.53-1.73c-2.43-2.73-4.659-5.27-7.069-7.87 c-1.1-1.19-1.45-2.34-0.13-3.52c1.31-1.16,2.6-1.06,3.789,0.28c3.34,3.72,6.679,7.44,10.069,11.1c1.27,1.37,0.98,2.3-0.42,3.32 C25.407,30.39,20.077,34.33,14.758,38.28z M32.246,38h-9.499c-1.13,0-1.75-1-1.75-2s0.62-2,1.75-2h9.499c1.13,0,1.75,1,1.75,2 S33.376,38,32.246,38z"/></svg>'
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
            _modules_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
        _modules_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                    _modules_core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/_alert/alert.component.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/_alert/alert.component.ts ***!
  \***************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "./src/app/modules/_alert/alert.model.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./src/app/modules/_alert/alert.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        if (this.fade) {
            // fade out alert
            this.alerts.find(x => x === alert).fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert)
            return;
        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success]: 'alert alert-success',
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error]: 'alert alert-danger',
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info]: 'alert alert-info',
            [_alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'alert', templateUrl: 'alert.component.html' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/_alert/alert.model.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/_alert/alert.model.ts ***!
  \***********************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/modules/_alert/alert.module.ts":
/*!************************************************!*\
  !*** ./src/app/modules/_alert/alert.module.ts ***!
  \************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component */ "./src/app/modules/_alert/alert.component.ts");




class AlertModule {
}
AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertModule, { declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]],
                exports: [_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/_alert/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/_alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.model */ "./src/app/modules/_alert/alert.model.ts");





class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"](Object.assign(Object.assign({}, options), { type: _alert_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Warning, message })));
    }
    // main alert method    
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_3__["Alert"]({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/_alert/index.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/_alert/index.ts ***!
  \*****************************************/
/*! exports provided: AlertModule, AlertService, Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.module */ "./src/app/modules/_alert/alert.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/modules/_alert/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]; });

/* harmony import */ var _alert_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.model */ "./src/app/modules/_alert/alert.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_2__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _alert_model__WEBPACK_IMPORTED_MODULE_2__["AlertType"]; });






/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_feathers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/feathers.service */ "./src/app/modules/core/services/feathers.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/modules/core/guards/auth.guard.ts");
/* harmony import */ var _guards_module_import_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/module-import.guard */ "./src/app/modules/core/guards/module-import.guard.ts");
/* harmony import */ var _datagrid_default_datagrid_default_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datagrid-default/datagrid-default.component */ "./src/app/modules/core/datagrid-default/datagrid-default.component.ts");









class CoreModule {
    constructor(parentModule) {
        Object(_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_6__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, providers: [
        _services_feathers_service__WEBPACK_IMPORTED_MODULE_2__["Feathers"],
        _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_datagrid_default_datagrid_default_component__WEBPACK_IMPORTED_MODULE_7__["DatagridDefaultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_datagrid_default_datagrid_default_component__WEBPACK_IMPORTED_MODULE_7__["DatagridDefaultComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                providers: [
                    _services_feathers_service__WEBPACK_IMPORTED_MODULE_2__["Feathers"],
                    _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]
                ]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/datagrid-default/datagrid-default.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/core/datagrid-default/datagrid-default.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DatagridDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatagridDefaultComponent", function() { return DatagridDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DatagridDefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
DatagridDefaultComponent.ɵfac = function DatagridDefaultComponent_Factory(t) { return new (t || DatagridDefaultComponent)(); };
DatagridDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatagridDefaultComponent, selectors: [["app-datagrid-default"]], decls: 2, vars: 0, template: function DatagridDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "datagrid-default works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29yZS9kYXRhZ3JpZC1kZWZhdWx0L2RhdGFncmlkLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatagridDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-datagrid-default',
                templateUrl: './datagrid-default.component.html',
                styleUrls: ['./datagrid-default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/guards/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/core/guards/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/modules/core/services/auth.service.ts");




class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(next, state) {
        /* Try to auth with the server. If authed resolve to true, else resolve to false */
        return this.auth
            .reAuth()
            .then(() => true)
            .catch(() => {
            this.router.navigate(['/auth/login']);
            return false;
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/guards/module-import.guard.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/core/guards/module-import.guard.ts ***!
  \************************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/modules/core/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _feathers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feathers.service */ "./src/app/modules/core/services/feathers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




/**
 * Abstraction layer for auth. Nice to have when things get more complicated.
 */
class AuthService {
    constructor(feathers, router) {
        this.feathers = feathers;
        this.router = router;
    }
    logIn(credentials) {
        return this.feathers.authenticate(credentials);
    }
    reAuth() {
        return this.feathers.reAuth();
    }
    logOut() {
        this.feathers.logout();
        this.router.navigate(['/']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_feathers_service__WEBPACK_IMPORTED_MODULE_1__["Feathers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _feathers_service__WEBPACK_IMPORTED_MODULE_1__["Feathers"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/data.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/services/data.service.ts ***!
  \*******************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _feathers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feathers.service */ "./src/app/modules/core/services/feathers.service.ts");



/**
 *  Abstraction layer for data management
 *  Technically this isn't needed for feathers-chat,
 *  but you will need it for more complex tasks.
 */
class DataService {
    constructor(feathers) {
        this.feathers = feathers;
    }
    messages$() {
        // just returning the observable will query the backend on every subscription
        // using some caching mechanism would be wise in more complex applications
        return (this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
            .service('messages'))
            .watch()
            .find({
            query: {
                $sort: { createdAt: -1 },
                $limit: 25
            }
        });
    }
    users$() {
        // just returning the observable will query the backend on every subscription
        // using some caching mechanism would be wise in more complex applications
        return this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
            .service('users')
            .watch()
            .find();
    }
    directReports$() {
        return this.feathers
            .service('ad/direct-reports')
            .find();
    }
    authLogs$(query) {
        this.feathers.service('duo-auth').timeout;
        return this.feathers
            .service('duo-auth')
            .find({
            query
        });
    }
    vmwVM(name) {
        return this.feathers
            .service('vmware-vm')
            .watch()
            .get(name);
    }
    records$(table, query) {
        return this.feathers
            .service(table)
            .watch()
            .find({
            query
        });
    }
    findRecords(table, query) {
        return this.feathers
            .service(table)
            .find({
            query
        });
    }
    record$(table, id) {
        console.log(id);
        return this.feathers
            .service(table)
            .watch()
            .get(id);
    }
    getRecord(table, id) {
        return this.feathers
            .service(table)
            .get(id);
    }
    group$() {
        // just returning the observable will query the backend on every subscription
        // using some caching mechanism would be wise in more complex applications
        return this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
            .service('user-groups')
            .watch()
            .find();
    }
    createGroup(data) {
        // feathers-reactive Observables are hot by default,
        // so we don't need to subscribe to make create() happen.
        this.feathers
            .service('user-groups')
            .create(data);
    }
    createRecord(table, data) {
        return this.feathers
            .service(table)
            .create(data);
    }
    createGuacSession(data) {
        return this.feathers
            .service('guac-session')
            .create(data);
    }
    updateRecord(table, id, data) {
        return this.feathers
            .service(table)
            .patch(id, data);
    }
    deleteRecord(table, id, data) {
        let recordData = {
            table,
            data
        };
        // backup the record
        this.feathers
            .service('api/deleted-records')
            .create(recordData);
        // delete the record
        return this.feathers
            .service(table)
            .remove(id);
    }
    checkSetup() {
        return this.feathers
            .service('system')
            .find();
    }
    sendMessage(message) {
        if (message === '') {
            return;
        }
        // feathers-reactive Observables are hot by default,
        // so we don't need to subscribe to make create() happen.
        this.feathers
            .service('messages')
            .create({
            text: message
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_feathers_service__WEBPACK_IMPORTED_MODULE_1__["Feathers"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _feathers_service__WEBPACK_IMPORTED_MODULE_1__["Feathers"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/services/feathers.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/services/feathers.service.ts ***!
  \***********************************************************/
/*! exports provided: Feathers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feathers", function() { return Feathers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var feathers_reactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! feathers-reactive */ "./node_modules/feathers-reactive/lib/index.js");
/* harmony import */ var feathers_reactive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feathers_reactive__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @feathersjs/feathers */ "./node_modules/@feathersjs/feathers/lib/index.js");
/* harmony import */ var _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_feathers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @feathersjs/socketio-client */ "./node_modules/@feathersjs/socketio-client/lib/index.js");
/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_4__);






/**
 * Simple wrapper for feathers
 */
class Feathers {
    constructor() {
        this._feathers = _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_3___default()(); // init socket.io
        //private _socket = io('https://sde.shawnmbradley.com');      // init feathers
        this._socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://localhost:3030');
        //private _socket = io('https://stacks.coretech.chst.io');      // init feathers
        this.feathersAuthClient = __webpack_require__(/*! @feathersjs/authentication-client */ "./node_modules/@feathersjs/authentication-client/lib/index.js").default;
        this._feathers
            .configure(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_4___default()(this._socket, {
            timeout: 200000
        })) // add socket.io plugin
            .configure(this.feathersAuthClient({
            storage: window.localStorage
        }))
            .configure(feathers_reactive__WEBPACK_IMPORTED_MODULE_1__({
            idField: '_id'
        }));
    }
    // expose services
    service(name) {
        return this._feathers.service(name);
    }
    // expose authentication
    authenticate(credentials) {
        return this._feathers.authenticate(credentials);
    }
    reAuth() {
        return this._feathers.reAuthenticate();
    }
    // expose logout
    logout() {
        return this._feathers.logout();
    }
}
Feathers.ɵfac = function Feathers_Factory(t) { return new (t || Feathers)(); };
Feathers.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Feathers, factory: Feathers.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Feathers, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/shared/layout/layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/layout/layout.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");






function LayoutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LayoutComponent_clr_dropdown_menu_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dropdown-menu", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_clr_dropdown_menu_31_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import { ClarityIcons } from '@clr/icons';
class LayoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAdmin = true;
        this.alerts = false;
        this.snavOpened = true;
        this.collapsed = true;
        this.authService.logIn()
            .then(data => {
            // console.log(data)
            this.isAdmin = data.user.is_admin;
            console.log(this.isAdmin);
        })
            .catch(error => {
            this.router.navigate(['/auth/login']);
        });
        // console.log(ClarityIcons.get())
        // ClarityIcons.add({
        //   'terraform': '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 80.8" width="2228" height="2500"><style>.st0{fill:#000}</style><g id="XMLID_8_"><path id="XMLID_21_" class="st0" d="M25.4 14.3l21.4 12.4v24.7L25.4 39z"/><path id="XMLID_20_" class="st0" d="M50.6 26.7L72 14.3V39L50.6 51.4z"/><path id="XMLID_19_" class="st0" d="M0 0l21.4 12.4v24.7L0 24.7z"/><path id="XMLID_18_" class="st0" d="M25.4 43.7L46.8 56v24.8L25.4 68.4z"/></g></svg>',
        //   'ansible': '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 65" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink:href="#A" x=".5" y=".5"/><symbol id="A" overflow="visible"><g stroke="none" fill-rule="nonzero"><path d="M64 32c0 17.674-14.326 32-32 32S0 49.674 0 32 14.328 0 32 0s32 14.328 32 32" fill="#1a1918"/><path d="M32.54 19.548l8.28 20.438-12.508-9.853zm14.7 25.147L34.512 14.04c-.364-.884-1.1-1.352-1.973-1.352s-1.664.468-2.028 1.352L16.52 47.664h4.783L26.837 33.8l16.515 13.343c.664.537 1.144.78 1.767.78 1.248 0 2.338-.936 2.338-2.286 0-.22-.078-.57-.218-.944z"/></g></symbol></svg>'
        // })
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logOut();
        this.router.navigate(['/auth/login']);
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 35, vars: 3, consts: [[1, "main-container"], ["class", "alert alert-app-level", 4, "ngIf"], [1, "content-container"], [1, "nav-trigger--bottom", 3, "clrVerticalNavCollapsible", "clrVerticalNavCollapsed", "clrVerticalNavCollapsedChange"], ["clrVerticalNavLink", "", "routerLink", "/pages/home", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "home", 1, "is-solid"], ["clrVerticalNavLink", "", "routerLink", "/stacks", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "layers", 1, "is-solid"], ["clrVerticalNavLink", "", "routerLink", "/scheduled-tasks", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "clock", 1, "is-solid"], ["clrVerticalNavLink", "", "routerLink", "/design", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "design", 1, "is-solid"], ["clrVerticalNavLink", "", "routerLink", "/admin", "routerLinkActive", "active"], ["clrVerticalNavIcon", "", "shape", "administrator", 1, "is-solid"], [1, "content-area", 2, "padding", "0", "margin", "0", "height", "100%"], [1, "header", "header-5"], [1, "branding"], ["href", "javascript://", 1, "nav-link"], [1, "title"], [1, "header-actions"], ["clrDropdownTrigger", "", "aria-label", "toggle settings menu", 1, "nav-icon"], ["shape", "cog"], ["shape", "caret down"], ["clrPosition", "bottom-right", 4, "clrIfOpen"], [1, "content-area", 2, "padding", "0 !important", "margin", "0 !important", "overflow", "hidden"], [1, "alert", "alert-app-level"], ["clrPosition", "bottom-right"], ["href", "...", "clrDropdownItem", ""], ["href", "javascript://", "clrDropdownItem", "", 3, "click"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-vertical-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrVerticalNavCollapsedChange", function LayoutComponent_Template_clr_vertical_nav_clrVerticalNavCollapsedChange_3_listener($event) { return ctx.collapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "clr-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Stacks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "clr-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Scheduled Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "clr-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "clr-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Administration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "header", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Maestro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "clr-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "clr-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "clr-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LayoutComponent_clr_dropdown_menu_31_Template, 7, 0, "clr-dropdown-menu", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrVerticalNavCollapsible", true)("clrVerticalNavCollapsed", ctx.collapsed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrVerticalNav"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrVerticalNavLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrVerticalNavIcon"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdownItem"]], styles: [".navbar-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.navbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.navbar-is-mobile[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\n.navbar-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.navbar-is-mobile[_ngcontent-%COMP%]   .navbar-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\n\n\n\nmat-sidenav[_ngcontent-%COMP%] {\n  min-width: 200px !important;\n  border-right: 1px solid #eee;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n  \n}\n\n\n\n.progress-bar-container[_ngcontent-%COMP%] {\n  height: 5px;\n}\n\na.mat-list-item.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n#push-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvc3RhY2tzL3N0YWNrcy13ZWItY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsOEVBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRTtnR0FBQTtFQUVBLE9BQUE7QUNDRjs7QURFQTtFQUNFO3FFQUFBO0VBRUEsY0FBQTtBQ0NGOztBREVBLG9CQUFBOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUNBQUE7QUNBRjs7QURHQSxnRUFBQTs7QUFFQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLCtCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubmF2YmFyIHtcbiAgei1pbmRleDogMjtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2YmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubmF2YmFyLWlzLW1vYmlsZSAubmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXG4gIHotaW5kZXg6IDI7XG59XG5cbi5uYXZiYXItc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXG4gICAgICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXG4gIGZsZXg6IDE7XG59XG5cbi5uYXZiYXItaXMtbW9iaWxlIC5uYXZiYXItc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxuICAgICAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xuICBmbGV4OiAxIDAgYXV0bztcbn1cblxuLypTZXQgc2lkZW5hdiB3aWR0aCovXG5cbm1hdC1zaWRlbmF2IHtcbiAgbWluLXdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWVlO1xuICBib3gtc2hhZG93OiA2cHggMCA2cHggcmdiYSgwLCAwLCAwLCAuMSk7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDYzLCA4MSwgMTgxKTsgKi9cbn1cblxuLyogU2V0IGhlaWdodCBvZiB3cmFwcGVyIHRvIHN0b3AgY29udGVudCBmcm9tIG1vdmluZyB1cCAmIGRvd24gKi9cblxuLnByb2dyZXNzLWJhci1jb250YWluZXIge1xuICBoZWlnaHQ6IDVweDtcbn1cblxuYS5tYXQtbGlzdC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjA0KTtcbn1cblxuI3B1c2gtYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi5jbHItdmVydGljYWwtbmF2IHtcbiAgLy9wYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xuICAvLyBtaW4td2lkdGg6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLy8gLmNsci12ZXJ0aWNhbC1uYXYgLm5hdi1pY29uIHtcbi8vICAgbWFyZ2luLWxlZnQ6IDIycHggIWltcG9ydGFudDtcbi8vIH1cblxuLy8gLmNsci12ZXJ0aWNhbC1uYXYgLm5hdi1saW5rIHtcbi8vICAgcGFkZGluZzpcbi8vIH1cblxuIiwiLm5hdmJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm5hdmJhciB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdmJhci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5hdmJhci1pcy1tb2JpbGUgLm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogTWFrZSBzdXJlIHRoZSB0b29sYmFyIHdpbGwgc3RheSBvbiB0b3Agb2YgdGhlIGNvbnRlbnQgYXMgaXQgc2Nyb2xscyBwYXN0LiAqL1xuICB6LWluZGV4OiAyO1xufVxuXG4ubmF2YmFyLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xuICAgICAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxO1xufVxuXG4ubmF2YmFyLWlzLW1vYmlsZSAubmF2YmFyLXNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcbiAgICAgICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cbiAgZmxleDogMSAwIGF1dG87XG59XG5cbi8qU2V0IHNpZGVuYXYgd2lkdGgqL1xubWF0LXNpZGVuYXYge1xuICBtaW4td2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6cmdiKDYzLCA4MSwgMTgxKTsgKi9cbn1cblxuLyogU2V0IGhlaWdodCBvZiB3cmFwcGVyIHRvIHN0b3AgY29udGVudCBmcm9tIG1vdmluZyB1cCAmIGRvd24gKi9cbi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbmEubWF0LWxpc3QtaXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4jcHVzaC1ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: src_app_modules_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/shared/page-loading/page-loading.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/page-loading/page-loading.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoadingComponent", function() { return PageLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageLoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLoadingComponent.ɵfac = function PageLoadingComponent_Factory(t) { return new (t || PageLoadingComponent)(); };
PageLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoadingComponent, selectors: [["app-page-loading"]], decls: 4, vars: 0, consts: [[1, "loading-wrapper", 2, "height", "100%"], [1, "loading-container", 2, "height", "100%", "text-align", "center", "padding-top", "20%"], [1, "spinner"]], template: function PageLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3BhZ2UtbG9hZGluZy9wYWdlLWxvYWRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-loading',
                templateUrl: './page-loading.component.html',
                styleUrls: ['./page-loading.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/shared/records-list-view/records-list-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/shared/records-list-view/records-list-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecordsListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsListViewComponent", function() { return RecordsListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tables */ "./src/app/modules/shared/tables.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-record-details/shared-record-details.component */ "./src/app/modules/shared/shared-record-details/shared-record-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










function RecordsListViewComponent_app_page_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function RecordsListViewComponent_span_1_clr_datagrid_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordsListViewComponent_span_1_clr_datagrid_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.onCreateRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Add ", ctx_r5.currentTable.singularName, " ");
} }
function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_column_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r12.label, " ");
} }
const _c0 = function (a0) { return { hidden: a0 }; };
function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_column_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_column_6_ng_container_1_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", c_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, c_r12.hide));
} }
function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_row_7_clr_dg_cell_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = ctx.$implicit;
    const r_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", r_r15[c_r17.name], " ");
} }
function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_row_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-action-overflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_row_7_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const r_r15 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.onDelete(r_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_row_7_clr_dg_cell_4_Template, 2, 1, "clr-dg-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItem", r_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.currentTable.listViewCols);
} }
function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_detail_14_clr_dg_detail_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-detail-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", detail_r21.first_name, " ", detail_r21.last_name, "");
} }
function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_detail_14_clr_dg_detail_header_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-detail-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r21.name);
} }
function RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_detail_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_detail_14_clr_dg_detail_header_1_Template, 2, 2, "clr-dg-detail-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_detail_14_clr_dg_detail_header_2_Template, 2, 1, "clr-dg-detail-header", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-detail-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-shared-record-details", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r21 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currentTable.servicePath == "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.currentTable.servicePath != "users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("record", detail_r21)("table", ctx_r9.currentTable);
} }
const _c1 = function () { return [100, 150, 200, 250]; };
function RecordsListViewComponent_span_1_clr_datagrid_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-datagrid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-action-bar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecordsListViewComponent_span_1_clr_datagrid_1_button_3_Template, 3, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hmm... We couldn't find any records!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_column_6_Template, 2, 4, "clr-dg-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_row_7_Template, 5, 2, "clr-dg-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-pagination", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-dg-page-size", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Variables per page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RecordsListViewComponent_span_1_clr_datagrid_1_clr_dg_detail_14_Template, 5, 4, "clr-dg-detail", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const records_r4 = ctx.ngIf;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.currentTable.hideAddAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.currentTable.listViewCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", records_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r8.firstItem + 1, " - ", _r8.lastItem + 1, " of ", _r8.totalItems, " variables ");
} }
function RecordsListViewComponent_span_1_form_7_span_1_clr_input_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecordsListViewComponent_span_1_form_7_span_1_clr_input_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r32.newRecord[f_r27.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-control-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r27.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r28.newRecord[f_r27.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r27.help, " ");
} }
function RecordsListViewComponent_span_1_form_7_span_1_clr_textarea_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-textarea-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecordsListViewComponent_span_1_form_7_span_1_clr_textarea_container_2_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r36.newRecord[f_r27.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-control-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r27.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.newRecord[f_r27.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r27.help, " ");
} }
function RecordsListViewComponent_span_1_form_7_span_1_clr_select_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-select-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecordsListViewComponent_span_1_form_7_span_1_clr_select_container_3_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r40.newRecord[f_r27.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-control-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r27.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.newRecord[f_r27.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r27.help, " ");
} }
function RecordsListViewComponent_span_1_form_7_span_1_clr_password_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-password-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RecordsListViewComponent_span_1_form_7_span_1_clr_password_container_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r44.newRecord[f_r27.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r27.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r31.newRecord[f_r27.name]);
} }
function RecordsListViewComponent_span_1_form_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordsListViewComponent_span_1_form_7_span_1_clr_input_container_1_Template, 6, 4, "clr-input-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RecordsListViewComponent_span_1_form_7_span_1_clr_textarea_container_2_Template, 6, 4, "clr-textarea-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RecordsListViewComponent_span_1_form_7_span_1_clr_select_container_3_Template, 10, 4, "clr-select-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RecordsListViewComponent_span_1_form_7_span_1_clr_password_container_4_Template, 4, 3, "clr-password-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r27.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r27.type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r27.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r27.type == "password");
} }
function RecordsListViewComponent_span_1_form_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordsListViewComponent_span_1_form_7_span_1_Template, 5, 4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.currentTable.addRecordForm.fields);
} }
function RecordsListViewComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordsListViewComponent_span_1_clr_datagrid_1_Template, 15, 9, "clr-datagrid", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-modal", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function RecordsListViewComponent_span_1_Template_clr_modal_clrModalOpenChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.showCreateRecord = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RecordsListViewComponent_span_1_form_7_Template, 2, 1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordsListViewComponent_span_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.showCreateRecord = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecordsListViewComponent_span_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.createRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r1.records$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx_r1.showCreateRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add ", ctx_r1.currentTable.singularName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentTable);
} }
class RecordsListViewComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.query = {};
        this.filterOnParent = false;
        this.loading = true;
        this.service = 'api/terraform/modules';
        this.selected = [];
        this.addRecord = false;
        this.showCreateRecord = false;
        this.newRecord = {};
    }
    ngOnInit() {
        //this.filterOnParent = false;
    }
    ngAfterViewInit() {
        this.currentTable = _tables__WEBPACK_IMPORTED_MODULE_2__["tables"][this.table];
        console.log('\n\n ---- TABLE ----');
        console.log(this.table);
        console.log(this.currentTable);
        console.log('\n\n FILTER ON PARENT');
        console.log(this.filterOnParent);
        // console.log(this.filterOnParent)
        // console.log('\n\n ---- PARENT ID ----');
        // console.log(this.parentId)
        if (this.filterOnParent) {
            this.query = {
                _parent: this.parentId
            };
        }
        // console.log(this.query);
        this.records$ = this.dataService.records$(this.currentTable.servicePath, this.query)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((r) => r.data));
        // this.loading = false;
        this.recordsLoaded = this.records$.subscribe(() => this.loading = false);
    }
    ngOnDestroy() {
        this.recordsLoaded.unsubscribe();
    }
    createRecord() {
        let errors = [];
        for (var f in this.currentTable.addRecordForm.fields) {
            let req = this.currentTable.addRecordForm.fields[f].required;
            let length = this.newRecord[this.currentTable.addRecordForm.fields[f].name].length;
            if (req && length == 0) {
                errors.push(`${this.currentTable.addRecordForm.fields[f].label} is a required field`);
            }
        }
        if (errors.length == 0) {
            if (this.parentId) {
                this.newRecord['_parent'] = this.parentId;
            }
            // tag record with a node type for use when executing the action or resource.
            if (this.currentTable.node_type) {
                this.newRecord.node_type = this.currentTable.node_type;
            }
            this.dataService.createRecord(this.currentTable.servicePath, this.newRecord)
                .then(data => {
                // if(this.currentTable.servicePath == 'api/workflows') {
                // }
                this.addRecord = false;
                this.showCreateRecord = false;
            })
                .catch(error => {
            });
        }
        else {
            errors.forEach(e => {
                alert(e);
            });
        }
    }
    onCreateRecord() {
        this.showCreateRecord = true;
    }
    onEdit(r) {
    }
    onDelete(r) {
        alert('TODO: Allow deletion of modules while making sure we do not break down stream stacks...');
        // this.dataService.records$('api/terraform/module-variables', {
        //   _module: r._id
        // })
        // .pipe(
        //   map(( r: Paginated<any>) => r.total)
        // )
        // .subscribe( total => {
        //   if(total == 0) {
        //   }
        //   else {
        //     alert('');
        //   }
        // } )
    }
}
RecordsListViewComponent.ɵfac = function RecordsListViewComponent_Factory(t) { return new (t || RecordsListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
RecordsListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecordsListViewComponent, selectors: [["app-records-list-view"]], inputs: { table: "table", query: "query", filterOnParent: "filterOnParent", parentId: "parentId" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "list-view-content", 4, "ngIf"], [1, "list-view-content"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrForm", "", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [2, "margin-top", "0px !important"], [1, "btn-group"], ["type", "button", "class", "btn btn-sm btn-secondary", 3, "click", 4, "ngIf"], [3, "clrDgField", 4, "ngFor", "ngForOf"], [3, "clrDgItem", 4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], [4, "clrIfDetail"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["shape", "plus"], [3, "clrDgField"], [4, "clrDgHideableColumn"], [3, "clrDgItem"], [1, "action-item", 3, "click"], [4, "ngFor", "ngForOf"], [3, "record", "table"], ["clrForm", ""], ["class", "w-100", 4, "ngFor", "ngForOf"], [1, "w-100"], [1, "clr-col-12", "clr-col-md-3"], ["clrInput", "", "type", "text", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "name", "ngModelChange"], ["clrTextarea", "", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "name", "ngModelChange"], ["clrSelect", "", 1, "clr-col-12", "clr-col-md-9", 3, "name", "ngModel", "ngModelChange"], ["value", "true"], ["value", "false"], ["clrPassword", "", "placeholder", "Password please!", 1, "clr-col-12", "clr-col-md-9", 3, "name", "ngModel", "ngModelChange"]], template: function RecordsListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RecordsListViewComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecordsListViewComponent_span_1_Template, 13, 6, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_5__["PageLoadingComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrModalBody"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridActionBar"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridPlaceholder"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridHideableColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridActionOverflow"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdm"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridDetailBody"], _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_7__["SharedRecordDetailsComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridDetailHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTextarea"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPasswordContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPassword"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3JlY29yZHMtbGlzdC12aWV3L3JlY29yZHMtbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecordsListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-records-list-view',
                templateUrl: './records-list-view.component.html',
                styleUrls: ['./records-list-view.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['table']
        }], query: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['query']
        }], filterOnParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['filterOnParent']
        }], parentId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['parentId']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/shared/shared-record-create/shared-record-create.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shared/shared-record-create/shared-record-create.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SharedRecordCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRecordCreateComponent", function() { return SharedRecordCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharedRecordCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedRecordCreateComponent.ɵfac = function SharedRecordCreateComponent_Factory(t) { return new (t || SharedRecordCreateComponent)(); };
SharedRecordCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedRecordCreateComponent, selectors: [["app-shared-record-create"]], decls: 2, vars: 0, template: function SharedRecordCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shared-record-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3NoYXJlZC1yZWNvcmQtY3JlYXRlL3NoYXJlZC1yZWNvcmQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRecordCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared-record-create',
                templateUrl: './shared-record-create.component.html',
                styleUrls: ['./shared-record-create.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/shared/shared-record-details/shared-record-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/shared/shared-record-details/shared-record-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SharedRecordDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRecordDetailsComponent", function() { return SharedRecordDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


function SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_app_shared_record_edit_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shared-record-edit", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", ctx_r3.table)("record", ctx_r3.record);
} }
function SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_app_records_list_view_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-records-list-view", 8);
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", tab_r1.child)("filterOnParent", tab_r1.filterOnParent)("parentId", ctx_r4.record._id);
} }
function SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "clr-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Open Designer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/design/studio/", ctx_r5.record._id, "");
} }
function SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_app_shared_record_edit_2_Template, 1, 2, "app-shared-record-edit", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_app_records_list_view_3_Template, 1, 3, "app-records-list-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_div_4_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r1.type == "edit-record");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r1.type == "child-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r1.type == "launch-workflow-designer");
} }
function SharedRecordDetailsComponent_clr_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SharedRecordDetailsComponent_clr_tab_1_clr_tab_content_3_Template, 5, 3, "clr-tab-content", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.label);
} }
class SharedRecordDetailsComponent {
    constructor() {
        this.inOverflow = true;
    }
    ngOnInit() {
        console.log('SHARED RECORD DETAILS');
        console.log(this.table);
    }
}
SharedRecordDetailsComponent.ɵfac = function SharedRecordDetailsComponent_Factory(t) { return new (t || SharedRecordDetailsComponent)(); };
SharedRecordDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedRecordDetailsComponent, selectors: [["app-shared-record-details"]], inputs: { table: "table", record: "record" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["clrTabLink", ""], [4, "clrIfActive"], [2, "margin-top", "15px"], [3, "table", "record", 4, "ngIf"], [3, "table", "filterOnParent", "parentId", 4, "ngIf"], ["class", "launch-workflow-designer", 4, "ngIf"], [3, "table", "record"], [3, "table", "filterOnParent", "parentId"], [1, "launch-workflow-designer"], ["target", "_blank", 1, "btn", "btn-lg", "btn-icon", 3, "routerLink"], ["shape", "organization"]], template: function SharedRecordDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharedRecordDetailsComponent_clr_tab_1_Template, 4, 1, "clr-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.table.recordDetailTabs);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3NoYXJlZC1yZWNvcmQtZGV0YWlscy9zaGFyZWQtcmVjb3JkLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRecordDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared-record-details',
                templateUrl: './shared-record-details.component.html',
                styleUrls: ['./shared-record-details.component.scss']
            }]
    }], function () { return []; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['table']
        }], record: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['record']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/shared/shared-record-edit/shared-record-edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/shared-record-edit/shared-record-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SharedRecordEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRecordEditComponent", function() { return SharedRecordEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function SharedRecordEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your changes have been saved to the database. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedRecordEditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your changes could not be saved to the database, please try again. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedRecordEditComponent_form_2_span_1_clr_input_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharedRecordEditComponent_form_2_span_1_clr_input_container_1_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r9.record[f_r4.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-control-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.record[f_r4.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r4.help, " ");
} }
function SharedRecordEditComponent_form_2_span_1_clr_textarea_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-textarea-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharedRecordEditComponent_form_2_span_1_clr_textarea_container_2_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r13.record[f_r4.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-control-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r6.record[f_r4.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r4.help, " ");
} }
function SharedRecordEditComponent_form_2_span_1_clr_select_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-select-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharedRecordEditComponent_form_2_span_1_clr_select_container_3_Template_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r17.record[f_r4.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-control-helper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.record[f_r4.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", f_r4.help, " ");
} }
function SharedRecordEditComponent_form_2_span_1_clr_password_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-password-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SharedRecordEditComponent_form_2_span_1_clr_password_container_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r21.record[f_r4.name] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", f_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.record[f_r4.name]);
} }
function SharedRecordEditComponent_form_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharedRecordEditComponent_form_2_span_1_clr_input_container_1_Template, 6, 4, "clr-input-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SharedRecordEditComponent_form_2_span_1_clr_textarea_container_2_Template, 6, 4, "clr-textarea-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SharedRecordEditComponent_form_2_span_1_clr_select_container_3_Template, 10, 4, "clr-select-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SharedRecordEditComponent_form_2_span_1_clr_password_container_4_Template, 4, 3, "clr-password-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.type == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.type == "textarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.type == "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.type == "password");
} }
function SharedRecordEditComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharedRecordEditComponent_form_2_span_1_Template, 5, 4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharedRecordEditComponent_form_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.updateRecord(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.table.addRecordForm.fields);
} }
class SharedRecordEditComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.loading = true;
        this.saveRecordSuccess = false;
        this.saveRecordError = false;
        this.selected = [];
        this.addRecord = false;
        this.showCreateRecord = false;
        this.newRecord = {};
    }
    ngOnInit() {
        //this.filterOnParent = false;
    }
    ngAfterViewInit() {
        // this.editRecordTable = tableData.tables[this.table];
        // console.log('\n\n ---- TABLE ----');
        // console.log(this.currentTable);
        // console.log('\n\n FILTER ON PARENT');
        // console.log(this.filterOnParent)
        // // console.log(this.filterOnParent)
        // console.log('\n\n ---- PARENT ID ----');
        // console.log(this.parentId)
        // if(this.filterOnParent) {
        //   this.query = {
        //     _parent: this.parentId
        //   }
        // }
        // console.log(this.query);
        // this.records$ = this.dataService.records$(this.currentTable.servicePath, this.query)
        //   .pipe(
        //     map(( r: Paginated<any>) => r.data)
        //   )
        //   // this.loading = false;
        //   this.recordsLoaded = this.records$.subscribe( () => this.loading = false);
    }
    ngOnDestroy() {
        // this.recordsLoaded.unsubscribe();
    }
    createRecord() {
        // let errors = [];
        // for ( var f in this.currentTable.addRecordForm.fields ) {
        //   let req = this.currentTable.addRecordForm.fields[f].required;
        //   let length = this.newRecord[this.currentTable.addRecordForm.fields[f].name].length;
        //   if(req && length == 0) {
        //     errors.push(`${this.currentTable.addRecordForm.fields[f].label} is a required field`)
        //   }
        // }
        // if(errors.length == 0) {
        //   if(this.parentId) {
        //     this.newRecord['_parent'] = this.parentId;
        //   }
        // this.dataService.createRecord(this.currentTable.servicePath, this.newRecord)
        //   .then( data => {
        //     this.addRecord = false;
        //   })
        //   .catch(
        //     error => {
        //     }
        //   )
        // } else {
        //   errors.forEach( e => {
        //     alert(e);
        //   })
        // }
    }
    onCreateRecord() {
        this.showCreateRecord = true;
    }
    updateRecord() {
        this.dataService.updateRecord(this.table.servicePath, this.record._id, this.record)
            .then(() => {
            this.saveRecordSuccess = true;
            setTimeout(() => {
                this.saveRecordSuccess = false;
            }, 3000);
        })
            .catch(() => {
            this.saveRecordError = true;
            setTimeout(() => {
                this.saveRecordError = false;
            }, 3000);
        });
    }
    onEdit(r) {
    }
    onDelete(r) {
        alert('TODO: Allow deletion of modules while making sure we do not break down stream stacks...');
        // this.dataService.records$('api/terraform/module-variables', {
        //   _module: r._id
        // })
        // .pipe(
        //   map(( r: Paginated<any>) => r.total)
        // )
        // .subscribe( total => {
        //   if(total == 0) {
        //   }
        //   else {
        //     alert('');
        //   }
        // } )
    }
}
SharedRecordEditComponent.ɵfac = function SharedRecordEditComponent_Factory(t) { return new (t || SharedRecordEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
SharedRecordEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedRecordEditComponent, selectors: [["app-shared-record-edit"]], inputs: { table: "table", record: "record" }, decls: 3, vars: 3, consts: [["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["clrForm", "", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "check-circle", 1, "alert-icon"], [1, "alert-text"], ["role", "alert", 1, "alert", "alert-danger"], ["clrForm", ""], ["class", "w-100", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "w-100"], [4, "ngIf"], [1, "clr-col-12", "clr-col-md-3"], ["clrInput", "", "type", "text", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "name", "ngModelChange"], ["clrTextarea", "", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "name", "ngModelChange"], ["clrSelect", "", 1, "clr-col-12", "clr-col-md-9", 3, "name", "ngModel", "ngModelChange"], ["value", "true"], ["value", "false"], ["clrPassword", "", "placeholder", "Password please!", 1, "clr-col-12", "clr-col-md-9", 3, "name", "ngModel", "ngModelChange"]], template: function SharedRecordEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SharedRecordEditComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharedRecordEditComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SharedRecordEditComponent_form_2_Template, 4, 1, "form", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.saveRecordSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.saveRecordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.table);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrAlertText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTextarea"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSelectContainer"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPasswordContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrPassword"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3NoYXJlZC1yZWNvcmQtZWRpdC9zaGFyZWQtcmVjb3JkLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRecordEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared-record-edit',
                templateUrl: './shared-record-edit.component.html',
                styleUrls: ['./shared-record-edit.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['table']
        }], record: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['record']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/shared/shared-record-related-table/shared-record-related-table.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/shared/shared-record-related-table/shared-record-related-table.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SharedRecordRelatedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRecordRelatedTableComponent", function() { return SharedRecordRelatedTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharedRecordRelatedTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedRecordRelatedTableComponent.ɵfac = function SharedRecordRelatedTableComponent_Factory(t) { return new (t || SharedRecordRelatedTableComponent)(); };
SharedRecordRelatedTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedRecordRelatedTableComponent, selectors: [["app-shared-record-related-table"]], inputs: { table: "table" }, decls: 2, vars: 0, template: function SharedRecordRelatedTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shared-record-related-table works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3NoYXJlZC1yZWNvcmQtcmVsYXRlZC10YWJsZS9zaGFyZWQtcmVjb3JkLXJlbGF0ZWQtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRecordRelatedTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shared-record-related-table',
                templateUrl: './shared-record-related-table.component.html',
                styleUrls: ['./shared-record-related-table.component.scss']
            }]
    }], function () { return []; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['table']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/modules/shared/layout/layout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_alert */ "./src/app/modules/_alert/index.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./records-list-view/records-list-view.component */ "./src/app/modules/shared/records-list-view/records-list-view.component.ts");
/* harmony import */ var _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-record-details/shared-record-details.component */ "./src/app/modules/shared/shared-record-details/shared-record-details.component.ts");
/* harmony import */ var _shared_record_create_shared_record_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-record-create/shared-record-create.component */ "./src/app/modules/shared/shared-record-create/shared-record-create.component.ts");
/* harmony import */ var _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");
/* harmony import */ var _shared_record_edit_shared_record_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-record-edit/shared-record-edit.component */ "./src/app/modules/shared/shared-record-edit/shared-record-edit.component.ts");
/* harmony import */ var _shared_record_related_table_shared_record_related_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared-record-related-table/shared-record-related-table.component */ "./src/app/modules/shared/shared-record-related-table/shared-record-related-table.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_alert/alert.component */ "./src/app/modules/_alert/alert.component.ts");



















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"]
        ],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        _records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_7__["RecordsListViewComponent"],
        _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_8__["SharedRecordDetailsComponent"],
        _shared_record_create_shared_record_create_component__WEBPACK_IMPORTED_MODULE_9__["SharedRecordCreateComponent"],
        _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_10__["PageLoadingComponent"],
        _shared_record_edit_shared_record_edit_component__WEBPACK_IMPORTED_MODULE_11__["SharedRecordEditComponent"],
        _shared_record_related_table_shared_record_related_table_component__WEBPACK_IMPORTED_MODULE_12__["SharedRecordRelatedTableComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"]], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"],
        _records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_7__["RecordsListViewComponent"],
        _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_8__["SharedRecordDetailsComponent"],
        _shared_record_create_shared_record_create_component__WEBPACK_IMPORTED_MODULE_9__["SharedRecordCreateComponent"],
        _shared_record_edit_shared_record_edit_component__WEBPACK_IMPORTED_MODULE_11__["SharedRecordEditComponent"],
        _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_10__["PageLoadingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                    _records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_7__["RecordsListViewComponent"],
                    _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_8__["SharedRecordDetailsComponent"],
                    _shared_record_create_shared_record_create_component__WEBPACK_IMPORTED_MODULE_9__["SharedRecordCreateComponent"],
                    _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_10__["PageLoadingComponent"],
                    _shared_record_edit_shared_record_edit_component__WEBPACK_IMPORTED_MODULE_11__["SharedRecordEditComponent"],
                    _shared_record_related_table_shared_record_related_table_component__WEBPACK_IMPORTED_MODULE_12__["SharedRecordRelatedTableComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"]
                ],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _alert__WEBPACK_IMPORTED_MODULE_5__["AlertModule"],
                    _records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_7__["RecordsListViewComponent"],
                    _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_8__["SharedRecordDetailsComponent"],
                    _shared_record_create_shared_record_create_component__WEBPACK_IMPORTED_MODULE_9__["SharedRecordCreateComponent"],
                    _shared_record_edit_shared_record_edit_component__WEBPACK_IMPORTED_MODULE_11__["SharedRecordEditComponent"],
                    _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_10__["PageLoadingComponent"]
                ]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_8__["SharedRecordDetailsComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlert"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlerts"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertsPager"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertText"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridActionBar"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridActionOverflow"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridColumnSeparator"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridColumnToggle"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridHideableColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridFilter"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridItemsTrackBy"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridRowDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵde"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridPlaceholder"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridColumnToggleButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridColumnToggleTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridDetailHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatagridDetailBody"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdf"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdg"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdh"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdm"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["DatagridStringFilter"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["DatagridNumericFilter"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStackView"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStackHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStackBlock"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStackContentInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStackViewCustomTags"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStackInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStackSelect"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTree"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTreeNode"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrRecursiveForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTreeNodeLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrModalBody"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrFocusOnViewInit"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLoading"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfOpen"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfExpanded"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵbm"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLoadingButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrButtonGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLabel"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrControlError"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfError"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLayout"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrControlContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrControl"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrCheckbox"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrCheckboxContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrCheckboxWrapper"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDay"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDateContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDateInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatepickerViewManager"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrMonthpicker"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrYearpicker"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDaypicker"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrCalendar"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPassword"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPasswordContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrRadio"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrRadioContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrRadioWrapper"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSelect"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSelectContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTextarea"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrRange"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrRangeContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatalist"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatalistInput"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDatalistContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrNavLevel"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["NavDetectionOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["MainContainerWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTabContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTabOverflowContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵem"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵen"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrVerticalNav"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrVerticalNavLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrVerticalNavGroup"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrVerticalNavGroupChildren"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrVerticalNavIcon"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDropdownItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSignpost"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSignpostContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSignpostTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTooltip"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTooltipTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTooltipContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizard"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardPage"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardStepnav"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardStepnavItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardHeaderAction"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardCustomTags"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardPageTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardPageNavTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardPageButtons"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardPageHeaderActions"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDraggable"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDroppable"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIfDragged"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDragHandle"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrDraggableGhost"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStepper"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStepButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrStepperPanel"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵfe"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵff"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAccordion"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAccordionPanel"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAccordionTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAccordionDescription"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAccordionContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵfb"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵfc"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrSpinner"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrProgressBar"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPopoverAnchor"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵbi"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ɵbj"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrPopoverContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTimeline"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTimelineStep"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTimelineStepDescription"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTimelineStepHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrTimelineStepTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
    _records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_7__["RecordsListViewComponent"],
    _shared_record_details_shared_record_details_component__WEBPACK_IMPORTED_MODULE_8__["SharedRecordDetailsComponent"],
    _shared_record_create_shared_record_create_component__WEBPACK_IMPORTED_MODULE_9__["SharedRecordCreateComponent"],
    _page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_10__["PageLoadingComponent"],
    _shared_record_edit_shared_record_edit_component__WEBPACK_IMPORTED_MODULE_11__["SharedRecordEditComponent"],
    _shared_record_related_table_shared_record_related_table_component__WEBPACK_IMPORTED_MODULE_12__["SharedRecordRelatedTableComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/modules/shared/tables.ts":
/*!******************************************!*\
  !*** ./src/app/modules/shared/tables.ts ***!
  \******************************************/
/*! exports provided: tables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tables", function() { return tables; });
const tables = {
    modules: {
        servicePath: 'api/terraform/modules',
        displayName: 'Terraform Modules',
        shortName: 'Module',
        singularName: 'Module',
        node_type: 'terraform',
        icon: 'terraform',
        recordDetailTabs: [
            {
                label: 'Details',
                type: 'edit-record',
                parent: 'modules'
            },
            {
                label: 'Variables',
                type: 'child-table',
                child: 'moduleVariables',
                filterRecords: true,
                filterOn: '_id',
                filterOnParent: true,
                servicePath: 'api/terraform/module-variables'
            },
        ],
        listViewCols: [
            {
                label: 'Name',
                name: 'name',
                type: 'string',
                hide: false
            },
            {
                label: 'Repo',
                name: 'repo',
                type: 'string',
                hide: true
            },
            {
                label: 'Description',
                name: 'description',
                type: 'string',
                hide: false
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'The name of the Module displayed to users in the catalog and workflow designer.',
                    type: 'text'
                },
                {
                    label: 'Repo',
                    name: 'repo',
                    required: true,
                    help: 'The Git repository used to clone the Terraform Module.',
                    type: 'text'
                },
                {
                    label: 'Icon',
                    name: 'icon',
                    required: true,
                    help: 'The Clarity.Design icon to be used when this item is displayed in the catalog and studio.',
                    type: 'text'
                },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
                    type: 'textarea'
                }
            ]
        }
    },
    moduleVariables: {
        servicePath: 'api/terraform/module-variables',
        displayName: 'Terraform Module Variables',
        shortName: 'Variable',
        singularName: 'Variable',
        icon: 'terraform',
        recordDetailTabs: [
            {
                label: 'Details',
                type: 'edit-record'
            },
        ],
        listViewCols: [
            {
                label: 'Label',
                name: 'label',
                type: 'text',
                hide: false
            },
            {
                label: 'Name',
                name: 'name',
                type: 'string',
                hide: false
            },
            {
                label: 'Description',
                name: 'description',
                type: 'string',
                hide: true
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: true
            },
            {
                label: 'Order',
                name: 'display_order',
                type: 'number',
                hide: false
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: true
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Label',
                    name: 'label',
                    required: true,
                    help: 'Variable labels are displayed to users in the catalog and workflow designer.',
                    type: 'text'
                },
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'Variables names map 1:1 to the variable used in the Terraform Module.',
                    type: 'text'
                },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'What is the intent of this variable? This text will be displayed to users in the catalog and the workflow designer.',
                    type: 'textarea'
                },
                {
                    label: 'Order',
                    name: 'display_order',
                    required: true,
                    default: 100,
                    help: 'This field can be used to manipulate the order in which variables are displayed in the catalog.',
                    type: 'text'
                },
            ]
        }
    },
    towerWorkflows: {
        servicePath: 'api/tower/workflows',
        displayName: 'Tower Workflows',
        shortName: 'Workflows',
        node_type: 'tower',
        singularName: 'Tower Workflow',
        icon: 'layers',
        listViewCols: [
            {
                label: 'Name',
                name: 'name',
                type: 'string',
                hide: false
            },
            {
                label: 'Repo',
                name: 'repo',
                type: 'string',
                hide: true
            },
            {
                label: 'Description',
                name: 'description',
                type: 'string',
                hide: false
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'The name of the Module displayed to users in the catalog and workflow designer.',
                    type: 'text'
                },
                {
                    label: 'Repo',
                    name: 'repo',
                    required: true,
                    help: 'The Git repository used to clone the Terraform Module.',
                    type: 'text'
                },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
                    type: 'textarea'
                }
            ]
        }
    },
    workflows: {
        servicePath: 'api/catalog-workflows',
        displayName: 'Workflows',
        shortName: 'Workflows',
        singularName: 'Workflow',
        icon: 'design',
        recordDetailTabs: [
            {
                label: 'Details',
                type: 'edit-record'
            },
            {
                label: 'Stacks',
                type: 'child-table',
                child: 'stacks',
                filterRecords: true,
                filterOn: '_id',
                filterOnParent: true,
                servicePath: 'api/stacks'
            },
            {
                label: 'Design',
                type: 'launch-workflow-designer'
            }
        ],
        listViewCols: [
            {
                label: 'Name',
                name: 'name',
                type: 'string',
                hide: false
            },
            {
                label: 'Description',
                name: 'description',
                type: 'string',
                hide: false
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'The "Display Name" that is used when this workflow is displayed in the catalog.',
                    type: 'text'
                },
                // {
                //   label: 'Type',
                //   name: 'type',
                //   required: true,
                //   help: 'Is this a catalog item or ',
                //   type: 'select'
                // },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
                    type: 'textarea'
                }
            ]
        }
    },
    workflowNodes: {
        servicePath: 'api/workflow-nodes',
        displayName: 'Workflow Nodes',
        shortName: 'Nodes',
        singularName: 'Node',
        icon: 'design',
        recordDetailTabs: [
            {
                label: 'Details',
                type: 'edit-record'
            },
            {
                label: 'Stacks',
                type: 'child-table',
                child: 'stacks',
                filterRecords: true,
                filterOn: '_id',
                filterOnParent: true,
                servicePath: 'api/stacks'
            },
            {
                label: 'Design',
                type: 'launch-workflow-designer'
            }
        ],
        listViewCols: [
            {
                label: 'Name',
                name: 'name',
                type: 'string',
                hide: false
            },
            {
                label: 'Description',
                name: 'description',
                type: 'string',
                hide: false
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'The "Display Name" that is used when this workflow is displayed in the catalog.',
                    type: 'text'
                },
                // {
                //   label: 'Type',
                //   name: 'type',
                //   required: true,
                //   help: 'Is this a catalog item or ',
                //   type: 'select'
                // },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
                    type: 'textarea'
                }
            ]
        }
    },
    workflowNodeVariables: {
        servicePath: 'api/workflow-node-variables',
        displayName: 'Resource Variables',
        shortName: 'Variables',
        singularName: 'Variable',
        icon: 'design',
        recordDetailTabs: [
            {
                label: 'Details',
                type: 'edit-record'
            }
        ],
        listViewCols: [
            {
                label: 'Label',
                name: 'label',
                type: 'string',
                hide: false
            },
            {
                label: 'Editable',
                name: 'can_edit',
                type: 'string',
                hide: false
            },
            {
                label: 'Description',
                name: 'description',
                type: 'string',
                hide: true
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: true
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'The "Display Name" that is used when this workflow is displayed in the catalog.',
                    type: 'text'
                },
                {
                    label: 'Editable',
                    name: 'can_edit',
                    required: true,
                    help: 'Can this variable be overwritten by a user in the catalog?',
                    type: 'select',
                    default: true,
                    options: [
                        {
                            label: 'True',
                            value: true
                        },
                        {
                            label: 'False',
                            value: true
                        }
                    ]
                },
                {
                    label: 'Display Order',
                    name: 'order',
                    required: true,
                    help: 'The order in which the variables are displayed to the user when a stack is deployed using the workflow.',
                    type: 'text'
                },
                {
                    label: 'Default Value',
                    name: 'default_value',
                    required: true,
                    help: 'This will be used as the default value for the variable.',
                    type: 'text'
                },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
                    type: 'textarea'
                }
            ]
        }
    },
    stacks: {
        servicePath: 'api/stacks',
        displayName: 'Stacks',
        shortName: 'Stacks',
        singularName: 'Stack',
        hideAddAction: true,
        icon: 'layers',
        listViewCols: [
            {
                label: 'Name',
                name: 'name',
                type: 'string',
                hide: false
            },
            {
                label: 'State',
                name: 'state',
                type: 'string',
                hide: false
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: true
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: true
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'The name of the Module displayed to users in the catalog and workflow designer.',
                    type: 'text'
                },
                {
                    label: 'Repo',
                    name: 'repo',
                    required: true,
                    help: 'The Git repository used to clone the Terraform Module.',
                    type: 'text'
                },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'Useful information about the module that will be displayed to users in the catalog and the workflow designer.',
                    type: 'textarea'
                }
            ]
        }
    },
    pwshScripts: {
        servicePath: 'api/scripts/pwsh',
        displayName: 'Powershell Scripts',
        shortName: 'Scripts',
        singularName: 'Script',
        node_type: 'pwsh',
        icon: 'pwsh',
        recordDetailTabs: [
            {
                label: 'Details',
                type: 'edit-record',
                parent: 'modules'
            },
            {
                label: 'Variables',
                type: 'child-table',
                child: 'moduleVariables',
                filterRecords: true,
                filterOn: '_id',
                filterOnParent: true,
                servicePath: 'api/terraform/module-variables'
            },
        ],
        listViewCols: [
            {
                label: 'Name',
                name: 'name',
                type: 'string',
                hide: false
            },
            {
                label: 'Repo',
                name: 'repo',
                type: 'string',
                hide: true
            },
            {
                label: 'Description',
                name: 'description',
                type: 'string',
                hide: false
            },
            {
                label: 'Created',
                name: 'created_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Created By',
                name: 'created_by',
                type: 'string',
                hide: true
            },
            {
                label: 'Updated',
                name: 'updated_at',
                type: 'timestamp',
                hide: false
            },
            {
                label: 'Updated By',
                name: 'updated_by',
                type: 'string',
                hide: true
            },
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'Name',
                    name: 'name',
                    required: true,
                    help: 'The name of the script as it should be displayed in the UI to users.',
                    type: 'text'
                },
                {
                    label: 'Repo',
                    name: 'repo',
                    required: true,
                    help: 'The Git repository that contains the source for the script.',
                    type: 'text'
                },
                {
                    label: 'Entry Point',
                    name: 'entry_point',
                    required: true,
                    help: 'Since the repo may contain more than one script or module this is the script that will be executed when this activity is ran as part of a workflow.',
                    type: 'text'
                },
                {
                    label: 'Icon',
                    name: 'icon',
                    required: true,
                    help: 'The name of the https://clarity.design/icons icon that will be displayed in the UI.',
                    type: 'text'
                },
                {
                    label: 'Description',
                    name: 'description',
                    required: true,
                    help: 'What is the purpose and expected outcome of this script?',
                    type: 'textarea'
                }
            ]
        }
    },
    users: {
        servicePath: 'users',
        displayName: 'Users',
        shortName: 'Users',
        singularName: 'User',
        node_type: 'pwsh',
        icon: 'user',
        recordDetailTabs: [
            {
                label: 'Details',
                type: 'edit-record',
                parent: 'modules'
            },
            {
                label: 'Groups',
                type: 'child-table',
                child: 'moduleVariables',
                filterRecords: true,
                filterOn: '_id',
                filterOnParent: true,
                servicePath: 'api/terraform/module-variables'
            },
            {
                label: 'Organizations',
                type: 'child-table',
                child: 'moduleVariables',
                filterRecords: true,
                filterOn: '_id',
                filterOnParent: true,
                servicePath: 'api/terraform/module-variables'
            },
            {
                label: 'Teams',
                type: 'child-table',
                child: 'moduleVariables',
                filterRecords: true,
                filterOn: '_id',
                filterOnParent: true,
                servicePath: 'api/terraform/module-variables'
            },
        ],
        listViewCols: [
            {
                label: 'First Name',
                name: 'first_name',
                type: 'string',
                hide: false
            },
            {
                label: 'Last Name',
                name: 'last_name',
                type: 'string',
                hide: false
            },
            {
                label: 'Email',
                name: 'email',
                type: 'string',
                hide: false
            }
        ],
        addRecordForm: {
            fields: [
                {
                    label: 'First Name',
                    name: 'first_name',
                    required: true,
                    help: '',
                    type: 'text'
                },
                {
                    label: 'Last Name',
                    name: 'last_name',
                    required: true,
                    help: '',
                    type: 'text'
                },
                {
                    label: 'Email',
                    name: 'email',
                    required: true,
                    help: '',
                    type: 'text'
                },
                {
                    label: 'Password',
                    name: 'password',
                    required: true,
                    showOnEdit: false,
                    help: '',
                    type: 'password'
                },
                {
                    label: 'Notes',
                    name: 'notes',
                    required: true,
                    help: '',
                    type: 'textarea'
                }
            ]
        }
    },
};


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shawnbradley/projects/stacks/stacks-web-client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map