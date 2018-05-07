webpackJsonp(["registeration.module"],{

/***/ "./src/app/registeration/register-agent/register-agent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registeration/register-agent/register-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      email:\n      <input type='text' name='email' ngModel required>\n      <br> password:\n      <input type='text' name='password' ngModel required>\n      <br>\n      <p>{{validation}}</p>\n      <button>Register</button>\n      <a routerLink='/registeration'>Back</a>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/registeration/register-agent/register-agent.component.ts":
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
var RegisterAgentComponent = /** @class */ (function () {
    function RegisterAgentComponent(http, router) {
        this.http = http;
        this.router = router;
        this.validation = '';
    }
    RegisterAgentComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            this.validation = 'Please Fill in All the Blanks!';
            return;
        }
        this.validation = '';
        f.value.password = md5(f.value.password);
        this.http.post('/registeration/agent', f.value, { responseType: 'text' }).subscribe(function (res) {
            _this.validation = 'Account Created! Redirecting You to Login ...';
            window.setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }, function (err) {
            if (err.status === 409) {
                _this.validation = 'Email Exists, Try Another One or Login!';
            }
            if (err.status === 500) {
                _this.validation = 'Registeration Failed, Please Check Your Information and Try Again!';
            }
        });
    };
    RegisterAgentComponent.prototype.ngOnInit = function () { };
    RegisterAgentComponent = __decorate([
        core_1.Component({
            selector: 'app-register-agent',
            template: __webpack_require__("./src/app/registeration/register-agent/register-agent.component.html"),
            styles: [__webpack_require__("./src/app/registeration/register-agent/register-agent.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], RegisterAgentComponent);
    return RegisterAgentComponent;
}());
exports.RegisterAgentComponent = RegisterAgentComponent;


/***/ }),

/***/ "./src/app/registeration/register-customer/register-customer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registeration/register-customer/register-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    email:\n    <input type='text' name='email' ngModel required>\n    <br> name:\n    <input type='text' name='name' ngModel required>\n    <br> password:\n    <input type='text' name='password' ngModel required>\n    <br> building number:\n    <input type='text' name='building_number' ngModel required>\n    <br> street:\n    <input type='text' name='street' ngModel required>\n    <br> city:\n    <input type='text' name='city' ngModel required>\n    <br> state:\n    <input type='text' name='state' ngModel required>\n    <br> phone number:\n    <input type='text' name='phone_number' ngModel required>\n    <br> passport number:\n    <input type='text' name='passport_number' ngModel required>\n    <br> passport expiration:\n    <input type='date' name='passport_expiration' ngModel required>\n    <br> passport country:\n    <input type='text' name='passport_country' ngModel required>\n    <br> date of birth:\n    <input type='date' name='date_of_birth' ngModel required>\n    <br>\n    <p>{{validation}}</p>\n    <button>Register</button>\n    <a routerLink='/registeration'>Back</a>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/registeration/register-customer/register-customer.component.ts":
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
var RegisterCustomerComponent = /** @class */ (function () {
    function RegisterCustomerComponent(http, router) {
        this.http = http;
        this.router = router;
        this.validation = '';
    }
    RegisterCustomerComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            this.validation = 'Please Fill in All the Blanks!';
            return;
        }
        this.validation = '';
        f.value.password = md5(f.value.password);
        this.http.post('/registeration/customer', f.value, { responseType: 'text' }).subscribe(function (res) {
            _this.validation = 'Account Created! Redirecting You to Login ...';
            window.setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }, function (err) {
            if (err.status === 409) {
                _this.validation = 'Email Exists, Try Another One or Login!';
            }
            if (err.status === 500) {
                _this.validation = 'Registeration Failed, Please Check Your Information and Try Again!';
            }
        });
    };
    RegisterCustomerComponent.prototype.ngOnInit = function () {
    };
    RegisterCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-register-customer',
            template: __webpack_require__("./src/app/registeration/register-customer/register-customer.component.html"),
            styles: [__webpack_require__("./src/app/registeration/register-customer/register-customer.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], RegisterCustomerComponent);
    return RegisterCustomerComponent;
}());
exports.RegisterCustomerComponent = RegisterCustomerComponent;


/***/ }),

/***/ "./src/app/registeration/register-staff/register-staff.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registeration/register-staff/register-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      username:\n      <input type='text' name='username' ngModel required>\n      <br> password:\n      <input type='text' name='password' ngModel required>\n      <br> first name:\n      <input type='text' name='first_name' ngModel required>\n      <br> last name:\n      <input type='text' name='last_name' ngModel required>\n      <br> date of birth:\n      <input type='date' name='date_of_birth' ngModel required>\n      <br> airline name:\n      <input type='text' name='airline_name' ngModel required>\n      <br>\n      <p>{{validation}}</p>\n      <button>Register</button>\n      <a routerLink='/registeration'>Back</a>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/registeration/register-staff/register-staff.component.ts":
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
var RegisterStaffComponent = /** @class */ (function () {
    function RegisterStaffComponent(http, router) {
        this.http = http;
        this.router = router;
        this.validation = '';
    }
    RegisterStaffComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            this.validation = 'Please Fill in All the Blanks!';
            return;
        }
        f.value.password = md5(f.value.password);
        this.validation = '';
        this.http.post('/registeration/staff', f.value, { responseType: 'text' }).subscribe(function (res) {
            _this.validation = 'Account Created! Redirecting You to Login ...';
            window.setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }, function (err) {
            if (err.status === 409) {
                _this.validation = 'Email Exists, Try Another One or Login!';
            }
            if (err.status === 500) {
                _this.validation = 'Registeration Failed, Please Check Your Information and Try Again!';
            }
        });
    };
    RegisterStaffComponent.prototype.ngOnInit = function () {
    };
    RegisterStaffComponent = __decorate([
        core_1.Component({
            selector: 'app-register-staff',
            template: __webpack_require__("./src/app/registeration/register-staff/register-staff.component.html"),
            styles: [__webpack_require__("./src/app/registeration/register-staff/register-staff.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], RegisterStaffComponent);
    return RegisterStaffComponent;
}());
exports.RegisterStaffComponent = RegisterStaffComponent;


/***/ }),

/***/ "./src/app/registeration/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registeration/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <a routerLink='/registeration/customer'>Customer</a>\n  <a routerLink='/registeration/staff'>Airline Staff</a>\n  <a routerLink='/registeration/agent'>Booking Agent</a>\n</div>"

/***/ }),

/***/ "./src/app/registeration/register/register.component.ts":
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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/registeration/register/register.component.html"),
            styles: [__webpack_require__("./src/app/registeration/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/registeration/registeration-routing.module.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var register_component_1 = __webpack_require__("./src/app/registeration/register/register.component.ts");
var register_agent_component_1 = __webpack_require__("./src/app/registeration/register-agent/register-agent.component.ts");
var register_customer_component_1 = __webpack_require__("./src/app/registeration/register-customer/register-customer.component.ts");
var register_staff_component_1 = __webpack_require__("./src/app/registeration/register-staff/register-staff.component.ts");
var routes = [
    { path: '', component: register_component_1.RegisterComponent },
    { path: 'customer', component: register_customer_component_1.RegisterCustomerComponent },
    { path: 'agent', component: register_agent_component_1.RegisterAgentComponent },
    { path: 'staff', component: register_staff_component_1.RegisterStaffComponent }
];
var RegisterationRoutingModule = /** @class */ (function () {
    function RegisterationRoutingModule() {
    }
    RegisterationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], RegisterationRoutingModule);
    return RegisterationRoutingModule;
}());
exports.RegisterationRoutingModule = RegisterationRoutingModule;


/***/ }),

/***/ "./src/app/registeration/registeration.module.ts":
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
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var registeration_routing_module_1 = __webpack_require__("./src/app/registeration/registeration-routing.module.ts");
var register_component_1 = __webpack_require__("./src/app/registeration/register/register.component.ts");
var register_agent_component_1 = __webpack_require__("./src/app/registeration/register-agent/register-agent.component.ts");
var register_customer_component_1 = __webpack_require__("./src/app/registeration/register-customer/register-customer.component.ts");
var register_staff_component_1 = __webpack_require__("./src/app/registeration/register-staff/register-staff.component.ts");
var RegisterationModule = /** @class */ (function () {
    function RegisterationModule() {
    }
    RegisterationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, registeration_routing_module_1.RegisterationRoutingModule, forms_1.FormsModule],
            declarations: [register_component_1.RegisterComponent, register_agent_component_1.RegisterAgentComponent, register_customer_component_1.RegisterCustomerComponent, register_staff_component_1.RegisterStaffComponent]
        })
    ], RegisterationModule);
    return RegisterationModule;
}());
exports.RegisterationModule = RegisterationModule;


/***/ })

});
//# sourceMappingURL=registeration.module.chunk.js.map