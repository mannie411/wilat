import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent, DashboardComponent } from './nav';
import { AppbarComponent } from './appbar/appbar.component';
import { StepsComponent } from './steps/steps.component';
import { StepsContainerComponent } from './steps-container/steps-container.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    SidebarComponent,
    BaseComponent,
    DashboardComponent,
    AppbarComponent,
    StepsComponent,
    StepsContainerComponent,
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    BaseComponent,
    AppbarComponent,
    DashboardComponent,
    StepsComponent,
    StepsContainerComponent,
  ],
})
export class ComponentsModule {}
