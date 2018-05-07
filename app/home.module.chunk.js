webpackJsonp(["home.module"],{

/***/ "./src/app/home/home-agent/home-agent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home-agent/home-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n    <a routerLink='/flights'>View all flights</a>\n    <a routerLink='/search'>Search for flights</a>\n    <a routerLink='/track'>Dashboard</a>\n  </div>\n  "

/***/ }),

/***/ "./src/app/home/home-agent/home-agent.component.ts":
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
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var HomeAgentComponent = /** @class */ (function () {
    function HomeAgentComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    HomeAgentComponent.prototype.ngOnInit = function () {
        if (this.cookie.get('type') !== 'booking_agent') {
            this.router.navigate(['/home']);
        }
    };
    HomeAgentComponent = __decorate([
        core_1.Component({
            selector: 'app-home-agent',
            template: __webpack_require__("./src/app/home/home-agent/home-agent.component.html"),
            styles: [__webpack_require__("./src/app/home/home-agent/home-agent.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_cookie_service_1.CookieService])
    ], HomeAgentComponent);
    return HomeAgentComponent;
}());
exports.HomeAgentComponent = HomeAgentComponent;


/***/ }),

/***/ "./src/app/home/home-customer/home-customer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home-customer/home-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <a routerLink='/flights'>View all flights</a>\n  <a routerLink='/search'>Search for flights</a>\n  <a routerLink='/track'>Track my spending</a>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home-customer/home-customer.component.ts":
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
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var HomeCustomerComponent = /** @class */ (function () {
    function HomeCustomerComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    HomeCustomerComponent.prototype.ngOnInit = function () {
        if (this.cookie.get('type') !== 'customer') {
            this.router.navigate(['/home']);
        }
    };
    HomeCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-home-customer',
            template: __webpack_require__("./src/app/home/home-customer/home-customer.component.html"),
            styles: [__webpack_require__("./src/app/home/home-customer/home-customer.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_cookie_service_1.CookieService])
    ], HomeCustomerComponent);
    return HomeCustomerComponent;
}());
exports.HomeCustomerComponent = HomeCustomerComponent;


/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
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
var home_component_1 = __webpack_require__("./src/app/home/home/home.component.ts");
var home_staff_component_1 = __webpack_require__("./src/app/home/home-staff/home-staff.component.ts");
var home_customer_component_1 = __webpack_require__("./src/app/home/home-customer/home-customer.component.ts");
var home_agent_component_1 = __webpack_require__("./src/app/home/home-agent/home-agent.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'agent', component: home_agent_component_1.HomeAgentComponent },
    { path: 'customer', component: home_customer_component_1.HomeCustomerComponent },
    { path: 'staff', component: home_staff_component_1.HomeStaffComponent }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ }),

/***/ "./src/app/home/home-staff/home-staff.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home-staff/home-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home-staff works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home-staff/home-staff.component.ts":
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
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var HomeStaffComponent = /** @class */ (function () {
    function HomeStaffComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    HomeStaffComponent.prototype.ngOnInit = function () {
        if (this.cookie.get('type') !== 'airline_staff') {
            this.router.navigate(['/home']);
        }
    };
    HomeStaffComponent = __decorate([
        core_1.Component({
            selector: 'app-home-staff',
            template: __webpack_require__("./src/app/home/home-staff/home-staff.component.html"),
            styles: [__webpack_require__("./src/app/home/home-staff/home-staff.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_cookie_service_1.CookieService])
    ], HomeStaffComponent);
    return HomeStaffComponent;
}());
exports.HomeStaffComponent = HomeStaffComponent;


/***/ }),

/***/ "./src/app/home/home.module.ts":
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
var home_routing_module_1 = __webpack_require__("./src/app/home/home-routing.module.ts");
var search_box_module_1 = __webpack_require__("./src/app/search-box/search-box.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var home_component_1 = __webpack_require__("./src/app/home/home/home.component.ts");
var home_agent_component_1 = __webpack_require__("./src/app/home/home-agent/home-agent.component.ts");
var home_customer_component_1 = __webpack_require__("./src/app/home/home-customer/home-customer.component.ts");
var home_staff_component_1 = __webpack_require__("./src/app/home/home-staff/home-staff.component.ts");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, home_routing_module_1.HomeRoutingModule, forms_1.FormsModule, search_box_module_1.SearchBoxModule],
            declarations: [home_component_1.HomeComponent, home_agent_component_1.HomeAgentComponent, home_customer_component_1.HomeCustomerComponent, home_staff_component_1.HomeStaffComponent],
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ }),

/***/ "./src/app/home/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "app-search-box {\n    top: 20px;\n}\n\n.main {\n    font-family: PoiretOne;\n    text-align: center;\n    font-size: 20px;\n}"

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <app-search-box></app-search-box>\n  <h1>You are not logged in yet<br> Please login or register</h1>\n  <a routerLink='/registeration'>Register</a>\n  <a routerLink='/login'>login</a>\n</div>"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
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
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var type = this.cookieService.get('type');
        if (type === 'customer') {
            this.router.navigate(['/home/customer']);
        }
        else if (type === 'airline_staff') {
            this.router.navigate(['/home/staff']);
        }
        else if (type === 'booking_agent') {
            this.router.navigate(['/home/agent']);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_cookie_service_1.CookieService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map