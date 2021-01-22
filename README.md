# roadtong
// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public getToken(): string {
    return "dfsdfsdfsdfsdfsdfsdfsdfsdf";
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
}

Create an Interceptor
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
    return next.handle(request);
  }
}


Add interceptor to provider 

// src/app/app.module.ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './../auth/token.interceptor';
@NgModule({
  bootstrap: [AppComponent],
  imports: [...],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}

// src/app/ping/ping.component.ts
import { HttpClient } from '@angular/common/http';
// ...
export class AppComponent {
  constructor(public http: HttpClient) {}
  public ping() {
    this.http.get('https://example.com/api/things')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}

// src/app/auth/jwt.interceptor.ts
// ...
import 'rxjs/add/operator/do';
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
}

// src/app/auth/auth.service.ts
import { HttpRequest } from '@angular/common/http';
// ...
export class AuthService {
cachedRequests: Array<HttpRequest<any>> = [];
public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }
public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}

// src/app/auth/jwt.interceptor.ts
// ...
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
  return next.handle(req).do((event: HttpEvent<any>) => {
    if (event instanceof HttpResponse) {
      // do stuff with response if you want
    }
  }, (err: any) => {
    if (err instanceof HttpErrorResponse {
      if (err.status === 401) {
        this.auth.collectFailedRequest(request);
      }
    }
  });
}

Starting from Angular 2 
systemjs

As mentioned in there README, systemjs is universal dynamic module loader, it loads the following in the browser

    es6 modules
    AMD
    CommonJS
    global scripts,
    and much more

Observable: managing async data. used in http service, event system

    constructor

    ngOnChanges − When the value of a data bound property changes, then this method is called.

    ngOnInit − This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.

    ngDoCheck − This is for the detection and to act on changes that Angular can't or won't detect on its own.

    ngAfterContentInit − This is called in response after Angular projects external content into the component's view.

    ngAfterContentChecked − This is called in response after Angular checks the content projected into the component.

    ngAfterViewInit − This is called in response after Angular initializes the component's views and child views.

    ngAfterViewChecked − This is called in response after Angular checks the component's views and child views.

    ngOnDestroy − This is the cleanup phase just before Angular destroys the directive/component.



Ng - ANGULAR
Angular written in Typescript. 
Ng app building blocks a thing called NgModules. 
An app always has at least a Root Module, that enable bootstrapping 
An NgModule  is made up of Components. Each app has at least a Root component.

Components , services such like classes , marking with decorator tell angular how to use them.

Ng provides Router Service - navigation different views.

Angular building block:
Modules - NgModules 
NgModule define set of componets
An NgModule associated related code to form function units. 
Every Ng app has a Root Module conventionally named AppModule, which provides bootstrap mechanism that launch the application.




Components - 
Templates
Metadata
Data binding
Directives
Services
Dependency injection


https://medium.com/@mlbors/an-overview-of-angular-3ccd2950648e

https://medium.com/@bhavikagarg8/angular-architecture-overview-1e7cc7483a0
