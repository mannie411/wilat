import { Routes } from '@angular/router';

import { DashboardComponent, MembersComponent } from '../../views/dashboard';

export const DashboardLayoutRoutes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Wilat | Dashboard' },
      },
      {
        path: 'members',
        component: MembersComponent,
        data: { title: 'Wilat | Memebers' },
      },
    ],
  },
];
