import { Component } from "@angular/core";
import { AppData } from "./app.data";
@Component({
    selector: 'app-form',
    templateUrl: 'app/app-form.component.html'
})
export class AppFormComponent {
    model = new AppData();
    tempData: string[] = [];
    isSubmitted: boolean = false;

    onSubmit(e: any) {
        e.preventDefault();
        let logName = this.model.logName;
        this.tempData.push(logName);
    }


 }