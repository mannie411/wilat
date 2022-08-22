import { Routes } from '@angular/router';

import { DashboardComponent, MembersComponent } from '../../views/dashboard';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent },
];
