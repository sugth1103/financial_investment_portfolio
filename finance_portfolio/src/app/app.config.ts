import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { interceptorInterceptor } from './interceptors/interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),provideHttpClient(withInterceptorsFromDi(),withInterceptors([interceptorInterceptor]),)]
};
