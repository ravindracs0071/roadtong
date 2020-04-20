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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var portfolio_component_1 = require("./portfolio.component");
var app_error_component_1 = require("./app-error.component");
var app_form_component_1 = require("./app-form.component");
var app_child_component_1 = require("./app-child.component");
var app_parent_component_1 = require("./app-parent.component");
var app_counter_component_1 = require("./app.counter.component");
var app_component_1 = require('./app.component');
var app_routing_module_1 = require("./app.routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                portfolio_component_1.PortfolioComponent,
                app_error_component_1.AppErrorComponent,
                app_form_component_1.AppFormComponent,
                app_child_component_1.AppChildComponent,
                app_parent_component_1.AppParentComponent,
                app_counter_component_1.AppCounterComponent,
                app_component_1.AppComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map