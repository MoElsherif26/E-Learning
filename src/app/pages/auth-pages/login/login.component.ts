import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/api_calls/auth.service';
import { LOCALSTORAGEKEYS, ROUTES } from '../../../core/constants';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem(LOCALSTORAGEKEYS.USER_TOKEN, res.bearerToken);
        console.log(res.bearerToken);
        this.authService.decodeData();
        console.log(this.authService.userData?.Id);
        console.log(this.authService.userData);

        if (this.authService.userData?.role === 'Student') {
          console.log('Student');
          this.router.navigate([ROUTES.STUDENT.CLASSROOMS]);
        } else if (this.authService.userData?.role === 'Teacher') {
          console.log('Teacher');
          this.router.navigate([ROUTES.TEACHER.CLASSROOM]);
        } else if (this.authService.userData?.role === 'Admin') {
          console.log('Admin');
          this.router.navigate([ROUTES.ADMIN.TEACHERS]);
        }
      },
    });

    console.log('Form submitted:', this.loginForm.value);
  }
}
