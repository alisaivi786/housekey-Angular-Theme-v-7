(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n\r\n        <mat-sidenav-container class=\"account\">\r\n            <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"account-sidenav\">\r\n                <mat-card [perfectScrollbar]=\"psConfig\"> \r\n                    <button fxHide=\"false\" fxHide.gt-sm mat-mini-fab color=\"warn\" class=\"close\" (click)=\"sidenav.toggle()\">\r\n                        <mat-icon>close</mat-icon>\r\n                    </button>\r\n                    <mat-card-header fxLayoutAlign=\"start center\">                       \r\n                        <img mat-card-avatar src=\"assets/images/others/user.jpg\" alt=\"\">\r\n                        <mat-card-title class=\"text-muted mb-0\">Emilio Verdines</mat-card-title> \r\n                    </mat-card-header>\r\n                    <div class=\"divider my-3\"></div>\r\n                    <div *ngFor=\"let link of links\">\r\n                        <a matLine [routerLink]=\"link.href\" routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-3\">\r\n                            <mat-icon class=\"text-muted\">{{link.icon}}</mat-icon>\r\n                            <span class=\"mx-2\">{{ link.name }}</span>\r\n                        </a>\r\n                    </div>                      \r\n                  </mat-card>  \r\n            </mat-sidenav>\r\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\r\n              <mat-card *ngIf=\"!sidenavOpen\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted mb-3\">\r\n                  <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                      <mat-icon>more_vert</mat-icon>\r\n                  </button>\r\n                  <h3> My Account</h3>\r\n              </mat-card>              \r\n              <mat-card class=\"account-wrapper\">\r\n                  <router-outlet></router-outlet>\r\n              </mat-card>  \r\n            </mat-sidenav-content>\r\n        </mat-sidenav-container>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  dashboard works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/edit-property/edit-property.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/edit-property/edit-property.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion [formGroup]=\"submitForm\" class=\"edit-property\">\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>    \r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Basic</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"basic\" fxLayout=\"row wrap\">\r\n\r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Basic</h1>\r\n        </div>\r\n                \r\n        <div fxFlex=\"100\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Title</mat-label>\r\n              <input matInput placeholder=\"Title\" formControlName=\"title\" required autocomplete=\"off\">\r\n              <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">Title is required</mat-error>\r\n          </mat-form-field>\r\n        </div>  \r\n    \r\n        <div fxFlex=\"100\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Description</mat-label> \r\n              <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \r\n          </mat-form-field> \r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Price ($)</mat-label>\r\n              <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceDollar\" autocomplete=\"off\"> \r\n          </mat-form-field>\r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Price (???)</mat-label>\r\n              <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceEuro\" autocomplete=\"off\"> \r\n          </mat-form-field>\r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Property Type</mat-label> \r\n              <mat-select placeholder=\"Select Property Type\" formControlName=\"propertyType\" required>\r\n                  <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType\">\r\n                      {{propertyType.name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"submitForm.get('basic')['controls'].propertyType.errors?.required\">Property Type is required</mat-error>                               \r\n          </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Property Status</mat-label>\r\n              <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\" multiple>\r\n                  <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus\">\r\n                      {{propertyStatus.name}}\r\n                  </mat-option>\r\n              </mat-select>                             \r\n          </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" class=\"step-section pb-2\">\r\n            <p class=\"mb-0\"><span class=\"uppercase fw-500\">Gallery</span><span class=\"text-muted mx-3\">(max 8 images)</span></p>  \r\n            <input-file formControlName=\"gallery\" fileLimit=\"8\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('basic')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Next</span>                    \r\n            <mat-icon>navigate_next</mat-icon>\r\n          </button> \r\n        </div> \r\n    \r\n    </form> \r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle [disabled]=\"!submitForm.get('basic').valid\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Address</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"address\" fxLayout=\"row wrap\">\r\n            \r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Address</h1>\r\n        </div>\r\n                  \r\n        <div fxFlex=\"100\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\r\n              <mat-label>Location</mat-label>\r\n              <input matInput placeholder=\"Enter a location\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \r\n              <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\r\n                <mat-icon>close</mat-icon>\r\n              </button>\r\n              <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">Location is required</mat-error>   \r\n          </mat-form-field>\r\n        </div> \r\n      \r\n        <div fxFlex=\"100\" class=\"px-2 mb-4\">\r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\r\n            </agm-map>\r\n        </div>\r\n      \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>City</mat-label>\r\n              <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \r\n                <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n                  {{city.name}}\r\n                </mat-option>\r\n              </mat-select> \r\n              <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">City is required</mat-error>                    \r\n          </mat-form-field>\r\n        </div> \r\n      \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Zip Code</mat-label>\r\n              <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n            </mat-form-field>\r\n        </div>\r\n      \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Neighborhood</mat-label>\r\n            <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\r\n              <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood\">\r\n                {{neighborhood.name}}\r\n              </mat-option>\r\n            </mat-select>   \r\n          </mat-form-field>\r\n        </div> \r\n      \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Street</mat-label>\r\n            <mat-select placeholder=\"Select Street...\" formControlName=\"street\" multiple> \r\n              <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods: submitForm.get('address')['controls'].neighborhood.value?.id, cityId:submitForm.get('address')['controls'].city.value?.id } \" [value]=\"street\">\r\n                {{street.name}}\r\n              </mat-option>\r\n            </mat-select>  \r\n          </mat-form-field>\r\n        </div> \r\n      \r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\r\n            <mat-icon>navigate_before</mat-icon>\r\n            <span class=\"mx-1 uppercase\">Back</span>  \r\n          </button>\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('address')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Next</span>                    \r\n            <mat-icon>navigate_next</mat-icon>\r\n          </button> \r\n        </div>  \r\n      \r\n    </form>    \r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle [disabled]=\"!submitForm.get('basic').valid || !submitForm.get('address').valid\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Additional</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"additional\" fxLayout=\"row wrap\">\r\n    \r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Additional</h1>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Bedrooms</mat-label>\r\n              <input matInput placeholder=\"bedrooms\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber maxlength=\"2\">                  \r\n            </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Bathrooms</mat-label>\r\n              <input matInput placeholder=\"bathrooms\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber maxlength=\"2\">                  \r\n            </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Garages</mat-label>\r\n              <input matInput placeholder=\"Garages\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber maxlength=\"2\">                  \r\n            </mat-form-field>\r\n        </div>\r\n        \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Area (ft??)</mat-label>\r\n              <input matInput placeholder=\"Area\" autocomplete=\"off\" formControlName=\"area\" onlyNumber>                  \r\n            </mat-form-field>\r\n        </div>\r\n        \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Year Built</mat-label>\r\n              <input matInput placeholder=\"Year Built\" autocomplete=\"off\" formControlName=\"yearBuilt\" onlyNumber  maxlength=\"4\">                  \r\n            </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" class=\"mb-2\"> \r\n            <p class=\"uppercase m-2 fw-500\">Features</p> \r\n            <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                    <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n\r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\r\n            <mat-icon>navigate_before</mat-icon>\r\n            <span class=\"mx-1 uppercase\">Back</span>  \r\n          </button>\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('additional')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Next</span>                    \r\n            <mat-icon>navigate_next</mat-icon>\r\n          </button> \r\n        </div>  \r\n    \r\n        \r\n    \r\n    \r\n    </form>\r\n  </mat-expansion-panel> \r\n\r\n  <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle [disabled]=\"!submitForm.get('basic').valid || !submitForm.get('address').valid || !submitForm.get('additional').valid \">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Media</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"media\" fxLayout=\"row wrap\">    \r\n                  \r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Media</h1>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n            <p class=\"mb-0\"><span class=\"uppercase fw-500\">Videos</span><span class=\"text-muted mx-3\">(video link to .mp4)</span></p>                            \r\n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addVideo()\" matTooltip=\"Add New Video\" matTooltipPosition=\"after\">\r\n                <mat-icon>add_circle</mat-icon>\r\n            </button>\r\n        </div> \r\n        <div formArrayName=\"videos\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n            <div *ngFor=\"let item of submitForm.get('media')['controls'].videos['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                        <mat-label>Name</mat-label>\r\n                        <input matInput placeholder=\"Video name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-label>Link</mat-label>\r\n                        <input matInput placeholder=\"Link to video\" formControlName=\"link\" autocomplete=\"off\">     \r\n                    </mat-form-field>                                                 \r\n                </div>\r\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                    <button mat-icon-button color=\"warn\" (click)=\"deleteVideo(i)\" matTooltip=\"Delete Video\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                </div>                            \r\n            </div>        \r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n            <p class=\"uppercase fw-500 mb-0\">Plans</p>                            \r\n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addPlan()\" matTooltip=\"Add New Plan\" matTooltipPosition=\"after\" class=\"mx-3\">\r\n                <mat-icon>add_circle</mat-icon>\r\n            </button>\r\n        </div> \r\n        <div formArrayName=\"plans\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n            <div *ngFor=\"let item of submitForm.get('media')['controls'].plans['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section pb-2\">\r\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                        <mat-label>Name</mat-label>\r\n                        <input matInput placeholder=\"Plan name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-label>Desc</mat-label>\r\n                        <input matInput placeholder=\"Description\" formControlName=\"desc\" autocomplete=\"off\">     \r\n                    </mat-form-field> \r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-label>Area (ft??)</mat-label>\r\n                        <input matInput placeholder=\"Area\" formControlName=\"area\" autocomplete=\"off\" onlyNumber>     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-label>Rooms</mat-label>\r\n                        <input matInput placeholder=\"Rooms\" formControlName=\"rooms\" autocomplete=\"off\" onlyNumber>     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-label>Baths</mat-label>\r\n                        <input matInput placeholder=\"Baths\" formControlName=\"baths\" autocomplete=\"off\" onlyNumber>     \r\n                    </mat-form-field>\r\n                    <div fxFlex=\"100\" class=\"px-2\">  \r\n                        <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \r\n                    </div>                \r\n                </div>\r\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                    <button mat-icon-button color=\"warn\" (click)=\"deletePlan(i)\" matTooltip=\"Delete Plan\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                </div>  \r\n            </div>        \r\n        </div> \r\n    \r\n        \r\n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n            <p class=\"mb-0 uppercase fw-500\">Additional features</p>                            \r\n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addFeature()\" matTooltip=\"Add New Feature\" matTooltipPosition=\"after\">\r\n                <mat-icon>add_circle</mat-icon>\r\n            </button>\r\n        </div> \r\n        <div formArrayName=\"additionalFeatures\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n            <div *ngFor=\"let item of submitForm.get('media')['controls'].additionalFeatures['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                        <mat-label>Name</mat-label>\r\n                        <input matInput placeholder=\"Feature name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-label>Value</mat-label>\r\n                        <input matInput placeholder=\"Feature value\" formControlName=\"value\" autocomplete=\"off\">     \r\n                    </mat-form-field>                                                 \r\n                </div>\r\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                    <button mat-icon-button color=\"warn\" (click)=\"deleteFeature(i)\" matTooltip=\"Delete Feature\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                </div>                            \r\n            </div>        \r\n        </div>    \r\n    \r\n        <div fxFlex=\"100\" class=\"py-3\">\r\n            <mat-slide-toggle formControlName=\"featured\">Featured</mat-slide-toggle>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\r\n            <mat-icon>navigate_before</mat-icon>\r\n            <span class=\"mx-1 uppercase\">Back</span>  \r\n          </button>\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('media')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Update</span>\r\n          </button> \r\n        </div>\r\n    \r\n    </form>\r\n  </mat-expansion-panel> \r\n\r\n</mat-accordion> \r\n\r\n<div *ngIf=\"step === 4\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \r\n  <a routerLink=\"/account/my-properties\" mat-raised-button color=\"accent\">Return to my properties</a>       \r\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/favorites/favorites.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/favorites/favorites.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n</mat-form-field> \r\n<div class=\"table-wrapper\"> \r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n  \r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n      </ng-container>  \r\n\r\n      <!-- Image Column -->\r\n      <ng-container matColumnDef=\"image\">\r\n        <th mat-header-cell *matHeaderCellDef> Image </th>\r\n        <td mat-cell *matCellDef=\"let property\"><img [src]=\"property.gallery[0].small\" [style.width.px]=\"100\" class=\"d-block\"></td>\r\n      </ng-container> \r\n  \r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n        <td mat-cell *matCellDef=\"let property\"><a [routerLink]=\"['/properties', property.id ]\" class=\"property-name\">{{property.title}}</a></td>\r\n      </ng-container>  \r\n\r\n      <!-- Actions Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Remove </th>\r\n        <td mat-cell *matCellDef=\"let property\"> \r\n            <button mat-icon-button color=\"warn\" (click)=\"remove(property)\" matTooltip=\"Remove\" class=\"remove\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button> \r\n        </td>\r\n      </ng-container> \r\n  \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n      </tr>\r\n    </table> \r\n    <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p> \r\n</div>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/my-properties/my-properties.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/my-properties/my-properties.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n</mat-form-field>\r\n<div class=\"table-wrapper\"> \r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n  \r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n      </ng-container>  \r\n\r\n      <!-- Image Column -->\r\n      <ng-container matColumnDef=\"image\">\r\n        <th mat-header-cell *matHeaderCellDef> Image </th>\r\n        <td mat-cell *matCellDef=\"let property\"><img [src]=\"property.gallery[0].small\" [style.width.px]=\"100\" class=\"d-block\"></td>\r\n      </ng-container> \r\n  \r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n        <td mat-cell *matCellDef=\"let property\"><a [routerLink]=\"['/properties', property.id ]\" class=\"property-name\">{{property.title}}</a></td>\r\n      </ng-container> \r\n\r\n      <!-- Published Column -->\r\n      <ng-container matColumnDef=\"published\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Published </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.published | date:\"dd MMMM, yyyy\"}} </td>\r\n      </ng-container> \r\n\r\n      <!-- Views Column -->\r\n      <ng-container matColumnDef=\"views\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Views </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.views}} </td>\r\n      </ng-container> \r\n\r\n      <!-- Actions Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n        <td mat-cell *matCellDef=\"let property\">  \r\n            <a [routerLink]=\"['/account/my-properties', property.id]\"mat-icon-button color=\"primary\" matTooltip=\"Edit property\">\r\n                <mat-icon>edit</mat-icon>\r\n            </a>\r\n            <button mat-icon-button color=\"warn\" (click)=\"remove(property)\" matTooltip=\"Remove\" class=\"remove\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button> \r\n        </td>\r\n      </ng-container> \r\n  \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n      </tr>\r\n    </table> \r\n    <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p> \r\n</div>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\r\n        <h2 class=\"text-muted text-center fw-600 mb-3\">Account details</h2>\r\n        <form [formGroup]=\"infoForm\" (ngSubmit)=\"onInfoFormSubmit(infoForm.value)\"> \r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Name</mat-label>\r\n                <input matInput placeholder=\"Name\" formControlName=\"name\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"infoForm.controls.name.errors?.required\">Name is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 3 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Email</mat-label>\r\n                <input matInput placeholder=\"Email\" formControlName=\"email\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"infoForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                <mat-error *ngIf=\"infoForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Phone</mat-label>\r\n                <input matInput placeholder=\"Phone\" formControlName=\"phone\" required onlyNumber autocomplete=\"off\">\r\n                <mat-error *ngIf=\"infoForm.controls.phone.errors?.required\">Phone is required</mat-error>\r\n            </mat-form-field>\r\n\r\n            <div class=\"mb-3\">\r\n                <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \r\n            </div>\r\n    \r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Organization</mat-label>\r\n                <input matInput placeholder=\"organization\" formControlName=\"organization\" autocomplete=\"off\"> \r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Facebook</mat-label>\r\n                <input matInput placeholder=\"facebook\" formControlName=\"facebook\" autocomplete=\"off\"> \r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Twitter</mat-label>\r\n                <input matInput placeholder=\"twitter\" formControlName=\"twitter\" autocomplete=\"off\"> \r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Linkedin</mat-label>\r\n                <input matInput placeholder=\"linkedin\" formControlName=\"linkedin\" autocomplete=\"off\"> \r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Instagram</mat-label>\r\n                <input matInput placeholder=\"instagram\" formControlName=\"instagram\" autocomplete=\"off\"> \r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Website</mat-label>\r\n                <input matInput placeholder=\"website\" formControlName=\"website\" autocomplete=\"off\"> \r\n            </mat-form-field>\r\n\r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Update profile</button>\r\n            </div> \r\n        </form>\r\n    </div>\r\n    \r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n        <h2 class=\"text-muted text-center fw-600 mb-3\">Password change</h2>\r\n        <form [formGroup]=\"passwordForm\" (ngSubmit)=\"onPasswordFormSubmit(passwordForm.value)\">            \r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Current Password</mat-label>\r\n                <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" type=\"password\" minlength=\"6\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.errors?.required\">Current Password is required</mat-error>\r\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.hasError('minlength')\">Current Password isn't long enough, minimum of 6 characters</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>New Password</mat-label>\r\n                <input matInput placeholder=\"New Password\" formControlName=\"newPassword\" type=\"password\" minlength=\"6\" required autocomplete=\"off\">\r\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.errors?.required\">New Password is required</mat-error>\r\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.hasError('minlength')\">New Password isn't long enough, minimum of 6 characters</mat-error>\r\n            </mat-form-field> \r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Confirm New Password</mat-label>\r\n              <input matInput placeholder=\"Confirm New Password\" formControlName=\"confirmNewPassword\" type=\"password\" required autocomplete=\"off\">\r\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.errors?.required\">Confirm New Password is required</mat-error>\r\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n            </mat-form-field>\r\n            <div class=\"text-center mt-2\">\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Change password</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div> \r\n");

/***/ }),

/***/ "./src/app/pages/account/account.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


let AccountComponent = class AccountComponent {
    constructor(router) {
        this.router = router;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.links = [
            { name: 'Profile', href: 'profile', icon: 'person' },
            { name: 'My Properties', href: 'my-properties', icon: 'view_list' },
            { name: 'Favorites', href: 'favorites', icon: 'favorite' },
            { name: 'Submit Property', href: '/submit-property', icon: 'add_circle' },
            { name: 'Logout', href: '/login', icon: 'power_settings_new' },
        ];
    }
    ngOnInit() {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        ;
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (window.innerWidth < 960) {
                    this.sidenav.close();
                }
            }
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AccountComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sidenav',] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
AccountComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-account',
        template: __importDefault(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/account/account.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AccountComponent);



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: routes, AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-input-file */ "./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.component */ "./src/app/pages/account/account.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/account/dashboard/dashboard.component.ts");
/* harmony import */ var _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-properties/my-properties.component */ "./src/app/pages/account/my-properties/my-properties.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/pages/account/favorites/favorites.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/account/profile/profile.component.ts");
/* harmony import */ var _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-property/edit-property.component */ "./src/app/pages/account/edit-property/edit-property.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"], children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'my-properties', component: _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_8__["MyPropertiesComponent"] },
            { path: 'my-properties/:id', component: _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__["EditPropertyComponent"] },
            { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] }
        ]
    }
];
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"],
            _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_8__["MyPropertiesComponent"],
            _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__["EditPropertyComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_input_file__WEBPACK_IMPORTED_MODULE_4__["InputFileModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"]
        ]
    })
], AccountModule);



/***/ }),

/***/ "./src/app/pages/account/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/account/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/account/dashboard/dashboard.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/account/edit-property/edit-property.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-property .sebm-google-map-container {\n  height: 400px;\n}\n.edit-property .step-section {\n  padding: 20px 10px 0;\n  border-radius: 4px;\n  margin: 8px 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9lZGl0LXByb3BlcnR5L2VkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9lZGl0LXByb3BlcnR5L2VkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1wcm9wZXJ0eSB7IFxyXG4gICAgLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9IFxyXG4gICAgLnN0ZXAtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDhweCAxNnB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/account/edit-property/edit-property.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.ts ***!
  \************************************************************************/
/*! exports provided: EditPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyComponent", function() { return EditPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
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






let EditPropertyComponent = class EditPropertyComponent {
    constructor(appService, activatedRoute, fb, mapsAPILoader, ngZone, snackBar) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.snackBar = snackBar;
        this.features = [];
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
        this.step = 0;
    }
    ngOnInit() {
        this.features = this.appService.getFeatures();
        this.propertyTypes = this.appService.getPropertyTypes();
        this.propertyStatuses = this.appService.getPropertyStatuses();
        this.cities = this.appService.getCities();
        this.neighborhoods = this.appService.getNeighborhoods();
        this.streets = this.appService.getStreets();
        this.submitForm = this.fb.group({
            basic: this.fb.group({
                title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                desc: null,
                priceDollar: null,
                priceEuro: null,
                propertyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                propertyStatus: null,
                gallery: null
            }),
            address: this.fb.group({
                location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                zipCode: '',
                neighborhood: '',
                street: ''
            }),
            additional: this.fb.group({
                bedrooms: '',
                bathrooms: '',
                garages: '',
                area: '',
                yearBuilt: '',
                features: this.buildFeatures()
            }),
            media: this.fb.group({
                videos: this.fb.array([this.createVideo()]),
                plans: this.fb.array([this.createPlan()]),
                additionalFeatures: this.fb.array([this.createFeature()]),
                featured: false
            })
        });
        this.placesAutocomplete();
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.getPropertyById(params['id']);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getPropertyById(id) {
        this.appService.getPropertyById(id).subscribe(data => {
            console.log(data);
            this.property = data;
            this.submitForm.controls.basic.get('title').setValue(this.property.title);
            this.submitForm.controls.basic.get('desc').setValue(this.property.desc);
            this.submitForm.controls.basic.get('priceDollar').setValue((this.property.priceDollar.sale) ? this.property.priceDollar.sale : this.property.priceDollar.rent);
            this.submitForm.controls.basic.get('priceEuro').setValue((this.property.priceEuro.sale) ? this.property.priceEuro.sale : this.property.priceEuro.rent);
            this.submitForm.controls.basic.get('propertyType').setValue(this.propertyTypes.filter(p => p.name == this.property.propertyType)[0]);
            const statusList = [];
            this.propertyStatuses.forEach(status => {
                this.property.propertyStatus.forEach(name => {
                    if (status.name == name) {
                        statusList.push(status);
                    }
                });
            });
            this.submitForm.controls.basic.get('propertyStatus').setValue(statusList);
            const images = [];
            this.property.gallery.forEach(item => {
                let image = {
                    link: item.medium,
                    preview: item.medium
                };
                images.push(image);
            });
            this.submitForm.controls.basic.get('gallery').setValue(images);
            this.submitForm.controls.address.get('location').setValue(this.property.formattedAddress);
            this.lat = this.property.location.lat;
            this.lng = this.property.location.lng;
            this.getAddress();
            this.submitForm.controls.additional.get('bedrooms').setValue(this.property.bedrooms);
            this.submitForm.controls.additional.get('bathrooms').setValue(this.property.bathrooms);
            this.submitForm.controls.additional.get('garages').setValue(this.property.garages);
            this.submitForm.controls.additional.get('area').setValue(this.property.area.value);
            this.submitForm.controls.additional.get('yearBuilt').setValue(this.property.yearBuilt);
            this.features.forEach(feature => {
                this.property.features.forEach(name => {
                    if (feature.name == name) {
                        feature.selected = true;
                    }
                });
            });
            this.submitForm.controls.additional.get('features').setValue(this.features);
            const videos = this.submitForm.controls.media.get('videos');
            while (videos.length) {
                videos.removeAt(0);
            }
            this.property.videos.forEach(video => videos.push(this.fb.group(video)));
            const plans = this.submitForm.controls.media.get('plans');
            while (plans.length) {
                plans.removeAt(0);
            }
            this.property.plans.forEach(plan => {
                let p = {
                    id: plan.id,
                    name: plan.name,
                    desc: plan.desc,
                    area: plan.area.value,
                    rooms: plan.rooms,
                    baths: plan.baths,
                    image: null
                };
                plans.push(this.fb.group(p));
            });
            this.property.plans.forEach((plan, index) => {
                let image = {
                    link: plan.image,
                    preview: plan.image
                };
                this.submitForm.controls.media.get('plans')['controls'][index].controls.image.setValue([image]);
            });
            const additionalFeatures = this.submitForm.controls.media.get('additionalFeatures');
            while (additionalFeatures.length) {
                additionalFeatures.removeAt(0);
            }
            this.property.additionalFeatures.forEach(feature => additionalFeatures.push(this.fb.group(feature)));
            this.submitForm.controls.media.get('featured').setValue(this.property.featured);
        });
    }
    // -------------------- Address ---------------------------  
    onSelectCity() {
        this.submitForm.controls.address.get('neighborhood').setValue(null, { emitEvent: false });
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    placesAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.addressAutocomplete.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    ;
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.getAddress();
                });
            });
        });
    }
    getAddress() {
        this.appService.getAddress(this.lat, this.lng).subscribe(response => {
            let address = response['results'][0].formatted_address;
            this.submitForm.controls.address.get('location').setValue(address);
            this.setAddresses(response['results'][0]);
        });
    }
    onMapClick(e) {
        this.lat = e.coords.lat;
        this.lng = e.coords.lng;
        this.getAddress();
    }
    onMarkerClick(e) {
        console.log(e);
    }
    setAddresses(result) {
        this.submitForm.controls.address.get('city').setValue(null);
        this.submitForm.controls.address.get('zipCode').setValue(null);
        this.submitForm.controls.address.get('street').setValue(null);
        var newCity, newStreet, newNeighborhood;
        result.address_components.forEach(item => {
            if (item.types.indexOf('locality') > -1) {
                if (this.cities.filter(city => city.name == item.long_name)[0]) {
                    newCity = this.cities.filter(city => city.name == item.long_name)[0];
                }
                else {
                    newCity = { id: this.cities.length + 1, name: item.long_name };
                    this.cities.push(newCity);
                }
                this.submitForm.controls.address.get('city').setValue(newCity);
            }
            if (item.types.indexOf('postal_code') > -1) {
                this.submitForm.controls.address.get('zipCode').setValue(item.long_name);
            }
        });
        if (!newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('administrative_area_level_1') > -1) {
                    if (this.cities.filter(city => city.name == item.long_name)[0]) {
                        newCity = this.cities.filter(city => city.name == item.long_name)[0];
                    }
                    else {
                        newCity = {
                            id: this.cities.length + 1,
                            name: item.long_name
                        };
                        this.cities.push(newCity);
                    }
                    this.submitForm.controls.address.get('city').setValue(newCity);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('neighborhood') > -1) {
                    let neighborhood = this.neighborhoods.filter(n => n.name == item.long_name && n.cityId == newCity.id)[0];
                    if (neighborhood) {
                        newNeighborhood = neighborhood;
                    }
                    else {
                        newNeighborhood = {
                            id: this.neighborhoods.length + 1,
                            name: item.long_name,
                            cityId: newCity.id
                        };
                        this.neighborhoods.push(newNeighborhood);
                    }
                    this.neighborhoods = [...this.neighborhoods];
                    this.submitForm.controls.address.get('neighborhood').setValue([newNeighborhood]);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('route') > -1) {
                    if (this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0]) {
                        newStreet = this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0];
                    }
                    else {
                        newStreet = {
                            id: this.streets.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                            neighborhoodId: (newNeighborhood) ? newNeighborhood.id : null
                        };
                        this.streets.push(newStreet);
                    }
                    this.streets = [...this.streets];
                    this.submitForm.controls.address.get('street').setValue([newStreet]);
                }
            });
        }
    }
    // -------------------- Additional ---------------------------  
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
                selected: feature.selected
            });
        });
        return this.fb.array(arr);
    }
    // -------------------- Media --------------------------- 
    createVideo() {
        return this.fb.group({
            id: null,
            name: null,
            link: null
        });
    }
    addVideo() {
        const videos = this.submitForm.controls.media.get('videos');
        videos.push(this.createVideo());
    }
    deleteVideo(index) {
        const videos = this.submitForm.controls.media.get('videos');
        videos.removeAt(index);
    }
    createPlan() {
        return this.fb.group({
            id: null,
            name: null,
            desc: null,
            area: null,
            rooms: null,
            baths: null,
            image: null
        });
    }
    addPlan() {
        const plans = this.submitForm.controls.media.get('plans');
        plans.push(this.createPlan());
    }
    deletePlan(index) {
        const plans = this.submitForm.controls.media.get('plans');
        plans.removeAt(index);
    }
    createFeature() {
        return this.fb.group({
            id: null,
            name: null,
            value: null
        });
    }
    addFeature() {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.push(this.createFeature());
    }
    deleteFeature(index) {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.removeAt(index);
    }
    setStep(index) {
        this.step = index;
    }
    onSubmitForm(form) {
        if (this.submitForm.get(form).valid) {
            this.nextStep();
            if (form == "media") {
                this.snackBar.open('The property "' + this.property.title + '" has been updated.', '??', {
                    verticalPosition: 'top',
                    duration: 5000
                });
            }
        }
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
EditPropertyComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
EditPropertyComponent.propDecorators = {
    addressAutocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['addressAutocomplete',] }]
};
EditPropertyComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit-property',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-property.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/edit-property/edit-property.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./edit-property.component.scss */ "./src/app/pages/account/edit-property/edit-property.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
], EditPropertyComponent);



/***/ }),

/***/ "./src/app/pages/account/favorites/favorites.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/favorites/favorites.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/account/favorites/favorites.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/favorites/favorites.component.ts ***!
  \****************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
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





let FavoritesComponent = class FavoritesComponent {
    constructor(appService) {
        this.appService = appService;
        this.displayedColumns = ['id', 'image', 'title', 'actions'];
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.appService.Data.favorites);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(property) {
        const index = this.dataSource.data.indexOf(property);
        if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
FavoritesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"],] }]
};
FavoritesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-favorites',
        template: __importDefault(__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/favorites/favorites.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./favorites.component.scss */ "./src/app/pages/account/favorites/favorites.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], FavoritesComponent);



/***/ }),

/***/ "./src/app/pages/account/my-properties/my-properties.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvbXktcHJvcGVydGllcy9teS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/account/my-properties/my-properties.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.ts ***!
  \************************************************************************/
/*! exports provided: MyPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPropertiesComponent", function() { return MyPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
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





let MyPropertiesComponent = class MyPropertiesComponent {
    constructor(appService) {
        this.appService = appService;
        this.displayedColumns = ['id', 'image', 'title', 'published', 'views', 'actions'];
    }
    ngOnInit() {
        this.appService.getProperties().subscribe(res => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    remove(property) {
        const index = this.dataSource.data.indexOf(property);
        if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
MyPropertiesComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
MyPropertiesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"],] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"],] }]
};
MyPropertiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-my-properties',
        template: __importDefault(__webpack_require__(/*! raw-loader!./my-properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/my-properties/my-properties.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./my-properties.component.scss */ "./src/app/pages/account/my-properties/my-properties.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], MyPropertiesComponent);



/***/ }),

/***/ "./src/app/pages/account/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/account/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
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




let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, snackBar) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
    }
    ngOnInit() {
        this.infoForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            image: null,
            organization: null,
            facebook: null,
            twitter: null,
            linkedin: null,
            instagram: null,
            website: null
        });
        this.passwordForm = this.formBuilder.group({
            currentPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: Object(src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["matchingPasswords"])('newPassword', 'confirmNewPassword') });
    }
    onInfoFormSubmit(values) {
        if (this.infoForm.valid) {
            console.log(values);
            this.snackBar.open('Your account information updated successfully!', '??', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    }
    onPasswordFormSubmit(values) {
        if (this.passwordForm.valid) {
            this.snackBar.open('Your password changed successfully!', '??', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile',
        template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/account/profile/profile.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
], ProfileComponent);



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es2015.js.map