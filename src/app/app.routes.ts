import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SplashComponent } from './layout/splash/splash.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/splash/splash.component').then((c) => c.SplashComponent),
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
        title: 'login',
      },
      {
        path: 'courses',
        // canActivate: [loggedGuard],
        loadComponent: () =>
          import('./pages/courses/courses.component').then(
            (c) => c.CoursesComponent
          ),
        title: 'courses',
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
  { path: '**', redirectTo: '' },
];
