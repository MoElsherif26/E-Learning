import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LOCALSTORAGEKEYS, ROUTES } from '../constants';
import { AuthService } from '../services/api_calls/auth.service';

export const loggedGuard: CanActivateFn = (route, state) => {
  const id = inject(PLATFORM_ID);
  const router = inject(Router);
  const authService = inject(AuthService);
  if (isPlatformBrowser(id)) {
    if (localStorage.getItem(LOCALSTORAGEKEYS.USER_TOKEN)) {
      if (authService.userData?.role === 'Student')
        router.navigate([ROUTES.STUDENT.CLASSROOMS]);
      else if (authService.userData?.role === 'Admin')
        router.navigate([ROUTES.ADMIN.TEACHERS]);
      else if (authService.userData?.role === 'Teacher')
        router.navigate([ROUTES.TEACHER.CLASSROOM]);
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
