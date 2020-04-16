import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppChildComponent } from "./app-child.component";
import { AppParentComponent } from "./app-parent.component";
import { AppCounterComponent } from "./app.counter.component";
import { AppComponent } from './app.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppChildComponent,
        AppParentComponent,
        AppCounterComponent,
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }