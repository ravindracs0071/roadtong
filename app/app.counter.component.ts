import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h5>Counter Value: {{currentCounter}}</h5>
    <input id="currentCounter" type="text" [(ngModel)]="currentCounter" />
    <button (click)="add()"> + </button>
    <button (click)="substract()"> - </button>
    `
})
export class AppCounterComponent 
{
   currentCounter: number = 0;
   add() {
       this.currentCounter++;
   }
   substract() {
    this.currentCounter--;
   }
}