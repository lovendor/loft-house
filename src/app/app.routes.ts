// import { Routes } from '@angular/router';
// import { LoginFormComponent } from './components/login-form/login-form.component';
// import { HomeComponent } from './components/home/home.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'login', component: LoginFormComponent }
// ];
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { loginRedirectGuard } from './guards/login-redirect.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [loginRedirectGuard],
    loadComponent: () =>
      import('./components/auth/login-form/login-form.component').then(
        (m) => m.LoginFormComponent
      )
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent)
  }
];
