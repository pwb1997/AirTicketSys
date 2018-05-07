webpackJsonp(["add.module"],{

/***/ "./src/app/add/add.component.css":
/***/ (function(module, exports) {

module.exports = ".form {\n    top: 150px;\n}"

/***/ }),

/***/ "./src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main' [style.visibility]='formVisibility'>\n  <h1>Add New Flight/Airplane/Airport</h1>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <input type=\"radio\" name='type' value='flight' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Flight\n    <input type=\"radio\" name='type' value='airplane' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Airplane\n    <input type=\"radio\" name='type' value='airport' [(ngModel)]='type' (ngModelChange)='toggleDisplay()'>Airport\n    <br>\n    <div [style.display]='flightDisplay' class='form'>\n      Flight #\n      <br>\n      <input type=\"text\" name='flight_num' ngModel>\n      <br> Airplane ID\n      <br>\n      <input type=\"text\" name='airplane_id' ngModel>\n      <br> Departure Airport\n      <br>\n      <input type=\"text\" name='departure_airport' ngModel>\n      <br> Departure Time\n      <br>\n      <input type=\"datetime-local\" name='departure_time' ngModel>\n      <br> Arrival Airport\n      <br>\n      <input type=\"text\" name='arrival_airport' ngModel>\n      <br> Arrival Time\n      <br>\n      <input type=\"datetime-local\" name='arrival_time' ngModel>\n      <br> Price\n      <br>\n      <input type=\"text\" name='price' ngModel>\n      <br>\n      <button>Submit</button>\n    </div>\n    <div [style.display]='airplaneDisplay' class='form'>\n      Airplane ID\n      <br>\n      <input type=\"text\" name='airplane_id' ngModel>\n      <br> Seats\n      <br>\n      <input type=\"text\" name='seats' ngModel>\n      <br>\n      <button>Submit</button>\n    </div>\n    <div [style.display]='airportDisplay' class='form'>\n      Airport Name\n      <br>\n      <input type=\"text\" name='airport_name' ngModel>\n      <br> Airport City\n      <br>\n      <input type=\"text\" name='airport_city' ngModel>\n      <br>\n      <button>Submit</button>\n    </div>\n  </form>\n</div>"

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
var AddComponent = /** @class */ (function () {
    function AddComponent(http) {
        this.http = http;
        this.type = 'flight';
        this.flightDisplay = '';
        this.airplaneDisplay = 'none';
        this.airportDisplay = 'none';
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
        console.log(f.value);
    };
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'app-add',
            template: __webpack_require__("./src/app/add/add.component.html"),
            styles: [__webpack_require__("./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
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