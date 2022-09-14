import { Routes } from '@angular/router';
import {
  MembershipComponent,
  RegisterComponent,
  SigninComponent,
} from '../../views/base';

export const BaseLayoutRoutes: Routes = [
  {
    path: 'membership',
    component: MembershipComponent,
    data: { title: 'Wilat | Membership Form' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Wilat | Register' },
  },
  {
    path: 'signin',
    component: SigninComponent,
    data: { title: 'Wilat | Login' },
  },
];
