webpackJsonp(["about.module"],{

/***/ "./src/app/about/about.component.css.shim.ngstyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [""];
exports.styles = styles;


/***/ }),

/***/ "./src/app/about/about.component.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__("./src/app/about/about.component.css.shim.ngstyle.js");
var i1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var i2 = __webpack_require__("./src/app/about/about.component.ts");
var styles_AboutComponent = [i0.styles];
var RenderType_AboutComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AboutComponent, data: {} });
exports.RenderType_AboutComponent = RenderType_AboutComponent;
function View_AboutComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["\n  about works!\n"])), (_l()(), i1.ɵted(-1, null, ["\n"]))], null, null); }
exports.View_AboutComponent_0 = View_AboutComponent_0;
function View_AboutComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), i1.ɵdid(1, 114688, null, 0, i2.AboutComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AboutComponent_Host_0 = View_AboutComponent_Host_0;
var AboutComponentNgFactory = i1.ɵccf("app-about", i2.AboutComponent, View_AboutComponent_Host_0, {}, {}, []);
exports.AboutComponentNgFactory = AboutComponentNgFactory;


/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/about/about.module.ngfactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
exports.NgLocalization_3 = common_1.NgLocalization;
exports.NgLocaleLocalization_4 = common_1.NgLocaleLocalization;
exports.ɵa_6 = common_1.ɵa;
exports.CommonModule_7 = common_1.CommonModule;
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
exports.LOCALE_ID_5 = core_1.LOCALE_ID;
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
exports.ROUTES_8 = router_1.ROUTES;
exports.RouterModule_9 = router_1.RouterModule;
exports.ɵa_10 = router_1.ɵa;
exports.Router_11 = router_1.Router;
var i0 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var i1 = __webpack_require__("./src/app/about/about.module.ts");
var i2 = __webpack_require__("./src/app/about/about.component.ngfactory.js");
var i3 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var i4 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var i5 = __webpack_require__("./src/app/about/about.component.ts");
var AboutModuleNgFactory = i0.ɵcmf(i1.AboutModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.AboutComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵa]]), i0.ɵmpd(512, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(512, i4.RouterModule, i4.RouterModule, [[2, i4.ɵa], [2, i4.Router]]), i0.ɵmpd(512, i1.AboutModule, i1.AboutModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: "", component: i5.AboutComponent }]]; }, [])]); });
exports.AboutModuleNgFactory = AboutModuleNgFactory;


/***/ }),

/***/ "./src/app/about/about.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
var routes = [{ path: '', component: about_component_1.AboutComponent }];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ })

});
//# sourceMappingURL=about.module.chunk.js.map