import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import {  Router, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { interceptorInterceptor } from './interceptors/interceptor.interceptor';
import { Observable, catchError, map } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [HttpClient],
    }, provideAnimationsAsync(),provideHttpClient(withInterceptorsFromDi(),withInterceptors([interceptorInterceptor]),)]
};
function initializeAppFactory(httpClient: HttpClient,route:Router): () => Observable<any> {
  return () => httpClient.get("http://localhost:3000/authToken")
    .pipe(
      map((data:any)=>{
        localStorage.setItem("authToken",data.token)
        return true;
      }),
      catchError(error => {

        route.navigate(['/error']); 

        throw error; 

      })
    )
 }
