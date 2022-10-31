import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { RecieptComponent } from './features/reciept/reciept.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'membership',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@/app/layouts/dashboard-layout/dashboard-layout.module').then(
            (m) => m.DashboardLayoutModule
          ),
      },
    ],
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@/app/layouts/base-layout/base-layout.module').then(
            (m) => m.BaseLayoutModule
          ),
      },
    ],
  },
  {
    path: 'reciept',
    component: RecieptComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
