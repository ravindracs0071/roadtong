import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { PortfolioComponent } from "./portfolio.component";
import { AppErrorComponent } from "./app-error.component";

import { AppFormComponent } from "./app-form.component";
import { AppChildComponent } from "./app-child.component";
import { AppParentComponent } from "./app-parent.component";
import { AppCounterComponent } from "./app.counter.component";
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        AppErrorComponent,
        AppFormComponent,
        AppChildComponent,
        AppParentComponent,
        AppCounterComponent,
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }