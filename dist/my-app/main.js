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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n\tbackground-color: #f5f5f5;\r\n}\r\n.card-deck-container{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    -ms-box-direction: normal;\r\n    \r\n    flex: 1 1 1;\r\n    box-sizing: border-box;\r\n    -webkit-box-flex: 1;\r\n    -ms-box-flex: 1;\r\n    -moz-box-flex: 1;\r\n    \r\n    position: relative;\r\n    border-radius: 2px;\r\n    padding: 10px 10px 30px;\r\n    margin: 10px 10px 10px 10px;\r\n    background-color: #f5f5f5;\r\n    \r\n}\r\n.card-item{\r\n    flex: 1;\r\n    box-sizing: border-box;\r\n    -webkit-box-flex: 1;\r\n    -ms-box-flex: 1;\r\n    -moz-box-flex: 1;\r\n    padding: 3px 3px 3px 3px;\r\n     width:300px;\r\n   min-width:270px;\r\n   max-width:300px;\r\n  \r\n}\r\n.btn1{\r\n\tmargin-right: 0px;\r\n}\r\n.listCreateBtn{\r\n\theight:100%;\r\n\twidth:100%;\r\n}\r\n.listCardNewList{\r\n\theight:50px;\r\n\twidth:120px;\r\n\t min-width:110px;\r\n   max-width:120px;\r\n\t box-sizing: border-box;\r\n    -webkit-box-flex: 1;\r\n    -ms-box-flex: 1;\r\n    -moz-box-flex: 1;\r\n    padding: 3px 3px 3px 3px;\r\n\tbackground-color: #ffffff;\r\n}\r\n.cardContent{\r\n\toverflow: hidden;\r\n  text-overflow: ellipsis\r\n}\r\n.btnDetails{\r\n\tmargin-right:0px;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n\t table-layout:fixed; \r\n}\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n\t width:200px; word-wrap:break-word;\r\n}\r\n/* tr:nth-child(even){background-color: #f2f2f2} */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"w3-container w3-display-container w3-bar w3-black\">\r\n    <p>To-Do</p>\r\n  </div>\r\n\r\n<div class = \"card-deck-container\" >\r\n\r\n\t<div  *ngFor=\"let item of items\" id = \"outerCard\" layout-fill layout=\"column\" layout-align=\"center none\" class = \"listCard card-item  \" (drop)=\"drop($event,item)\" \r\n      (dragover)=\"allowDrop($event)\">\r\n\t\t<mat-card >\r\n\t\t\t<mat-card-header >\r\n\t\t\t<!-- <div class=\"w3-bar\" >\r\n\t\t\t\t\t<span class=\" w3-left cardContent\">{{item.Title}}</span>\r\n\t\t\t\t\t<button class=\"w3-button w3-right w3-light-grey\" style = \"margin-bottom:1%;\" (click)=\"deleteList(item)\">Delete this list </button>\r\n\t\t\t</div> -->\r\n\t\t\t\t<mat-card-title class = \"cardContent\"> <strong>{{item.Title}} </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button  color=\"warn\" class = \"btn1 w3-button w3-right w3-btn w3-white w3-border w3-border-red w3-round-large\" (click)=\"deleteList(item)\"> Delete this list </button>\r\n\t\t\t\t</mat-card-title> \r\n\t\t\t\t\r\n\t\t\t</mat-card-header>\r\n\t\t\t<mat-card-content id = \"innerCard\" *ngFor=\"let card of item.Content\" (click)=\"onSelect(card,item)\" draggable=\"true\" \r\n      (dragstart)=\"drag($event,card,item)\">\r\n\t\t\t\t<mat-card >\r\n\t\t\t\t\t<mat-card-content class = \"cardContent\">\r\n\t\t\t\t\t\t{{card.cardTitle}}\r\n\t\t\t\t\t</mat-card-content>\r\n\t\t\t\t</mat-card> \r\n\t\t\t</mat-card-content>\r\n\t\t\t<mat-divider></mat-divider>\r\n\t\t\t<mat-card-actions>\r\n\t\t\t\t<button class = \"w3-button  w3-btn w3-light-gray w3-border w3-border-light-gray w3-round-large\" (click)=\"addCard(item)\">Add new card...</button>\r\n\t\t\t</mat-card-actions>\r\n\t\t</mat-card> \t\r\n\t</div>\r\n\t<div layout-fill layout=\"column\" layout-align=\"center none\" class = \"listCardNewList card-item \">\r\n\t\t\r\n\t\t\t\r\n\t\t\t\t<button mat-stroked-button color=\"primary\" class = \"listCreateBtn w3-button w3-btn w3-white w3-border w3-border-blue w3-round-large\" (click)=\"addList()\">Add new List...</button>\r\n\t\t\t\r\n\t\t\t\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, DialogForAddCard, DialogForNewList, DialogForCardDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogForAddCard", function() { return DialogForAddCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogForNewList", function() { return DialogForNewList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogForCardDetails", function() { return DialogForCardDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.items = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                "lid": 0,
                "Title": "List 1",
                "Content": [
                    {
                        "cardTitle": "Card 1",
                        "cardDesc": "Description",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    },
                    {
                        "cardTitle": "Card 2",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    },
                    {
                        "cardTitle": "Card 3",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    }
                ]
            },
            {
                "lid": 1,
                "Title": "List 2",
                "Content": [
                    {
                        "cardTitle": "Card 1",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    },
                    {
                        "cardTitle": "Card 2",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    },
                    {
                        "cardTitle": "Card 3",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    }
                ]
            },
            {
                "lid": 2,
                "Title": "List 3",
                "Content": [
                    {
                        "cardTitle": "Card 1",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    },
                    {
                        "cardTitle": "Card 2",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    },
                    {
                        "cardTitle": "Card 3",
                        "cardDesc": "Desc",
                        "cardComments": [
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            },
                            {
                                "comment": "abc",
                                "date": "2 aug 2018"
                            }
                        ]
                    }
                ]
            }
        ];
    };
    AppComponent.prototype.onSelect = function (card, item) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogForCardDetails, {
            width: '1300px',
            data: card
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.destroy != undefined && result.destroy) {
                var index = _this.items.indexOf(item);
                var data = _this.items[index];
                data = data.Content;
                var i = data.indexOf(card);
                data.splice(i, 1);
            }
        });
    };
    AppComponent.prototype.addCard = function (item) {
        var dialogRef = this.dialog.open(DialogForAddCard, {
            width: '350px',
            data: item
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.cName != undefined && result.cDes != undefined) {
                var data = {
                    "cardTitle": result.cName,
                    "cardDesc": result.cDes,
                    "cardComments": []
                };
                var tempContent = item.Content;
                tempContent.push(data);
                item.Content = tempContent;
            }
        });
    };
    AppComponent.prototype.addList = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogForNewList, {
            width: '350px',
            data: ""
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.title != undefined) {
                if (_this.items.length > 0) {
                    var id = Number(_this.items[_this.items.length - 1].lid) + 1;
                }
                else {
                    var id = 0;
                }
                var data = {
                    "lid": id,
                    "Title": result.title,
                    "Content": []
                };
                _this.items.push(data);
            }
        });
    };
    AppComponent.prototype.deleteList = function (item) {
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
    };
    AppComponent.prototype.allowDrop = function (ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    };
    AppComponent.prototype.drag = function (ev, card, item) {
        var index = this.items.indexOf(item);
        var data = this.items[index];
        data = data.Content;
        var i = data.indexOf(card);
        var toData = {
            "item": item,
            "append": card,
            "index": i,
            "remove": data
        };
        ev.dataTransfer.setData("text/plain", JSON.stringify(toData));
        ev.dataTransfer.effectAllowed = "move";
    };
    AppComponent.prototype.drop = function (ev, item) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text/plain");
        data = JSON.parse(data);
        var remInd = this.items.findIndex(function (item, i) {
            return item.lid === data.item.lid;
        });
        data.remove.splice(data.index, 1);
        this.items[remInd].Content = data.remove;
        var index = this.items.indexOf(item);
        this.items[index].Content.push(data.append);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());

//dialog box for add card
var DialogForAddCard = /** @class */ (function () {
    function DialogForAddCard(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogForAddCard.prototype.onClickOk = function () {
        var data = {
            "cName": this.cardName,
            "cDes": this.cardDescription
        };
        this.dialogRef.close(data);
    };
    DialogForAddCard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-for-add-card',
            template: __webpack_require__(/*! ./dialog-for-add-card.html */ "./src/app/dialog-for-add-card.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogForAddCard);
    return DialogForAddCard;
}());

//dialog box for add list
var DialogForNewList = /** @class */ (function () {
    function DialogForNewList(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogForNewList.prototype.onClickOk = function () {
        var data = {
            "title": this.Title
        };
        this.dialogRef.close(data);
    };
    DialogForNewList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-for-new-list',
            template: __webpack_require__(/*! ./dialog-for-new-list.html */ "./src/app/dialog-for-new-list.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogForNewList);
    return DialogForNewList;
}());

//dialog box for card details
var DialogForCardDetails = /** @class */ (function () {
    function DialogForCardDetails(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.finalResult = [];
    }
    DialogForCardDetails.prototype.delete = function () {
        var data = {
            "destroy": true
        };
        this.dialogRef.close(data);
    };
    DialogForCardDetails.prototype.addComment = function () {
        var objDate = new Date();
        var locale = "en-us";
        var month = (objDate.toLocaleString(locale, { month: "short" }));
        var day = objDate.getUTCDate();
        var year = objDate.getUTCFullYear();
        var date = day + " " + month + " " + year;
        if (this.Comment != undefined && this.Comment != "" && this.Comment != " ") {
            var tempVal = {
                "comment": this.Comment,
                "date": date
            };
            this.data.cardComments.push(tempVal);
            this.finalResult = this.data;
            this.Comment = "";
        }
    };
    DialogForCardDetails = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-for-card-details',
            template: __webpack_require__(/*! ./dialog-for-card-details.html */ "./src/app/dialog-for-card-details.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogForCardDetails);
    return DialogForCardDetails;
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["DialogForAddCard"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["DialogForNewList"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["DialogForCardDetails"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [_app_component__WEBPACK_IMPORTED_MODULE_11__["DialogForAddCard"], _app_component__WEBPACK_IMPORTED_MODULE_11__["DialogForNewList"], _app_component__WEBPACK_IMPORTED_MODULE_11__["DialogForCardDetails"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog-for-add-card.html":
/*!******************************************!*\
  !*** ./src/app/dialog-for-add-card.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-light-grey\">\r\n      <h3>Card Details</h3>\r\n    </div>\r\n\t\r\n\t<span class=\"w3-container\">\r\n      <p>\r\n\t  <label>Card Name</label></p>\r\n      <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"cardName\">\r\n      \r\n      <p>  \r\n\t\t<label>Description</label></p>\t  \r\n      <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"cardDescription\">\r\n      \r\n    </span>\r\n\r\n<div mat-dialog-actions>\r\n  <button class = \"w3-button w3-left w3-light-grey w3-round-large\" (click)=\"onClickOk()\">Add</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialog-for-card-details.html":
/*!**********************************************!*\
  !*** ./src/app/dialog-for-card-details.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"w3-bar\">\r\n  <span class=\" w3-left \">{{data.cardTitle}}</span>\r\n  <button class=\"w3-button w3-right w3-btn w3-white w3-border w3-border-red w3-round-large\" (click)=\"delete()\">Delete </button>\r\n</div>\r\n\r\n<div class=\"w3-container w3-border w3-leftbar\" style=\"margin-top: 1%;\">\r\n  <p>{{data.cardDesc}}</p>\r\n</div>\r\n\r\n      <textarea class=\"w3-input w3-border w3-leftbar\" style=\"margin-top: 1%;\" type=\"text\" placeholder=\"Comment..\" [(ngModel)]=\"Comment\"></textarea>\r\n\r\n\r\n<div class=\"w3-bar\" style=\"margin-top: 1%;\">\r\n  \r\n  <button class=\"w3-button w3-left w3-light-grey w3-round-large\" (click)=\"addComment()\">Add Comment </button>\r\n</div>\r\n\r\n<div style=\"overflow-x:auto;\">\r\n  <table   *ngFor=\"let item of data.cardComments\">\r\n    <tr>\r\n      <td>{{item.comment}}</td>\r\n      <td>{{item.date}}</td>      \r\n    </tr>\r\n    \r\n  </table>\r\n</div>\r\n\t\r\n\r\n"

/***/ }),

/***/ "./src/app/dialog-for-new-list.html":
/*!******************************************!*\
  !*** ./src/app/dialog-for-new-list.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container w3-light-grey\">\r\n      <h3>List Details</h3>\r\n    </div>\r\n\t\r\n\t<span class=\"w3-container\">\r\n      <p>\r\n\t  <label>List Name</label></p>\r\n      <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"Title\">\r\n      \r\n\t\t\r\n      \r\n    </span>\r\n\r\n\r\n<div mat-dialog-actions>\r\n  <button class = \"w3-button w3-left w3-light-grey w3-round-large\" (click)=\"onClickOk()\">Add</button>\r\n</div>\r\n"

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project 1\Temp\ZoomRx-ToDo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map