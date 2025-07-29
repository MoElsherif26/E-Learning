import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const handleErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      const skipErrorToast = req.headers.get('X-Skip-Toastr') === 'true';

      if (!skipErrorToast) {
        toastr.error(err.error.message || 'An unexpected error occurred');
      }

      return throwError(() => err);
    })
  );
};
