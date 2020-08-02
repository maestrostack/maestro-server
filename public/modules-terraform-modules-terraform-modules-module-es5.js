function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-terraform-modules-terraform-modules-module"], {
  /***/
  "./src/app/modules/terraform-modules/terraform-module-details/terraform-module-details.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/modules/terraform-modules/terraform-module-details/terraform-module-details.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: TerraformModuleDetailsComponent */

  /***/
  function srcAppModulesTerraformModulesTerraformModuleDetailsTerraformModuleDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerraformModuleDetailsComponent", function () {
      return TerraformModuleDetailsComponent;
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


    var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TerraformModuleDetailsComponent_clr_tab_content_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your changes have been saved to the database. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TerraformModuleDetailsComponent_clr_tab_content_4_div_1_Template, 7, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_clr_tab_content_4_Template_input_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.record.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The name of the Module displayed to users in the catalog and workflow designer.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Repo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_clr_tab_content_4_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.record.repo = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The Git repository for this module.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-textarea-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_clr_tab_content_4_Template_textarea_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.record.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "A useful description of this module, displayed to users in the workflow designer to provide context.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModuleDetailsComponent_clr_tab_content_4_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.saveModule(ctx_r7.record);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.saveModuleSuccess);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.record.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.record.repo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.record.description);
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created by ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Created ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Updated by ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Updated ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_clr_dg_row_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-action-overflow");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_clr_dg_row_20_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var r_r19 = ctx.$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r20.onDelete(r_r19);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "clr-dg-cell");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItem", r_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r19.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r19.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r19.created_by);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, r_r19.created_at));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r19.updated_by);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, r_r19.updated_at));
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your changes have been saved to the database. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-detail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-detail-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-detail-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_div_4_Template, 7, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var detail_r22 = ctx.$implicit;
          return detail_r22.label = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The label for the variable that is displayed to users in the catalog.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-input-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var detail_r22 = ctx.$implicit;
          return detail_r22.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The name of the variable that exists in the Terraform Module.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clr-textarea-container");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_Template_textarea_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var detail_r22 = ctx.$implicit;
          return detail_r22.description = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-control-helper");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Description or help text that will displayed to user in the catalog to explain the variable.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var detail_r22 = ctx.$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r28.saveRecord(detail_r22);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var detail_r22 = ctx.$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r22.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.saveVariableSuccess);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", detail_r22.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", detail_r22.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", detail_r22.description);
      }
    }

    var _c0 = function _c0() {
      return {
        hidden: false
      };
    };

    var _c1 = function _c1() {
      return {
        hidden: true
      };
    };

    var _c2 = function _c2() {
      return [10, 20, 50, 100];
    };

    function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-datagrid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-action-bar", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.onAdd();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Add Variable ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "clr-dg-placeholder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hmm... We couldn't find any variables for this module!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-column", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_9_Template, 2, 0, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-dg-column", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_11_Template, 2, 0, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "clr-dg-column", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_13_Template, 2, 0, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-dg-column", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_15_Template, 2, 0, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "clr-dg-column", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_17_Template, 2, 0, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clr-dg-column", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_container_19_Template, 2, 0, "ng-container", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_clr_dg_row_20_Template, 18, 11, "clr-dg-row", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "clr-dg-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "clr-dg-pagination", 33, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "clr-dg-page-size", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Variables per page");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_ng_template_27_Template, 26, 5, "ng-template", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrIfDetailChange", function TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_Template_ng_template_clrIfDetailChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.onModuleDetailOpen($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var records_r9 = ctx.ngIf;

        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "created_by");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "created");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "updated_by");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "updated");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgHideableColumn", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", records_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgPageSize", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _r17.firstItem + 1, " - ", _r17.lastItem + 1, " of ", _r17.totalItems, " variables ");
      }
    }

    function TerraformModuleDetailsComponent_clr_tab_content_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TerraformModuleDetailsComponent_clr_tab_content_8_clr_datagrid_2_Template, 28, 25, "clr-datagrid", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.variables$));
      }
    }

    var TerraformModuleDetailsComponent = /*#__PURE__*/function () {
      function TerraformModuleDetailsComponent(dataService) {
        _classCallCheck(this, TerraformModuleDetailsComponent);

        this.dataService = dataService;
        this.addRecord = false;
        this.newRecord = {
          label: '',
          name: '',
          description: '',
          _module: null
        };
        this.saveModuleSuccess = false;
        this.saveVariableSuccess = false;
      }

      _createClass(TerraformModuleDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.variables$ = this.dataService.records$('api/terraform/module-variables', {
            _module: this.record._id
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (r) {
            return r.data;
          }));
          console.log(this.record);
        }
      }, {
        key: "onModuleDetailOpen",
        value: function onModuleDetailOpen(event) {
          console.log(event);
        }
      }, {
        key: "saveModule",
        value: function saveModule(detail) {
          var _this = this;

          this.dataService.updateRecord('api/terraform/modules', detail._id, detail).then(function () {
            _this.saveModuleSuccess = true;
            setTimeout(function () {
              _this.saveModuleSuccess = false;
              _this.detail = null;
            }, 3000);
          })["catch"](function (error) {});
        }
      }, {
        key: "saveRecord",
        value: function saveRecord(detail) {
          var _this2 = this;

          this.dataService.updateRecord('api/terraform/module-variables', detail._id, detail).then(function () {
            _this2.saveVariableSuccess = true;
            setTimeout(function () {
              _this2.saveVariableSuccess = false;
              _this2.detail = null;
            }, 3000);
          });
        }
      }, {
        key: "createRecord",
        value: function createRecord() {
          var _this3 = this;

          this.newRecord._module = this.record._id;
          this.dataService.createRecord('api/terraform/module-variables', this.newRecord).then(function () {
            _this3.addRecord = false;
          });
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
          this.dataService.deleteRecord('api/terraform/module-variables', r._id, r);
        }
      }]);

      return TerraformModuleDetailsComponent;
    }();

    TerraformModuleDetailsComponent.ɵfac = function TerraformModuleDetailsComponent_Factory(t) {
      return new (t || TerraformModuleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    TerraformModuleDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TerraformModuleDetailsComponent,
      selectors: [["app-terraform-module-details"]],
      inputs: {
        record: "record"
      },
      decls: 37,
      vars: 5,
      consts: [["clrTabLink", "", "id", "details"], ["id", "details", 4, "clrIfActive"], ["clrTabLink", ""], [4, "clrIfActive"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrForm", ""], [1, "clr-col-12", "clr-col-md-3"], ["clrInput", "", "type", "text", "name", "label", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrInput", "", "type", "text", "name", "name", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrTextarea", "", "name", "description", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "details"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["clrInput", "", "type", "text", "name", "repo", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "check-circle", 1, "alert-icon"], [1, "alert-text"], [4, "ngIf"], [2, "margin-top", "0px !important"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["shape", "plus"], [3, "clrDgField"], [4, "clrDgHideableColumn"], [3, "clrDgItem", 4, "clrDgItems", "clrDgItemsOf"], [3, "clrDgPageSize"], ["pagination", ""], [3, "clrPageSizeOptions"], ["clrIfDetail", "", 3, "clrIfDetailChange"], [3, "clrDgItem"], [1, "action-item", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"]],
      template: function TerraformModuleDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TerraformModuleDetailsComponent_clr_tab_content_4_Template, 23, 4, "clr-tab-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Variables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TerraformModuleDetailsComponent_clr_tab_content_8_Template, 4, 3, "clr-tab-content", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-modal", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function TerraformModuleDetailsComponent_Template_clr_modal_clrModalOpenChange_9_listener($event) {
            return ctx.addRecord = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Variable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clr-input-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.newRecord.label = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The label for the variable that is displayed to users in the catalog.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "clr-input-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.newRecord.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The name of the variable that exists in the Terraform Module.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "clr-textarea-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModuleDetailsComponent_Template_textarea_ngModelChange_29_listener($event) {
            return ctx.newRecord.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "clr-control-helper");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description or help text that will displayed to user in the catalog to explain the variable.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModuleDetailsComponent_Template_button_click_33_listener() {
            return ctx.addRecord = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModuleDetailsComponent_Template_button_click_35_listener() {
            return ctx.createRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfActive", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx.addRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newRecord.description);
        }
      },
      directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵem"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵen"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModalBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrForm"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInputContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrControlHelper"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTextareaContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTextarea"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrAlertText"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridActionBar"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPlaceholder"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridHideableColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPagination"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridPageSize"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridActionOverflow"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ɵdm"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridDetailHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDatagridDetailBody"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVycmFmb3JtLW1vZHVsZXMvdGVycmFmb3JtLW1vZHVsZS1kZXRhaWxzL3RlcnJhZm9ybS1tb2R1bGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerraformModuleDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terraform-module-details',
          templateUrl: './terraform-module-details.component.html',
          styleUrls: ['./terraform-module-details.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, {
        record: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['record']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/terraform-modules/terraform-modules-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/terraform-modules/terraform-modules-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: TerraformModulesRoutingModule */

  /***/
  function srcAppModulesTerraformModulesTerraformModulesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerraformModulesRoutingModule", function () {
      return TerraformModulesRoutingModule;
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


    var _terraform_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./terraform-modules.component */
    "./src/app/modules/terraform-modules/terraform-modules.component.ts");

    var routes = [{
      path: '',
      component: _terraform_modules_component__WEBPACK_IMPORTED_MODULE_2__["TerraformModulesComponent"]
    }];

    var TerraformModulesRoutingModule = function TerraformModulesRoutingModule() {
      _classCallCheck(this, TerraformModulesRoutingModule);
    };

    TerraformModulesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TerraformModulesRoutingModule
    });
    TerraformModulesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TerraformModulesRoutingModule_Factory(t) {
        return new (t || TerraformModulesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TerraformModulesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerraformModulesRoutingModule, [{
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
  "./src/app/modules/terraform-modules/terraform-modules.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/terraform-modules/terraform-modules.component.ts ***!
    \**************************************************************************/

  /*! exports provided: TerraformModulesComponent */

  /***/
  function srcAppModulesTerraformModulesTerraformModulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerraformModulesComponent", function () {
      return TerraformModulesComponent;
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

    var TerraformModulesComponent = /*#__PURE__*/function () {
      function TerraformModulesComponent(dataService) {
        _classCallCheck(this, TerraformModulesComponent);

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

      _createClass(TerraformModulesComponent, [{
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

      return TerraformModulesComponent;
    }();

    TerraformModulesComponent.ɵfac = function TerraformModulesComponent_Factory(t) {
      return new (t || TerraformModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    TerraformModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TerraformModulesComponent,
      selectors: [["app-terraform-modules"]],
      decls: 39,
      vars: 5,
      consts: [[1, "module-content-container"], [1, "module-header-wrapper", 2, "border-bottom", "1px solid #cccccc"], [1, "flex-container", 2, "padding", "15px"], [1, "module-branding"], [1, "module-brand"], ["shape", "terraform", 1, "is-solid", 2, "margin-right", "10px"], [1, "module-title"], [1, "module-nav", 2, "margin-left", "25px"], [1, "module-content-area", 2, "padding", "10px"], [3, "table"], [3, "clrModalOpen", "clrModalOpenChange"], [1, "modal-title"], [1, "modal-body"], ["clrForm", ""], [1, "clr-col-12", "clr-col-md-3"], ["clrInput", "", "type", "text", "name", "name", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrInput", "", "type", "text", "name", "repo", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], ["clrTextarea", "", "name", "description", "required", "", 1, "clr-col-12", "clr-col-md-9", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function TerraformModulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Terraform Modules ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function TerraformModulesComponent_Template_clr_modal_clrModalOpenChange_11_listener($event) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModulesComponent_Template_input_ngModelChange_19_listener($event) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModulesComponent_Template_input_ngModelChange_25_listener($event) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TerraformModulesComponent_Template_textarea_ngModelChange_31_listener($event) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModulesComponent_Template_button_click_35_listener() {
            return ctx.addRecord = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerraformModulesComponent_Template_button_click_37_listener() {
            return ctx.createRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", "modules");

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
      styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvc3RhY2tzL3N0YWNrcy13ZWItY2xpZW50L3NyYy9hcHAvbW9kdWxlcy90ZXJyYWZvcm0tbW9kdWxlcy90ZXJyYWZvcm0tbW9kdWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy90ZXJyYWZvcm0tbW9kdWxlcy90ZXJyYWZvcm0tbW9kdWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90ZXJyYWZvcm0tbW9kdWxlcy90ZXJyYWZvcm0tbW9kdWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuIiwiLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerraformModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terraform-modules',
          templateUrl: './terraform-modules.component.html',
          styleUrls: ['./terraform-modules.component.scss']
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
  "./src/app/modules/terraform-modules/terraform-modules.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/terraform-modules/terraform-modules.module.ts ***!
    \***********************************************************************/

  /*! exports provided: TerraformModulesModule */

  /***/
  function srcAppModulesTerraformModulesTerraformModulesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerraformModulesModule", function () {
      return TerraformModulesModule;
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


    var _terraform_modules_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./terraform-modules-routing.module */
    "./src/app/modules/terraform-modules/terraform-modules-routing.module.ts");
    /* harmony import */


    var _terraform_modules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terraform-modules.component */
    "./src/app/modules/terraform-modules/terraform-modules.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
    /* harmony import */


    var _terraform_module_details_terraform_module_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./terraform-module-details/terraform-module-details.component */
    "./src/app/modules/terraform-modules/terraform-module-details/terraform-module-details.component.ts");

    var TerraformModulesModule = function TerraformModulesModule() {
      _classCallCheck(this, TerraformModulesModule);
    };

    TerraformModulesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TerraformModulesModule
    });
    TerraformModulesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TerraformModulesModule_Factory(t) {
        return new (t || TerraformModulesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _terraform_modules_routing_module__WEBPACK_IMPORTED_MODULE_2__["TerraformModulesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TerraformModulesModule, {
        declarations: [_terraform_modules_component__WEBPACK_IMPORTED_MODULE_3__["TerraformModulesComponent"], _terraform_module_details_terraform_module_details_component__WEBPACK_IMPORTED_MODULE_6__["TerraformModuleDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _terraform_modules_routing_module__WEBPACK_IMPORTED_MODULE_2__["TerraformModulesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerraformModulesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_terraform_modules_component__WEBPACK_IMPORTED_MODULE_3__["TerraformModulesComponent"], _terraform_module_details_terraform_module_details_component__WEBPACK_IMPORTED_MODULE_6__["TerraformModuleDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _terraform_modules_routing_module__WEBPACK_IMPORTED_MODULE_2__["TerraformModulesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-terraform-modules-terraform-modules-module-es5.js.map