function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-tower-workflows-tower-workflows-module"], {
  /***/
  "./src/app/modules/tower-workflows/tower-workflows-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/tower-workflows/tower-workflows-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: TowerWorkflowsRoutingModule */

  /***/
  function srcAppModulesTowerWorkflowsTowerWorkflowsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TowerWorkflowsRoutingModule", function () {
      return TowerWorkflowsRoutingModule;
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


    var _tower_workflows_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tower-workflows.component */
    "./src/app/modules/tower-workflows/tower-workflows.component.ts");

    var routes = [{
      path: '',
      component: _tower_workflows_component__WEBPACK_IMPORTED_MODULE_2__["TowerWorkflowsComponent"]
    }];

    var TowerWorkflowsRoutingModule = function TowerWorkflowsRoutingModule() {
      _classCallCheck(this, TowerWorkflowsRoutingModule);
    };

    TowerWorkflowsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TowerWorkflowsRoutingModule
    });
    TowerWorkflowsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TowerWorkflowsRoutingModule_Factory(t) {
        return new (t || TowerWorkflowsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TowerWorkflowsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TowerWorkflowsRoutingModule, [{
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
  "./src/app/modules/tower-workflows/tower-workflows.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/tower-workflows/tower-workflows.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TowerWorkflowsComponent */

  /***/
  function srcAppModulesTowerWorkflowsTowerWorkflowsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TowerWorkflowsComponent", function () {
      return TowerWorkflowsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../core/services/data.service */
    "./src/app/modules/core/services/data.service.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _shared_records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/records-list-view/records-list-view.component */
    "./src/app/modules/shared/records-list-view/records-list-view.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var TowerWorkflowsComponent = /*#__PURE__*/function () {
      function TowerWorkflowsComponent(dataService) {
        _classCallCheck(this, TowerWorkflowsComponent);

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

      _createClass(TowerWorkflowsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.modules$ = this.dataService.records$('api/terraform/modules', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
            return r.data;
          }));
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

      return TowerWorkflowsComponent;
    }();

    TowerWorkflowsComponent.ɵfac = function TowerWorkflowsComponent_Factory(t) {
      return new (t || TowerWorkflowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    TowerWorkflowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TowerWorkflowsComponent,
      selectors: [["app-tower-workflows"]],
      decls: 39,
      vars: 5,
      consts: [[1, "module-content-container"], [1, "module-header-wrapper", 2, "border-bottom", "1px solid #cccccc"], [1, "flex-container", 2, "padding", "15px"], [1, "module-branding"], [1, "module-brand"], ["shape", "ansible", 1, "is-solid", 2, "margin-right", "10px"], [1, "module-title"], [1, "module-nav", 2, "margin-left", "25px"], [1, "module-content-area", 2, "padding", "10px"], [3, "table"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrForm", ""], [1, "clr-col-12", "clr-col-md-3"], ["clrInput", "", "type", "text", "name", "name", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrInput", "", "type", "text", "name", "repo", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrTextarea", "", "name", "description", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function TowerWorkflowsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Tower Workflows ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function TowerWorkflowsComponent_Template_clr_modal_clrModalOpenChange_11_listener($event) {
            return ctx.addRecord = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-input-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TowerWorkflowsComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.newRecord.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The name of the Module displayed to users in the catalog and workflow designer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-input-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Repo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TowerWorkflowsComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.newRecord.repo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The Git repository for this module.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "clr-textarea-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TowerWorkflowsComponent_Template_textarea_ngModelChange_31_listener($event) {
            return ctx.newRecord.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "A useful description of this module, displayed to users in the workflow designer to provide context.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TowerWorkflowsComponent_Template_button_click_35_listener() {
            return ctx.addRecord = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TowerWorkflowsComponent_Template_button_click_37_listener() {
            return ctx.createRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", "towerWorkflows");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx.addRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.repo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.description);
        }
      },
      directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _shared_records_list_view_records_list_view_component__WEBPACK_IMPORTED_MODULE_4__["RecordsListViewComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModalBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTextarea"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdG93ZXItd29ya2Zsb3dzL3Rvd2VyLXdvcmtmbG93cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TowerWorkflowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tower-workflows',
          templateUrl: './tower-workflows.component.html',
          styleUrls: ['./tower-workflows.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/tower-workflows/tower-workflows.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/tower-workflows/tower-workflows.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TowerWorkflowsModule */

  /***/
  function srcAppModulesTowerWorkflowsTowerWorkflowsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TowerWorkflowsModule", function () {
      return TowerWorkflowsModule;
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


    var _tower_workflows_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tower-workflows-routing.module */
    "./src/app/modules/tower-workflows/tower-workflows-routing.module.ts");
    /* harmony import */


    var _tower_workflows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tower-workflows.component */
    "./src/app/modules/tower-workflows/tower-workflows.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    var TowerWorkflowsModule = function TowerWorkflowsModule() {
      _classCallCheck(this, TowerWorkflowsModule);
    };

    TowerWorkflowsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TowerWorkflowsModule
    });
    TowerWorkflowsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TowerWorkflowsModule_Factory(t) {
        return new (t || TowerWorkflowsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _tower_workflows_routing_module__WEBPACK_IMPORTED_MODULE_2__["TowerWorkflowsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TowerWorkflowsModule, {
        declarations: [_tower_workflows_component__WEBPACK_IMPORTED_MODULE_3__["TowerWorkflowsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _tower_workflows_routing_module__WEBPACK_IMPORTED_MODULE_2__["TowerWorkflowsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TowerWorkflowsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_tower_workflows_component__WEBPACK_IMPORTED_MODULE_3__["TowerWorkflowsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _tower_workflows_routing_module__WEBPACK_IMPORTED_MODULE_2__["TowerWorkflowsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-tower-workflows-tower-workflows-module-es5.js.map