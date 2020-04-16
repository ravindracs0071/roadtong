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
var core_1 = require("@angular/core");
// import { CommonModule } from "@angular/common";
var app_data_1 = require('./app.data');
var AppChildComponent = (function () {
    function AppChildComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', app_data_1.AppData)
    ], AppChildComponent.prototype, "appData", void 0);
    __decorate([
        core_1.Input('parentName'), 
        __metadata('design:type', String)
    ], AppChildComponent.prototype, "parentName", void 0);
    AppChildComponent = __decorate([
        core_1.Component({
            selector: 'app-child',
            template: "\n    <h3>Log Name {{appData.logName}}</h3>\n    <p>Call From {{parentName}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppChildComponent);
    return AppChildComponent;
}());
exports.AppChildComponent = AppChildComponent;
//# sourceMappingURL=app-child.component.js.map