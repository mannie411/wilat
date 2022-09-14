import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseLayoutRoutes } from './base-layout.routing';
import { BaseLayoutComponent } from './base-layout.component';
import { SharedModule } from '@/app/shared';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BaseLayoutRoutes),
    FormsModule,
    SharedModule,
  ],
})
export class BaseLayoutModule {}
