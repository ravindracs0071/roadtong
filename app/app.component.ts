import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppDataService } from "./app-data.service";
@Component({
    selector: 'app-root',
    template: `
    Root Componet: <br/>
    <app-counter></app-counter>
    `,
    providers: []
})
export class AppComponent {

    constructor(private appDataService: AppDataService) {
        //http get example
        // this.http.get('/test').subscribe((res) => { console.log(res); });
        // this.appDataService.getLogs();
    }
}