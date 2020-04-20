import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { PortfolioComponent } from "./portfolio.component";
import { AppErrorComponent } from "./app-error.component";

import { AppFormComponent } from "./app-form.component";
import { AppCounterComponent } from "./app.counter.component";

const appRoutes: Routes = [
    {
        path: "",
        redirectTo: "",
        pathMatch: "full",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "about-us",
        component: AboutComponent,
        children: [
            {
                path: "ceo",
                component: AppCounterComponent
            },
            {
                path: "author",
                component: AppErrorComponent
            }

        ]
    },
    {
        path: "portfolio",
        component: PortfolioComponent
    },
    {
        path: "**",
        component: AppErrorComponent
    }
]; 


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }