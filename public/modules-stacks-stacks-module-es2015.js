(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-stacks-stacks-module"],{

/***/ "./src/app/modules/stacks/stack-details/stack-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/stacks/stack-details/stack-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: StackDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackDetailsComponent", function() { return StackDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");








function StackDetailsComponent_div_0_div_3_div_1_clr_timeline_step_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-timeline-step", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-timeline-step-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-timeline-step-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-timeline-step-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StackDetailsComponent_div_0_div_3_div_1_clr_timeline_step_9_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const n_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r8.showNodeDetails(n_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const n_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrState", n_r7.ui_state_icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r7.state, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", n_r7.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("                ", n_r7.ui_console_out, "\n              ");
} }
function StackDetailsComponent_div_0_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-timeline", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-timeline-step", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-timeline-step-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "START");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-timeline-step-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-timeline-step-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StackDetailsComponent_div_0_div_3_div_1_clr_timeline_step_9_Template, 11, 5, "clr-timeline-step", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "clr-timeline-step", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "clr-timeline-step-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "END");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "clr-timeline-step-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "clr-timeline-step-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nodes_r5 = ctx.ngIf;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrState", item_r1.ui_start_icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.ui_start_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.ui_start_msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", nodes_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrState", item_r1.ui_end_icon);
} }
function StackDetailsComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StackDetailsComponent_div_0_div_3_div_1_Template, 15, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.nodes$));
} }
function StackDetailsComponent_div_0_div_4_app_page_loading_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function StackDetailsComponent_div_0_div_4_div_2_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("          ", details_r14.ui_console_out, "\n        ");
} }
function StackDetailsComponent_div_0_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StackDetailsComponent_div_0_div_4_div_2_pre_1_Template, 2, 1, "pre", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r12.details$));
} }
function StackDetailsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StackDetailsComponent_div_0_div_4_app_page_loading_1_Template, 1, 0, "app-page-loading", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StackDetailsComponent_div_0_div_4_div_2_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.displayDetailsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.displayDetailsLoading);
} }
function StackDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StackDetailsComponent_div_0_div_3_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StackDetailsComponent_div_0_div_4_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.displayNodeDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.displayNodeDetails);
} }
class StackDetailsComponent {
    constructor(dataService, activatedRoute) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.displayNodeDetails = false;
        this.displayDetailsLoading = true;
        this.currentDetailsNode = null;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(p => {
            this.stackId = p.stack;
            this.loadStackNodes();
            this.item$ = this.dataService.record$('api/stacks', p.stack);
        });
        this.item$.subscribe(i => {
            this.item = i;
        });
    }
    loadStackNodes() {
        this.nodes$ = this.dataService.records$('api/stack-resources', {
            _stack: this.stackId,
            $sort: {
                order: 1
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((r) => r.data));
        // this.nodes$.subscribe( i => {
        //   console.log(i)
        //   this.loading = false;
        // })
    }
    showNodeDetails(n) {
        this.displayNodeDetails = true;
        this.details$ = this.dataService.record$('api/stack-resources', n._id);
        setTimeout(() => {
            this.displayDetailsLoading = false;
        }, 2000);
    }
}
StackDetailsComponent.ɵfac = function StackDetailsComponent_Factory(t) { return new (t || StackDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
StackDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StackDetailsComponent, selectors: [["app-stack-details"]], decls: 2, vars: 3, consts: [["class", "catalog-content-container", 4, "ngIf"], [1, "catalog-content-container"], [1, "catalog-content-menu"], [1, "clr-row"], ["class", "clr-col", 4, "ngIf"], [1, "clr-col"], ["class", "catalog-content-timeline", 4, "ngIf"], [1, "catalog-content-timeline"], ["clrLayout", "vertical", 2, "width", "95%"], [3, "clrState"], [3, "clrState", 4, "ngFor", "ngForOf"], [2, "font-size", "12px", "border", "none", "padding", "10px", "background-color", "black", "color", "chartreuse", "max-height", "300px", "min-width", "70vw", "overflow", "scroll", "overflow-wrap", "break-word"], [1, "btn", "btn-sm", 3, "click"], [4, "ngIf"], ["class", "node-details-container", "style", "background-color: black; color: floralwhite; height: 90%; overflow: scroll;", 4, "ngIf"], [1, "node-details-container", 2, "background-color", "black", "color", "floralwhite", "height", "90%", "overflow", "scroll"], ["style", "font-size: 12px; border: none;", 4, "ngIf"], [2, "font-size", "12px", "border", "none"]], template: function StackDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StackDetailsComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.item$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTimeline"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTimelineStep"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTimelineStepHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTimelineStepTitle"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrTimelineStepDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_6__["PageLoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhY2tzL3N0YWNrLWRldGFpbHMvc3RhY2stZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stack-details',
                templateUrl: './stack-details.component.html',
                styleUrls: ['./stack-details.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/stacks/stacks-browse/stacks-browse.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/stacks/stacks-browse/stacks-browse.component.ts ***!
  \*************************************************************************/
/*! exports provided: StacksBrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksBrowseComponent", function() { return StacksBrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









function StacksBrowseComponent_app_page_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function StacksBrowseComponent_div_1_div_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/stacks/details/", item_r5._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.description, " ");
} }
function StacksBrowseComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "clr-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Manage an existing stack here by clicking the stack you would like to manage.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StacksBrowseComponent_div_1_div_2_div_12_Template, 7, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r3);
} }
function StacksBrowseComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StacksBrowseComponent_div_1_div_2_Template, 13, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.stacks$));
} }
class StacksBrowseComponent {
    constructor(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
        this.loading = false;
    }
    ngOnInit() {
        this.stacks$ = this.dataService.records$('api/stacks', {
            $sort: {
                name: 1
            }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((r) => r.data));
        this.loading = false;
    }
}
StacksBrowseComponent.ɵfac = function StacksBrowseComponent_Factory(t) { return new (t || StacksBrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
StacksBrowseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StacksBrowseComponent, selectors: [["app-stacks-browse"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "catalog-browse-container", 4, "ngIf"], [1, "catalog-browse-container"], [1, "catalog-browse-menu"], ["class", "catalog-items-container", 4, "ngIf"], [1, "catalog-items-container"], [1, "catalog-items"], [1, "clr-row"], [1, "clr-col"], ["role", "alert", 1, "alert", "alert-info"], [1, "alert-items"], [1, "alert-item", "static"], [1, "alert-icon-wrapper"], ["shape", "info-circle", 1, "alert-icon"], [1, "alert-text"], [1, "clr-row", "items-row"], ["class", "clr-col-lg-3 clr-col-md-6 clr-col-12", 4, "ngFor", "ngForOf"], [1, "clr-col-lg-3", "clr-col-md-6", "clr-col-12"], [1, "card", "item-card", "clickable", 3, "routerLink"], [1, "card-block"], [1, "card-title"], [1, "card-text"]], template: function StacksBrowseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StacksBrowseComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StacksBrowseComponent_div_1_Template, 4, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_5__["PageLoadingComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrAlertText"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhY2tzL3N0YWNrcy1icm93c2Uvc3RhY2tzLWJyb3dzZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StacksBrowseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stacks-browse',
                templateUrl: './stacks-browse.component.html',
                styleUrls: ['./stacks-browse.component.scss']
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/stacks/stacks-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/stacks/stacks-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: StacksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksRoutingModule", function() { return StacksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stacks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stacks.component */ "./src/app/modules/stacks/stacks.component.ts");
/* harmony import */ var _stacks_browse_stacks_browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacks-browse/stacks-browse.component */ "./src/app/modules/stacks/stacks-browse/stacks-browse.component.ts");
/* harmony import */ var _stack_details_stack_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stack-details/stack-details.component */ "./src/app/modules/stacks/stack-details/stack-details.component.ts");







const routes = [
    {
        path: '',
        component: _stacks_component__WEBPACK_IMPORTED_MODULE_2__["StacksComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'browse'
            },
            {
                path: 'browse',
                component: _stacks_browse_stacks_browse_component__WEBPACK_IMPORTED_MODULE_3__["StacksBrowseComponent"]
            },
            {
                path: 'details/:stack',
                component: _stack_details_stack_details_component__WEBPACK_IMPORTED_MODULE_4__["StackDetailsComponent"]
            }
        ]
    }
];
class StacksRoutingModule {
}
StacksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StacksRoutingModule });
StacksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StacksRoutingModule_Factory(t) { return new (t || StacksRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StacksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StacksRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/stacks/stacks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/stacks/stacks.component.ts ***!
  \****************************************************/
/*! exports provided: StacksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksComponent", function() { return StacksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function StacksComponent_app_page_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function StacksComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "clr-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Stacks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StacksComponent {
    constructor(authService, dataService) {
        this.authService = authService;
        this.dataService = dataService;
        this.loading = true;
    }
    ngOnInit() {
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    }
}
StacksComponent.ɵfac = function StacksComponent_Factory(t) { return new (t || StacksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
StacksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StacksComponent, selectors: [["app-stacks"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "module-content-container", 4, "ngIf"], [1, "module-content-container"], [1, "module-header-wrapper", 2, "border-bottom", "1px solid #cccccc"], [1, "flex-container", 2, "padding", "15px"], [1, "module-branding"], [1, "module-brand"], ["shape", "layers", 1, "is-solid", 2, "margin-right", "10px"], [1, "module-title"], [1, "module-nav", 2, "margin-left", "25px"], [1, "module-content-area", 2, "padding", "10px"]], template: function StacksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StacksComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StacksComponent_div_1_Template, 11, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__["PageLoadingComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3RhY2tzL3N0YWNrcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StacksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stacks',
                templateUrl: './stacks.component.html',
                styleUrls: ['./stacks.component.scss']
            }]
    }], function () { return [{ type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/stacks/stacks.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/stacks/stacks.module.ts ***!
  \*************************************************/
/*! exports provided: StacksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StacksModule", function() { return StacksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _stacks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stacks-routing.module */ "./src/app/modules/stacks/stacks-routing.module.ts");
/* harmony import */ var _stacks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stacks.component */ "./src/app/modules/stacks/stacks.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _stacks_browse_stacks_browse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stacks-browse/stacks-browse.component */ "./src/app/modules/stacks/stacks-browse/stacks-browse.component.ts");
/* harmony import */ var _stack_details_stack_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stack-details/stack-details.component */ "./src/app/modules/stacks/stack-details/stack-details.component.ts");









class StacksModule {
}
StacksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StacksModule });
StacksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StacksModule_Factory(t) { return new (t || StacksModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
            _stacks_routing_module__WEBPACK_IMPORTED_MODULE_2__["StacksRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StacksModule, { declarations: [_stacks_component__WEBPACK_IMPORTED_MODULE_3__["StacksComponent"], _stacks_browse_stacks_browse_component__WEBPACK_IMPORTED_MODULE_6__["StacksBrowseComponent"], _stack_details_stack_details_component__WEBPACK_IMPORTED_MODULE_7__["StackDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
        _stacks_routing_module__WEBPACK_IMPORTED_MODULE_2__["StacksRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StacksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_stacks_component__WEBPACK_IMPORTED_MODULE_3__["StacksComponent"], _stacks_browse_stacks_browse_component__WEBPACK_IMPORTED_MODULE_6__["StacksBrowseComponent"], _stack_details_stack_details_component__WEBPACK_IMPORTED_MODULE_7__["StackDetailsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                    _stacks_routing_module__WEBPACK_IMPORTED_MODULE_2__["StacksRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-stacks-stacks-module-es2015.js.map