function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-scripts-scripts-module"], {
  /***/
  "./src/app/modules/scripts/pwsh/pwsh.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/scripts/pwsh/pwsh.component.ts ***!
    \********************************************************/

  /*! exports provided: PwshComponent */

  /***/
  function srcAppModulesScriptsPwshPwshComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PwshComponent", function () {
      return PwshComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/services/data.service */
    "./src/app/modules/core/services/data.service.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _shared_records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/records-list-view/records-list-view.component */
    "./src/app/modules/shared/records-list-view/records-list-view.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PwshComponent = /*#__PURE__*/function () {
      function PwshComponent(dataService) {
        _classCallCheck(this, PwshComponent);

        this.dataService = dataService;
        this.service = 'api/terraform/modules';
        this.selected = [];
        this.addRecord = false;
        this.newRecord = {
          name: '',
          description: '',
          repo: ''
        };
      }

      _createClass(PwshComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.modules$ = this.dataService.records$('api/terraform/modules', {})
          //   .pipe(
          //     map(( r: Paginated<any>) => r.data)
          //   )
        }
      }, {
        key: "createRecord",
        value: function createRecord() {
          this.dataService.createRecord('api/terraform/modules', this.newRecord).then(function (data) {// this.addRecord = false;
          })["catch"](function (error) {});
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          this.addRecord = true;
        }
      }, {
        key: "onEdit",
        value: function onEdit(r) {}
      }, {
        key: "onDelete",
        value: function onDelete(r) {
          alert('TODO: Allow deletion of modules while making sure we do not break down stream stacks...'); // this.dataService.records$('api/terraform/module-variables', {
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
      }]);

      return PwshComponent;
    }();

    PwshComponent.ɵfac = function PwshComponent_Factory(t) {
      return new (t || PwshComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    PwshComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PwshComponent,
      selectors: [["app-pwsh"]],
      decls: 33,
      vars: 4,
      consts: [[1, "module-content-container"], [1, "module-header-wrapper", 2, "border-bottom", "1px solid #cccccc"], [1, "flex-container", 2, "padding", "15px"], [1, "module-branding"], [1, "module-brand"], ["shape", "pwsh", 1, "is-solid", 2, "margin-right", "10px"], [1, "module-title"], [1, "module-nav", 2, "margin-left", "25px"], [1, "module-content-area", 2, "padding", "10px"], [3, "table"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrForm", ""], [1, "clr-col-12", "clr-col-md-3"], ["clrInput", "", "type", "text", "name", "name", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrTextarea", "", "name", "description", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function PwshComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Powershell Script ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-records-list-view", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-modal", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function PwshComponent_Template_clr_modal_clrModalOpenChange_11_listener($event) {
            return ctx.addRecord = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-input-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Display Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PwshComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.newRecord.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "This is the \"Display Name\" of the script displayed in the workflow designer and in the stack catalog.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-textarea-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PwshComponent_Template_textarea_ngModelChange_25_listener($event) {
            return ctx.newRecord.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "A useful description of this module, displayed to users in the workflow designer to provide context.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PwshComponent_Template_button_click_29_listener() {
            return ctx.addRecord = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PwshComponent_Template_button_click_31_listener() {
            return ctx.createRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", "pwshScripts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx.addRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.description);
        }
      },
      directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrIconCustomTag"], _shared_records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_3__["RecordsListViewComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrModalBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClrTextarea"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2NyaXB0cy9wd3NoL3B3c2guY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PwshComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pwsh',
          templateUrl: './pwsh.component.html',
          styleUrls: ['./pwsh.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/scripts/scripts-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/scripts/scripts-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ScriptsRoutingModule */

  /***/
  function srcAppModulesScriptsScriptsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScriptsRoutingModule", function () {
      return ScriptsRoutingModule;
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


    var _scripts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scripts.component */
    "./src/app/modules/scripts/scripts.component.ts");
    /* harmony import */


    var _pwsh_pwsh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pwsh/pwsh.component */
    "./src/app/modules/scripts/pwsh/pwsh.component.ts");

    var routes = [{
      path: '',
      component: _scripts_component__WEBPACK_IMPORTED_MODULE_2__["ScriptsComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'pwsh'
      }, {
        path: 'pwsh',
        component: _pwsh_pwsh_component__WEBPACK_IMPORTED_MODULE_3__["PwshComponent"]
      }]
    }];

    var ScriptsRoutingModule = function ScriptsRoutingModule() {
      _classCallCheck(this, ScriptsRoutingModule);
    };

    ScriptsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScriptsRoutingModule
    });
    ScriptsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ScriptsRoutingModule_Factory(t) {
        return new (t || ScriptsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScriptsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptsRoutingModule, [{
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
  "./src/app/modules/scripts/scripts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/scripts/scripts.component.ts ***!
    \******************************************************/

  /*! exports provided: ScriptsComponent */

  /***/
  function srcAppModulesScriptsScriptsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScriptsComponent", function () {
      return ScriptsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ScriptsComponent = /*#__PURE__*/function () {
      function ScriptsComponent() {
        _classCallCheck(this, ScriptsComponent);
      }

      _createClass(ScriptsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScriptsComponent;
    }();

    ScriptsComponent.ɵfac = function ScriptsComponent_Factory(t) {
      return new (t || ScriptsComponent)();
    };

    ScriptsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScriptsComponent,
      selectors: [["app-scripts"]],
      decls: 1,
      vars: 0,
      template: function ScriptsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2NyaXB0cy9zY3JpcHRzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-scripts',
          templateUrl: './scripts.component.html',
          styleUrls: ['./scripts.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/scripts/scripts.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/scripts/scripts.module.ts ***!
    \***************************************************/

  /*! exports provided: ScriptsModule */

  /***/
  function srcAppModulesScriptsScriptsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScriptsModule", function () {
      return ScriptsModule;
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


    var _scripts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scripts-routing.module */
    "./src/app/modules/scripts/scripts-routing.module.ts");
    /* harmony import */


    var _scripts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scripts.component */
    "./src/app/modules/scripts/scripts.component.ts");
    /* harmony import */


    var _pwsh_pwsh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pwsh/pwsh.component */
    "./src/app/modules/scripts/pwsh/pwsh.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    var ScriptsModule = function ScriptsModule() {
      _classCallCheck(this, ScriptsModule);
    };

    ScriptsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScriptsModule
    });
    ScriptsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ScriptsModule_Factory(t) {
        return new (t || ScriptsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"], _scripts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScriptsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScriptsModule, {
        declarations: [_scripts_component__WEBPACK_IMPORTED_MODULE_3__["ScriptsComponent"], _pwsh_pwsh_component__WEBPACK_IMPORTED_MODULE_4__["PwshComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"], _scripts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScriptsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_scripts_component__WEBPACK_IMPORTED_MODULE_3__["ScriptsComponent"], _pwsh_pwsh_component__WEBPACK_IMPORTED_MODULE_4__["PwshComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClarityModule"], _scripts_routing_module__WEBPACK_IMPORTED_MODULE_2__["ScriptsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-scripts-scripts-module-es5.js.map