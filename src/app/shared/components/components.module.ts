import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent, DashboardComponent } from './nav';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    FooterComponent,
    SidebarComponent,
    BaseComponent,
    DashboardComponent,
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    BaseComponent,
    DashboardComponent,
  ],
})
export class ComponentsModule {}
