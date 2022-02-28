(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-image [backgroundImage]=\"'assets/images/others/about.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"true\"                \r\n                  [title]=\"'About Us'\"\r\n                  [desc]=\"'We help you for find your house key'\">\r\n</app-header-image>\r\n\r\n\r\n<div class=\"theme-container\">\r\n    <mat-card class=\"main-content-header\">\r\n        \r\n        <div class=\"section pt-2\">\r\n            <div class=\"px-3\">\r\n                <div class=\"theme-container\">\r\n                    <h1 class=\"section-title\">our story</h1>\r\n\r\n                    <p class=\"px-3\">Nam enim diam, euismod in tincidunt in, euismod nec ligula. Aliquam erat volutpat. Integer vulputate lacus a volutpat aliquet. Mauris suscipit sollicitudin purus, et congue lectus dignissim vel. Vestibulum purus arcu, eleifend a odio non, bibendum dictum lectus. Nam vulputate accumsan quam facilisis aliquet. Cras accumsan et elit a consequat.</p>\r\n\r\n                    <div fxLayout=\"row wrap\">\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">business</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\">About company</h2>\r\n                            </div>                            \r\n                            <p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper lobortis quam, id imperdiet mi feugiat quis. Cras a odio posuere, rhoncus quam vitae, commodo neque. Nunc mollis velit vulputate, volutpat diam vitae, egestas turpis. In posuere tempor lorem, sit amet pulvinar nunc accumsan a. Quisque sem tellus, congue at eleifend sit amet, consectetur sit amet est. Integer sodales quam quis elit commodo consequat. Aenean posuere augue a justo gravida elementum laoreet tincidunt enim. Nullam sagittis mauris id dui scelerisque, eget dignissim est hendrerit. Praesent fringilla commodo egestas. Suspendisse bibendum purus vitae mi mattis laoreet.</p>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">list_alt</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\">Vision</h2>\r\n                            </div> \r\n                            <p class=\"mt-2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper lobortis quam, id imperdiet mi feugiat quis. Cras a odio posuere, rhoncus quam vitae, commodo neque. Nunc mollis velit vulputate, volutpat diam vitae, egestas turpis. In posuere tempor lorem, sit amet pulvinar nunc accumsan a. Quisque sem tellus, congue at eleifend sit amet, consectetur sit amet est. Integer sodales quam quis elit commodo consequat. Aenean posuere augue a justo gravida elementum laoreet tincidunt enim. Nullam sagittis mauris id dui scelerisque, eget dignissim est hendrerit. Praesent fringilla commodo egestas. Suspendisse bibendum purus vitae mi mattis laoreet.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n            \r\n                    \r\n                </div>\r\n            </div>   \r\n        </div> \r\n\r\n    </mat-card> \r\n \r\n</div>\r\n\r\n<app-mission></app-mission>\r\n\r\n<app-our-services></app-our-services>\r\n\r\n<app-testimonials></app-testimonials>  \r\n\r\n<app-our-agents></app-our-agents>\r\n      \r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>");

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-about',
        template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: routes, AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], pathMatch: 'full' }
];
let AboutModule = class AboutModule {
};
AboutModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], AboutModule);



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module-es2015.js.map