function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n          <mat-card [style.max-width.px]=\"500\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n              <h1 class=\"uppercase\">Register</h1>  \r\n              <a mat-button routerLink=\"/login\" color=\"accent\" class=\"w-100\">Already have an account? Sign in!</a>  \r\n            </div>\r\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\"> \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">group</mat-icon>\r\n                    <mat-label>User type</mat-label>\r\n                    <mat-select placeholder=\"Select User Type\" formControlName=\"userType\">\r\n                        <mat-option *ngFor=\"let type of userTypes\" [value]=\"type\">\r\n                            {{type.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                    <mat-error *ngIf=\"registerForm.controls.userType.errors?.required\">User type is required</mat-error>                   \r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                    <mat-label>Username</mat-label>\r\n                    <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.username.errors?.required\">Username is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.username.hasError('minlength')\">Username isn't long enough, minimum of 6 characters</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">email</mat-icon>\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" required>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Password</mat-label>\r\n                  <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"6\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">Password is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Confirm Password</mat-label>\r\n                  <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\" required [type]=\"hide ? 'password' : 'text'\">\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.errors?.required\">Confirm Password is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n                <mat-slide-toggle formControlName=\"receiveNewsletter\" class=\"my-2\">Receive Newsletter</mat-slide-toggle>\r\n                <div class=\"text-center mt-2\"> \r\n                    <button mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\">\r\n                        Create an Account\r\n                    </button>\r\n                </div> \r\n            </form>\r\n            <div class=\"divider mt-4\"></div> \r\n            <mat-card-actions fxLayoutAlign=\"center center\" class=\"text-center\">\r\n               <small class=\"my-3\">By clicking the \"Create an Account\" button you agree with our <a mat-button routerLink=\"/terms-conditions\" color=\"primary\" class=\"mx-2\">Terms and conditions</a> </small>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n      </div> \r\n  \r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./src/app/pages/register/register.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/register/register.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppPagesRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
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
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/theme/utils/app-validators */
    "./src/app/theme/utils/app-validators.ts");

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

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(fb, router, snackBar) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.hide = true;
        this.userTypes = [{
          id: 1,
          name: 'Agent'
        }, {
          id: 2,
          name: 'Agency'
        }, {
          id: 3,
          name: 'Buyer'
        }];
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.fb.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            receiveNewsletter: false
          }, {
            validator: Object(src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["matchingPasswords"])('password', 'confirmPassword')
          });
        }
      }, {
        key: "onRegisterFormSubmit",
        value: function onRegisterFormSubmit(values) {
          if (this.registerForm.valid) {
            console.log(values);
            this.snackBar.open('You registered successfully!', '×', {
              panelClass: 'success',
              verticalPosition: 'top',
              duration: 3000
            });
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }];
    };

    RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-register',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/pages/register/register.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: routes, RegisterModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterModule", function () {
      return RegisterModule;
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


    var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/pages/register/register.component.ts");

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
      component: _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
      pathMatch: 'full'
    }];

    var RegisterModule = function RegisterModule() {
      _classCallCheck(this, RegisterModule);
    };

    RegisterModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], RegisterModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map