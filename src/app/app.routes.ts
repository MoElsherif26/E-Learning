import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';
import { studentGuard } from './core/guards/student.guard';
import { teacherGuard } from './core/guards/teacher.guard';

export const routes: Routes = [
  // Empty
  {
    path: '',
    loadComponent: () =>
      import('./layout/blank-layout/blank-layout.component').then(
        (c) => c.BlankLayoutComponent
      ),
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
        path: 'classrooms',
        loadComponent: () =>
          import('./pages/student-pages/classrooms/classrooms.component').then(
            (c) => c.ClassroomsComponent
          ),
        title: 'Classrooms',
      },
      {
        path: 'my-classrooms',
        loadComponent: () =>
          import(
            './pages/student-pages/my-classrooms/my-classrooms.component'
          ).then((c) => c.MyClassroomsComponent),
        title: 'My Classrooms',
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
        path: 'classroom',
        loadComponent: () =>
          import('./pages/teacher-pages/classroom/classroom.component').then(
            (c) => c.ClassroomComponent
          ),
        title: 'Classroom',
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
        path: 'teachers',
        loadComponent: () =>
          import('./pages/admin-pages/teachers/teachers.component').then(
            (c) => c.TeachersComponent
          ),
        title: 'Teachers',
      },
      {
        path: 'students',
        loadComponent: () =>
          import('./pages/admin-pages/students/students.component').then(
            (c) => c.StudentsComponent
          ),
        title: 'Students',
      },
      {
        path: 'classrooms',
        loadComponent: () =>
          import('./pages/admin-pages/classrooms/classrooms.component').then(
            (c) => c.ClassroomsComponent
          ),
        title: 'Classrooms',
      },
      {
        path: 'subjects',
        loadComponent: () =>
          import('./pages/admin-pages/subjects/subjects.component').then(
            (c) => c.SubjectsComponent
          ),
        title: 'Subjects',
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
