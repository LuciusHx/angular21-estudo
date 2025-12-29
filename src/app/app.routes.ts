import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { Main } from './layouts/main/main';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Main,
    children: [
      { path: '', component: Home },
      { path: 'dashboard', component: Dashboard },
    ],
  },
];
