function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n  <div class=\"theme-container\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n        <mat-card [style.max-width.px]=\"500\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n            <h1 class=\"uppercase\">Sign In</h1>  \r\n            <a mat-button routerLink=\"/register\" color=\"accent\" class=\"w-100\">Don't have an account? Sign up now!</a>    \r\n          </div>\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginFormSubmit(loginForm.value)\">\r\n              <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                  <mat-label>Username</mat-label>\r\n                  <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n                  <mat-error *ngIf=\"loginForm.controls.username.errors?.required\">Username is required</mat-error>\r\n                  <mat-error *ngIf=\"loginForm.controls.username.hasError('minlength')\">Username isn't long enough, minimum of 6 characters</mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Password</mat-label>\r\n                  <input matInput placeholder=\"Password\" formControlName=\"password\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"loginForm.controls.password.errors?.required\">Password is required</mat-error>\r\n                  <mat-error *ngIf=\"loginForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n              </mat-form-field> \r\n              <mat-slide-toggle formControlName=\"rememberMe\" class=\"my-2\">Keep me signed in</mat-slide-toggle>\r\n              <div class=\"text-center mt-2\"> \r\n                  <button mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\">\r\n                      Sign to My Account\r\n                  </button>\r\n              </div>     \r\n              <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-3\">\r\n                  <div class=\"divider w-100\"></div>\r\n                  <h3 class=\"text-muted ws-nowrap fw-500 p-2\">or Sign in with one click</h3>                       \r\n                  <div class=\"divider w-100\"></div>\r\n              </div>  \r\n              <div class=\"text-center py-3\">\r\n                  <button mat-mini-fab color=\"primary\" matTooltip=\"Facebook\" type=\"button\">\r\n                    <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                        <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                    </svg>\r\n                  </button>                        \r\n                  <button mat-mini-fab color=\"primary\" matTooltip=\"Twitter\" type=\"button\" class=\"mx-3\">\r\n                    <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                        <path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                    </svg>\r\n                  </button>\r\n                  <button mat-mini-fab color=\"primary\" matTooltip=\"Google\" type=\"button\">\r\n                    <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                        <path d=\"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z\" />\r\n                    </svg>\r\n                  </button> \r\n              </div>     \r\n          </form>\r\n          <mat-card-actions fxLayoutAlign=\"end center\">\r\n            <button mat-button>\r\n              <mat-icon class=\"text-muted\">vpn_key</mat-icon>\r\n              <span class=\"mx-1\">Reset Password</span>\r\n            </button> \r\n          </mat-card-actions>\r\n        </mat-card>\r\n    </div> \r\n\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwOyAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.router = router;
        this.hide = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            rememberMe: false
          });
        }
      }, {
        key: "onLoginFormSubmit",
        value: function onLoginFormSubmit(values) {
          if (this.loginForm.valid) {
            this.router.navigate(['/']);
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      pathMatch: 'full'
    }];

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map