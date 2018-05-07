webpackJsonp(["flights.module"],{

/***/ "./src/app/flights/flights.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/flights/flights.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  {{message}}\n  <div [style.display]='customerDisplay'>\n    <h1>View My Flights</h1>\n    <h2>Upcoming Flights</h2>\n    <table>\n      <tr>\n        <th>Ticket #</th>\n        <th>Airline Name</th>\n        <th>Flight #</th>\n        <th>Departure Airport</th>\n        <th>Departure Time</th>\n        <th>Arrival Airport</th>\n        <th>Arrival Time</th>\n        <th>Price</th>\n        <th>Status</th>\n      </tr>\n      <tr *ngFor=\"let each of upcoming\">\n        <td>{{each.ticket_id}}</td>\n        <td>{{each.airline_name}}</td>\n        <td>{{each.flight_num}}</td>\n        <td>{{each.departure_airport}}</td>\n        <td>{{displayTime(each.departure_time)}}</td>\n        <td>{{each.arrival_airport}}</td>\n        <td>{{displayTime(each.arrival_time)}}</td>\n        <td>{{each.price}}</td>\n        <td>{{each.status}}</td>\n      </tr>\n    </table>\n    <h2>History</h2>\n    <table>\n      <tr>\n        <th>Ticket #</th>\n        <th>Airline Name</th>\n        <th>Flight #</th>\n        <th>Departure Airport</th>\n        <th>Departure Time</th>\n        <th>Arrival Airport</th>\n        <th>Arrival Time</th>\n        <th>Price</th>\n        <th>Status</th>\n      </tr>\n      <tr *ngFor=\"let each of history\">\n        <td>{{each.ticket_id}}</td>\n        <td>{{each.airline_name}}</td>\n        <td>{{each.flight_num}}</td>\n        <td>{{each.departure_airport}}</td>\n        <td>{{displayTime(each.departure_time)}}</td>\n        <td>{{each.arrival_airport}}</td>\n        <td>{{displayTime(each.arrival_time)}}</td>\n        <td>{{each.price}}</td>\n        <td>{{each.status}}</td>\n      </tr>\n    </table>\n  </div>\n  <div [style.display]='agentDisplay'>\n      <h1>View My Flights</h1>\n      <h2>Upcoming Flights</h2>\n      <table>\n        <tr>\n          <th>Ticket #</th>\n          <th>Booked For</th>\n          <th>Airline Name</th>\n          <th>Flight #</th>\n          <th>Departure Airport</th>\n          <th>Departure Time</th>\n          <th>Arrival Airport</th>\n          <th>Arrival Time</th>\n          <th>Price</th>\n          <th>Status</th>\n        </tr>\n        <tr *ngFor=\"let each of upcoming\">\n          <td>{{each.ticket_id}}</td>\n          <td>{{each.customer_email}}</td>\n          <td>{{each.airline_name}}</td>\n          <td>{{each.flight_num}}</td>\n          <td>{{each.departure_airport}}</td>\n          <td>{{displayTime(each.departure_time)}}</td>\n          <td>{{each.arrival_airport}}</td>\n          <td>{{displayTime(each.arrival_time)}}</td>\n          <td>{{each.price}}</td>\n          <td>{{each.status}}</td>\n        </tr>\n      </table>\n      <h2>History</h2>\n      <table>\n        <tr>\n          <th>Ticket #</th>\n          <th>Airline Name</th>\n          <th>Flight #</th>\n          <th>Departure Airport</th>\n          <th>Departure Time</th>\n          <th>Arrival Airport</th>\n          <th>Arrival Time</th>\n          <th>Price</th>\n          <th>Status</th>\n        </tr>\n        <tr *ngFor=\"let each of history\">\n          <td>{{each.ticket_id}}</td>\n          <td>{{each.airline_name}}</td>\n          <td>{{each.flight_num}}</td>\n          <td>{{each.departure_airport}}</td>\n          <td>{{displayTime(each.departure_time)}}</td>\n          <td>{{each.arrival_airport}}</td>\n          <td>{{displayTime(each.arrival_time)}}</td>\n          <td>{{each.price}}</td>\n          <td>{{each.status}}</td>\n        </tr>\n      </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/flights/flights.component.ts":
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
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var FlightsComponent = /** @class */ (function () {
    function FlightsComponent(http, cookie) {
        this.http = http;
        this.cookie = cookie;
        this.upcoming = [];
        this.history = [];
        this.message = '';
        this.customerDisplay = 'none';
        this.agentDisplay = 'none';
    }
    FlightsComponent.prototype.displayTime = function (datetime) {
        var date = new Date(datetime);
        return date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2);
    };
    FlightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/getFlights', { responseType: 'json' }).subscribe(function (res) {
            _this.upcoming = res['upcoming'];
            _this.history = res['history'];
            if (_this.cookie.get('type') === 'customer') {
                _this.customerDisplay = '';
            }
            else {
                _this.agentDisplay = '';
            }
        }, function (err) {
            _this.message = 'Not authorized';
        });
    };
    FlightsComponent = __decorate([
        core_1.Component({
            selector: 'app-flights',
            template: __webpack_require__("./src/app/flights/flights.component.html"),
            styles: [__webpack_require__("./src/app/flights/flights.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, ngx_cookie_service_1.CookieService])
    ], FlightsComponent);
    return FlightsComponent;
}());
exports.FlightsComponent = FlightsComponent;


/***/ }),

/***/ "./src/app/flights/flights.module.ts":
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
var flights_component_1 = __webpack_require__("./src/app/flights/flights.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var routes = [
    { path: '', component: flights_component_1.FlightsComponent }
];
var FlightsModule = /** @class */ (function () {
    function FlightsModule() {
    }
    FlightsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule],
            declarations: [flights_component_1.FlightsComponent]
        })
    ], FlightsModule);
    return FlightsModule;
}());
exports.FlightsModule = FlightsModule;


/***/ })

});
//# sourceMappingURL=flights.module.chunk.js.map