import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [CommonModule, RouterModule.forChild(AuthLayoutRoutes), FormsModule],
})
export class AuthLayoutModule {}
