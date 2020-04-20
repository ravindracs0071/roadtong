import { Component } from "@angular/core";

@Component({
    selector: 'app-about',
    template: `
    <div class="well well-sm">About Us</div>
    <a routerLink="/about-us/author" class="btn btn-info" role="button">Navigate</a>
    <router-outlet></router-outlet>
    `
})
export class AboutComponent 
{

}