import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  LoginRequestDto,
  RegisterRequestDto,
} from '../../interfaces/PostRequestPayloads';
import { ENDPOINTS, LOCALSTORAGEKEYS, UserTokenData } from '../../constants';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  router = inject(Router);
  userData: UserTokenData | null = null;

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
    const token = localStorage.getItem(LOCALSTORAGEKEYS.USER_TOKEN) as string;
    this.userData = jwtDecode(token);
  }

  logout() {
    localStorage.removeItem(LOCALSTORAGEKEYS.USER_TOKEN);
    this.router.navigate(['/auth/login']);
    this.userData = null;
  }
}
