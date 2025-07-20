import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/splash/splash.component').then((c) => c.SplashComponent),
  },
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
          import('./pages/login/login.component').then((c) => c.LoginComponent),
        title: 'login',
      },
      {
        path: 'register',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
        title: 'register',
      },
    ],
  },
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
          import('./pages/courses/courses.component').then(
            (c) => c.CoursesComponent
          ),
        title: 'Courses',
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./layout/admin-layout/admin-layout.component').then(
        (c) => c.AdminLayoutComponent
      ),
    // children: [
    //   {
    //     path: 'courses',
    //     // canActivate: [loggedGuard],
    //     loadComponent: () =>
    //       import('./pages/courses/courses.component').then((c) => c.CoursesComponent),
    //     title: 'Courses',
    //   }
    // ]
  },
];
