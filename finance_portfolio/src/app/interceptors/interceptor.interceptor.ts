import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  
 const authResponse = req.clone({
    setHeaders: {
      Authorization: localStorage.getItem('authToken') || 'AuthToken'
    }
  });
  return next(authResponse).pipe(
    map(res => {
      return res;
    }),
    catchError((err: any) => {
      console.log("err is",err);
      router.navigate(['/error']);
      return throwError(err);

    })
  );
};
