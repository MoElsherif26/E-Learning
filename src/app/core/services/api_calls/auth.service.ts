import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  LoginRequestDto,
  RegisterRequestDto,
} from '../../interfaces/PostRequestPayloads';
import { ENDPOINTS, LOCALSTORAGEKEYS, ROUTES, UserTokenData } from '../../constants';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  userData: UserTokenData | null = null;
  id = inject(PLATFORM_ID);
  registerStudent(payload: RegisterRequestDto) {
    return this.http.post(ENDPOINTS.AUTH.REGISTER_STUDENT, payload);
  }

  registerTeacher(payload: RegisterRequestDto) {
    return this.http.post(ENDPOINTS.AUTH.REGISTER_TEACHER, payload);
  }

  login(payload: LoginRequestDto) {
    return this.http.post(ENDPOINTS.AUTH.LOGIN, payload);
  }

  decodeData() {
    if (!isPlatformBrowser(this.id)) return;

    const token = localStorage.getItem(LOCALSTORAGEKEYS.USER_TOKEN);
    if (!token) {
      this.userData = null;
      return;
    }

    try {
      this.userData = jwtDecode(token);
    } catch (error) {
      console.error('Token decode error:', error);
      this.userData = null;
    }
  }

  logout() {
    localStorage.removeItem(LOCALSTORAGEKEYS.USER_TOKEN);
    this.router.navigate([ROUTES.AUTH.LOGIN]);
    this.userData = null;
  }
}
