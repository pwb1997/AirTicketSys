webpackJsonp(["purchase.module"],{

/***/ "./src/app/purchase/purchase.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/purchase/purchase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <div class='message'>{{message}}</div>\n  <div [style.display]='purchaseDisplay'>\n    <h1>Ticket Information</h1>\n    <table>\n      <tr>\n        <th>Airline Name</th>\n        <th>Flight #</th>\n        <th>Departure Airport</th>\n        <th>Departure Time</th>\n        <th>Arrival Airport</th>\n        <th>Arrival Time</th>\n        <th>Price</th>\n        <th>Status</th>\n        <th>Seats</th>\n        <th>Remaining Tickets</th>\n      </tr>\n      <tr *ngFor=\"let each of result\">\n        <td>{{each.airline_name}}</td>\n        <td>{{each.flight_num}}</td>\n        <td>{{each.departure_airport}}</td>\n        <td>{{displayTime(each.departure_time)}}</td>\n        <td>{{each.arrival_airport}}</td>\n        <td>{{displayTime(each.arrival_time)}}</td>\n        <td>{{each.price}}</td>\n        <td>{{each.status}}</td>\n        <td>{{each.seats}}</td>\n        <td>{{each.remain}}</td>\n      </tr>\n    </table>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      <div [style.display]='customerEmailDisplay'>\n        Customer Email:\n        <input type='text' name='customer_email' placeholder='email' ngModel>\n      </div>\n      <button>Purchase</button>\n    </form>\n    <button>Cancel</button>\n    {{purchaseMessage}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/purchase/purchase.component.ts":
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
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(cookie, router, http) {
        this.cookie = cookie;
        this.router = router;
        this.http = http;
        this.message = '';
        this.purchaseMessage = '';
        this.purchaseDisplay = 'none';
        this.customerEmailDisplay = 'none';
        this.result = [];
    }
    PurchaseComponent.prototype.displayTime = function (datetime) {
        var date = new Date(datetime);
        return date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2);
    };
    PurchaseComponent.prototype.getTicketInfo = function () {
        var _this = this;
        this.http.post('/ticket', { 'buyTicket': this.cookie.get('buyTicket') }, { responseType: 'json' }).subscribe(function (res) {
            _this.result.push(res);
        });
    };
    PurchaseComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (this.result[0].remain === 0) {
            this.purchaseMessage = 'No remaining tickets, please find another flight';
            return;
        }
        if (this.cookie.get('type') === 'booking_agent' && f.value.customer_email === '') {
            this.purchaseMessage = 'Please input the customer email';
            return;
        }
        _a = this.cookie.get('buyTicket').split('/'), f.value.airline_name = _a[0], f.value.flight_num = _a[1];
        this.purchaseMessage = '';
        this.http.post('/buy', f.value, { responseType: 'text', withCredentials: true }).subscribe(function (res) {
            _this.purchaseMessage = 'Purchase successfully, redirecting you previous page ...';
            setTimeout(function () {
                _this.router.navigate(['search']);
            }, 3000);
        }, function (err) {
            if (err.status === 401) {
                _this.purchaseMessage = 'No remaining tickets, please find another flight';
            }
            else if (err.status === 402) {
                _this.purchaseMessage = 'Authentication failed, please make sure you are logged in as customer or booking agent';
            }
            else if (err.status === 403) {
                _this.purchaseMessage = 'Customer not found, please enter a valid email address';
            }
            else {
                _this.purchaseMessage = 'Purchase failed, please try again';
            }
        });
        var _a;
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var type = this.cookie.get('type');
        if (this.cookie.get('buyTicket') === '') {
            this.message = 'No flight selected, redirecting you to the search page ...';
            setTimeout(function () {
                _this.router.navigate(['search']);
            }, 3000);
        }
        else if (type === 'customer') {
            this.purchaseDisplay = '';
            this.getTicketInfo();
        }
        else if (type === 'booking_agent') {
            this.purchaseDisplay = '';
            this.getTicketInfo();
            this.customerEmailDisplay = '';
        }
        else if (type === 'airline_staff') {
            this.message = 'You cannot buy tickets as an airline staff, redirecting you to the home page ...';
            setTimeout(function () {
                _this.router.navigate(['home']);
            }, 3000);
        }
        else {
            this.message = 'You are not logged in yet, redirecting you to the loggin page ...';
            setTimeout(function () {
                _this.router.navigate(['login']);
            }, 3000);
        }
    };
    PurchaseComponent = __decorate([
        core_1.Component({
            selector: 'app-purchase',
            template: __webpack_require__("./src/app/purchase/purchase.component.html"),
            styles: [__webpack_require__("./src/app/purchase/purchase.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service_1.CookieService, router_1.Router, http_1.HttpClient])
    ], PurchaseComponent);
    return PurchaseComponent;
}());
exports.PurchaseComponent = PurchaseComponent;


/***/ }),

/***/ "./src/app/purchase/purchase.module.ts":
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
var purchase_component_1 = __webpack_require__("./src/app/purchase/purchase.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var routes = [
    { path: '', component: purchase_component_1.PurchaseComponent }
];
var PurchaseModule = /** @class */ (function () {
    function PurchaseModule() {
    }
    PurchaseModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule],
            declarations: [purchase_component_1.PurchaseComponent]
        })
    ], PurchaseModule);
    return PurchaseModule;
}());
exports.PurchaseModule = PurchaseModule;


/***/ })

});
//# sourceMappingURL=purchase.module.chunk.js.map