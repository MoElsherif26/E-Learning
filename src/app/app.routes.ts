import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';
import { studentGuard } from './core/guards/student.guard';
import { teacherGuard } from './core/guards/teacher.guard';

export const routes: Routes = [
  // Empty
  {
    path: '',
    loadComponent: () =>
      import('./layout/blank-layout/blank-layout.component').then((c) => c.BlankLayoutComponent),
  },
  // Auth
  {
    path: 'auth',
    canActivate: [loggedGuard],
    loadComponent: () =>
      import('./layout/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth-pages/login/login.component').then(
            (c) => c.LoginComponent
          ),
        title: 'login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/auth-pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
        title: 'register',
      },
    ],
  },
  // Student
  {
    path: 'student',
    canActivate: [studentGuard],
    loadComponent: () =>
      import('./layout/student-layout/student-layout.component').then(
        (c) => c.StudentLayoutComponent
      ),
    children: [
      {
        path: 'courses',
        loadComponent: () =>
          import('./pages/student-pages/courses/courses.component').then(
            (c) => c.CoursesComponent
          ),
        title: 'Courses',
      },
    ],
  },
  // Teacher
  {
    path: 'teacher',
    canActivate: [teacherGuard],
    loadComponent: () =>
      import('./layout/teacher-layout/teacher-layout.component').then(
        (c) => c.TeacherLayoutComponent
      ),
    children: [
      {
        path: 'courses',
        loadComponent: () =>
          import('./pages/teacher-pages/courses/courses.component').then(
            (c) => c.CoursesComponent
          ),
        title: 'Courses',
      },
    ],
  },
  // Admin
  {
    path: 'admin',
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout.component').then(
        (c) => c.AdminLayoutComponent
      ),
    children: [
      {
        path: 'instructors',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/admin-pages/teachers/teachers.component').then(
            (c) => c.TeachersComponent
          ),
        title: 'Instructors',
      },
      {
        path: 'students',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/admin-pages/students/students.component').then(
            (c) => c.StudentsComponent
          ),
        title: 'Students',
      },
      {
        path: 'courses',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/admin-pages/courses/courses.component').then(
            (c) => c.CoursesComponent
          ),
        title: 'Courses',
      },
    ],
  },

  // Not found
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
    title: 'not-found',
  },
];
