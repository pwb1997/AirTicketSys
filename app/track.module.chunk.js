webpackJsonp(["track.module"],{

/***/ "./src/app/track/track.component.css":
/***/ (function(module, exports) {

module.exports = "#customerMonthly {\n    height: 200px;\n    width: 400px;\n}"

/***/ }),

/***/ "./src/app/track/track.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  {{message}}\n  <div [style.display]='customerDisplay'>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      From\n      <input type=\"month\" (ngModelChange)='update()' [(ngModel)]='startDate' name='startMonth' useValueAsDate> To\n      <input type=\"month\" (ngModelChange)='update()' [(ngModel)]='endDate' name='endMonth' useValueAsDate>\n    </form>\n    <h2>Total Spending</h2>\n    <h3>$ {{spending}}</h3>\n    <h2>Monthly Chart</h2>\n    <div id='customerMonthly' style=\"display: block\">\n      <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\n        [chartType]=\"barChartType\">\n      </canvas>\n    </div>\n  </div>\n  <div [style.display]='agentDisplay'>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      From\n      <input type=\"date\" (ngModelChange)='update1()' [(ngModel)]='startDate1' name='startDate' useValueAsDate> To\n      <input type=\"date\" (ngModelChange)='update1()' [(ngModel)]='endDate1' name='endDate' useValueAsDate>\n    </form>\n    <h2>My Commision</h2>\n    <h3>Total Commision</h3>\n    <h4>$ {{commision}}</h4>\n    <h3>Total Ticket Sold</h3>\n    <h4>{{ticketsSold}}</h4>\n    <h3>Average Commision</h3>\n    <h4>{{averageCommision}}</h4>\n    <h2>Top Customers</h2>\n    <h3>6 Month Tickets Sold</h3>\n    <canvas baseChart [datasets]=\"barChart1Data\" [labels]=\"barChart1Labels\" [options]=\"barChart1Options\" [legend]=\"barChart1Legend\"\n      [chartType]=\"barChart1Type\">\n    </canvas>\n    <h3>Past Year Commision</h3>\n    <canvas baseChart [datasets]=\"barChart2Data\" [labels]=\"barChart2Labels\" [options]=\"barChart2Options\" [legend]=\"barChart2Legend\"\n      [chartType]=\"barChart2Type\">\n    </canvas>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/track/track.component.ts":
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
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var TrackComponent = /** @class */ (function () {
    function TrackComponent(cookie, http) {
        this.cookie = cookie;
        this.http = http;
        this.tickets = [];
        this.type = '';
        this.customerDisplay = 'none';
        this.agentDisplay = 'none';
        this.message = '';
        this.spending = 0;
        this.startMonth = '';
        this.endMonth = '';
        this.commision = 0;
        this.ticketsSold = 0;
        this.averageCommision = 0;
        this.barChartOptions = {
            scaleShowVerticalLines: false, responsive: true, scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [{ data: [] }];
        this.barChart1Options = {
            scaleShowVerticalLines: false, responsive: true, scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.barChart1Labels = [];
        this.barChart1Type = 'bar';
        this.barChart1Legend = false;
        this.barChart1Data = [{ data: [] }];
        this.barChart2Options = {
            scaleShowVerticalLines: false, responsive: true, scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.barChart2Labels = [];
        this.barChart2Type = 'bar';
        this.barChart2Legend = false;
        this.barChart2Data = [{ data: [] }];
    }
    TrackComponent.prototype.update = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.endDate.getTime() > new Date().getTime()) {
                _this.endDate = new Date();
                _this.endDate.setDate(2);
            }
            if (_this.startDate.getTime() > _this.endDate.getTime()) {
                _this.startDate = new Date(_this.endDate);
            }
            _this.startMonth = _this.date2Month(_this.startDate);
            _this.endMonth = _this.date2Month(_this.endDate);
            _this.updateChart(_this.startMonth, _this.endMonth);
            _this.spending = _this.getSpending(_this.filterMonth(_this.startMonth, _this.endMonth));
        }, 10);
    };
    TrackComponent.prototype.update1 = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.endDate1.getTime() > new Date().getTime()) {
                _this.endDate1 = new Date();
            }
            if (_this.startDate1.getTime() > _this.endDate1.getTime()) {
                _this.startDate1 = new Date(_this.endDate1);
            }
            var filtered = _this.filterDate(_this.startDate1, _this.endDate1);
            _this.commision = _this.getSpending(filtered);
            _this.ticketsSold = filtered.length;
            _this.averageCommision = _this.commision / _this.ticketsSold;
            if (_this.ticketsSold === 0) {
                _this.averageCommision = 0;
            }
        }, 10);
    };
    TrackComponent.prototype.date2Month = function (d) {
        var date = new Date(d);
        return date.getFullYear() + '-' +
            ('00' + (date.getMonth() + 1)).slice(-2);
    };
    TrackComponent.prototype.filterMonth = function (start, end) {
        var startDate = new Date(start);
        var endDate = new Date(end);
        var result = [];
        endDate.setMonth(endDate.getMonth() + 1);
        for (var _i = 0, _a = this.tickets; _i < _a.length; _i++) {
            var each = _a[_i];
            var date = new Date(each.purchase_date);
            if (date.getTime() <= endDate.getTime() && date.getTime() > startDate.getTime()) {
                result.push(each);
            }
        }
        return result;
    };
    TrackComponent.prototype.filterDate = function (start, end) {
        var startDate = new Date(start);
        var endDate = new Date(end);
        var result = [];
        endDate.setDate(endDate.getDate() + 1);
        for (var _i = 0, _a = this.tickets; _i < _a.length; _i++) {
            var each = _a[_i];
            var date = new Date(each.purchase_date);
            if (date.getTime() <= endDate.getTime() && date.getTime() > startDate.getTime()) {
                result.push(each);
            }
        }
        return result;
    };
    TrackComponent.prototype.updateChart = function (startMonth, endMonth) {
        var start = new Date(startMonth);
        var end = new Date(endMonth);
        start.setDate(2);
        end.setDate(2);
        this.barChartLabels = [];
        this.barChartData[0].data = [];
        while (end.getTime() >= start.getTime()) {
            this.barChartLabels.push(this.date2Month(start.getTime()));
            this.barChartData[0].data.push(this.getSpending(this.filterMonth(start.getTime(), start.getTime())));
            start.setMonth(start.getMonth() + 1);
        }
    };
    TrackComponent.prototype.getSpending = function (tickets) {
        var result = 0;
        for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
            var each = tickets_1[_i];
            result += each.price;
        }
        return result;
    };
    TrackComponent.prototype.getCommision = function (tickets) {
        return this.getSpending(tickets) * 0.1;
    };
    TrackComponent.prototype.getAverageCommision = function (tickets) {
        return this.getCommision(tickets) / tickets.length;
    };
    TrackComponent.prototype.topCustomers = function () {
        var result1 = {};
        var result2 = {};
        var start = new Date();
        var end = new Date();
        start.setMonth(start.getMonth() - 6);
        for (var _i = 0, _a = this.filterDate(start, end); _i < _a.length; _i++) {
            var each = _a[_i];
            if (result1[each.customer_email]) {
                result1[each.customer_email] += 1;
            }
            else {
                result1[each.customer_email] = 1;
            }
        }
        start.setMonth(start.getMonth() - 6);
        for (var _b = 0, _c = this.filterDate(start, end); _b < _c.length; _b++) {
            var each = _c[_b];
            if (result2[each.customer_email]) {
                result2[each.customer_email] += each.price * 0.1;
            }
            else {
                result2[each.customer_email] = each.price * 0.1;
            }
        }
        var sort1 = [];
        var sort2 = [];
        for (var _d = 0, _e = Object.keys(result1); _d < _e.length; _d++) {
            var each = _e[_d];
            sort1.push([each, result1[each]]);
        }
        for (var _f = 0, _g = Object.keys(result2); _f < _g.length; _f++) {
            var each = _g[_f];
            sort2.push([each, result2[each]]);
        }
        sort1.sort(function (a, b) {
            return b[1] - a[1];
        });
        sort2.sort(function (a, b) {
            return b[1] - a[1];
        });
        sort1 = sort1.slice(0, 5);
        sort2 = sort2.slice(0, 5);
        this.barChart1Labels = [];
        this.barChart2Labels = [];
        this.barChart1Data[0].data = [];
        this.barChart2Data[0].data = [];
        for (var _h = 0, sort1_1 = sort1; _h < sort1_1.length; _h++) {
            var each = sort1_1[_h];
            this.barChart1Labels.push(each[0]);
            this.barChart1Data[0].data.push(each[1]);
        }
        for (var _j = 0, sort2_1 = sort2; _j < sort2_1.length; _j++) {
            var each = sort2_1[_j];
            this.barChart2Labels.push(each[0]);
            this.barChart2Data[0].data.push(each[1]);
        }
    };
    TrackComponent.prototype.onSubmit = function (f) {
    };
    TrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.cookie.get('type');
        if (this.type === 'customer') {
            this.customerDisplay = '';
            this.http.get('/getFlights').subscribe(function (res) {
                for (var _i = 0, _a = res['history']; _i < _a.length; _i++) {
                    var each = _a[_i];
                    _this.tickets.push(each);
                }
                for (var _b = 0, _c = res['upcoming']; _b < _c.length; _b++) {
                    var each = _c[_b];
                    _this.tickets.push(each);
                }
                var start = new Date();
                start.setDate(2);
                start.setMonth(start.getMonth() - 5);
                _this.updateChart(start.getTime(), new Date().getTime());
                var end = new Date();
                end.setDate(2);
                start.setMonth(start.getMonth() - 6);
                _this.spending = _this.getSpending(_this.filterMonth(start, end));
                _this.startMonth = _this.date2Month(start);
                _this.endMonth = _this.date2Month(end);
                _this.startDate = start;
                _this.endDate = end;
            });
        }
        else if (this.type === 'booking_agent') {
            this.agentDisplay = '';
            this.http.get('/getFlights').subscribe(function (res) {
                for (var _i = 0, _a = res['history']; _i < _a.length; _i++) {
                    var each = _a[_i];
                    _this.tickets.push(each);
                }
                for (var _b = 0, _c = res['upcoming']; _b < _c.length; _b++) {
                    var each = _c[_b];
                    _this.tickets.push(each);
                }
                var start = new Date();
                var end = new Date();
                start.setMonth(start.getMonth() - 1);
                _this.startDate1 = start;
                _this.endDate1 = end;
                var filtered = _this.filterDate(start, end);
                _this.commision = _this.getSpending(filtered);
                _this.ticketsSold = filtered.length;
                _this.averageCommision = _this.commision / _this.ticketsSold;
                if (_this.ticketsSold === 0) {
                    _this.averageCommision = 0;
                }
                _this.topCustomers();
            });
        }
        else {
            this.message = 'Not authorized';
        }
    };
    TrackComponent = __decorate([
        core_1.Component({
            selector: 'app-track',
            template: __webpack_require__("./src/app/track/track.component.html"),
            styles: [__webpack_require__("./src/app/track/track.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service_1.CookieService, http_1.HttpClient])
    ], TrackComponent);
    return TrackComponent;
}());
exports.TrackComponent = TrackComponent;


/***/ }),

/***/ "./src/app/track/track.module.ts":
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
var track_component_1 = __webpack_require__("./src/app/track/track.component.ts");
var ng2_charts_1 = __webpack_require__("./node_modules/ng2-charts/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var angular_date_value_accessor_1 = __webpack_require__("./node_modules/angular-date-value-accessor/index.js");
var route = [{ path: '', component: track_component_1.TrackComponent }];
var TrackModule = /** @class */ (function () {
    function TrackModule() {
    }
    TrackModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(route), ng2_charts_1.ChartsModule, forms_1.FormsModule, angular_date_value_accessor_1.DateValueAccessorModule],
            declarations: [track_component_1.TrackComponent]
        })
    ], TrackModule);
    return TrackModule;
}());
exports.TrackModule = TrackModule;


/***/ })

});
//# sourceMappingURL=track.module.chunk.js.map