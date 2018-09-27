(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/SuperComponent.ts":
/*!***********************************************!*\
  !*** ./src/app/_components/SuperComponent.ts ***!
  \***********************************************/
/*! exports provided: SuperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperComponent", function() { return SuperComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var SuperComponent = /** @class */ (function () {
    function SuperComponent(__globalService, __router, __toastr, __cdr) {
        this.__globalService = __globalService;
        this.__router = __router;
        this.__toastr = __toastr;
        this.__cdr = __cdr;
        this.loading = false;
        this.id = null;
        this.errors = [];
        this.errorMsgs = [];
        this.route = '';
        this.title = 'Add';
        this.placements = ['top', 'left', 'right', 'bottom'];
        this.popoverTitle = 'Are you sure?';
        this.popoverMessage = 'Are you really <b>sure</b> you want to Delete?';
        this.confirmText = 'Yes <i class="glyphicon glyphicon-ok"></i>';
        this.cancelText = 'No <i class="glyphicon glyphicon-remove"></i>';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.msges = [];
    }
    SuperComponent.prototype.ngAfterViewChecked = function () {
        this.__cdr.detectChanges();
    };
    SuperComponent.prototype.isFieldValid = function (field) {
        return !this.myForm.get(field).valid && this.myForm.get(field).touched;
    };
    SuperComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    SuperComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    SuperComponent.prototype.reset = function () {
        this.myForm.reset();
    };
    return SuperComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });




/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.id_token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.id_token,
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json'
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_models/SuperClass.ts":
/*!***************************************!*\
  !*** ./src/app/_models/SuperClass.ts ***!
  \***************************************/
/*! exports provided: SuperClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperClass", function() { return SuperClass; });
var SuperClass = /** @class */ (function () {
    function SuperClass() {
    }
    SuperClass.conditionalValidator = function (condition, validator) {
        return function (control) {
            if (!condition()) {
                return null;
            }
            return validator(control);
        };
    };
    return SuperClass;
}());



/***/ }),

/***/ "./src/app/_models/general.ts":
/*!************************************!*\
  !*** ./src/app/_models/general.ts ***!
  \************************************/
/*! exports provided: General */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "General", function() { return General; });
var General = /** @class */ (function () {
    function General() {
    }
    return General;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/*!**********************************!*\
  !*** ./src/app/_models/index.ts ***!
  \**********************************/
/*! exports provided: User, General, PaginatedTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/_models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general */ "./src/app/_models/general.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "General", function() { return _general__WEBPACK_IMPORTED_MODULE_1__["General"]; });

/* harmony import */ var _paginated_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginated-table */ "./src/app/_models/paginated-table.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginatedTable", function() { return _paginated_table__WEBPACK_IMPORTED_MODULE_2__["PaginatedTable"]; });






/***/ }),

/***/ "./src/app/_models/paginated-table.ts":
/*!********************************************!*\
  !*** ./src/app/_models/paginated-table.ts ***!
  \********************************************/
/*! exports provided: PaginatedTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedTable", function() { return PaginatedTable; });
var PaginatedTable = /** @class */ (function () {
    function PaginatedTable() {
    }
    return PaginatedTable;
}());



/***/ }),

/***/ "./src/app/_models/user.ts":
/*!*********************************!*\
  !*** ./src/app/_models/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _SuperClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuperClass */ "./src/app/_models/SuperClass.ts");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/esm5/ngx-custom-validators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, email, password, password_confirmation) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.email = email;
        _this.password = password;
        _this.password_confirmation = password_confirmation;
        return _this;
    }
    User.buildForm = function (fb) {
        var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]));
        var password_confirmation = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].equalTo(password)]));
        var agreed = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        return fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].email])],
            password: password,
            password_confirmation: password_confirmation,
            agreed: agreed,
        });
    };
    User.isValid = function (f) {
        return f.valid;
    };
    return User;
}(_SuperClass__WEBPACK_IMPORTED_MODULE_1__["SuperClass"]));



/***/ }),

/***/ "./src/app/_models/withdraw.ts":
/*!*************************************!*\
  !*** ./src/app/_models/withdraw.ts ***!
  \*************************************/
/*! exports provided: Withdraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Withdraw", function() { return Withdraw; });
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ngx_custom_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ngx-custom-validators */ "./node_modules/ngx-custom-validators/esm5/ngx-custom-validators.js");


var Withdraw = /** @class */ (function () {
    function Withdraw() {
    }
    Withdraw.buildForm = function (fb) {
        var password = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6)]));
        var from = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        var to = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        var amount = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        var asset = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        return fb.group({
            name: [null, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])],
            email: [null, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _node_modules_ngx_custom_validators__WEBPACK_IMPORTED_MODULE_1__["CustomValidators"].email])],
            password: password,
            amount: amount,
            from: from,
            to: to,
            asset: asset
        });
    };
    return Withdraw;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (Email, Password) {
        var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + '/authentication';
        return this.http.post(apiUrl, { email: Email, password: Password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            var user = data;
            if (user && user.id_token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.forget = function (Email) {
        var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + '/forget-password';
        return this.http.post(apiUrl, { email: Email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return data;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        var _this = this;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        setTimeout(function () {
            _this.router.navigate(['/login']);
        }, 100);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/general.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/general.service.ts ***!
  \**********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/index.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeneralService = /** @class */ (function () {
    function GeneralService(http) {
        this.http = http;
        this.isLoading = false;
        this.pageTitle = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.reloadGlobal();
    }
    GeneralService.prototype.reloadGlobal = function () {
    };
    GeneralService.prototype.isAdmin = function () {
        return false;
    };
    GeneralService.prototype.get = function (load) {
        // remove user from local storage to log user out
        var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + load;
        return this.http.get(apiUrl);
    };
    GeneralService.prototype.delete = function (url) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + '/' + url);
    };
    GeneralService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        this.isLoading = false;
        return Promise.reject(error.message || error);
    };
    GeneralService.prototype.setPageTitle = function (title) {
        this.pageTitle.next(title);
    };
    GeneralService.prototype.loading = function (type) {
        console.log(type);
        if (type) {
            this.blockUI.start();
        }
        else {
            this.blockUI.stop();
        }
    };
    GeneralService.prototype.getRequest = function (route) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + '/' + route);
    };
    GeneralService.prototype.saveForm = function (model, route, id) {
        if (id == null || id === undefined) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/" + route, model);
        }
        else {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/" + route + "/" + id, model);
        }
    };
    GeneralService.prototype.pay = function (model, route) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_url + "/" + route, model);
    };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])(),
        __metadata("design:type", Object)
    ], GeneralService.prototype, "blockUI", void 0);
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/_services/history.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/history.service.ts ***!
  \**********************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {};
var HistoryService = /** @class */ (function () {
    function HistoryService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    HistoryService.prototype.all = function () {
        return this.http.get(this.apiUrl + '/account/transactions').map(function (data) {
            return data;
        });
    };
    HistoryService.prototype.saveWithdraw = function (withdraw, token) {
        var url = this.apiUrl + "/account/send";
        return this.http.post(url, withdraw, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + token }) }).map(function (data) {
            return data;
        });
    };
    HistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general.service */ "./src/app/_services/general.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return _general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]; });






/***/ }),

/***/ "./src/app/_services/keypair.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/keypair.service.ts ***!
  \**********************************************/
/*! exports provided: KeyPairService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyPairService", function() { return KeyPairService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KeyPairService = /** @class */ (function () {
    function KeyPairService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url;
    }
    KeyPairService.prototype.addKeyPair = function (withdraw, token) {
        var url = this.apiUrl + "/account/addkeypair";
        return this.http.post(url, withdraw, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer ' + token }) }).map(function (data) {
            return data;
        });
    };
    KeyPairService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KeyPairService);
    return KeyPairService;
}());



/***/ }),

/***/ "./src/app/_services/offers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/offers.service.ts ***!
  \*********************************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffersService = /** @class */ (function () {
    function OffersService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
        var user = localStorage.getItem('currentUser');
        if (user) {
            user = JSON.parse(user);
            this.token = user['id_token'];
        }
    }
    OffersService.prototype.saveOffer = function (offer) {
        var url = this.apiUrl + "/account/manage_offer";
        return this.http.post(url, offer, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token }) }).map(function (data) {
            return data;
        });
    };
    OffersService.prototype.sells = function () {
        var url = this.apiUrl + "/account/offers/sell";
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token }) }).map(function (data) {
            return data;
        });
    };
    OffersService.prototype.buys = function () {
        var url = this.apiUrl + "/account/offers/buy";
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token }) }).map(function (data) {
            return data;
        });
    };
    OffersService.prototype.offers = function () {
        var url = this.apiUrl + "/offers";
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token }) }).map(function (data) {
            return data;
        });
    };
    OffersService.prototype.cancel = function (id) {
        var offer = {
            offerid: id
        };
        var url = this.apiUrl + "/account/offer/cancel";
        return this.http.post(url, offer, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token }) }).map(function (data) {
            return data;
        });
    };
    OffersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OffersService);
    return OffersService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
        var user = localStorage.getItem('currentUser');
        if (user) {
            user = JSON.parse(user);
            this.token = user['id_token'];
        }
    }
    UserService.prototype.create = function (user) {
        var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/authentication';
        return this.http.post(apiUrl, user);
    };
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    UserService.prototype.profile = function () {
        var url = this.apiUrl + "/user/getprofile";
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token }) }).map(function (data) {
            return data;
        });
    };
    UserService.prototype.update = function (user) {
        var url = this.apiUrl + "/user/update";
        return this.http.post(url, user, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.token }) }).map(function (data) {
            return data;
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_services/validation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/validation.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (type, controlName, controlTxt, validatorName, validatorValue, equalWith, validErrors) {
        var config = {
            'required': "The " + controlTxt + " field is required",
            'email': 'The email must be a valid email address',
            'number': "The " + controlTxt + " must be a number",
            'date': "The " + controlTxt + " is not a valid date",
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + (validatorValue ? validatorValue.requiredLength : ''),
            'invalidCreditCard': 'Is invalid credit card number',
            'min': "The " + controlTxt + " must be at least " + ((validErrors != null || validErrors !== undefined) ? validErrors.requiredValue : '') + ".",
            'max': "The " + controlTxt + " may not be greater than " + ((validErrors != null || validErrors !== undefined)
                ? validErrors.requiredValue : '') + ".",
            'equalTo': controlTxt + " is not equal with " + equalWith
        };
        var msg = '';
        if (type === 'api') {
            msg = validatorValue;
        }
        else {
            msg = config[validatorName];
        }
        return msg;
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value != null && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@visibilityChanged]=\"visibility\" class=\"animsition\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.visibility = 'shown';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('visibilityChanged', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/routes.module */ "./src/app/routes/routes.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/content-header/content-header.component */ "./src/app/components/content-header/content-header.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/index.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng_block_ui__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/messages/control-messages.component */ "./src/app/components/messages/control-messages.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _pages_payoff_payoff_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/payoff/payoff.component */ "./src/app/pages/payoff/payoff.component.ts");
/* harmony import */ var _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/deposit/deposit.component */ "./src/app/pages/deposit/deposit.component.ts");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/withdraw/withdraw.component */ "./src/app/pages/withdraw/withdraw.component.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/history/history.component */ "./src/app/pages/history/history.component.ts");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_services/history.service */ "./src/app/_services/history.service.ts");
/* harmony import */ var _pages_keypair_keypair_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/keypair/keypair.component */ "./src/app/pages/keypair/keypair.component.ts");
/* harmony import */ var _services_keypair_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_services/keypair.service */ "./src/app/_services/keypair.service.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ "./src/app/pages/change-password/change-password.component.ts");
/* harmony import */ var _pages_manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/manage-offers/manage-offers.component */ "./src/app/pages/manage-offers/manage-offers.component.ts");
/* harmony import */ var ngx_tabset__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-tabset */ "./node_modules/ngx-tabset/modules/ngx-tabset.es5.js");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_services/offers.service */ "./src/app/_services/offers.service.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/account/account.component */ "./src/app/pages/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_12__["SideBarComponent"],
                _components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_13__["ContentHeaderComponent"],
                _components_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_18__["ControlMessagesComponent"],
                _pages_payoff_payoff_component__WEBPACK_IMPORTED_MODULE_20__["PayOffComponent"],
                _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_21__["DepositComponent"],
                _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_23__["WithdrawComponent"],
                _pages_history_history_component__WEBPACK_IMPORTED_MODULE_24__["HistoryComponent"],
                _pages_keypair_keypair_component__WEBPACK_IMPORTED_MODULE_26__["KeypairComponent"],
                _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_28__["ChangePasswordComponent"],
                _pages_manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_29__["ManageOffersComponent"],
                _pages_account_account_component__WEBPACK_IMPORTED_MODULE_32__["AccountComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _routes_routes_module__WEBPACK_IMPORTED_MODULE_10__["RoutesModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_tabset__WEBPACK_IMPORTED_MODULE_30__["TabsModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
                ng_block_ui__WEBPACK_IMPORTED_MODULE_17__["BlockUIModule"].forRoot({
                    message: 'Loading...'
                }),
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_22__["NgxQRCodeModule"],
            ],
            exports: [
                ng_block_ui__WEBPACK_IMPORTED_MODULE_17__["BlockUIModule"],
                _components_messages_control_messages_component__WEBPACK_IMPORTED_MODULE_18__["ControlMessagesComponent"]
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["GeneralService"],
                _services_history_service__WEBPACK_IMPORTED_MODULE_25__["HistoryService"],
                _services_keypair_service__WEBPACK_IMPORTED_MODULE_27__["KeyPairService"],
                _services_offers_service__WEBPACK_IMPORTED_MODULE_31__["OffersService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_15__["JwtInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/content-header/content-header.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/content-header/content-header.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 991px){\r\n    .header-button{\r\n        width: auto;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/content-header/content-header.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/content-header/content-header.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER DESKTOP-->\r\n<header class=\"header-desktop\">\r\n\r\n    <div class=\"section__content section__content--p30\">\r\n        <div class=\"container-fluid\">\r\n            <div>\r\n                <div class=\"header-button float-right\">\r\n                    <div class=\"account-wrap\">\r\n                        <div class=\"account-item clearfix js-item-menu\">\r\n                            <!-- <div class=\"image\">\r\n                                <img src=\"assets/images/icon/avatar-01.jpg\" alt=\"John Doe\" />\r\n                            </div> -->\r\n                            <div class=\"content\">\r\n                                <a class=\"js-acc-btn\">{{user.name}}</a>\r\n                            </div>\r\n                            <div class=\"account-dropdown js-dropdown\">\r\n                                <div class=\"info clearfix\">\r\n                                    <div class=\"image\">\r\n                                        <!-- <a>\r\n                                            <img src=\"assets/images/icon/avatar-01.jpg\" alt=\"John Doe\" />\r\n                                        </a> -->\r\n                                    </div>\r\n                                    <div class=\"content\">\r\n                                        <h5 class=\"name\">\r\n                                            <a>{{user.name}}</a>\r\n                                        </h5>\r\n                                        <span class=\"email\">{{user.email}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"account-dropdown__body\">\r\n                                    <div class=\"account-dropdown__item\">\r\n                                        <a routerLink=\"/account\">\r\n                                            <i class=\"zmdi zmdi-account\"></i>Account</a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"account-dropdown__body\">\r\n                                    <div class=\"account-dropdown__item\">\r\n                                        <a routerLink=\"/change-password\" routerLinkActive=\"active\">\r\n                                            <i class=\"zmdi zmdi-account\"></i>Change Password</a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"account-dropdown__footer\">\r\n                                    <a (click)=\"logout()\">\r\n                                        <i class=\"zmdi zmdi-power\"></i>Logout</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- HEADER DESKTOP-->"

/***/ }),

/***/ "./src/app/components/content-header/content-header.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-header/content-header.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentHeaderComponent", function() { return ContentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentHeaderComponent = /** @class */ (function () {
    function ContentHeaderComponent(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.user = {};
    }
    ContentHeaderComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getCurrentUser();
    };
    ContentHeaderComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    ContentHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-header',
            template: __webpack_require__(/*! ./content-header.component.html */ "./src/app/components/content-header/content-header.component.html"),
            styles: [__webpack_require__(/*! ./content-header.component.css */ "./src/app/components/content-header/content-header.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ContentHeaderComponent);
    return ContentHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/messages/control-messages.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/messages/control-messages.component.ts ***!
  \*******************************************************************/
/*! exports provided: ControlMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlMessagesComponent", function() { return ControlMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/validation.service */ "./src/app/_services/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            if (this.control.errors) {
                for (var propertyName in this.control.errors) {
                    if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                        var x = _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].getValidatorErrorMessage('form', this.controlName, this.controlTxt, propertyName, this.control.errors[propertyName], this.equalWith, this.control.errors);
                        if (x !== undefined) {
                            return x;
                        }
                    }
                }
            }
            else {
                if (this.errorApi) {
                    for (var propertyName in this.errorApi) {
                        if (this.errorApi.hasOwnProperty(this.controlName) && this.controlName) {
                            return _services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].getValidatorErrorMessage('api', this.controlName, this.controlTxt, propertyName, this.errorApi[this.controlName][0], this.equalWith, this.control.errors);
                        }
                    }
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ControlMessagesComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControlMessagesComponent.prototype, "controlName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControlMessagesComponent.prototype, "controlTxt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ControlMessagesComponent.prototype, "errorApi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ControlMessagesComponent.prototype, "equalWith", void 0);
    ControlMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'control-messages',
            template: "\n    <div class=\"error-msg\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-sidebar{\r\n\toverflow: hidden;\r\n}\r\n\r\n.menu-sidebar__content{\r\n\toverflow: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER MOBILE-->\r\n<header class=\"header-mobile d-block d-lg-none\">\r\n    <div class=\"header-mobile__bar\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"header-mobile-inner\">\r\n                <!--<a class=\"logo\" href=\"index.html\">-->\r\n                <!--<img src=\"assets/images/icon/logo.png\" alt=\"CoolAdmin\" />-->\r\n                <!--</a>-->\r\n                <button class=\"hamburger hamburger--slider\" type=\"button\">\r\n                    <span class=\"hamburger-box\">\r\n                        <span class=\"hamburger-inner\"></span>\r\n                    </span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <nav class=\"navbar-mobile\">\r\n        <div class=\"container-fluid\">\r\n            <ul class=\"navbar-mobile__list list-unstyled\">\r\n                <li class=\"has-sub\" (click)=\"goToDash()\">\r\n                    <a class=\"js-arrow\">\r\n                        <i class=\"fas fa-balance-scale\"></i>Balance</a>\r\n\r\n                </li>\r\n                <li>\r\n                    <a>\r\n                        <i class=\"fa fa-align-left\"></i>Payments</a>\r\n                </li>\r\n                <li>\r\n                    <a>\r\n                        <i class=\"fa fa-arrow-up\"></i>Send</a>\r\n                </li>\r\n                <li>\r\n                    <a>\r\n                        <i class=\"fa fa-arrow-down\"></i>Receive</a>\r\n                </li>\r\n                <li>\r\n                    <a>\r\n                        <i class=\"fa fa-globe\"></i>Account</a>\r\n                </li>\r\n                <li class=\"has-sub\" (click)=\"goToManageOffers()\">\r\n                    <a class=\"js-arrow\">\r\n                        <i class=\"fas fa-balance-scale\"></i>SDEx Offers</a>\r\n\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>\r\n<!-- END HEADER MOBILE-->\r\n\r\n\r\n<!-- MENU SIDEBAR-->\r\n<aside class=\"menu-sidebar d-none d-lg-block\">\r\n    <div class=\"logo\">\r\n        <a target=\"_blanck\" href=\"https://www.unsinkable.io/hodl-wallet\">\r\n            <img style=\"max-width: 68%;;\" src=\"../../../assets/images/logos/walled_logo.png\" alt=\"CoolAdmin\">\r\n            <img style=\"max-width: 32%;\" src=\"../../../assets/images/logos/alpha_logo.png\" alt=\"CoolAdmin\">\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"menu-sidebar__content\">\r\n        <nav class=\"navbar-sidebar\">\r\n            <ul class=\"list-unstyled navbar__list\">\r\n                <li class=\"has-sub\" routerLink=\"/dashboard\" routerLinkActive=\"active\">\r\n                    <a class=\"js-arrow\">\r\n                        <i class=\"fas fa-balance-scale\"></i>Balance</a>\r\n\r\n                </li>\r\n                <li>\r\n                    <a>\r\n                        <i class=\"fa fa-lock\"></i>HODL</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/history\" routerLinkActive=\"active\">\r\n                        <i class=\"fa fa-align-left\"></i>History</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/deposit\" routerLinkActive=\"active\">\r\n                        <i class=\"fa fa-arrow-down\"></i>Deposit</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/withdraw\" routerLinkActive=\"active\">\r\n                        <i class=\"fa fa-arrow-up\"></i>Withdraw</a>\r\n                </li>\r\n\r\n                <li>\r\n                    <a routerLink=\"/manage-offers\" routerLinkActive=\"active\">\r\n                        <i class=\"fas fa-cogs\"></i>SDEx Offers</a>\r\n\r\n                </li>\r\n\r\n                <li>\r\n                    <a>\r\n                        <img style=\"margin-left: -6px;margin-right: 10px;\" src=\"../../../assets/images/icon/wallet-logo.png\" alt=\"\">UNSK\r\n                        ICO\r\n                    </a>\r\n                </li>\r\n               \r\n                <li>\r\n                    <a routerLink=\"/keypair\" routerLinkActive=\"active\"><i class=\"fa fa-plus\"></i>Add Keypair</a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/account\"><i class=\"fa fa-globe\"></i>Account</a>\r\n                </li>\r\n                <li>\r\n                    <a target=\"_blanck\" href=\"https://www.unsinkable.io/faq\">\r\n                        <i class=\"fa fa-question\"></i>FAQ</a>\r\n                </li>\r\n                <li>\r\n                    <a target=\"_blanck\" href=\"https://www.unsinkable.io/help\">\r\n                        <i class=\"fa fa-paper-plane\"></i>Help</a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n    </div>\r\n</aside>\r\n<!-- END MENU SIDEBAR-->"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(_router) {
        this._router = _router;
    }
    SideBarComponent.prototype.goToDash = function () {
        this._router.navigate(['dashboard']);
    };
    SideBarComponent.prototype.goToManageOffers = function () {
        this._router.navigate(['manage-offers']);
    };
    SideBarComponent.prototype.goToDeposit = function () {
        console.log("Here");
        this._router.navigate(['deposit']);
    };
    SideBarComponent.prototype.ngOnInit = function () {
        (function ($) {
            // Dropdown
            var menu = $('.js-item-menu');
            try {
                var sub_menu_is_showed = -1;
                for (var i = 0; i < menu.length; i++) {
                    $(menu[i]).on('click', function (e) {
                        e.preventDefault();
                        $('.js-right-sidebar').removeClass('show-sidebar');
                        if (jQuery.inArray(this, menu) === sub_menu_is_showed) {
                            $(this).toggleClass('show-dropdown');
                            sub_menu_is_showed = -1;
                        }
                        else {
                            for (var i_1 = 0; i_1 < menu.length; i_1++) {
                                $(menu[i_1]).removeClass('show-dropdown');
                            }
                            $(this).toggleClass('show-dropdown');
                            sub_menu_is_showed = jQuery.inArray(this, menu);
                        }
                    });
                }
                $('.js-item-menu, .js-dropdown').click(function (event) {
                    event.stopPropagation();
                });
                $('body,html').on('click', function () {
                    for (var i = 0; i < menu.length; i++) {
                        menu[i].classList.remove('show-dropdown');
                    }
                    sub_menu_is_showed = -1;
                });
            }
            catch (error) {
                console.log(error);
            }
            var wW = $(window).width();
            // Right Sidebar
            var right_sidebar = $('.js-right-sidebar');
            var sidebar_btn = $('.js-sidebar-btn');
            sidebar_btn.on('click', function (e) {
                e.preventDefault();
                for (var i = 0; i < menu.length; i++) {
                    menu[i].classList.remove('show-dropdown');
                }
                sub_menu_is_showed = -1;
                right_sidebar.toggleClass('show-sidebar');
            });
            $('.js-right-sidebar, .js-sidebar-btn').click(function (event) {
                event.stopPropagation();
            });
            $('body,html').on('click', function () {
                right_sidebar.removeClass('show-sidebar');
            });
            // Sublist Sidebar
            try {
                var arrow = $('.js-arrow');
                arrow.each(function () {
                    var that = $(this);
                    that.on('click', function (e) {
                        e.preventDefault();
                        that.find('.arrow').toggleClass('up');
                        that.toggleClass('open');
                        that.parent().find('.js-sub-list').slideToggle('250');
                    });
                });
            }
            catch (error) {
                console.log(error);
            }
            try {
                // Hamburger Menu
                $('.hamburger').on('click', function () {
                    $(this).toggleClass('is-active');
                    $('.navbar-mobile').slideToggle('500');
                });
                $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
                    var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
                    $(this).toggleClass('active');
                    $(dropdown).slideToggle('500');
                    return false;
                });
            }
            catch (error) {
                console.log(error);
            }
        })(jQuery);
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/components/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/account.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/account/account.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/account/account.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-wrapper\">\r\n        <app-side-bar></app-side-bar>\r\n        <!-- PAGE CONTAINER-->\r\n        <div class=\"page-container\">\r\n            <app-content-header></app-content-header>\r\n            <div class=\"main-content\">\r\n                <div class=\"section__content section__content--p30\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"au-card recent-report\">\r\n                                    <h4 class=\"title\">Account Page</h4>\r\n\r\n                                    <div [formGroup]=\"accountForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Name *</label>\r\n                                            <div class=\"input-icon right\">\r\n                                                <input placeholder=\"Full Name\" required\r\n                                                       formControlName=\"name\" type=\"text\" name=\"name\"\r\n                                                       class=\"form-control\">\r\n                                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Old Password\"\r\n                                                                  controlName=\"old_password\"\r\n                                                                  [control]=\"accountForm.controls.name\"></control-messages>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Email</label>\r\n                                            <input class=\"form-control\" [value]=\"email\" id=\"email\" disabled name=\"email\"\r\n                                                   type=\"email\">\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label>Stellar Address</label>\r\n                                            <input [value]=\"stellar_address\" class=\"form-control\" disabled\r\n                                                   name=\"stellar_address\"\r\n                                                   type=\"text\">\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label>Stellar Account</label>\r\n                                            <input [value]=\"stellar_account\" class=\"form-control\" disabled\r\n                                                   name=\"stellar_account\"\r\n                                                   type=\"text\">\r\n                                        </div>\r\n                                        <div class=\"form-actions mx-auto\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                    <button (click)=\"updateProfile()\" type=\"submit\"\r\n                                                            class=\"btn btn-success\">\r\n                                                        Update\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<block-ui></block-ui>"

/***/ }),

/***/ "./src/app/pages/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = /** @class */ (function () {
    function AccountComponent(service, _globalService, _toastr) {
        this.service = service;
        this._globalService = _globalService;
        this._toastr = _toastr;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.accountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: this.name
        });
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    AccountComponent.prototype.getProfile = function () {
        var _this = this;
        var user = this.service.getCurrentUser();
        this._globalService.loading(true);
        this.service.profile().subscribe(function (result) {
            _this._globalService.loading(false);
            _this.name.setValue(result.name);
            _this.email = result.email;
            _this.stellar_address = result.email + "*unsinkable.io";
            _this.stellar_account = user.account;
        }, function (error) {
            _this._globalService.loading(false);
        });
    };
    AccountComponent.prototype.updateProfile = function () {
        var _this = this;
        var user = { name: this.name.value };
        this._globalService.loading(true);
        this.service.update(user).subscribe(function (result) {
            _this._globalService.loading(false);
            _this._toastr.success('User updated successfullly');
            var currentUser = _this.service.getCurrentUser();
            currentUser['name'] = _this.name.value;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }, function (error) {
            _this._globalService.loading(false);
            _this._toastr.error('Something wrong happened!');
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/pages/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/pages/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ncontrol-messages {\r\n    color: #ff2e44;\r\n}"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-wrapper\">\r\n        <app-side-bar></app-side-bar>\r\n        <!-- PAGE CONTAINER-->\r\n        <div class=\"page-container\">\r\n            <app-content-header></app-content-header>\r\n            <div class=\"main-content\">\r\n                <div class=\"section__content section__content--p30\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"au-card recent-report\">\r\n                                    <h4 class=\"title\">Change Password</h4>\r\n\r\n                                    <div [formGroup]=\"myForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Old Password *</label>\r\n                                            <div class=\"input-icon right\">\r\n                                                <input placeholder=\"Old Password\" required\r\n                                                       formControlName=\"old_password\" type=\"password\" name=\"old_password\"\r\n                                                       class=\"form-control\">\r\n                                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Old Password\"\r\n                                                                  controlName=\"old_password\"\r\n                                                                  [control]=\"myForm.controls.old_password\"></control-messages>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label>Password</label>\r\n                                            <input class=\"au-input au-input--full\" id=\"password\" name=\"password\"\r\n                                                   type=\"password\"\r\n                                                   placeholder=\"Password\" formControlName=\"password\">\r\n                                            <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Password\"\r\n                                                              controlName=\"password\"\r\n                                                              [control]=\"myForm.controls.password\"></control-messages>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label>Password Confirmation</label>\r\n                                            <input class=\"au-input au-input--full\" id=\"password_confirmation\"\r\n                                                   name=\"password_confirmation\" type=\"password\"\r\n                                                   placeholder=\"Password Confirmation\"\r\n                                                   formControlName=\"password_confirmation\">\r\n                                            <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Confirm Password\"\r\n                                                              controlName=\"password_confirmation\"\r\n                                                              [control]=\"myForm.controls.password_confirmation\"></control-messages>\r\n\r\n                                        </div>\r\n                                        <div class=\"form-actions mx-auto\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                    <button (click)=\"save()\" type=\"submit\"\r\n                                                            class=\"btn btn-success\">\r\n                                                        Change\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<block-ui></block-ui>"

/***/ }),

/***/ "./src/app/pages/change-password/change-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/esm5/ngx-custom-validators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(_router, _toastr, _globalService) {
        this._router = _router;
        this._toastr = _toastr;
        this._globalService = _globalService;
        this.user = '';
        this.msgs = [];
        this.errorMsgs = [];
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.createFormControl();
        this.createFormGroup();
    };
    ChangePasswordComponent.prototype.save = function () {
        if (this.myForm.valid) {
            var account = {
                old_password: this.old_password.value,
                password: this.password.value,
                password_confirmation: this.password_confirmation.value,
            };
            this._globalService.loading(true);
            if (this.myForm.valid) {
                this._globalService.loading(false);
            }
        }
    };
    ChangePasswordComponent.prototype.createFormControl = function () {
        this.old_password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]));
        this.password_confirmation = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([ngx_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].equalTo(this.password)]));
    };
    ChangePasswordComponent.prototype.createFormGroup = function () {
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            old_password: this.old_password,
            password: this.password,
            password_confirmation: this.password_confirmation
        });
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/pages/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/pages/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-radius-top{\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0;\r\n}\r\n\r\n.custom-alert{\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.clickable{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"page-wrapper\">\r\n    <app-side-bar></app-side-bar>\r\n    <!-- PAGE CONTAINER-->\r\n    <div class=\"page-container\">\r\n      <app-content-header></app-content-header>\r\n      <!-- MAIN CONTENT-->\r\n      <div class=\"main-content\">\r\n\r\n        <div class=\"section__content section__content--p30\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"alert-danger custom-alert\" *ngIf=\"user.refund_xlm\">\r\n                  Please follow the link to return 2 XLM credit to Unsinkable\r\n                  <a class=\"text-primary clickable\" (click)=\"goToPay()\">Pay Off</a>\r\n                </div>\r\n                <div class=\"au-card recent-report\">\r\n                    <h4 class=\"text-primary\">Your Wallet Account ID:</h4>\r\n                    <p>{{account_id}}</p>\r\n                      <br>\r\n                  \r\n                  <h4 class=\"text-primary\">Balances:</h4><br>\r\n                  <div class=\"au-card-inner\" *ngIf=\"user.refund_xlm\">\r\n                    <h4 class=\"text-primary\">Balance: {{balance?.XLM}} XLM</h4><br>\r\n                    <h4 class=\"text-primary\">Credit Balance: 2 XLM</h4>\r\n                  </div>\r\n\r\n                  <div class=\"au-card-inner\" *ngIf=\"!user.refund_xlm\">\r\n                    <h4 class=\"text-primary\">{{balance?.XLM}} XLM</h4><br>\r\n                    <h4 class=\"text-primary\">{{balance?.UNSK ? balance?.UNSK : 0}} UNSK</h4>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- END MAIN CONTENT-->\r\n      <!-- END PAGE CONTAINER-->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_SuperComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_components/SuperComponent */ "./src/app/_components/SuperComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(service, _globalService, authenticationService, _router, _toastr, __cdr) {
        var _this = _super.call(this, _globalService, _router, _toastr, __cdr) || this;
        _this.service = service;
        _this._globalService = _globalService;
        _this.authenticationService = authenticationService;
        _this._router = _router;
        _this._toastr = _toastr;
        _this.account_id = '';
        _this.user = {};
        _this.user = service.getCurrentUser();
        return _this;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = localStorage.getItem('currentUser');
        user = JSON.parse(user);
        if (user)
            this.account_id = user["account"];
        this.account_id = user['account'];
        this._globalService.get('/account/getbalance').subscribe(function (balance) {
            _this.balance = balance;
        });
    };
    DashboardComponent.prototype.goToPay = function () {
        this._router.navigate(['/payoff']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}(_components_SuperComponent__WEBPACK_IMPORTED_MODULE_5__["SuperComponent"]));



/***/ }),

/***/ "./src/app/pages/deposit/deposit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/deposit/deposit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    color: #666;\r\n}"

/***/ }),

/***/ "./src/app/pages/deposit/deposit.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/deposit/deposit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"page-wrapper\">\r\n    <app-side-bar></app-side-bar>\r\n    <!-- PAGE CONTAINER-->\r\n   \r\n    <div class=\"page-container\">\r\n      <app-content-header></app-content-header>\r\n      <div class=\"main-content\">\r\n        <div class=\"section__content section__content--p30\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"au-card recent-report\">\r\n                      <div class=\"page-header\">\r\n                        <h4 class=\"title\">Deposit</h4>\r\n                      </div>\r\n                    <ngx-qrcode [qrc-element-type]=\"elementType\" [qrc-value] = \"value\">\r\n                      </ngx-qrcode>\r\n                      <span>\r\n                        <p style=\"font-size: 20px\">Your Stellar account address (public key)</p>\r\n                        <p>Deposit Lumens (XLM) to this address</p>\r\n                        {{value}}\r\n                      </span>\r\n                      <div>\r\n                        <p style=\"font-size: 14px;margin-top:15px;\">WARNING: HODL Wallet is still in beta testing. Do not put substantial funds into the HODL Wallet beta</p>\r\n\r\n                      </div>\r\n                      \r\n                      </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/deposit/deposit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/deposit/deposit.component.ts ***!
  \****************************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepositComponent = /** @class */ (function () {
    function DepositComponent() {
        this.elementType = 'url';
        this.value = '';
    }
    DepositComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('currentUser');
        user = JSON.parse(user);
        if (user)
            this.value = user["account"];
    };
    DepositComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deposit',
            template: __webpack_require__(/*! ./deposit.component.html */ "./src/app/pages/deposit/deposit.component.html"),
            styles: [__webpack_require__(/*! ./deposit.component.css */ "./src/app/pages/deposit/deposit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepositComponent);
    return DepositComponent;
}());



/***/ }),

/***/ "./src/app/pages/history/history.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/history/history.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:not(a){\r\n    color:#666;\r\n}"

/***/ }),

/***/ "./src/app/pages/history/history.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/history/history.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-wrapper\">\r\n        <app-side-bar></app-side-bar>\r\n        <!-- PAGE CONTAINER-->\r\n\r\n        <div class=\"page-container\">\r\n            <app-content-header></app-content-header>\r\n            <div class=\"main-content\">\r\n                <div class=\"section__content section__content--p30\">\r\n                    <div class=\"au-card recent-report\">\r\n                        <div class=\"page-header\" style=\"overflow-x:auto;\">\r\n\r\n                            <h4 class=\"title text-center\">History</h4><br>\r\n\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th>Action</th>\r\n                                    <th>Address</th>\r\n                                    <th>Amount</th>\r\n                                    <th>Date</th>\r\n                                    <th>Transaction</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr *ngFor=\"let item of transactions\">\r\n                                    <td>{{item.action}}</td>\r\n                                    <td><a target=\"_blank\" href=\"http://testnet.stellarchain.io/address/{{item.account}}\">{{item.account | slice:0:21}}...</a></td>\r\n                                    <td>{{item.amount}} {{item.asset}}</td>\r\n                                    <td>{{item.date}}</td>\r\n                                    <td><a target=\"_blank\" href=\"http://testnet.stellarchain.io/tx/{{item.transaction_hash}}\">{{item.transaction_hash | slice:0:11}}...</a></td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/history/history.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/history/history.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/history.service */ "./src/app/_services/history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(service) {
        this.service = service;
        this.transactions = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.all().subscribe(function (response) {
            _this.transactions = response;
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/pages/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/pages/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/keypair/keypair.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/keypair/keypair.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:not(a, button) {\r\n    color: #666;\r\n}\r\n\r\ncontrol-messages {\r\n    color: #ff2e44;\r\n}"

/***/ }),

/***/ "./src/app/pages/keypair/keypair.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/keypair/keypair.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-wrapper\">\r\n        <app-side-bar></app-side-bar>\r\n        <!-- PAGE CONTAINER-->\r\n        <div class=\"page-container\">\r\n            <app-content-header></app-content-header>\r\n            <div class=\"main-content\">\r\n                <div class=\"section__content section__content--p30\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"au-card recent-report\">\r\n                                    <h4 class=\"title\">Add Keypair</h4>\r\n                                    <span>Add a new keypair fill the form below</span>\r\n                                    <div>This allows you to add another Stellar account to your HODL Wallet account.</div>\r\n                                    <br><br>\r\n\r\n                                    <div [formGroup]=\"keyForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Secret Key*</label>\r\n                                            <div class=\"input-icon right\">\r\n                                                <input placeholder=\"Secret Key\" required\r\n                                                       formControlName=\"private_key\" type=\"text\" name=\"private_key\"\r\n                                                       class=\"form-control\">\r\n                                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Private Key\"\r\n                                                                  controlName=\"private_key\"\r\n                                                                  [control]=\"keyForm.controls.private_key\"></control-messages>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Password*</label>\r\n                                            <div class=\"input-icon right\">\r\n                                                <input required\r\n                                                       placeholder=\"Password\"\r\n                                                       formControlName=\"password\"\r\n                                                       type=\"password\" name=\"password\"\r\n                                                       class=\"form-control\">\r\n                                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Password\"\r\n                                                                  controlName=\"password\"\r\n                                                                  [control]=\"keyForm.controls.password\"></control-messages>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-actions mx-auto\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                    <button (click)=\"addKeyPair()\" type=\"submit\"\r\n                                                            class=\"btn btn-success\">\r\n                                                        <i class=\"fa fa-plus\"></i>\r\n                                                        Add\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group mt-5\" *ngIf=\"public_key?.length > 0\">\r\n                                        <label class=\"control-label\">Public Key:</label>\r\n                                        <div class=\"input-icon right\">\r\n                                            <p>{{ public_key }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<block-ui></block-ui>\r\n"

/***/ }),

/***/ "./src/app/pages/keypair/keypair.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/keypair/keypair.component.ts ***!
  \****************************************************/
/*! exports provided: KeypairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeypairComponent", function() { return KeypairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_keypair_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/keypair.service */ "./src/app/_services/keypair.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KeypairComponent = /** @class */ (function () {
    function KeypairComponent(service, _globalService, _toastr) {
        this.service = service;
        this._globalService = _globalService;
        this._toastr = _toastr;
        this.public_key = '';
        this.user = '';
        this.msgs = [];
        this.errorMsgs = [];
    }
    KeypairComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('currentUser');
        this.user = JSON.parse(this.user);
        this.createFormControl();
        this.createFormGroup();
    };
    KeypairComponent.prototype.addKeyPair = function () {
        var _this = this;
        var keypair = {
            private_key: this.private_key.value,
            password: this.password.value,
        };
        if (this.keyForm.valid) {
            this._globalService.loading(true);
            this.service.addKeyPair(keypair, this.user['id_token']).subscribe(function (response) {
                _this._globalService.loading(false);
                _this._toastr.success(response.message);
                _this.public_key = response.public_key;
                _this.keyForm.reset();
            }, function (error) {
                _this._globalService.loading(false);
                var errorData = error.error;
                if (errorData) {
                    if (errorData.message) {
                        _this._toastr.error(errorData.message);
                    }
                    if (errorData.errors) {
                        _this.msgs = Object.values(errorData.errors);
                        for (var _i = 0, _a = _this.msgs; _i < _a.length; _i++) {
                            var msg = _a[_i];
                            _this._toastr.error(msg);
                        }
                    }
                }
            });
        }
    };
    KeypairComponent.prototype.createFormControl = function () {
        this.private_key = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
    };
    KeypairComponent.prototype.createFormGroup = function () {
        this.keyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            private_key: this.private_key,
            password: this.password
        });
    };
    KeypairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-keypair',
            template: __webpack_require__(/*! ./keypair.component.html */ "./src/app/pages/keypair/keypair.component.html"),
            styles: [__webpack_require__(/*! ./keypair.component.css */ "./src/app/pages/keypair/keypair.component.css")]
        }),
        __metadata("design:paramtypes", [_services_keypair_service__WEBPACK_IMPORTED_MODULE_1__["KeyPairService"], _services__WEBPACK_IMPORTED_MODULE_2__["GeneralService"], _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], KeypairComponent);
    return KeypairComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".help-block {\r\n    color: #ff2e44;\r\n}"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-wrapper\">\r\n        <div class=\"page-content--bge5\">\r\n            <div class=\"container\">\r\n                <div class=\"login-wrap\">\r\n                    <div class=\"login-content\">\r\n                        <div class=\"login-logo\" style=\"margin-left: 30px;\">\r\n                            <a>\r\n                                <img style=\"max-width: 67%;margin-left: 43px;\" src=\"assets/images/logos/walled_logo.png\" alt=\"CoolAdmin\">\r\n                                <img style=\"max-width: 23%;\" src=\"assets/images/logos/alpha_logo.png\" alt=\"CoolAdmin\">\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"login-form\">\r\n                            <form novalidate (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\">\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n                                    <label>Email</label>\r\n                                    <input class=\"au-input au-input--full\" type=\"text\" name=\"email\" id=\"email\"\r\n                                           placeholder=\"Email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" email\r\n                                           required>\r\n                                    <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">\r\n                                        <div *ngIf=\"email.errors.required\">\r\n                                            Email is required.\r\n                                        </div>\r\n                                        <div *ngIf=\"email.errors.email\">\r\n                                            Please enter valid Email.\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                                    <label>Password</label>\r\n                                    <input class=\"au-input au-input--full\" type=\"password\" name=\"password\" id=\"password\"\r\n                                           placeholder=\"Password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\r\n                                           required>\r\n                                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\r\n                                        <div *ngIf=\"password.errors.required\">\r\n                                            Password is required.\r\n                                        </div>\r\n                                        <div *ngIf=\"password.errors.minlength\">\r\n                                            Password must be at least 8 characters long.\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                </div>\r\n                                <button [disabled]=\"loading\" class=\"au-btn au-btn--block au-btn--green m-b-20\"\r\n                                        type=\"submit\">login\r\n                                </button>\r\n                            </form>\r\n                            <div class=\"register-link\">\r\n                                <p>\r\n                                    New account?\r\n                                    <a [routerLink]=\"['/register']\">Register</a>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<block-ui></block-ui>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, _toastr, generalservice) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this._toastr = _toastr;
        this.generalservice = generalservice;
        this.model = {};
        this.branches = [];
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.generalservice.loading(true);
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(function (data) {
            console.log(data);
            _this.generalservice.loading(false);
            _this._toastr.success('Login successful');
            setTimeout(function () {
                _this.router.navigate(['/dashboard']);
            }, 1500);
        }, function (error) {
            _this.generalservice.loading(false);
            _this._toastr.error(error.error.message);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/manage-offers/manage-offers.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-offers/manage-offers.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-radius-top {\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0;\r\n}\r\n\r\n.custom-alert {\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.clickable {\r\n    cursor: pointer;\r\n}\r\n\r\ncontrol-messages {\r\n    color: #ff2e44;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/manage-offers/manage-offers.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/manage-offers/manage-offers.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-wrapper\">\r\n        <app-side-bar></app-side-bar>\r\n        <!-- PAGE CONTAINER-->\r\n        <div class=\"page-container\">\r\n            <app-content-header></app-content-header>\r\n            <!-- MAIN CONTENT-->\r\n            <div class=\"main-content\">\r\n                <div class=\"section__content section__content--p30\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"au-card recent-report\">\r\n                 <h4 class=\"title\">Trade live on the Stellar Decentralized Exchange (SDEx)</h4>\r\n                            <ngx-tabset #tabset (onSelect)=\"refresh($event)\">\r\n                                <ngx-tab #buyunsk title=\"Buy UNSK\">\r\n                                    <div [formGroup]=\"buyForm\" class=\"col-lg-12 mt-5\">\r\n                                        <h4 class=\"title\">Buy UNSK</h4><br>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"input-icon right\">\r\n                                                <div class=\"row\">\r\n                                                    <label for=\"buyPrice\"\r\n                                                           class=\"col-sm-2 col-form-label\">Price</label>\r\n                                                    <div class=\"col-sm-8\">\r\n                                                        <input id=\"buyPrice\" formControlName=\"buyPrice\" type=\"text\"\r\n                                                               placeholder=\"Price\"\r\n                                                               class=\"form-control\"\r\n                                                               name=\"buyPrice\">\r\n                                                        <control-messages [errorApi]=\"errorMsgs\"\r\n                                                                          controlTxt=\"Price\"\r\n                                                                          controlName=\"buyPrice\"\r\n                                                                          [control]=\"buyForm.controls.buyPrice\"></control-messages>\r\n                                                    </div>\r\n                                                    <span class=\"col-sm-2 col-form-label\">XLM</span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <label for=\"buyAmount\"\r\n                                                       class=\"col-sm-2 col-form-label\">Amount</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input id=\"buyAmount\" formControlName=\"buyAmount\" type=\"text\"\r\n                                                           placeholder=\"Amount\"\r\n                                                           class=\"form-control\"\r\n                                                           name=\"buyAmount\">\r\n                                                    <control-messages [errorApi]=\"errorMsgs\"\r\n                                                                      controlTxt=\"Amount\"\r\n                                                                      controlName=\"buyAmount\"\r\n                                                                      [control]=\"buyForm.controls.buyAmount\"></control-messages>\r\n                                                </div>\r\n                                                <span class=\"col-sm-2 col-form-label\">UNSK</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <label for=\"buyTotal\"\r\n                                                       class=\"col-sm-2 col-form-label\">Total</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input id=\"buyTotal\"\r\n                                                           value=\"{{buyPrice.value * buyAmount.value}}\"\r\n                                                           class=\"form-control\"\r\n                                                           disabled>\r\n                                                </div>\r\n                                                <span class=\"col-sm-2 col-form-label\">XLM</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-actions mx-auto\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                    <button (click)=\"sendOffer('buy')\" type=\"submit\"\r\n                                                            class=\"btn btn-success\">\r\n                                                        Send\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ngx-tab>\r\n                                <ngx-tab #unsk title=\"Sell UNSK\">\r\n                                    <div [formGroup]=\"sellForm\" class=\"col-lg-12 mt-5\">\r\n                                        <h4 class=\"title\">Sell UNSK</h4><br>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <label for=\"sellPrice\"\r\n                                                       class=\"col-sm-2 col-form-label\">Price</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input id=\"sellPrice\" formControlName=\"sellPrice\" type=\"text\"\r\n                                                           placeholder=\"Price\"\r\n                                                           class=\"form-control\"\r\n                                                           name=\"sellPrice\">\r\n                                                    <control-messages [errorApi]=\"errorMsgs\"\r\n                                                                      controlTxt=\"Price\"\r\n                                                                      controlName=\"sellPrice\"\r\n                                                                      [control]=\"sellForm.controls.sellPrice\"></control-messages>\r\n                                                </div>\r\n                                                <span class=\"col-sm-2 col-form-label\">XLM</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <label for=\"sellAmount\"\r\n                                                       class=\"col-sm-2 col-form-label\">Amount</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input id=\"sellAmount\" formControlName=\"sellAmount\"\r\n                                                           type=\"text\"\r\n                                                           placeholder=\"Amount\"\r\n                                                           class=\"form-control\"\r\n                                                           name=\"sellAmount\">\r\n                                                    <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Amount\"\r\n                                                                      controlName=\"sellAmount\"\r\n                                                                      [control]=\"sellForm.controls.sellAmount\"></control-messages>\r\n                                                </div>\r\n                                                <span class=\"col-sm-2 col-form-label\">UNSK</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <div class=\"row\">\r\n                                                <label for=\"sellAmount\"\r\n                                                       class=\"col-sm-2 col-form-label\">Total</label>\r\n                                                <div class=\"col-sm-8\">\r\n                                                    <input value=\"{{sellPrice.value * sellAmount.value}}\"\r\n                                                           class=\"form-control\"\r\n                                                           disabled>\r\n                                                </div>\r\n                                                <span class=\"col-sm-2 col-form-label\">XLM</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-actions mx-auto\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                    <button (click)=\"sendOffer('sell')\" type=\"submit\"\r\n                                                            class=\"btn btn-success\">\r\n                                                        Send\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ngx-tab>\r\n                                <ngx-tab title=\"My Orders\">\r\n                                    <div class=\"row mt-5\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"page-header\" style=\"overflow-x:auto;\">\r\n                                                <h4 class=\"title text-center\">Buy Offers</h4><br>\r\n                                                <table class=\"table\">\r\n                                                    <thead>\r\n                                                    <tr>\r\n                                                        <th>Cancel</th>\r\n                                                        <th>XLM</th>\r\n                                                        <th>UNSK</th>\r\n                                                        <th>Price(XLM)</th>\r\n                                                    </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                    <tr *ngFor=\"let item of buys\">\r\n                                                        <td>\r\n                                                            <button (click)=\"cancelOffer(item.offerID, index, 'buy')\"\r\n                                                                    class=\"btn btn-danger\">\r\n                                                                Cancel\r\n                                                            </button>\r\n                                                        </td>\r\n                                                        <td>{{item.xlm_amount}}</td>\r\n                                                        <td>{{item.unsk_amount}}</td>\r\n                                                        <td>{{item.price}}</td>\r\n                                                    </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"page-header\" style=\"overflow-x:auto;\">\r\n                                                <h4 class=\"title text-center\">Sell Offers</h4><br>\r\n                                                <table class=\"table\">\r\n                                                    <thead>\r\n                                                    <tr>\r\n                                                        <th>Price(XLM)</th>\r\n                                                        <th>UNSK</th>\r\n                                                        <th>XLM</th>\r\n                                                        <th>Cancel</th>\r\n                                                    </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                    <tr *ngFor=\"let item of sells\">\r\n                                                        <td>{{item.price}}</td>\r\n                                                        <td>{{item.unsk_amount}}</td>\r\n                                                        <td>{{item.xlm_amount}}</td>\r\n                                                        <td>\r\n                                                            <button (click)=\"cancelOffer(item.offerID, index, 'sell')\"\r\n                                                                    class=\"btn btn-danger\">\r\n                                                                Cancel\r\n                                                            </button>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ngx-tab>\r\n                                <ngx-tab #orders title=\"Orderbook\">\r\n                                    <div class=\"row mt-5\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"page-header\" style=\"overflow-x:auto;\">\r\n                                                <h4 class=\"title text-center\">Buy Offers</h4><br>\r\n                                                <table class=\"table\">\r\n                                                    <thead>\r\n                                                    <tr>\r\n                                                        <th>XLM</th>\r\n                                                        <th>UNSK</th>\r\n                                                        <th>Price(XLM)</th>\r\n                                                    </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                    <tr *ngFor=\"let item of buyOffers\" (click)=\"moveTo(item, 'sell')\">\r\n                                                        <td>{{item.xlm_amount}}</td>\r\n                                                        <td>{{item.unsk_amount}}</td>\r\n                                                        <td>{{item.price}}</td>\r\n                                                    </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"page-header\" style=\"overflow-x:auto;\">\r\n                                                <h4 class=\"title text-center\">Sell Offers</h4><br>\r\n                                                <table class=\"table\">\r\n                                                    <thead>\r\n                                                    <tr>\r\n                                                        <th>Price(XLM)</th>\r\n                                                        <th>UNSK</th>\r\n                                                        <th>XLM</th>\r\n                                                    </tr>\r\n                                                    </thead>\r\n                                                    <tbody>\r\n                                                    <tr *ngFor=\"let item of sellOffers\" (click)=\"moveTo(item, 'buy')\">\r\n                                                        <td>{{item.price}}</td>\r\n                                                        <td>{{item.unsk_amount}}</td>\r\n                                                        <td>{{item.xlm_amount}}</td>\r\n                                                    </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ngx-tab>\r\n                            </ngx-tabset>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<block-ui></block-ui>"

/***/ }),

/***/ "./src/app/pages/manage-offers/manage-offers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/manage-offers/manage-offers.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageOffersComponent", function() { return ManageOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_SuperComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_components/SuperComponent */ "./src/app/_components/SuperComponent.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/offers.service */ "./src/app/_services/offers.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManageOffersComponent = /** @class */ (function (_super) {
    __extends(ManageOffersComponent, _super);
    function ManageOffersComponent(service, _globalService, authenticationService, _router, _toastr, __cdr) {
        var _this = _super.call(this, _globalService, _router, _toastr, __cdr) || this;
        _this.service = service;
        _this._globalService = _globalService;
        _this.authenticationService = authenticationService;
        _this._router = _router;
        _this._toastr = _toastr;
        _this.buys = [];
        _this.sells = [];
        _this.sellOffers = [];
        _this.buyOffers = [];
        _this.createFormControls();
        _this.createForm();
        return _this;
    }
    ManageOffersComponent.prototype.ngOnInit = function () {
        this._globalService.loading(true);
        this.getSells();
        this.getBuys();
        this.getOffers();
        this._globalService.loading(false);
    };
    ManageOffersComponent.prototype.getSells = function () {
        var _this = this;
        this.service.sells().subscribe(function (result) {
            _this.sells = [];
            _this.sells = result;
        });
    };
    ManageOffersComponent.prototype.getBuys = function () {
        var _this = this;
        this.service.buys().subscribe(function (result) {
            _this.buys = [];
            _this.buys = result;
        });
    };
    ManageOffersComponent.prototype.refresh = function (type) {
        if (type == 2) {
            this.getBuys();
            this.getSells();
        }
        else if (type == 3) {
            this.getOffers();
        }
    };
    ManageOffersComponent.prototype.moveTo = function (item, type) {
        console.log(item, type);
        if (type == 'buy') {
            this.buyPrice.setValue(item.price);
            this.buyunsk.active = true;
            this.orders.active = false;
        }
        else if (type == 'sell') {
            this.sellPrice.setValue(item.price);
            this.unsk.active = true;
            this.orders.active = false;
        }
    };
    ManageOffersComponent.prototype.sendOffer = function (type) {
        var _this = this;
        var buying = type == 'buy' ? 'UNSK' : 'XLM';
        var selling = type == 'buy' ? 'XLM' : 'UNSK';
        var amount = type == 'buy' ? this.buyAmount.value : this.sellAmount.value;
        var price = type == 'buy' ? this.buyPrice.value : this.sellPrice.value;
        var offer = {
            selling: selling,
            buying: buying,
            amount: amount,
            price: price
        };
        var valid = type == 'buy' ? (this.buyForm.valid) : (this.sellForm.valid);
        if (valid) {
            this._globalService.loading(true);
            this.service.saveOffer(offer).subscribe(function (response) {
                _this._globalService.loading(false);
                _this._toastr.success('Offer has been bid successfully');
                _this.buyForm.reset();
                _this.sellForm.reset();
            }, function (error) {
                var errorData = error.error;
                _this._globalService.loading(false);
                if (errorData.message) {
                    _this._toastr.error(errorData.message);
                }
                if (errorData.errors) {
                    _this.msges = Object.values(errorData.errors);
                    for (var _i = 0, _a = _this.msges; _i < _a.length; _i++) {
                        var msg = _a[_i];
                        _this._toastr.error(msg);
                    }
                }
            });
        }
    };
    ManageOffersComponent.prototype.getOffers = function () {
        var _this = this;
        this.service.offers().subscribe(function (result) {
            _this.buyOffers = [];
            _this.sellOffers = [];
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var offer = result_1[_i];
                if (offer.action == 'buy') {
                    _this.buyOffers.push(offer);
                }
                else {
                    _this.sellOffers.push(offer);
                }
            }
        });
    };
    ManageOffersComponent.prototype.cancelOffer = function (id, index, type) {
        var _this = this;
        if (confirm('Are you sure you want to cancel?')) {
            this.service.cancel(id).subscribe(function (result) {
                _this._toastr.success('Cancelled Successfully');
                if (type == 'buy') {
                    _this.buys.splice(index, 1);
                }
                else {
                    _this.sells.splice(index, 1);
                }
            });
        }
    };
    ManageOffersComponent.prototype.createFormControls = function () {
        this.sellPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.sellAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.buyPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
        this.buyAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
    };
    ManageOffersComponent.prototype.createForm = function () {
        this.buyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            buyPrice: this.buyPrice,
            buyAmount: this.buyAmount,
        });
        this.sellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            sellPrice: this.sellPrice,
            sellAmount: this.sellAmount,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buyActive'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManageOffersComponent.prototype, "buyActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sellActive'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManageOffersComponent.prototype, "sellActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabset'),
        __metadata("design:type", Object)
    ], ManageOffersComponent.prototype, "tabset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('unsk'),
        __metadata("design:type", Object)
    ], ManageOffersComponent.prototype, "unsk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buyunsk'),
        __metadata("design:type", Object)
    ], ManageOffersComponent.prototype, "buyunsk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('orders'),
        __metadata("design:type", Object)
    ], ManageOffersComponent.prototype, "orders", void 0);
    ManageOffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-offers',
            template: __webpack_require__(/*! ./manage-offers.component.html */ "./src/app/pages/manage-offers/manage-offers.component.html"),
            styles: [__webpack_require__(/*! ./manage-offers.component.css */ "./src/app/pages/manage-offers/manage-offers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_offers_service__WEBPACK_IMPORTED_MODULE_6__["OffersService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["GeneralService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ManageOffersComponent);
    return ManageOffersComponent;
}(_components_SuperComponent__WEBPACK_IMPORTED_MODULE_4__["SuperComponent"]));



/***/ }),

/***/ "./src/app/pages/payoff/payoff.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/payoff/payoff.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-radius-top{\r\n    border-top-right-radius: 0;\r\n    border-top-left-radius: 0;\r\n}\r\n\r\n.custom-alert{\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.password-input{\r\n    border: 1px solid ;\r\n    margin-left: 4px\r\n}\r\n\r\n.disabled-btn{\r\n    color: graytext !important;   \r\n    background: lightgray;\r\n    cursor: not-allowed;\r\n}"

/***/ }),

/***/ "./src/app/pages/payoff/payoff.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/payoff/payoff.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"page-wrapper\">\r\n    <app-side-bar></app-side-bar>\r\n    <!-- PAGE CONTAINER-->\r\n    <div class=\"page-container\">\r\n      <app-content-header></app-content-header>\r\n      <!-- MAIN CONTENT-->\r\n      <div class=\"main-content\">\r\n\r\n        <div class=\"section__content section__content--p30\">\r\n          <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"alert-danger custom-alert\" *ngIf=\"user.refund_xlm\">\r\n                  If requested, your secret key will be available after you return the 2 XLM credit provided by The Unsinkable Project to setup your account\r\n                </div>\r\n                <div class=\"au-card recent-report\">\r\n\r\n                  <div class=\"au-card-inner\">\r\n\r\n                    <div class=\"m-b-5\">Your Balance : <span class=\"text-primary\">{{balance?.XLM}} XLM</span></div>\r\n                    <div class=\"m-b-5\">Credit Balance : <span class=\"text-primary\">2 XLM</span></div>\r\n\t\t\t\t\t<br>\r\n                    <div class=\"m-b-5\">\r\n                      <label for=\"pass\">Password :</label>\r\n                      <input [(ngModel)]=\"password\" class=\"col-lg-6 m-l-5 au-input--style2 password-input\" placeholder=\"Please enter your password\" type=\"password\"\r\n                        name=\"password\" id=\"\">\r\n                    </div><br>\r\n                    <div class=\"col-lg-2 \">\r\n                      <button [class.disabled-btn]=\"password == null || password == ''\" [disabled]=\"password == null || password == ''\" (click)=\"pay()\"\r\n                        class=\"au-btn au-btn--block au-btn--green m-b-20\" type=\"submit\">Pay</button>\r\n                    </div>\r\n                    <p>Stellar requires a minimum XLM balance for accounts. Please return the 2 XLM loaned to you for initial account setup ASAP.</p>\r\n                    <div *ngIf=\"status\" style=\"text-align: center; padding-top: 20px;\">\r\n                      <div class=\"m-b-5\" style=\"color: red\">\r\n                        Please Store your Private Key Somewhere safe!!\r\n                      </div>\r\n                      <div class=\"m-b-5 text-primary\">\r\n                        {{key}}\r\n                      </div>\r\n\t\t\t\t\t  <p style=\"color: red\">DO NOT LEAVE THIS PAGE UNTIL THESE NUMBERS ARE SAVED!</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- END MAIN CONTENT-->\r\n      <!-- END PAGE CONTAINER-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<block-ui></block-ui>"

/***/ }),

/***/ "./src/app/pages/payoff/payoff.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/payoff/payoff.component.ts ***!
  \**************************************************/
/*! exports provided: PayOffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayOffComponent", function() { return PayOffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _components_SuperComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_components/SuperComponent */ "./src/app/_components/SuperComponent.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PayOffComponent = /** @class */ (function (_super) {
    __extends(PayOffComponent, _super);
    function PayOffComponent(service, _globalService, authenticationService, _router, _toastr, __cdr) {
        var _this = _super.call(this, _globalService, _router, _toastr, __cdr) || this;
        _this.service = service;
        _this._globalService = _globalService;
        _this.authenticationService = authenticationService;
        _this._router = _router;
        _this._toastr = _toastr;
        _this.user = {};
        _this.status = false;
        _this.password = null;
        _this.user = service.getCurrentUser();
        return _this;
    }
    PayOffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalService.get('/account/getbalance').subscribe(function (balance) {
            console.log(balance);
            _this.balance = balance;
        });
    };
    PayOffComponent.prototype.pay = function () {
        var _this = this;
        this._globalService.loading(true);
        this._globalService.pay({ "password": this.password }, 'account/getsecretkey').subscribe(function (success) {
            _this._globalService.loading(false);
            _this.status = true;
            _this.key = success.private_key;
            delete _this.user['refund_xlm'];
            localStorage.setItem("currentUser", JSON.stringify(_this.user));
        }, function (error) {
            _this._globalService.loading(false);
            _this._toastr.error(error.error.message);
        });
    };
    PayOffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payoff',
            template: __webpack_require__(/*! ./payoff.component.html */ "./src/app/pages/payoff/payoff.component.html"),
            styles: [__webpack_require__(/*! ./payoff.component.css */ "./src/app/pages/payoff/payoff.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PayOffComponent);
    return PayOffComponent;
}(_components_SuperComponent__WEBPACK_IMPORTED_MODULE_5__["SuperComponent"]));



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content--bge5 {\r\n    overflow-y: auto;\r\n}\r\n.login-wrap{\r\n    padding-top: 6vh;\r\n    margin: 0 auto 15px;\r\n}\r\nspan.text-red{\r\n    color: #ff2e44;\r\n}\r\n.txt{\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    text-align: justify\r\n}"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n    <div class=\"page-content--bge5\">\r\n        <div class=\"container\">\r\n            <div class=\"login-wrap\">\r\n                <div class=\"login-content\">\r\n                    <div class=\"login-logo\">\r\n                        <a>\r\n                            <img style=\"max-width: 67%;margin-left: 43px;\" src=\"assets/images/logos/walled_logo.png\"\r\n                                 alt=\"CoolAdmin\">\r\n                            <img style=\"max-width: 23%;\" src=\"assets/images/logos/alpha_logo.png\" alt=\"CoolAdmin\">\r\n                        </a>\r\n                        <p>\r\n                            HODL Wallet is currently in alpha state, running on Stellar testnet.\r\n                        </p>\r\n                        <p>Do not send XLM to testnet accounts</p>\r\n                    </div>\r\n                    <div class=\"login-form\">\r\n                        <form [formGroup]=\"myForm\">\r\n                            <div class=\"form-group\">\r\n                                <label>Name</label>\r\n                                <input class=\"au-input au-input--full\" id=\"name\" name=\"name\" type=\"text\"\r\n                                       placeholder=\"Name\" formControlName=\"name\" [(ngModel)]=\"model.name\">\r\n                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Name\"\r\n                                                  controlName=\"name\"\r\n                                                  [control]=\"myForm.controls.name\"></control-messages>\r\n\r\n\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Email Address</label>\r\n                                <input class=\"au-input au-input--full\" id=\"email\" name=\"email\" type=\"text\"\r\n                                       placeholder=\"Email\" formControlName=\"email\" [(ngModel)]=\"model.email\">\r\n                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"E-Mail\"\r\n                                                  controlName=\"email\"\r\n                                                  [control]=\"myForm.controls.email\"></control-messages>\r\n\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Password</label>\r\n                                <input class=\"au-input au-input--full\" id=\"password\" name=\"password\" type=\"password\"\r\n                                       placeholder=\"Password\" formControlName=\"password\"\r\n                                       [(ngModel)]=\"model.password\">\r\n                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Password\"\r\n                                                  controlName=\"password\"\r\n                                                  [control]=\"myForm.controls.password\"></control-messages>\r\n\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label>Password Confirmation</label>\r\n                                <input class=\"au-input au-input--full\" id=\"password_confirmation\"\r\n                                       name=\"password_confirmation\" type=\"password\"\r\n                                       placeholder=\"Password Confirmation\" formControlName=\"password_confirmation\"\r\n                                       [(ngModel)]=\"model.password_confirmation\">\r\n                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Confirm Password\"\r\n                                                  controlName=\"password_confirmation\"\r\n                                                  [control]=\"myForm.controls.password_confirmation\"></control-messages>\r\n\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n\r\n                                <input id=\"agreed\" [(ngModel)]=\"agreed\" value=\"false\"\r\n                                       formControlName=\"agreed\"\r\n                                       name=\"agreed\" type=\"checkbox\">\r\n                                Agree the terms and policy <br>\r\n                                <span class=\"text-red\" *ngIf=\"!agreed\">Please Agree the <a href=\"#\" (click)=\"openAlert()\">terms and policy</a></span>\r\n                            </div>\r\n                            <button (click)=\"save()\" [disabled]=\"!agreed\"\r\n                                    class=\"au-btn au-btn--block au-btn--green m-b-20\"\r\n                                    type=\"submit\">register\r\n                            </button>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"register-link\">\r\n                        <p>\r\n                            Already have an account?\r\n                            <a [routerLink]=\"['/login']\">Sign In</a>\r\n                        </p>\r\n                        \r\n                    </div>\r\n                    <p class=\"txt\">Registering an account will automatically create a Stellar account and deposit 2XLM. Account creation requires approximately $.50 worth of The Unsinkable Projects extremely limited funds for XLM minimum balance. Please only create an account if you intend to use it. Please pay back the 2XLM loan as soon as you deposit XLM to your account.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<block-ui></block-ui>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_SuperComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_components/SuperComponent */ "./src/app/_components/SuperComponent.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_models */ "./src/app/_models/index.ts");
/* harmony import */ var src_assets_vendor_sweetalert_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/assets/vendor/sweetalert/sweetalert.min.js */ "./src/assets/vendor/sweetalert/sweetalert.min.js");
/* harmony import */ var src_assets_vendor_sweetalert_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(src_assets_vendor_sweetalert_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent(fb, _router, authenticationService, alertService, _toastr, _globalService, __cdr) {
        var _this = _super.call(this, _globalService, _router, _toastr, __cdr) || this;
        _this.fb = fb;
        _this._router = _router;
        _this.authenticationService = authenticationService;
        _this.alertService = alertService;
        _this._toastr = _toastr;
        _this._globalService = _globalService;
        _this.agreed = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false);
        _this.model = new _models__WEBPACK_IMPORTED_MODULE_6__["User"](null);
        return _this;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.myForm = _models__WEBPACK_IMPORTED_MODULE_6__["User"].buildForm(this.fb);
    };
    RegisterComponent.prototype.save = function () {
        var _this = this;
        if (this.myForm.valid) {
            this._globalService.loading(true);
            var formValues = this.myForm.value;
            // this.model.items = formValues.items;
            // this.model.branch_id = this._globalService.currentUser.session_branch.id;
            // this.model.id = this._globalService.currentRequest ? this._globalService.currentRequest.id : null;
            var id = this.model.id;
            this._globalService.saveForm(this.model, 'signup', id).subscribe(function (response) {
                _this._globalService.loading(false);
                //this._toastr.success('Registered successfully');
                _this._toastr.success('Congratulations on making a Stellar account!');
                localStorage.setItem('currentRequest', JSON.stringify(response.request));
                setTimeout(function () {
                    _this._router.navigate(["users"]);
                });
                _this.myForm.reset();
            }, function (error) {
                var errorData = error.error;
                _this._globalService.loading(false);
                if (errorData.message) {
                    _this._toastr.error(errorData.message);
                }
                if (errorData.errors) {
                    _this.msges = Object.values(errorData.errors);
                    for (var _i = 0, _a = _this.msges; _i < _a.length; _i++) {
                        var msg = _a[_i];
                        _this._toastr.error(msg);
                    }
                }
            });
        }
        else {
            this.validateAllFormFields(this.myForm);
            if (this.myForm.controls.items) {
                this.myForm.controls.items['controls'].forEach(function (item) {
                    _this.validateAllFormFields(item);
                });
            }
        }
    };
    RegisterComponent.prototype.isValid = function () {
        if (this.myForm != null) {
            return _models__WEBPACK_IMPORTED_MODULE_6__["User"].isValid(this.myForm);
        }
        else {
            return false;
        }
    };
    RegisterComponent.prototype.openAlert = function () {
        event.preventDefault();
        src_assets_vendor_sweetalert_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_7___default()("This wallet is under ongoing development and is still in early beta testing. Use is at your own risk. Do not put substantial funds into the HODL Wallet beta");
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RegisterComponent);
    return RegisterComponent;
}(_components_SuperComponent__WEBPACK_IMPORTED_MODULE_5__["SuperComponent"]));



/***/ }),

/***/ "./src/app/pages/withdraw/withdraw.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*:not(button, a){\r\n    color:#666;\r\n}\r\n\r\ncontrol-messages{\r\n    color: #ff2e44;\r\n}\r\n\r\n.custom-alert{\r\n    padding: 10px;\r\n    border-radius: 15px;\r\n    margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/withdraw/withdraw.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"page-wrapper\">\r\n        <app-side-bar></app-side-bar>\r\n        <!-- PAGE CONTAINER-->\r\n        <div class=\"page-container\">\r\n            <app-content-header></app-content-header>\r\n            <div class=\"main-content\">\r\n                <div class=\"section__content section__content--p30\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-12\">\r\n                                <div class=\"alert-danger custom-alert\" *ngIf=\"user.refund_xlm\">\r\n                                    Please follow the link to return 2 XLM credit to Unsinkable\r\n                                    <a class=\"text-primary clickable\" (click)=\"goToPay()\">Pay Off</a>\r\n                                </div>\r\n                                <div class=\"au-card recent-report\">\r\n                                    <h4 class=\"title\">Withdraw</h4><br>\r\n\r\n                                    <div [formGroup]=\"withForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Send to*</label>\r\n                                            <div class=\"input-icon right\">\r\n                                                <input placeholder=\"Recipient username or address\" required\r\n                                                       formControlName=\"destination\" type=\"text\" name=\"destination\"\r\n                                                       class=\"form-control\">\r\n                                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Destination\"\r\n                                                                  controlName=\"destination\"\r\n                                                                  [control]=\"withForm.controls.destination\"></control-messages>\r\n\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-8\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"control-label\">Amount*</label>\r\n                                                    <div class=\"input-icon right\">\r\n                                                        <input placeholder=\"Enter amount\" required\r\n                                                               formControlName=\"amount\"\r\n                                                               type=\"text\" name=\"amount\"\r\n                                                               class=\"form-control\">\r\n                                                        <div class=\"form-control-focus\">2 XLM are reserved for Stellar minimum balance\r\n                                                        </div>\r\n                                                        <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Amount\"\r\n                                                                          controlName=\"amount\"\r\n                                                                          [control]=\"withForm.controls.amount\"></control-messages>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-4\">\r\n                                                <div class=\"form-group\">\r\n                                                    <label class=\"control-label\">Currency*</label>\r\n                                                    <div class=\"input-icon right\">\r\n                                                        <select (change)=\"onBalanceChange($event)\" class=\"form-control\" formControlName=\"asset\">\r\n                                                            <option value=\"XLM\" selected> XLM</option>\r\n                                                            <option value=\"UNSK\"> UNSK</option>\r\n                                                        </select>\r\n                                                        <div class=\"form-control-focus\">Balance {{ currentBalance }}</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group\">\r\n                                            <label class=\"control-label\">Memo Message</label>\r\n                                            <div class=\"input-icon right\">\r\n                                                <input formControlName=\"memo\" type=\"text\" name=\"memo\" maxlength=\"28\"\r\n                                                       class=\"form-control\">\r\n                                                <control-messages [errorApi]=\"errorMsgs\" controlTxt=\"Memo\"\r\n                                                                  controlName=\"memo\"\r\n                                                                  [control]=\"withForm.controls.memo\"></control-messages>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-actions mx-auto\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                                                    <button (click)=\"confirmWithdraw()\" type=\"submit\"\r\n                                                            [disabled]=\"user.refund_xlm\"\r\n                                                            class=\"btn btn-success\">\r\n                                                        Send\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<block-ui></block-ui>\r\n"

/***/ }),

/***/ "./src/app/pages/withdraw/withdraw.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/withdraw/withdraw.component.ts ***!
  \******************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_withdraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/withdraw */ "./src/app/_models/withdraw.ts");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/history.service */ "./src/app/_services/history.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(service, _toastr, _router, _globalService) {
        this.service = service;
        this._toastr = _toastr;
        this._router = _router;
        this._globalService = _globalService;
        this.value = '';
        this.msgs = [];
        this.errorMsgs = [];
        this.balance = '';
        this.currentBalance = '';
        this.withdraw = new _models_withdraw__WEBPACK_IMPORTED_MODULE_2__["Withdraw"]();
    }
    WithdrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = localStorage.getItem('currentUser');
        this.user = JSON.parse(this.user);
        var currentUser = this.user;
        if (currentUser)
            this.value = currentUser["account"];
        this._globalService.loading(true);
        this._globalService.get('/account/getbalance').subscribe(function (balance) {
            _this.balance = balance;
            _this.currentBalance = _this.balance['XLM'];
            _this._globalService.loading(false);
        }, function (error) {
            _this._globalService.loading(true);
        });
        this.createFormControls();
        this.createForm();
    };
    WithdrawComponent.prototype.goToPay = function () {
        this._router.navigate(['/payoff']);
    };
    WithdrawComponent.prototype.onBalanceChange = function ($event) {
        var value = $event.target.value;
        if (value == 'XLM') {
            this.currentBalance = this.balance['XLM'];
        }
        else {
            this.currentBalance = '0';
        }
    };
    WithdrawComponent.prototype.confirmWithdraw = function () {
        var _this = this;
        var withdraw = {
            destination: this.destination.value,
            asset: this.asset.value,
            amount: this.amount.value,
            memo: this.memo.value,
        };
        if (this.withForm.valid) {
            this._globalService.loading(true);
            this.service.saveWithdraw(withdraw, this.user['id_token']).subscribe(function (response) {
                _this._globalService.loading(false);
                _this._toastr.success(response.message);
                _this.withForm.reset();
                _this.updateCurrentBalance();
            }, function (error) {
                var errorData = error.error;
                _this._globalService.loading(false);
                if (errorData.message) {
                    // this._toastr.error(errorData.message);
                    _this._toastr.error("You must leave 2 XLM in your account for Stellar minimum balance");
                }
                if (errorData.errors) {
                    _this.msgs = Object.values(errorData.errors);
                    for (var _i = 0, _a = _this.msgs; _i < _a.length; _i++) {
                        var msg = _a[_i];
                        _this._toastr.error(msg);
                    }
                }
            });
        }
    };
    WithdrawComponent.prototype.createFormControls = function () {
        this.destination = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        // this.password = new FormControl('', Validators.required);
        this.asset = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('XLM', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.amount = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.memo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(28)]);
    };
    WithdrawComponent.prototype.createForm = function () {
        this.withForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            destination: this.destination,
            asset: this.asset,
            amount: this.amount,
            // password: this.password,
            memo: this.memo,
        });
    };
    WithdrawComponent.prototype.updateCurrentBalance = function () {
        var _this = this;
        this._globalService.get('/account/getbalance').subscribe(function (balance) {
            _this.balance = balance;
            _this.currentBalance = _this.balance['XLM'];
        }, function (error) {
        });
    };
    WithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/pages/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.css */ "./src/app/pages/withdraw/withdraw.component.css")]
        }),
        __metadata("design:paramtypes", [_services_history_service__WEBPACK_IMPORTED_MODULE_3__["HistoryService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["GeneralService"]])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



/***/ }),

/***/ "./src/app/routes/routes.module.ts":
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/*! exports provided: RoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesModule", function() { return RoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_payoff_payoff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/payoff/payoff.component */ "./src/app/pages/payoff/payoff.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/deposit/deposit.component */ "./src/app/pages/deposit/deposit.component.ts");
/* harmony import */ var _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/withdraw/withdraw.component */ "./src/app/pages/withdraw/withdraw.component.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/history/history.component */ "./src/app/pages/history/history.component.ts");
/* harmony import */ var _pages_keypair_keypair_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/keypair/keypair.component */ "./src/app/pages/keypair/keypair.component.ts");
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/change-password/change-password.component */ "./src/app/pages/change-password/change-password.component.ts");
/* harmony import */ var _pages_manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/manage-offers/manage-offers.component */ "./src/app/pages/manage-offers/manage-offers.component.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/account/account.component */ "./src/app/pages/account/account.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'account', component: _pages_account_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountComponent"] },
    { path: 'change-password', component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"] },
    { path: 'payoff', component: _pages_payoff_payoff_component__WEBPACK_IMPORTED_MODULE_5__["PayOffComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'deposit', component: _pages_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'withdraw', component: _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__["WithdrawComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'history', component: _pages_history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'keypair', component: _pages_keypair_keypair_component__WEBPACK_IMPORTED_MODULE_10__["KeypairComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'manage-offers', component: _pages_manage_offers_manage_offers_component__WEBPACK_IMPORTED_MODULE_12__["ManageOffersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutesModule);
    return RoutesModule;
}());



/***/ }),

/***/ "./src/assets/vendor/sweetalert/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./src/assets/vendor/sweetalert/sweetalert.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:scroll;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=r.injectElIntoModal(o.textMarkup);e.textContent=t,i(e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;b.classList.add(v),d&&b.classList.add(d),n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    base_url: 'http://18.222.31.161:3000',
    api_url: 'http://18.222.31.161:3000/api/v1'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Unsinkable\wallet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map