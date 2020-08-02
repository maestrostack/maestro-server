function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"], {
  /***/
  "./src/app/modules/admin/access-management-admin/access-management-admin.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/admin/access-management-admin/access-management-admin.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: AccessManagementAdminComponent */

  /***/
  function srcAppModulesAdminAccessManagementAdminAccessManagementAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessManagementAdminComponent", function () {
      return AccessManagementAdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AccessManagementAdminComponent = /*#__PURE__*/function () {
      function AccessManagementAdminComponent() {
        _classCallCheck(this, AccessManagementAdminComponent);
      }

      _createClass(AccessManagementAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccessManagementAdminComponent;
    }();

    AccessManagementAdminComponent.ɵfac = function AccessManagementAdminComponent_Factory(t) {
      return new (t || AccessManagementAdminComponent)();
    };

    AccessManagementAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccessManagementAdminComponent,
      selectors: [["app-access-management-admin"]],
      decls: 8,
      vars: 0,
      consts: [[1, "main-container", 2, "height", "calc(100% - 60px) !important"], [1, "content-container"], [1, "content-area", 2, "padding", "0", "margin", "0"], [1, "sidenav"], [1, "sidenav-content"], ["routerLink", "./users", "routerLinkActive", "active", 1, "nav-link"]],
      template: function AccessManagementAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWNjZXNzLW1hbmFnZW1lbnQtYWRtaW4vYWNjZXNzLW1hbmFnZW1lbnQtYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessManagementAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-access-management-admin',
          templateUrl: './access-management-admin.component.html',
          styleUrls: ['./access-management-admin.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/admin-record-list/admin-record-list.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/admin/admin-record-list/admin-record-list.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AdminRecordListComponent */

  /***/
  function srcAppModulesAdminAdminRecordListAdminRecordListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRecordListComponent", function () {
      return AdminRecordListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/records-list-view/records-list-view.component */
    "./src/app/modules/shared/records-list-view/records-list-view.component.ts");

    var AdminRecordListComponent = /*#__PURE__*/function () {
      function AdminRecordListComponent() {
        _classCallCheck(this, AdminRecordListComponent);
      }

      _createClass(AdminRecordListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminRecordListComponent;
    }();

    AdminRecordListComponent.ɵfac = function AdminRecordListComponent_Factory(t) {
      return new (t || AdminRecordListComponent)();
    };

    AdminRecordListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminRecordListComponent,
      selectors: [["app-admin-record-list"]],
      decls: 4,
      vars: 1,
      consts: [[1, "main-container", 2, "height", "100% !important"], [1, "content-container"], [1, "content-area"], [3, "table"]],
      template: function AdminRecordListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-records-list-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", "users");
        }
      },
      directives: [_shared_records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_1__["RecordsListViewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4tcmVjb3JkLWxpc3QvYWRtaW4tcmVjb3JkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRecordListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-record-list',
          templateUrl: './admin-record-list.component.html',
          styleUrls: ['./admin-record-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/admin-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/admin/admin-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppModulesAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/modules/admin/admin.component.ts");
    /* harmony import */


    var _access_management_admin_access_management_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./access-management-admin/access-management-admin.component */
    "./src/app/modules/admin/access-management-admin/access-management-admin.component.ts");
    /* harmony import */


    var _admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-record-list/admin-record-list.component */
    "./src/app/modules/admin/admin-record-list/admin-record-list.component.ts");

    var routes = [{
      path: '',
      component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'access-management/users'
      }, {
        path: 'access-management',
        component: _access_management_admin_access_management_admin_component__WEBPACK_IMPORTED_MODULE_3__["AccessManagementAdminComponent"],
        children: [{
          path: '',
          pathMatch: 'full',
          redirectTo: 'users'
        }, {
          path: ':table',
          component: _admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_4__["AdminRecordListComponent"]
        }]
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminRoutingModule
    });
    AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminRoutingModule_Factory(t) {
        return new (t || AdminRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/admin.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/modules/admin/admin.component.ts ***!
    \**************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppModulesAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent() {
        _classCallCheck(this, AdminComponent);
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)();
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 18,
      vars: 0,
      consts: [[1, "main-container"], [1, "subnav"], [1, "nav"], [1, "nav-item"], ["routerLink", "/admin/access-management", "routerLinkActive", "active", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "content-container"], [1, "content-area", 2, "padding", "0", "margin", "0", "height", "100%"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Access Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tenants");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/admin/admin.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/admin/admin.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppModulesAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/modules/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/modules/admin/admin.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _access_management_admin_access_management_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./access-management-admin/access-management-admin.component */
    "./src/app/modules/admin/access-management-admin/access-management-admin.component.ts");
    /* harmony import */


    var _admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-record-list/admin-record-list.component */
    "./src/app/modules/admin/admin-record-list/admin-record-list.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AdminModule
    });
    AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AdminModule_Factory(t) {
        return new (t || AdminModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
        declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _access_management_admin_access_management_admin_component__WEBPACK_IMPORTED_MODULE_6__["AccessManagementAdminComponent"], _admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_7__["AdminRecordListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _access_management_admin_access_management_admin_component__WEBPACK_IMPORTED_MODULE_6__["AccessManagementAdminComponent"], _admin_record_list_admin_record_list_component__WEBPACK_IMPORTED_MODULE_7__["AdminRecordListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-admin-admin-module-es5.js.map