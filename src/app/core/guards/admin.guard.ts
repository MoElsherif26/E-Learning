import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LOCALSTORAGEKEYS, ROUTES } from '../constants';
import { AuthService } from '../services/api_calls/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const id = inject(PLATFORM_ID);
  const router = inject(Router);
  const authService = inject(AuthService);

  if (isPlatformBrowser(id)) {
    if (localStorage.getItem(LOCALSTORAGEKEYS.USER_TOKEN)) {
      authService.decodeData();
      if (authService.userData?.role === 'Admin') return true;
      return false;
    } else {
      router.navigate([ROUTES.AUTH.LOGIN]);
      return false;
    }
  } else {
    return false;
  }
};
