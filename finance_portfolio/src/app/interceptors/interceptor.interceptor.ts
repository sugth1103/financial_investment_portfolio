import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
 const reqWithAuthorisation = req.clone({
    setHeaders: {
      Authorization: `AuthorisationToken-dgsydjhsbdshdusdu`
    }
  });
  return next(reqWithAuthorisation).pipe(
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
