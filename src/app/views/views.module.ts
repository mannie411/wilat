import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MembersComponent } from './dashboard/members/members.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RegisterComponent } from './auth/register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MembersComponent,
    SigninComponent,
    RegisterComponent,
    ErrorPageComponent,
  ],
  imports: [],
})
export class ViewsModule {}
