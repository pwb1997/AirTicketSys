webpackJsonp(["login.module"],{

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-family: 'PoiretOne';\n    font-size: 60px;\n    margin-top: 0px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main' [style.visibility]='formVisibility'>\n  <h1>Login</h1>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" class='form'>\n    <div class='radio'>\n      <input type=\"radio\" name='type' value='customer' [ngModel]='type'>Customer\n      <input type=\"radio\" name='type' value='airline_staff' [ngModel]='type'>Airline Staff\n      <input type=\"radio\" name='type' value='booking_agent' [ngModel]='type'>Booking Agent\n      <br>\n    </div>\n    Username or Email\n    <br>\n    <input type='text' name='username' ngModel required>\n    <br> Password\n    <br>\n    <input type='text' name='password' ngModel required>\n    <br>\n    <div class='button'>\n      <button [disabled]='f.form.invalid'>Login</button>\n      <button routerLink='/registeration'>Register</button>\n    </div>\n  </form>\n</div>\n<div class='main' [style.visibility]='redirectionVisibility'>\n  <p>Login Successfully! Redirecting You to Homepage ...</p>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
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
        if (f.invalid) {
            return;
        }
        this.validation = '';
        f.value.password = md5(f.value.password);
        this.http.post('/login', f.value, { responseType: 'text' }).subscribe(function (res) {
            _this.formVisibility = 'hidden';
            _this.redirectionVisibility = 'visible';
            window.location.href = '/home';
        }, function (err) {
            if (err.status === 401) {
                _this.validation = 'Username or Password Not Correct!';
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/login/login.module.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var routes = [{ path: '', component: login_component_1.LoginComponent }];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule],
            declarations: [login_component_1.LoginComponent]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;


/***/ })

});
//# sourceMappingURL=login.module.chunk.js.map