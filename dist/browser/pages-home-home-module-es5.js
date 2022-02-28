function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/featured-properties/featured-properties.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/featured-properties/featured-properties.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeFeaturedPropertiesFeaturedPropertiesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section mt-3\">\r\n  <div class=\"px-3\">\r\n      <div class=\"theme-container\">\r\n          <h1 class=\"section-title\">Featured properties</h1>\r\n\r\n          <app-properties-carousel [properties]=\"featuredProperties\"></app-properties-carousel>\r\n              \r\n      </div>\r\n  </div>   \r\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header-image *ngIf=\"settings.header == 'image'\" \r\n                [backgroundImage]=\"'assets/images/others/homepage.jpg'\"\r\n                [bgImageAnimate]=\"true\"\r\n                [contentOffsetToTop]=\"true\"\r\n                [title]=\"'Find your house key'\"\r\n                [desc]=\"'Leading Real Estate Company'\"\r\n                [isHomePage]=\"true\">\r\n</app-header-image> \r\n\r\n<app-header-carousel *ngIf=\"settings.header == 'carousel'\" \r\n                    [slides]=\"slides\" \r\n                    [contentOffsetToTop]=\"true\">\r\n</app-header-carousel>\r\n\r\n<div class=\"px-3\">\r\n    <div class=\"theme-container\">\r\n                \r\n        <mat-card class=\"main-content-header\">\r\n\r\n            <app-properties-search \r\n                [variant]=\"settings.searchPanelVariant\"\r\n                [searchOnBtnClick]=\"settings.searchOnBtnClick\"\r\n                [removedSearchField]=\"removedSearchField\" \r\n                (onSearchChange)=\"searchChanged($event)\"\r\n                (onSearchClick)=\"searchClicked()\">\r\n            </app-properties-search>\r\n            \r\n        </mat-card>  \r\n    \r\n    </div>\r\n    \r\n    <div class=\"theme-container\"> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"properties-wrapper\">\r\n            \r\n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\"> \r\n                <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{ pagination?.total }} found\r\n                    </mat-chip> \r\n                </mat-chip-list>\r\n                <app-properties-search-results-filters \r\n                    [searchFields]=\"searchFields\" \r\n                    (onRemoveSearchField)=\"removeSearchField($event)\">\r\n                </app-properties-search-results-filters>                 \r\n            </div>\r\n            <div fxFlex=\"100\" class=\"p-2\">                \r\n                <app-properties-toolbar [isHomePage]=\"true\" \r\n                                        (onChangeCount)=\"changeCount($event)\"\r\n                                        (onChangeSorting)=\"changeSorting($event)\"\r\n                                        (onChangeViewType)=\"changeViewType($event)\"></app-properties-toolbar>\r\n            </div>\r\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\" class=\"item\">                         \r\n                <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\"></app-property-item>\r\n            </div>\r\n            <div *ngIf=\"properties?.length\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2 mt-2\">                \r\n                <app-load-more [step]=\"2\"></app-load-more> \r\n            </div>\r\n\r\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">                \r\n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\r\n                <mat-chip-list *ngIf=\"message\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{message}}\r\n                    </mat-chip> \r\n                </mat-chip-list> \r\n            </div>\r\n\r\n        </div>\r\n\r\n        \r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<app-mission></app-mission>\r\n\r\n<app-our-services></app-our-services>\r\n\r\n<app-testimonials></app-testimonials> \r\n\r\n<app-hot-offer-today [propertyId]=\"4\"></app-hot-offer-today> \r\n\r\n<app-featured-properties [properties]=\"featuredProperties\"></app-featured-properties>\r\n\r\n<app-our-agents></app-our-agents>\r\n      \r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHotOfferTodayHotOfferTodayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section mt-3\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">Hot offer today</h1>\r\n\r\n            <app-property-item *ngIf=\"property\" [property]=\"property\" [viewType]=\"'list'\"></app-property-item> \r\n                \r\n        </div>\r\n    </div>   \r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/home/featured-properties/featured-properties.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/home/featured-properties/featured-properties.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeFeaturedPropertiesFeaturedPropertiesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZmVhdHVyZWQtcHJvcGVydGllcy9mZWF0dXJlZC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/featured-properties/featured-properties.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/home/featured-properties/featured-properties.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FeaturedPropertiesComponent */

  /***/
  function srcAppPagesHomeFeaturedPropertiesFeaturedPropertiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturedPropertiesComponent", function () {
      return FeaturedPropertiesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    var FeaturedPropertiesComponent = /*#__PURE__*/function () {
      function FeaturedPropertiesComponent() {
        _classCallCheck(this, FeaturedPropertiesComponent);
      }

      _createClass(FeaturedPropertiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeaturedPropertiesComponent;
    }();

    FeaturedPropertiesComponent.ctorParameters = function () {
      return [];
    };

    FeaturedPropertiesComponent.propDecorators = {
      featuredProperties: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['properties']
      }]
    };
    FeaturedPropertiesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-featured-properties',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./featured-properties.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/featured-properties/featured-properties.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./featured-properties.component.scss */
      "./src/app/pages/home/featured-properties/featured-properties.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], FeaturedPropertiesComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/home/home.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app.models */
    "./src/app/app.models.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

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

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(appSettings, appService, mediaObserver) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.activeMediaQuery = '';
        this.slides = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.count = 8;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_3__["Pagination"](1, 8, null, 2, 0, 0);
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.media$.subscribe(function (change) {
          // console.log(change)
          if (change.mqAlias == 'xs') {
            _this.viewCol = 100;
          } else if (change.mqAlias == 'sm') {
            _this.viewCol = 50;
          } else if (change.mqAlias == 'md') {
            _this.viewCol = 33.3;
          } else {
            _this.viewCol = 25;
          }
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlides();
          this.getProperties(); // if (this.mediaObserver.isActive('xs')) {
          //    console.log('mobile version -XS')
          // }

          this.getFeaturedProperties();
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.settings.loadMore.load) {
            this.settings.loadMore.load = false;
            this.getProperties();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.resetLoadMore();
          this.watcher.unsubscribe();
        }
      }, {
        key: "getSlides",
        value: function getSlides() {
          var _this2 = this;

          this.appService.getHomeCarouselSlides().subscribe(function (res) {
            _this2.slides = res;
          });
        }
      }, {
        key: "getProperties",
        value: function getProperties() {
          var _this3 = this;

          //console.log('get properties by : ', this.searchFields);  
          this.appService.getProperties().subscribe(function (data) {
            if (_this3.properties && _this3.properties.length > 0) {
              _this3.settings.loadMore.page++;
              _this3.pagination.page = _this3.settings.loadMore.page;
            }

            var result = _this3.filterData(data);

            if (result.data.length == 0) {
              _this3.properties.length = 0;
              _this3.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_3__["Pagination"](1, _this3.count, null, 2, 0, 0);
              _this3.message = 'No Results Found';
              return false;
            }

            if (_this3.properties && _this3.properties.length > 0) {
              _this3.properties = _this3.properties.concat(result.data);
            } else {
              _this3.properties = result.data;
            }

            _this3.pagination = result.pagination;
            _this3.message = null;

            if (_this3.properties.length == _this3.pagination.total) {
              _this3.settings.loadMore.complete = true;
              _this3.settings.loadMore.result = _this3.properties.length;
            } else {
              _this3.settings.loadMore.complete = false;
            }
          });
        }
      }, {
        key: "resetLoadMore",
        value: function resetLoadMore() {
          this.settings.loadMore.complete = false;
          this.settings.loadMore.start = false;
          this.settings.loadMore.page = 1;
          this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_3__["Pagination"](1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
        }
      }, {
        key: "filterData",
        value: function filterData(data) {
          return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
        }
      }, {
        key: "searchClicked",
        value: function searchClicked() {
          this.properties.length = 0;
          this.getProperties();
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(event) {
          var _this4 = this;

          event.valueChanges.subscribe(function () {
            _this4.resetLoadMore();

            _this4.searchFields = event.value;
            setTimeout(function () {
              _this4.removedSearchField = null;
            });

            if (!_this4.settings.searchOnBtnClick) {
              _this4.properties.length = 0;
            }
          });
          event.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function () {
            if (!_this4.settings.searchOnBtnClick) {
              _this4.getProperties();
            }
          });
        }
      }, {
        key: "removeSearchField",
        value: function removeSearchField(field) {
          this.message = null;
          this.removedSearchField = field;
        }
      }, {
        key: "changeCount",
        value: function changeCount(count) {
          this.count = count;
          this.resetLoadMore();
          this.properties.length = 0;
          this.getProperties();
        }
      }, {
        key: "changeSorting",
        value: function changeSorting(sort) {
          this.sort = sort;
          this.resetLoadMore();
          this.properties.length = 0;
          this.getProperties();
        }
      }, {
        key: "changeViewType",
        value: function changeViewType(obj) {
          this.viewType = obj.viewType;
          this.viewCol = obj.viewCol;
        }
      }, {
        key: "getFeaturedProperties",
        value: function getFeaturedProperties() {
          var _this5 = this;

          this.appService.getFeaturedProperties().subscribe(function (properties) {
            _this5.featuredProperties = properties;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]
      }];
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-home',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/pages/home/home.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: routes, HomeModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hot-offer-today/hot-offer-today.component */
    "./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts");
    /* harmony import */


    var _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./featured-properties/featured-properties.component */
    "./src/app/pages/home/featured-properties/featured-properties.component.ts");

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
      component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
      pathMatch: 'full'
    }];

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_5__["HotOfferTodayComponent"], _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_6__["FeaturedPropertiesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHotOfferTodayHotOfferTodayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG90LW9mZmVyLXRvZGF5L2hvdC1vZmZlci10b2RheS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts ***!
    \*************************************************************************/

  /*! exports provided: HotOfferTodayComponent */

  /***/
  function srcAppPagesHomeHotOfferTodayHotOfferTodayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotOfferTodayComponent", function () {
      return HotOfferTodayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

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

    var HotOfferTodayComponent = /*#__PURE__*/function () {
      function HotOfferTodayComponent(appService) {
        _classCallCheck(this, HotOfferTodayComponent);

        this.appService = appService;
      }

      _createClass(HotOfferTodayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.appService.getPropertyById(this.propertyId).subscribe(function (property) {
            _this6.property = property;
          });
        }
      }]);

      return HotOfferTodayComponent;
    }();

    HotOfferTodayComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    HotOfferTodayComponent.propDecorators = {
      propertyId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['propertyId']
      }]
    };
    HotOfferTodayComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-hot-offer-today',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./hot-offer-today.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./hot-offer-today.component.scss */
      "./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], HotOfferTodayComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map