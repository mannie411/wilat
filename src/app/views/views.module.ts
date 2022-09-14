import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MembersComponent } from './dashboard/members/members.component';
import { SigninComponent } from './base/signin/signin.component';
import { RegisterComponent } from './base/register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MembershipComponent } from './base/membership/membership.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MembersComponent,
    SigninComponent,
    RegisterComponent,
    ErrorPageComponent,
    MembershipComponent,
  ],
  imports: [],
})
export class ViewsModule {}
