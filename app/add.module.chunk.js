webpackJsonp(["add.module"],{

/***/ "./src/app/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ".form {\n    top: 150px;\n}\n\nh1 {\n    font-size: 40px;\n}"

/***/ }),

/***/ "./src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main' [style.visibility]='formVisibility'>\n  <h1>Add New Flight/Airplane/Airport</h1>\n  <form class='radio'>\n    <input type=\"radio\" name='type' value='flight' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Flight\n    <input type=\"radio\" name='type' value='airplane' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Airplane\n    <input type=\"radio\" name='type' value='airport' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Airport\n  </form>\n  <form #flight=\"ngForm\" (ngSubmit)=\"onSubmit(flight)\" [style.display]='flightDisplay' class='form'>\n    Flight #\n    <br>\n    <input type=\"text\" name='flight_num' ngModel required>\n    <br> Airplane ID\n    <br>\n    <input type=\"text\" name='airplane_id' ngModel required>\n    <br> Departure Airport\n    <br>\n    <input type=\"text\" name='departure_airport' ngModel required>\n    <br> Departure Time\n    <br>\n    <input type=\"datetime-local\" name='departure_time' ngModel required>\n    <br> Arrival Airport\n    <br>\n    <input type=\"text\" name='arrival_airport' ngModel required>\n    <br> Arrival Time\n    <br>\n    <input type=\"datetime-local\" name='arrival_time' ngModel required>\n    <br> Price\n    <br>\n    <input type=\"text\" name='price' ngModel required>\n    <br>\n    <div class='button'>\n      <button [disabled]='flight.form.invalid'>Submit</button>\n    </div>\n  </form>\n  <form #airplane=\"ngForm\" (ngSubmit)=\"onSubmit(airplane)\" [style.display]='airplaneDisplay' class='form'> Airplane ID\n    <br>\n    <input type=\"text\" name='airplane_id' ngModel required>\n    <br> Seats\n    <br>\n    <input type=\"text\" name='seats' ngModel required>\n    <br>\n    <div class='button'>\n      <button [disabled]='airplane.form.invalid'>Submit</button>\n    </div>\n  </form>\n  <form #airport=\"ngForm\" (ngSubmit)=\"onSubmit(airport)\" [style.display]='airportDisplay' class='form'>\n    Airport Name\n    <br>\n    <input type=\"text\" name='airport_name' ngModel required>\n    <br> Airport City\n    <br>\n    <input type=\"text\" name='airport_city' ngModel required>\n    <br>\n    <div class='button'>\n      <button [disabled]='airport.form.invalid'>Submit</button>\n    </div>\n  </form>\n</div>\n<div id='top-message' [style.display]='topMessageDisplay' [style.background-color]=\"topMessageBackgroundColor\" style=\"z-index: 9999\">\n  <p>{{topMessage}}</p>\n</div>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AddComponent = /** @class */ (function () {
    function AddComponent(http, router) {
        this.http = http;
        this.router = router;
        this.type = 'flight';
        this.flightDisplay = '';
        this.airplaneDisplay = 'none';
        this.airportDisplay = 'none';
        this.topMessageDisplay = 'none';
        this.topMessage = '';
        this.topMessageBackgroundColor = '';
    }
    AddComponent.prototype.toggleDisplay = function () {
        this.flightDisplay = 'none';
        this.airplaneDisplay = 'none';
        this.airportDisplay = 'none';
        switch (this.type) {
            case 'flight':
                this.flightDisplay = '';
                break;
            case 'airplane':
                this.airplaneDisplay = '';
                break;
            case 'airport':
                this.airportDisplay = '';
                break;
        }
    };
    AddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.invalid) {
            return;
        }
        this.http.post('/add/' + this.type, f.value, { responseType: 'text' }).subscribe(function (res) {
            _this.topMessageDisplay = '';
            _this.topMessageBackgroundColor = '#00F6ED';
            _this.topMessage = 'Successfully added new ' + _this.type + '.';
        }, function (err) {
            _this.topMessageDisplay = '';
            _this.topMessageBackgroundColor = 'orange';
            if (err.status === 401) {
                _this.topMessage = 'Unauthorized operation, redirecting you to homepage ...';
                setTimeout(function () {
                    _this.router.navigate(['home']);
                }, 3000);
                return;
            }
            _this.topMessage = 'Failed to add new ' + _this.type + ', please check your input and try again.';
        });
    };
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("./src/app/add/add.component.html"),
            styles: [__webpack_require__("./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;


/***/ }),

/***/ "./src/app/add/add.module.ts":
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
var add_component_1 = __webpack_require__("./src/app/add/add.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var routes = [{ path: '', component: add_component_1.AddComponent }];
var AddModule = /** @class */ (function () {
    function AddModule() {
    }
    AddModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(routes), forms_1.FormsModule],
            declarations: [add_component_1.AddComponent]
        })
    ], AddModule);
    return AddModule;
}());
exports.AddModule = AddModule;


/***/ })

});
//# sourceMappingURL=add.module.chunk.js.map