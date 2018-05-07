webpackJsonp(["registeration.module"],{

/***/ "./src/app/registeration/registeration.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-family: 'PoiretOne';\n    font-size: 60px;\n    margin-top: 0px;\n}"

/***/ }),

/***/ "./src/app/registeration/registeration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <h1>Registeration</h1>\n\n  <form #f=\"ngForm\">\n    <div class='radio'>\n      <input type=\"radio\" name='type' value='customer' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Customer\n      <input type=\"radio\" name='type' value='airline_staff' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Airline Staff\n      <input type=\"radio\" name='type' value='booking_agent' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Booking Agent\n    </div>\n  </form>\n\n  <form #customer=\"ngForm\" (ngSubmit)=\"onSubmitCustomer(customer)\" [style.display]='customerDisplay' class='form'>\n    Email\n    <br>\n    <input type='text' name='email' ngModel required>\n    <br> Name\n    <br>\n    <input type='text' name='name' ngModel required>\n    <br> Password\n    <br>\n    <input type='text' name='password' ngModel required>\n    <br> Building number\n    <br>\n    <input type='text' name='building_number' ngModel required>\n    <br> Street\n    <br>\n    <input type='text' name='street' ngModel required>\n    <br> City\n    <br>\n    <input type='text' name='city' ngModel required>\n    <br> State\n    <br>\n    <input type='text' name='state' ngModel required>\n    <br> Phone Number\n    <br>\n    <input type='text' name='phone_number' ngModel required>\n    <br> Passport Number\n    <br>\n    <input type='text' name='passport_number' ngModel required>\n    <br> Passport Expiration\n    <br>\n    <input type='date' name='passport_expiration' ngModel required>\n    <br> Passport Country\n    <br>\n    <input type='text' name='passport_country' ngModel required>\n    <br> Date of Birth\n    <br>\n    <input type='date' name='date_of_birth' ngModel required>\n    <br>\n    <div class='button'>\n      <button [disabled]='customer.form.invalid'>Register</button>\n    </div>\n  </form>\n\n  <form #staff=\"ngForm\" (ngSubmit)=\"onSubmitStaff(staff)\" [style.display]='staffDisplay' class='form'>\n    Username\n    <br>\n    <input type='text' name='username' ngModel required>\n    <br> Password\n    <br>\n    <input type='text' name='password' ngModel required>\n    <br> First Name\n    <br>\n    <input type='text' name='first_name' ngModel required>\n    <br> Last Name\n    <br>\n    <input type='text' name='last_name' ngModel required>\n    <br> Date of Birth\n    <br>\n    <input type='date' name='date_of_birth' ngModel required>\n    <br> Airline Name\n    <br>\n    <input type='text' name='airline_name' ngModel required>\n    <br>\n    <div class='button'>\n      <button [disabled]='staff.form.invalid'>Register</button>\n    </div>\n  </form>\n\n  <form #agent=\"ngForm\" (ngSubmit)=\"onSubmitAgent(agent)\" [style.display]='agentDisplay' class='form'>\n    Email <br>\n    <input type='text' name='email' ngModel required>\n    <br> Password <br>\n    <input type='text' name='password' ngModel required>\n    <br>\n    <div class='button'>\n      <button [disabled]='agent.form.invalid'>Register</button>\n    </div>\n  </form>\n  \n</div>\n\n<div>\n  <div id='top-message' [style.display]='topMessageDisplay' [style.background-color]=\"topMessageBackgroundColor\" style=\"z-index: 9999\">\n    <p>{{topMessage}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/registeration/registeration.component.ts":
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
var md5 = __webpack_require__("./node_modules/md5/md5.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var RegisterationComponent = /** @class */ (function () {
    function RegisterationComponent(http, router) {
        this.http = http;
        this.router = router;
        this.type = 'customer';
        this.customerDisplay = '';
        this.staffDisplay = 'none';
        this.agentDisplay = 'none';
        this.topMessageDisplay = 'none';
        this.topMessage = '';
        this.topMessageBackgroundColor = '';
    }
    RegisterationComponent.prototype.toggleDisplay = function () {
        this.customerDisplay = 'none';
        this.staffDisplay = 'none';
        this.agentDisplay = 'none';
        switch (this.type) {
            case 'customer':
                this.customerDisplay = '';
                break;
            case 'airline_staff':
                this.staffDisplay = '';
                break;
            case 'booking_agent':
                this.agentDisplay = '';
                break;
        }
    };
    RegisterationComponent.prototype.onSubmitCustomer = function (customer) {
        var _this = this;
        if (customer.invalid) {
            return;
        }
        customer.value.password = md5(customer.value.password);
        this.http.post('/registeration/customer', customer.value, { responseType: 'text' }).subscribe(function (res) {
            _this.topMessageDisplay = '';
            _this.topMessageBackgroundColor = '#00F6ED';
            _this.topMessage = 'Account created, redirecting you to login ...';
            window.setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }, function (err) {
            if (err.status === 409) {
                _this.topMessageDisplay = '';
                _this.topMessageBackgroundColor = 'orange';
                _this.topMessage = 'Email exists, try another one or login directly';
            }
            if (err.status === 500) {
                _this.topMessageDisplay = '';
                _this.topMessageBackgroundColor = 'orange';
                _this.topMessage = 'Registeration failed, please check your information and try again';
            }
        });
    };
    RegisterationComponent.prototype.onSubmitStaff = function (staff) {
        var _this = this;
        if (staff.invalid) {
            return;
        }
        staff.value.password = md5(staff.value.password);
        this.http.post('/registeration/staff', staff.value, { responseType: 'text' }).subscribe(function (res) {
            _this.topMessageDisplay = '';
            _this.topMessageBackgroundColor = '#00F6ED';
            _this.topMessage = 'Account created, redirecting you to login ...';
            window.setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }, function (err) {
            if (err.status === 409) {
                _this.topMessageDisplay = '';
                _this.topMessageBackgroundColor = 'orange';
                _this.topMessage = 'Email exists, try another one or login directly';
            }
            if (err.status === 500) {
                _this.topMessageDisplay = '';
                _this.topMessageBackgroundColor = 'orange';
                _this.topMessage = 'Registeration failed, please check your information and try again';
            }
        });
    };
    RegisterationComponent.prototype.onSubmitAgent = function (agent) {
        var _this = this;
        if (agent.invalid) {
            return;
        }
        agent.value.password = md5(agent.value.password);
        this.http.post('/registeration/agent', agent.value, { responseType: 'text' }).subscribe(function (res) {
            _this.topMessageDisplay = '';
            _this.topMessageBackgroundColor = '#00F6ED';
            _this.topMessage = 'Account created, redirecting you to login ...';
            window.setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }, function (err) {
            if (err.status === 409) {
                _this.topMessageDisplay = '';
                _this.topMessageBackgroundColor = 'orange';
                _this.topMessage = 'Email exists, try another one or login directly';
            }
            if (err.status === 500) {
                _this.topMessageDisplay = '';
                _this.topMessageBackgroundColor = 'orange';
                _this.topMessage = 'Registeration failed, please check your information and try again';
            }
        });
    };
    RegisterationComponent.prototype.ngOnInit = function () {
    };
    RegisterationComponent = __decorate([
        core_1.Component({
            selector: 'app-registeration',
            template: __webpack_require__("./src/app/registeration/registeration.component.html"),
            styles: [__webpack_require__("./src/app/registeration/registeration.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], RegisterationComponent);
    return RegisterationComponent;
}());
exports.RegisterationComponent = RegisterationComponent;


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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var registeration_component_1 = __webpack_require__("./src/app/registeration/registeration.component.ts");
var routes = [{ path: '', component: registeration_component_1.RegisterationComponent }];
var RegisterationModule = /** @class */ (function () {
    function RegisterationModule() {
    }
    RegisterationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule],
            declarations: [registeration_component_1.RegisterationComponent]
        })
    ], RegisterationModule);
    return RegisterationModule;
}());
exports.RegisterationModule = RegisterationModule;


/***/ })

});
//# sourceMappingURL=registeration.module.chunk.js.map