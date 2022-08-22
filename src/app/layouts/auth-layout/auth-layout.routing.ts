import { Routes } from '@angular/router';
import { RegisterComponent, SigninComponent } from '../../views/auth';

export const AuthLayoutRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
];
