webpackJsonp(["logout.module"],{

/***/ "./src/app/logout/logout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='top-message' [style.display]='topMessageDisplay' [style.background-color]=\"topMessageBackgroundColor\" style=\"z-index: 9999\">\n    <p>{{topMessage}}</p>\n  </div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(http) {
        this.http = http;
        this.topMessage = '';
        this.topMessageDisplay = '';
        this.topMessageBackgroundColor = '';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.post('/logout', null, { responseType: 'text' }).subscribe(function (res) {
            _this.topMessageBackgroundColor = '#00F6ED';
            _this.topMessage = 'Logout Successfully! Redirecting You to Homepage ...';
            window.location.href = '/home';
        }, function (err) {
            _this.topMessageBackgroundColor = 'orange';
            _this.topMessage = 'Logout Failed! Please Try Again ...';
            window.location.href = '/home';
        });
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-logout',
            template: __webpack_require__("./src/app/logout/logout.component.html"),
            styles: [__webpack_require__("./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;


/***/ }),

/***/ "./src/app/logout/logout.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var logout_component_1 = __webpack_require__("./src/app/logout/logout.component.ts");
var routes = [{ path: '', component: logout_component_1.LogoutComponent }];
var LogoutModule = /** @class */ (function () {
    function LogoutModule() {
    }
    LogoutModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), http_1.HttpClientModule],
            declarations: [logout_component_1.LogoutComponent]
        })
    ], LogoutModule);
    return LogoutModule;
}());
exports.LogoutModule = LogoutModule;


/***/ })

});
//# sourceMappingURL=logout.module.chunk.js.map