webpackJsonp(["login.module"],{

/***/ "./src/app/login/login.component.css.shim.ngstyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".main[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 80px;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/login/login.component.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__("./src/app/login/login.component.css.shim.ngstyle.js");
var i1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var i2 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var i3 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var i4 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var i5 = __webpack_require__("./src/app/login/login.component.ts");
var i6 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var styles_LoginComponent = [i0.styles];
var RenderType_LoginComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_LoginComponent, data: {} });
exports.RenderType_LoginComponent = RenderType_LoginComponent;
function View_LoginComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 70, "div", [["class", "main"]], [[4, "visibility", null]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(2, 0, null, null, 67, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i1.ɵnov(_v, 4).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i1.ɵnov(_v, 4).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(i1.ɵnov(_v, 4)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i1.ɵdid(3, 16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(4, 4210688, [["f", 4]], 0, i2.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.NgForm]), i1.ɵdid(6, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ["\n    username or email:\n    "])), (_l()(), i1.ɵeld(8, 0, null, null, 7, "input", [["name", "username"], ["ngModel", ""], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(9, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(10, 16384, null, 0, i2.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.RequiredValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(13, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(15, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(17, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" password:\n    "])), (_l()(), i1.ɵeld(19, 0, null, null, 7, "input", [["name", "password"], ["ngModel", ""], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 20)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 20).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 20)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 20)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i1.ɵdid(20, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(21, 16384, null, 0, i2.RequiredValidator, [], { required: [0, "required"] }, null), i1.ɵprd(1024, null, i2.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i2.RequiredValidator]), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i2.DefaultValueAccessor]), i1.ɵdid(24, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [2, i2.NG_VALIDATORS], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(26, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(28, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(30, 0, null, null, 6, "input", [["name", "type"], ["type", "radio"], ["value", "customer"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 31)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 31).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 31)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 31)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (i1.ɵnov(_v, 32).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (i1.ɵnov(_v, 32).onTouched() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), i1.ɵdid(31, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(32, 212992, null, 0, i2.RadioControlValueAccessor, [i1.Renderer2, i1.ElementRef, i2.ɵi, i1.Injector], { name: [0, "name"], value: [1, "value"] }, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i2.DefaultValueAccessor, i2.RadioControlValueAccessor]), i1.ɵdid(34, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(36, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["Customer"])), (_l()(), i1.ɵeld(38, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(40, 0, null, null, 6, "input", [["name", "type"], ["type", "radio"], ["value", "airline_staff"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 41)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 41).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 41)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 41)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (i1.ɵnov(_v, 42).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (i1.ɵnov(_v, 42).onTouched() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), i1.ɵdid(41, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(42, 212992, null, 0, i2.RadioControlValueAccessor, [i1.Renderer2, i1.ElementRef, i2.ɵi, i1.Injector], { name: [0, "name"], value: [1, "value"] }, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i2.DefaultValueAccessor, i2.RadioControlValueAccessor]), i1.ɵdid(44, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(46, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["Airline Staff"])), (_l()(), i1.ɵeld(48, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(50, 0, null, null, 6, "input", [["name", "type"], ["type", "radio"], ["value", "booking_agent"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (i1.ɵnov(_v, 51)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (i1.ɵnov(_v, 51).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (i1.ɵnov(_v, 51)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (i1.ɵnov(_v, 51)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (i1.ɵnov(_v, 52).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (i1.ɵnov(_v, 52).onTouched() !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), i1.ɵdid(51, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵdid(52, 212992, null, 0, i2.RadioControlValueAccessor, [i1.Renderer2, i1.ElementRef, i2.ɵi, i1.Injector], { name: [0, "name"], value: [1, "value"] }, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0, p1_0) { return [p0_0, p1_0]; }, [i2.DefaultValueAccessor, i2.RadioControlValueAccessor]), i1.ɵdid(54, 671744, null, 0, i2.NgModel, [[2, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, "name"], model: [1, "model"] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.NgModel]), i1.ɵdid(56, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ["Booking Agent"])), (_l()(), i1.ɵeld(58, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(60, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(61, null, ["", ""])), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(63, 0, null, null, 1, "button", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Submit"])), (_l()(), i1.ɵted(-1, null, ["\n    "])), (_l()(), i1.ɵeld(66, 0, null, null, 2, "a", [["routerLink", "/registeration"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 67).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(67, 671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Register"])), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵted(-1, null, ["\n"])), (_l()(), i1.ɵeld(72, 0, null, null, 4, "div", [["class", "main"]], [[4, "visibility", null]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  "])), (_l()(), i1.ɵeld(74, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Login Successfully! Redirecting You to Homepage ..."])), (_l()(), i1.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_16 = ""; _ck(_v, 10, 0, currVal_16); var currVal_17 = "username"; var currVal_18 = ""; _ck(_v, 13, 0, currVal_17, currVal_18); var currVal_27 = ""; _ck(_v, 21, 0, currVal_27); var currVal_28 = "password"; var currVal_29 = ""; _ck(_v, 24, 0, currVal_28, currVal_29); var currVal_37 = "type"; var currVal_38 = "customer"; _ck(_v, 32, 0, currVal_37, currVal_38); var currVal_39 = "type"; var currVal_40 = _co.type; _ck(_v, 34, 0, currVal_39, currVal_40); var currVal_48 = "type"; var currVal_49 = "airline_staff"; _ck(_v, 42, 0, currVal_48, currVal_49); var currVal_50 = "type"; var currVal_51 = _co.type; _ck(_v, 44, 0, currVal_50, currVal_51); var currVal_59 = "type"; var currVal_60 = "booking_agent"; _ck(_v, 52, 0, currVal_59, currVal_60); var currVal_61 = "type"; var currVal_62 = _co.type; _ck(_v, 54, 0, currVal_61, currVal_62); var currVal_66 = "/registeration"; _ck(_v, 67, 0, currVal_66); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.formVisibility; _ck(_v, 0, 0, currVal_0); var currVal_1 = i1.ɵnov(_v, 6).ngClassUntouched; var currVal_2 = i1.ɵnov(_v, 6).ngClassTouched; var currVal_3 = i1.ɵnov(_v, 6).ngClassPristine; var currVal_4 = i1.ɵnov(_v, 6).ngClassDirty; var currVal_5 = i1.ɵnov(_v, 6).ngClassValid; var currVal_6 = i1.ɵnov(_v, 6).ngClassInvalid; var currVal_7 = i1.ɵnov(_v, 6).ngClassPending; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = (i1.ɵnov(_v, 10).required ? "" : null); var currVal_9 = i1.ɵnov(_v, 15).ngClassUntouched; var currVal_10 = i1.ɵnov(_v, 15).ngClassTouched; var currVal_11 = i1.ɵnov(_v, 15).ngClassPristine; var currVal_12 = i1.ɵnov(_v, 15).ngClassDirty; var currVal_13 = i1.ɵnov(_v, 15).ngClassValid; var currVal_14 = i1.ɵnov(_v, 15).ngClassInvalid; var currVal_15 = i1.ɵnov(_v, 15).ngClassPending; _ck(_v, 8, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_19 = (i1.ɵnov(_v, 21).required ? "" : null); var currVal_20 = i1.ɵnov(_v, 26).ngClassUntouched; var currVal_21 = i1.ɵnov(_v, 26).ngClassTouched; var currVal_22 = i1.ɵnov(_v, 26).ngClassPristine; var currVal_23 = i1.ɵnov(_v, 26).ngClassDirty; var currVal_24 = i1.ɵnov(_v, 26).ngClassValid; var currVal_25 = i1.ɵnov(_v, 26).ngClassInvalid; var currVal_26 = i1.ɵnov(_v, 26).ngClassPending; _ck(_v, 19, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_30 = i1.ɵnov(_v, 36).ngClassUntouched; var currVal_31 = i1.ɵnov(_v, 36).ngClassTouched; var currVal_32 = i1.ɵnov(_v, 36).ngClassPristine; var currVal_33 = i1.ɵnov(_v, 36).ngClassDirty; var currVal_34 = i1.ɵnov(_v, 36).ngClassValid; var currVal_35 = i1.ɵnov(_v, 36).ngClassInvalid; var currVal_36 = i1.ɵnov(_v, 36).ngClassPending; _ck(_v, 30, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_41 = i1.ɵnov(_v, 46).ngClassUntouched; var currVal_42 = i1.ɵnov(_v, 46).ngClassTouched; var currVal_43 = i1.ɵnov(_v, 46).ngClassPristine; var currVal_44 = i1.ɵnov(_v, 46).ngClassDirty; var currVal_45 = i1.ɵnov(_v, 46).ngClassValid; var currVal_46 = i1.ɵnov(_v, 46).ngClassInvalid; var currVal_47 = i1.ɵnov(_v, 46).ngClassPending; _ck(_v, 40, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47); var currVal_52 = i1.ɵnov(_v, 56).ngClassUntouched; var currVal_53 = i1.ɵnov(_v, 56).ngClassTouched; var currVal_54 = i1.ɵnov(_v, 56).ngClassPristine; var currVal_55 = i1.ɵnov(_v, 56).ngClassDirty; var currVal_56 = i1.ɵnov(_v, 56).ngClassValid; var currVal_57 = i1.ɵnov(_v, 56).ngClassInvalid; var currVal_58 = i1.ɵnov(_v, 56).ngClassPending; _ck(_v, 50, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58); var currVal_63 = _co.validation; _ck(_v, 61, 0, currVal_63); var currVal_64 = i1.ɵnov(_v, 67).target; var currVal_65 = i1.ɵnov(_v, 67).href; _ck(_v, 66, 0, currVal_64, currVal_65); var currVal_67 = _co.redirectionVisibility; _ck(_v, 72, 0, currVal_67); }); }
exports.View_LoginComponent_0 = View_LoginComponent_0;
function View_LoginComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), i1.ɵdid(1, 114688, null, 0, i5.LoginComponent, [i6.HttpClient, i3.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_LoginComponent_Host_0 = View_LoginComponent_Host_0;
var LoginComponentNgFactory = i1.ɵccf("app-login", i5.LoginComponent, View_LoginComponent_Host_0, {}, {}, []);
exports.LoginComponentNgFactory = LoginComponentNgFactory;


/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var md5 = __webpack_require__("./node_modules/md5/md5.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.validation = '';
        this.type = 'customer';
        this.redirectionVisibility = 'hidden';
        this.formVisibility = 'visible';
    }
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            if (f.value.username === '' && f.value.password === '') {
                this.validation = 'Please Input Username and Password!';
                return;
            }
            if (f.value.username === '') {
                this.validation = 'Please Input Username!';
                return;
            }
            if (f.value.password === '') {
                this.validation = 'Please Input Password!';
                return;
            }
        }
        this.validation = '';
        f.value.password = md5(f.value.password);
        this.http.post('/login', f.value, { responseType: 'text' }).subscribe(function (res) {
            _this.formVisibility = 'hidden';
            _this.redirectionVisibility = 'visible';
            window.setTimeout(function () {
                window.location.href = '/home';
            }, 3000);
        }, function (err) {
            if (err.status === 401) {
                _this.validation = 'Username or Password Not Correct!';
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/login/login.module.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var i1 = __webpack_require__("./src/app/login/login.module.ts");
var i2 = __webpack_require__("./src/app/login/login.component.ngfactory.js");
var i3 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var i4 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var i5 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var i6 = __webpack_require__("./src/app/login/login.component.ts");
var LoginModuleNgFactory = i0.ɵcmf(i1.LoginModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.LoginComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵa]]), i0.ɵmpd(4608, i4.ɵi, i4.ɵi, []), i0.ɵmpd(512, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(512, i5.RouterModule, i5.RouterModule, [[2, i5.ɵa], [2, i5.Router]]), i0.ɵmpd(512, i4.ɵba, i4.ɵba, []), i0.ɵmpd(512, i4.FormsModule, i4.FormsModule, []), i0.ɵmpd(512, i1.LoginModule, i1.LoginModule, []), i0.ɵmpd(1024, i5.ROUTES, function () { return [[{ path: "", component: i6.LoginComponent }]]; }, [])]); });
exports.LoginModuleNgFactory = LoginModuleNgFactory;


/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var routes = [
    {
        path: '',
        component: login_component_1.LoginComponent
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
exports.LoginModule = LoginModule;


/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map