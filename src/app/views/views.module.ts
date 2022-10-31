import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { SharedModule } from '@/app/shared';

// Components
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MembersComponent } from './dashboard/members/members.component';
import { SigninComponent } from './base/signin/signin.component';
import { RegisterComponent } from './base/register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MembershipComponent } from './base/membership/membership.component';
import { Angular4PaystackModule } from '../features/payment/angular4-paystack.module';

@NgModule({
  declarations: [
    DashboardComponent,
    MembersComponent,
    SigninComponent,
    RegisterComponent,
    ErrorPageComponent,
    MembershipComponent,
  ],
  imports: [SharedModule, CommonModule, Angular4PaystackModule],
})
export class ViewsModule {}
