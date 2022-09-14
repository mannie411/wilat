import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardLayoutRoutes } from './dashboard-layout.routing';
import { DashboardLayoutComponent } from './dashboard-layout.component';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardLayoutRoutes),
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class DashboardLayoutModule {}
