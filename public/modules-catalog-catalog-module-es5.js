function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-catalog-catalog-module"], {
  /***/
  "./src/app/modules/catalog/catalog-browse/catalog-browse.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/catalog/catalog-browse/catalog-browse.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CatalogBrowseComponent */

  /***/
  function srcAppModulesCatalogCatalogBrowseCatalogBrowseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogBrowseComponent", function () {
      return CatalogBrowseComponent;
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
    /*! ../../core/services/data.service */
    "./src/app/modules/core/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/page-loading/page-loading.component */
    "./src/app/modules/shared/page-loading/page-loading.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CatalogBrowseComponent_app_page_loading_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
      }
    }

    function CatalogBrowseComponent_div_1_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/catalog/launch/", item_r5._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.description, " ");
      }
    }

    function CatalogBrowseComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatalogBrowseComponent_div_1_div_2_div_3_Template, 7, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var items_r3 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r3);
      }
    }

    function CatalogBrowseComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatalogBrowseComponent_div_1_div_2_Template, 4, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.catalogItems$));
      }
    }

    var CatalogBrowseComponent = /*#__PURE__*/function () {
      function CatalogBrowseComponent(dataService) {
        _classCallCheck(this, CatalogBrowseComponent);

        this.dataService = dataService;
        this.loading = true;
      }

      _createClass(CatalogBrowseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.catalogItems$ = this.dataService.records$('api/catalog-workflows', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
            return r.data;
          }));
          this.catalogItems$.subscribe(function () {
            _this.loading = false;
          });
        }
      }]);

      return CatalogBrowseComponent;
    }();

    CatalogBrowseComponent.ɵfac = function CatalogBrowseComponent_Factory(t) {
      return new (t || CatalogBrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    CatalogBrowseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatalogBrowseComponent,
      selectors: [["app-catalog-browse"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "catalog-browse-container", 4, "ngIf"], [1, "catalog-browse-container"], [1, "catalog-browse-menu"], ["class", "catalog-items-container", 4, "ngIf"], [1, "catalog-items-container"], [1, "catalog-items"], [1, "clr-row", "items-row"], ["class", "clr-col-lg-3 clr-col-12", 4, "ngFor", "ngForOf"], [1, "clr-col-lg-3", "clr-col-12"], [1, "card", "item-card", "clickable", 3, "routerLink"], [1, "card-block"], [1, "card-title"], [1, "card-text"]],
      template: function CatalogBrowseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CatalogBrowseComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogBrowseComponent_div_1_Template, 4, 3, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__["PageLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex-container[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  margin: 10px;\n}\n\n.items-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 200px;\n  margin-bottom: 15px !important;\n}\n\n.item-card[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvc3RhY2tzL3N0YWNrcy13ZWItY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9jYXRhbG9nL2NhdGFsb2ctYnJvd3NlL2NhdGFsb2ctYnJvd3NlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NhdGFsb2cvY2F0YWxvZy1icm93c2UvY2F0YWxvZy1icm93c2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0YWxvZy9jYXRhbG9nLWJyb3dzZS9jYXRhbG9nLWJyb3dzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZsZXgtY29udGFpbmVyID4gYSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uaXRlbXMtcm93ID4gZGl2IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1jYXJkIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iLCIuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mbGV4LWNvbnRhaW5lciA+IGEge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLml0ZW1zLXJvdyA+IGRpdiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0tY2FyZCB7XG4gIGhlaWdodDogMjAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogBrowseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-catalog-browse',
          templateUrl: './catalog-browse.component.html',
          styleUrls: ['./catalog-browse.component.scss']
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
  "./src/app/modules/catalog/catalog-launch/catalog-launch.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/catalog/catalog-launch/catalog-launch.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CatalogLaunchComponent */

  /***/
  function srcAppModulesCatalogCatalogLaunchCatalogLaunchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogLaunchComponent", function () {
      return CatalogLaunchComponent;
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


    var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/services/auth.service */
    "./src/app/modules/core/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/page-loading/page-loading.component */
    "./src/app/modules/shared/page-loading/page-loading.component.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["wizard"];

    function CatalogLaunchComponent_app_page_loading_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
      }
    }

    function CatalogLaunchComponent_span_1_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Stack Details");
      }
    }

    function CatalogLaunchComponent_span_1_clr_wizard_page_27_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      }

      if (rf & 2) {
        var n_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r6.name);
      }
    }

    function CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_clr_input_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_clr_input_container_1_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var v_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var n_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return n_r6.current_vars[v_r10.name] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var v_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var n_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r10.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", v_r10.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", n_r6.current_vars[v_r10.name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r10.description, " ");
      }
    }

    function CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_clr_input_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_clr_input_container_2_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var v_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var n_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return n_r6.current_vars[v_r10.name] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var v_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var n_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r10.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", v_r10.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", n_r6.current_vars[v_r10.name]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", v_r10.description, " ");
      }
    }

    function CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_clr_input_container_1_Template, 6, 4, "clr-input-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_clr_input_container_2_Template, 6, 4, "clr-input-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var v_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r10.can_edit == "true");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r10.can_edit == "false");
      }
    }

    function CatalogLaunchComponent_span_1_clr_wizard_page_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-wizard-page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogLaunchComponent_span_1_clr_wizard_page_27_ng_template_1_Template, 1, 1, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "clr-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CatalogLaunchComponent_span_1_clr_wizard_page_27_div_9_Template, 3, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r6.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", n_r6.variables);
      }
    }

    function CatalogLaunchComponent_span_1_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Review");
      }
    }

    function CatalogLaunchComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-wizard", 1, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrWizardOpenChange", function CatalogLaunchComponent_span_1_Template_clr_wizard_clrWizardOpenChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return !(ctx_r25.loading = $event);
        })("clrWizardOnFinish", function CatalogLaunchComponent_span_1_Template_clr_wizard_clrWizardOnFinish_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.submitRequest();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-wizard-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-wizard-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-wizard-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-wizard-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-wizard-button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Finish");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-wizard-page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CatalogLaunchComponent_span_1_ng_template_14_Template, 1, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stack Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogLaunchComponent_span_1_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.item.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Give your stack a unique name. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stack Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CatalogLaunchComponent_span_1_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.item.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Add some info to help you remember why you deployed this stack. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CatalogLaunchComponent_span_1_clr_wizard_page_27_Template, 10, 2, "clr-wizard-page", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "clr-wizard-page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CatalogLaunchComponent_span_1_ng_template_29_Template, 1, 0, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " ... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrWizardOpen", !ctx_r1.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.item.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "previous");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "next");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "finish");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.item.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.item.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.item.workflow_nodes);
      }
    }

    var CatalogLaunchComponent = /*#__PURE__*/function () {
      function CatalogLaunchComponent(dataService, authService, activatedRoute, router) {
        _classCallCheck(this, CatalogLaunchComponent);

        this.dataService = dataService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = true;
        this.stack = {};
      }

      _createClass(CatalogLaunchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.routeParams = this.activatedRoute.params.subscribe(function (params) {
            _this2.workflowId = params.workflow;

            _this2.dataService.getRecord('api/catalog-workflows', _this2.workflowId).then(function (data) {
              _this2.item = data;
              _this2.loading = false;
              console.log(_this2.item);
            })["catch"](function () {});
          });
        }
      }, {
        key: "submitRequest",
        value: function submitRequest() {
          var _this3 = this;

          var stack = {
            name: this.item.name,
            description: this.item.description,
            _workflow: this.item._id,
            _parent: this.item._id,
            state: 'new',
            ui_start_icon: 'current',
            ui_start_header: 'APPROVAL',
            ui_start_msg: 'Waiting on approval before moving forward.',
            ui_end_icon: 'current',
            ui_end_msg: '',
            stage: 'approval',
            request_state: 'needs_approval',
            overall_state: 'needs_approval',
            substage: null,
            current_work_item: null,
            has_issues: false,
            has_questions: false
          }; // this.item.request_state = 'needs_approval';
          // this.item.overall_state = 'needs_approval';
          // this.item.stage = 'approval';
          // this.item.substage = null;
          // this.item.has_issues = false;
          // this.item.state = 'needs_approval';

          this.dataService.createRecord('api/stacks', stack).then(function (res) {
            var stackId = res._id;

            _this3.item.workflow_nodes.forEach(function (n) {
              n.state = 'new', n._stack = stackId;
              n.working = false;
              n.ui_state_icon = 'not-started';
              n.ui_state_error = false;
              n.ui_state_error_msg = null;
              n.ui_state_success = false;
              n.ui_state_success_msg = null;
              n.ui_console_out = '';
              delete n['variables'];
              delete n['_id'];

              _this3.dataService.createRecord('api/stack-resources', n);
            });

            return stackId;
          }).then(function (stackId) {
            _this3.router.navigate(['/stacks/details', stackId]);
          });
        }
      }]);

      return CatalogLaunchComponent;
    }();

    CatalogLaunchComponent.ɵfac = function CatalogLaunchComponent_Factory(t) {
      return new (t || CatalogLaunchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    CatalogLaunchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatalogLaunchComponent,
      selectors: [["app-catalog-launch"]],
      viewQuery: function CatalogLaunchComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["clrWizardSize", "lg", 3, "clrWizardOpen", "clrWizardOpenChange", "clrWizardOnFinish"], ["wizard", ""], [3, "type"], ["clrPageTitle", ""], [1, "clr-col-12", "clr-col-md-3"], ["clrInput", "", "type", "text", "name", "name", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrInput", "", "type", "text", "name", "description", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "info-circle", 1, "alert-icon"], [1, "alert-text"], ["class", "clr-row", 4, "ngFor", "ngForOf"], [1, "clr-row"], ["clrInput", "", "type", "text", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "name", "ngModelChange"], ["clrInput", "", "type", "text", "required", "", "readonly", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "name", "ngModelChange"]],
      template: function CatalogLaunchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CatalogLaunchComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogLaunchComponent_span_1_Template, 31, 9, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_5__["PageLoadingComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizard"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardCustomTags"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardButton"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardPage"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrWizardPageTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrControlHelper"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertText"]],
      styles: ["clr-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.clr-form-control[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvc3RhY2tzL3N0YWNrcy13ZWItY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9jYXRhbG9nL2NhdGFsb2ctbGF1bmNoL2NhdGFsb2ctbGF1bmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NhdGFsb2cvY2F0YWxvZy1sYXVuY2gvY2F0YWxvZy1sYXVuY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jYXRhbG9nL2NhdGFsb2ctbGF1bmNoL2NhdGFsb2ctbGF1bmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2xyLWlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xyLWZvcm0tY29udHJvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbn0iLCJjbHItaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbHItZm9ybS1jb250cm9sIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogLaunchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-catalog-launch',
          templateUrl: './catalog-launch.component.html',
          styleUrls: ['./catalog-launch.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        wizard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["wizard"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/catalog/catalog-request-status/catalog-request-status.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/catalog/catalog-request-status/catalog-request-status.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: CatalogRequestStatusComponent */

  /***/
  function srcAppModulesCatalogCatalogRequestStatusCatalogRequestStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogRequestStatusComponent", function () {
      return CatalogRequestStatusComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");

    function CatalogRequestStatusComponent_div_2_clr_timeline_step_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-timeline-step", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-timeline-step-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Deploy Resource ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-timeline-step-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-timeline-step-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var n_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r3.description, " ");
      }
    }

    function CatalogRequestStatusComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-timeline");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-timeline-step", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-timeline-step-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "START");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-timeline-step-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "APPROVAL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-timeline-step-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Waiting on approval before moving forward.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CatalogRequestStatusComponent_div_2_clr_timeline_step_9_Template, 9, 2, "clr-timeline-step", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-timeline-step", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-timeline-step-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "END");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-timeline-step-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Complete Message Header HERE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-timeline-step-description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Upload it to the KMS to complete the connection. Third sentence. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Action");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.workflow_nodes);
      }
    }

    var CatalogRequestStatusComponent = /*#__PURE__*/function () {
      function CatalogRequestStatusComponent(dataService, activatedRoute) {
        _classCallCheck(this, CatalogRequestStatusComponent);

        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
      }

      _createClass(CatalogRequestStatusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activatedRoute.params.subscribe(function (p) {
            console.log(p);
            _this4.item$ = _this4.dataService.record$('api/stacks', p.stack);
          });
          this.item$.subscribe(function (i) {
            _this4.item = i;
          });
        }
      }]);

      return CatalogRequestStatusComponent;
    }();

    CatalogRequestStatusComponent.ɵfac = function CatalogRequestStatusComponent_Factory(t) {
      return new (t || CatalogRequestStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    CatalogRequestStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatalogRequestStatusComponent,
      selectors: [["app-catalog-request-status"]],
      decls: 4,
      vars: 3,
      consts: [[1, "catalog-content-container"], [1, "catalog-content-menu"], ["class", "catalog-content-timeline", 4, "ngIf"], [1, "catalog-content-timeline"], ["clrState", "current"], ["clrState", "not-started", 4, "ngFor", "ngForOf"], ["clrState", "not-started"], [1, "btn", "btn-sm", "btn-link"], [1, "btn", "btn-sm"]],
      template: function CatalogRequestStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatalogRequestStatusComponent_div_2_Template, 19, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.item$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTimeline"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTimelineStep"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTimelineStepHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTimelineStepTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrTimelineStepDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0YWxvZy9jYXRhbG9nLXJlcXVlc3Qtc3RhdHVzL2NhdGFsb2ctcmVxdWVzdC1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogRequestStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-catalog-request-status',
          templateUrl: './catalog-request-status.component.html',
          styleUrls: ['./catalog-request-status.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/catalog/catalog-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/catalog/catalog-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CatalogRoutingModule */

  /***/
  function srcAppModulesCatalogCatalogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogRoutingModule", function () {
      return CatalogRoutingModule;
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


    var _catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./catalog.component */
    "./src/app/modules/catalog/catalog.component.ts");
    /* harmony import */


    var _catalog_browse_catalog_browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./catalog-browse/catalog-browse.component */
    "./src/app/modules/catalog/catalog-browse/catalog-browse.component.ts");
    /* harmony import */


    var _catalog_launch_catalog_launch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./catalog-launch/catalog-launch.component */
    "./src/app/modules/catalog/catalog-launch/catalog-launch.component.ts");
    /* harmony import */


    var _catalog_request_status_catalog_request_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./catalog-request-status/catalog-request-status.component */
    "./src/app/modules/catalog/catalog-request-status/catalog-request-status.component.ts");

    var routes = [{
      path: '',
      component: _catalog_component__WEBPACK_IMPORTED_MODULE_2__["CatalogComponent"],
      children: [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'browse'
      }, {
        path: 'browse',
        component: _catalog_browse_catalog_browse_component__WEBPACK_IMPORTED_MODULE_3__["CatalogBrowseComponent"]
      }, {
        path: 'launch/:workflow',
        component: _catalog_launch_catalog_launch_component__WEBPACK_IMPORTED_MODULE_4__["CatalogLaunchComponent"]
      }, {
        path: 'status/:stack',
        component: _catalog_request_status_catalog_request_status_component__WEBPACK_IMPORTED_MODULE_5__["CatalogRequestStatusComponent"]
      }]
    }];

    var CatalogRoutingModule = function CatalogRoutingModule() {
      _classCallCheck(this, CatalogRoutingModule);
    };

    CatalogRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CatalogRoutingModule
    });
    CatalogRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CatalogRoutingModule_Factory(t) {
        return new (t || CatalogRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogRoutingModule, [{
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
  "./src/app/modules/catalog/catalog.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/catalog/catalog.component.ts ***!
    \******************************************************/

  /*! exports provided: CatalogComponent */

  /***/
  function srcAppModulesCatalogCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogComponent", function () {
      return CatalogComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CatalogComponent = /*#__PURE__*/function () {
      function CatalogComponent(dataService) {
        _classCallCheck(this, CatalogComponent);

        this.dataService = dataService;
      }

      _createClass(CatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.catalogItems$ = this.dataService.records$('api/catalog-workflows', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
            return r.data;
          }));
        }
      }]);

      return CatalogComponent;
    }();

    CatalogComponent.ɵfac = function CatalogComponent_Factory(t) {
      return new (t || CatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    CatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatalogComponent,
      selectors: [["app-catalog"]],
      decls: 11,
      vars: 0,
      consts: [[1, "module-content-container"], [1, "module-header-wrapper", 2, "border-bottom", "1px solid #cccccc"], [1, "flex-container", 2, "padding", "15px"], [1, "module-branding"], [1, "module-brand"], ["shape", "store", 1, "is-solid", 2, "margin-right", "10px"], [1, "module-title"], [1, "module-nav", 2, "margin-left", "25px"], [1, "module-content-area", 2, "padding", "20px"]],
      template: function CatalogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Catalog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0YWxvZy9jYXRhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-catalog',
          templateUrl: './catalog.component.html',
          styleUrls: ['./catalog.component.scss']
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
  "./src/app/modules/catalog/catalog.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/catalog/catalog.module.ts ***!
    \***************************************************/

  /*! exports provided: CatalogModule */

  /***/
  function srcAppModulesCatalogCatalogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogModule", function () {
      return CatalogModule;
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


    var _catalog_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./catalog-routing.module */
    "./src/app/modules/catalog/catalog-routing.module.ts");
    /* harmony import */


    var _catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./catalog.component */
    "./src/app/modules/catalog/catalog.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _catalog_browse_catalog_browse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./catalog-browse/catalog-browse.component */
    "./src/app/modules/catalog/catalog-browse/catalog-browse.component.ts");
    /* harmony import */


    var _catalog_launch_catalog_launch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./catalog-launch/catalog-launch.component */
    "./src/app/modules/catalog/catalog-launch/catalog-launch.component.ts");
    /* harmony import */


    var _catalog_request_status_catalog_request_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./catalog-request-status/catalog-request-status.component */
    "./src/app/modules/catalog/catalog-request-status/catalog-request-status.component.ts");

    var CatalogModule = function CatalogModule() {
      _classCallCheck(this, CatalogModule);
    };

    CatalogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CatalogModule
    });
    CatalogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CatalogModule_Factory(t) {
        return new (t || CatalogModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _catalog_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CatalogModule, {
        declarations: [_catalog_component__WEBPACK_IMPORTED_MODULE_3__["CatalogComponent"], _catalog_browse_catalog_browse_component__WEBPACK_IMPORTED_MODULE_6__["CatalogBrowseComponent"], _catalog_launch_catalog_launch_component__WEBPACK_IMPORTED_MODULE_7__["CatalogLaunchComponent"], _catalog_request_status_catalog_request_status_component__WEBPACK_IMPORTED_MODULE_8__["CatalogRequestStatusComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _catalog_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_catalog_component__WEBPACK_IMPORTED_MODULE_3__["CatalogComponent"], _catalog_browse_catalog_browse_component__WEBPACK_IMPORTED_MODULE_6__["CatalogBrowseComponent"], _catalog_launch_catalog_launch_component__WEBPACK_IMPORTED_MODULE_7__["CatalogLaunchComponent"], _catalog_request_status_catalog_request_status_component__WEBPACK_IMPORTED_MODULE_8__["CatalogRequestStatusComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _catalog_routing_module__WEBPACK_IMPORTED_MODULE_2__["CatalogRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-catalog-catalog-module-es5.js.map