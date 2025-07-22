import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/api_calls/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^\d{11}$/)],
        ],
        name: ['', [Validators.required, Validators.minLength(6)]],
        nationalId: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
        address: ['', [Validators.required, Validators.minLength(6)]],
        gender: ['', [Validators.required]],
        role: ['', Validators.required],
      },
      { validators: this.passwordsMatchValidator }
    );
  }
  allowOnlyNumbers(event: KeyboardEvent): void {
    const charCode = event.key;
    if (!/^\d$/.test(charCode)) {
      event.preventDefault();
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordsMatchValidator: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  };

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { role, ...payload } = this.registerForm.value;
    console.log('Sending payload:', payload);

    if (this.registerForm.get('role')?.value === 'teacher') {
      this.authService.registerTeacher(payload).subscribe({
        next: (res: any) => {
          console.log(res.message);
          this.toastr.success(res.message);
          this.router.navigate(['/login']);
        },
      });
    } else if (this.registerForm.get('role')?.value === 'student') {
      this.authService.registerStudent(payload).subscribe({
        next: (res: any) => {
          console.log(res.message);
          this.toastr.success(res.message);
          this.router.navigate(['/auth/login']);
        },
      });
    }
    console.log('Form submitted:', this.registerForm.value);
  }
}
