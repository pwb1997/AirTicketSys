webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
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
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-navi-bar></app-navi-bar>\n</header>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AirTicket Reservation System';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var navi_bar_component_1 = __webpack_require__("./src/app/navi-bar/navi-bar.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var about_component_1 = __webpack_require__("./src/app/about/about.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var register_component_1 = __webpack_require__("./src/app/register/register.component.ts");
var register_staff_component_1 = __webpack_require__("./src/app/register-staff/register-staff.component.ts");
var register_agent_component_1 = __webpack_require__("./src/app/register-agent/register-agent.component.ts");
var register_customer_component_1 = __webpack_require__("./src/app/register-customer/register-customer.component.ts");
var appRoutes = [{
        path: 'about',
        component: about_component_1.AboutComponent,
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
    },
    {
        path: '',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent,
    },
    {
        path: 'register/agent',
        component: register_agent_component_1.RegisterAgentComponent,
    },
    {
        path: 'register/staff',
        component: register_staff_component_1.RegisterStaffComponent,
    },
    {
        path: 'register/customer',
        component: register_customer_component_1.RegisterCustomerComponent,
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navi_bar_component_1.NaviBarComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                register_staff_component_1.RegisterStaffComponent,
                register_agent_component_1.RegisterAgentComponent,
                register_customer_component_1.RegisterCustomerComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes),
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                http_2.HttpClientModule,
            ],
            providers: [ngx_cookie_service_1.CookieService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
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
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".main {\n    position: absolute;\n    top: 80px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    username:\n    <input type='text' name='username' ngModel required>\n    <br> password:\n    <input type='text' name='password' ngModel required>\n    <br>\n    <input type=\"radio\" name='type' value='customer' [ngModel]='type'>Customer<br>\n    <input type=\"radio\" name='type' value='airline_staff' [ngModel]='type'>Airline Staff<br>\n    <input type=\"radio\" name='type' value='booking_agent' [ngModel]='type'>Booking Agent<br>\n    <p>{{validation}}</p>\n    <button>Submit</button>\n    <a routerLink='/register'>Register</a>\n  </form>\n</div>"

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
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.validation = '';
        this.type = 'customer';
    }
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (!f.valid) {
            if (f.value.uname === '' && f.value.passwd === '') {
                this.validation = 'Please Input Username and Password!';
                return;
            }
            if (f.value.uname === '') {
                this.validation = 'Please Input Username!';
                return;
            }
            if (f.value.passwd === '') {
                this.validation = 'Please Input Password!';
                return;
            }
        }
        this.validation = '';
        this.http.post('/login', f.value, { responseType: 'text' }).subscribe(function (res) {
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

/***/ "./src/app/navi-bar/navi-bar.component.css":
/***/ (function(module, exports) {

module.exports = "@font-face {\r\n  font-family: 'Gugi';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('Gugi-Regular.deba688275e551e0206f.ttf') format('truetype')\r\n}\r\n\r\n@font-face {\r\n  font-family: 'PoiretOne';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('PoiretOne-Regular.3b585e0e2f91bef9ab6e.ttf') format('truetype')\r\n}\r\n\r\nnav {\r\n  overflow: hidden;\r\n  background-color: #0F1108;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  position: fixed;\r\n  top: 0px;\r\n  left: 0px;\r\n  z-index: 999;\r\n  width: 100%;\r\n  height: 70px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  color: #333;\r\n  font-family: 'Gugi';\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n}\r\n\r\n#title {\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 150px;\r\n  height: 70px;\r\n}\r\n\r\n#title div {\r\n  color: #CAD8DE;\r\n  position: absolute;\r\n  font-size: 16px;\r\n}\r\n\r\n#title div:nth-child(1) {\r\n  font-size: 60px;\r\n  left: 12px;\r\n}\r\n\r\n#title div:nth-child(2) {\r\n  top: 10px;\r\n  left: 65px;\r\n}\r\n\r\n#title div:nth-child(3) {\r\n  top: 25px;\r\n  left: 65px;\r\n}\r\n\r\n#title div:nth-child(4) {\r\n  top: 40px;\r\n  left: 65px;\r\n}\r\n\r\nnav div {\r\n  position: absolute;\r\n  text-align: center;\r\n}\r\n\r\n#home {\r\n  height: 70px;\r\n  width: 150px;\r\n  left: 150px;\r\n}\r\n\r\n#about {\r\n  height: 70px;\r\n  width: 150px;\r\n  left: 300px;\r\n}\r\n\r\n#github {\r\n  height: 70px;\r\n  width: 150px;\r\n  left: 450px;\r\n}\r\n\r\n#login {\r\n  height: 70px;\r\n  width: 70px;\r\n\tright: 0px;\r\n}\r\n\r\n#login div{\r\n  cursor:pointer;\r\n\tposition: absolute;\r\n\tleft:0; right:0;\r\n\ttop:0; bottom:0;\r\n\tmargin: auto;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 30px;\r\n  border: solid 2px #CAD8DE;\r\n  background: #0F1108;\r\n  text-align: center;\r\n  line-height: 90%;\r\n}\r\n\r\na,\r\na:hover,\r\na:visited {\r\n  position: relative;\r\n  top: 15px;\r\n  color: #CAD8DE;\r\n  text-decoration: none;\r\n  font-size: 40px;\r\n  font-family: 'PoiretOne', cursive;\r\n}\r\n\r\n#login div p {\r\n\ttop:28px;\r\n  font-size: 18px;\r\n  font-family: 'PoiretOne', cursive;\r\n  color: #CAD8DE;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navi-bar/navi-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div id='title'>\n    <div>A</div>\n    <div>iR-T:CKET</div>\n    <div>RESERV</div>\n    <div>SYS\\></div>\n  </div>\n  <div id='home' [@hover]='hoverState1' (mouseenter)='mouseEnter1()' (mouseleave)='mouseLeave1()'>\n    <a routerLink='/home' [@hover]='hoverState1'>.Home</a>\n  </div>\n  <div id='about' [@hover]='hoverState2' (mouseenter)='mouseEnter2()' (mouseleave)='mouseLeave2()'>\n    <a routerLink='/about' [@hover]='hoverState2'>.About</a>\n  </div>\n  <div id='github' [@hover]='hoverState3' (mouseenter)='mouseEnter3()' (mouseleave)='mouseLeave3()'>\n    <a href='https://github.com/pwb1997/databases-final' target='_blank' [@hover]='hoverState3'>.GitHub</a>\n  </div>\n  <div id='login' [@hover]='hoverState4'>\n    <div (click)='redirectLogin()'>\n      <p>login</p>\n    </div>\n    <div [style.visibility]='logoutStatus' (click)='logout()'>\n      <p>logout</p>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navi-bar/navi-bar.component.ts":
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
var animations_1 = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ngx_cookie_service_1 = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var NaviBarComponent = /** @class */ (function () {
    function NaviBarComponent(router, cookieService, http) {
        this.router = router;
        this.cookieService = cookieService;
        this.http = http;
        // hover
        this.hoverState1 = 'inactive';
        this.hoverState2 = 'inactive';
        this.hoverState3 = 'inactive';
        this.hoverState4 = 'inactive';
        this.logoutStatus = 'hidden';
    }
    // hover functions
    NaviBarComponent.prototype.mouseEnter1 = function () {
        this.hoverState1 = 'active';
    };
    NaviBarComponent.prototype.mouseLeave1 = function () {
        this.hoverState1 = 'inactive';
    };
    NaviBarComponent.prototype.mouseEnter2 = function () {
        this.hoverState2 = 'active';
    };
    NaviBarComponent.prototype.mouseLeave2 = function () {
        this.hoverState2 = 'inactive';
    };
    NaviBarComponent.prototype.mouseEnter3 = function () {
        this.hoverState3 = 'active';
    };
    NaviBarComponent.prototype.mouseLeave3 = function () {
        this.hoverState3 = 'inactive';
    };
    NaviBarComponent.prototype.mouseEnter4 = function () {
        this.hoverState4 = 'active';
    };
    NaviBarComponent.prototype.mouseLeave4 = function () {
        this.hoverState4 = 'inactive';
    };
    // redirect
    NaviBarComponent.prototype.redirectLogin = function () {
        this.router.navigate(['/login']);
    };
    NaviBarComponent.prototype.logout = function () {
        this.http.post('/logout', null, { responseType: 'text' }).subscribe(function (res) {
            window.location.href = '/home';
        }, function (err) {
            console.log('logout failed');
        });
    };
    NaviBarComponent.prototype.ngOnInit = function () {
        if (this.cookieService.get('username') !== '') {
            this.logoutStatus = 'show';
        }
    };
    NaviBarComponent = __decorate([
        core_1.Component({
            selector: 'app-navi-bar',
            template: __webpack_require__("./src/app/navi-bar/navi-bar.component.html"),
            styles: [__webpack_require__("./src/app/navi-bar/navi-bar.component.css")],
            animations: [
                animations_1.trigger('hover', [
                    animations_1.state('active', animations_1.style({
                        backgroundColor: '#00F6ED',
                        color: '#0F1108',
                    })),
                    animations_1.state('inactive', animations_1.style({
                        backgroundColor: '#0F1108',
                    })),
                    animations_1.transition('inactive <=> active', animations_1.animate('100ms')),
                ])
            ],
        }),
        __metadata("design:paramtypes", [router_1.Router, ngx_cookie_service_1.CookieService, http_1.HttpClient])
    ], NaviBarComponent);
    return NaviBarComponent;
}());
exports.NaviBarComponent = NaviBarComponent;


/***/ }),

/***/ "./src/app/register-agent/register-agent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-agent/register-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register-agent works!\n</p>\n"

/***/ }),

/***/ "./src/app/register-agent/register-agent.component.ts":
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
var RegisterAgentComponent = /** @class */ (function () {
    function RegisterAgentComponent() {
    }
    RegisterAgentComponent.prototype.ngOnInit = function () {
    };
    RegisterAgentComponent = __decorate([
        core_1.Component({
            selector: 'app-register-agent',
            template: __webpack_require__("./src/app/register-agent/register-agent.component.html"),
            styles: [__webpack_require__("./src/app/register-agent/register-agent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterAgentComponent);
    return RegisterAgentComponent;
}());
exports.RegisterAgentComponent = RegisterAgentComponent;


/***/ }),

/***/ "./src/app/register-customer/register-customer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-customer/register-customer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register-customer works!\n</p>\n"

/***/ }),

/***/ "./src/app/register-customer/register-customer.component.ts":
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
var RegisterCustomerComponent = /** @class */ (function () {
    function RegisterCustomerComponent() {
    }
    RegisterCustomerComponent.prototype.ngOnInit = function () {
    };
    RegisterCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-register-customer',
            template: __webpack_require__("./src/app/register-customer/register-customer.component.html"),
            styles: [__webpack_require__("./src/app/register-customer/register-customer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterCustomerComponent);
    return RegisterCustomerComponent;
}());
exports.RegisterCustomerComponent = RegisterCustomerComponent;


/***/ }),

/***/ "./src/app/register-staff/register-staff.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-staff/register-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  register-staff works!\n</p>\n"

/***/ }),

/***/ "./src/app/register-staff/register-staff.component.ts":
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
var RegisterStaffComponent = /** @class */ (function () {
    function RegisterStaffComponent() {
    }
    RegisterStaffComponent.prototype.ngOnInit = function () {
    };
    RegisterStaffComponent = __decorate([
        core_1.Component({
            selector: 'app-register-staff',
            template: __webpack_require__("./src/app/register-staff/register-staff.component.html"),
            styles: [__webpack_require__("./src/app/register-staff/register-staff.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterStaffComponent);
    return RegisterStaffComponent;
}());
exports.RegisterStaffComponent = RegisterStaffComponent;


/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".main {\n    position: absolute;\n    top:80px; \n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main'>\n  <a routerLink='/register/customer'>Customer</a>\n  <a routerLink='/register/staff'>Airline Staff</a>\n  <a routerLink='/register/agent'>Booking Agent</a>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
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
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map