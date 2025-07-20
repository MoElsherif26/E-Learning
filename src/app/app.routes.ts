import { Routes } from '@angular/router';

export const routes: Routes = [
  // Empty
  {
    path: '',
    loadComponent: () =>
      import('./layout/splash/splash.component').then((c) => c.SplashComponent),
  },
  // Auth
  {
    path: 'auth',
    loadComponent: () =>
      import('./layout/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent
      ),
    children: [
      {
        path: 'login',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/auth-pages/login/login.component').then(
            (c) => c.LoginComponent
          ),
        title: 'login',
      },
      {
        path: 'register',
        // canActivate: [loggedGuard],
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
    loadComponent: () =>
      import('./layout/student-layout/student-layout.component').then(
        (c) => c.StudentLayoutComponent
      ),
    children: [
      {
        path: 'courses',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/student-pages/courses/courses.component').then(
            (c) => c.CoursesComponent
          ),
        title: 'Courses',
      },
    ],
  },
  // Instructor
  {
    path: 'instructor',
    loadComponent: () =>
      import('./layout/instructor-layout/instructor-layout.component').then(
        (c) => c.InstructorLayoutComponent
      ),
    children: [
      {
        path: 'courses',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/instructor-pages/courses/courses.component').then(
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
          import('./pages/admin-pages/instructors/instructors.component').then(
            (c) => c.InstructorsComponent
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
];
