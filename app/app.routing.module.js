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
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var portfolio_component_1 = require("./portfolio.component");
var app_error_component_1 = require("./app-error.component");
var app_counter_component_1 = require("./app.counter.component");
var appRoutes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full",
        component: home_component_1.HomeComponent
    },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    {
        path: "about-us",
        component: about_component_1.AboutComponent,
        children: [
            {
                path: "ceo",
                component: app_counter_component_1.AppCounterComponent
            },
            {
                path: "author",
                component: app_error_component_1.AppErrorComponent
            }
        ]
    },
    {
        path: "portfolio",
        component: portfolio_component_1.PortfolioComponent
    },
    {
        path: "**",
        component: app_error_component_1.AppErrorComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.module.js.map