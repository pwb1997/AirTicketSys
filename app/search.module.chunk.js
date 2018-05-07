webpackJsonp(["search.module"],{

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "#search-box {\n    position: absolute;\n    width: 500px;\n    margin: auto;\n    left: 0;\n    right: 0;\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <div id='search-box' [style.display]='displaySearchBox'>\n    <app-search-box></app-search-box>\n  </div>\n  <div id='result' [style.display]='displayResult'>\n    <p>{{message}}</p>\n    <button (click)=\"deleteCookie()\">Clear</button>\n    <table>\n      <tr>\n        <th>Airline Name</th>\n        <th>Flight #</th>\n        <th>Departure Airport</th>\n        <th>Departure Time</th>\n        <th>Arrival Airport</th>\n        <th>Arrival Time</th>\n        <th>Price</th>\n        <th>Status</th>\n        <th>Ticket</th>\n      </tr>\n      <tr *ngFor=\"let each of result\">\n        <td>{{each.airline_name}}</td>\n        <td>{{each.flight_num}}</td>\n        <td>{{each.departure_airport}}</td>\n        <td>{{displayTime(each.departure_time)}}</td>\n        <td>{{each.arrival_airport}}</td>\n        <td>{{displayTime(each.arrival_time)}}</td>\n        <td>{{each.price}}</td>\n        <td>{{each.status}}</td>\n        <td>\n          <button (click)='buyTicket(each.airline_name,each.flight_num)'>Buy Ticket</button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
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
var SearchComponent = /** @class */ (function () {
    function SearchComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
        this.message = '';
        this.displaySearchBox = '';
        this.displayResult = 'none';
    }
    SearchComponent.prototype.displayTime = function (datetime) {
        var date = new Date(datetime);
        return date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2);
    };
    SearchComponent.prototype.buyTicket = function (airline_name, flight_num) {
        this.cookie.set('buyTicket', airline_name + '/' + flight_num);
        this.router.navigate(['buy']);
    };
    SearchComponent.prototype.deleteCookie = function () {
        this.cookie.delete('searchResult');
        this.cookie.set('reload', 'search');
        this.router.navigate(['reload']);
    };
    SearchComponent.prototype.ngOnInit = function () {
        if (this.cookie.get('searchResult')) {
            this.result = JSON.parse(this.cookie.get('searchResult').slice(2));
            this.message = 'Found ' + this.result.length + ' record(s)';
            this.displaySearchBox = 'none';
            this.displayResult = '';
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_cookie_service_1.CookieService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;


/***/ }),

/***/ "./src/app/search/search.module.ts":
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
var search_box_module_1 = __webpack_require__("./src/app/search-box/search-box.module.ts");
var search_component_1 = __webpack_require__("./src/app/search/search.component.ts");
var routes = [{ path: '', component: search_component_1.SearchComponent }];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), search_box_module_1.SearchBoxModule],
            declarations: [search_component_1.SearchComponent]
        })
    ], SearchModule);
    return SearchModule;
}());
exports.SearchModule = SearchModule;


/***/ })

});
//# sourceMappingURL=search.module.chunk.js.map