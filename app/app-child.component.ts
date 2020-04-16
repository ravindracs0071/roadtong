import { Component, Input } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { AppData } from './app.data';

@Component({
    selector: 'app-child',
    template: `
    <h3>Log Name {{appData.logName}}</h3>
    <p>Call From {{parentName}}</p>
    `
})
export class AppChildComponent { 
   @Input() appData: AppData;
   @Input('parentName') parentName: string;
}