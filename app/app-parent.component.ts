import { Component } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { AppLogs } from './app.data';

@Component({
    selector: 'app-parent',
    template: `
    <h3>Parent</h3>
    <app-child *ngFor="let log of appLogs"
    [appData]="log"
    [parentName]="parentName">
    </app-child>
    `
})
export class AppParentComponent { 
    appLogs = AppLogs;
    parentName: string = "Parent Component"; 
}