import { Injectable } from "@angular/core";
import { AppData, AppLogs } from "./app.data";

@Injectable()
export class AppDataService { 
   getLogs(): AppData[] { 
       return AppLogs;
   }
}