import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register',
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./pages/forgot-password/forgot-password.component').then(
        (module) => module.ForgotPasswordComponent,
      ),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./pages/reset-password/reset-password.component').then(
        (module) => module.ResetPasswordComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/auth-layout/auth-layout.component').then(
        (module) => module.AuthLayoutComponent,
      ),
    children: [
      // login page
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register/register.component').then(
            (module) => module.RegisterComponent,
          ),
      },
    ],
  },
];
