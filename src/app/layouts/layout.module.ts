import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Layout Modules
import { DashboardLayoutModule } from './dashboard-layout/dashboard-layout.module';
import { BaseLayoutModule } from './base-layout/base-layout.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, DashboardLayoutModule, BaseLayoutModule],
  providers: [],
})
export class LayoutModule {
  // To guard against a lazy loaded module re-importing GreetingModule, add the following GreetingModule constructor.
  // show this https://angular.io/guide/singleton-services
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: LayoutModule
  ) {
    if (parentModule) {
      throw new Error(
        'LayoutModule is already loaded. Import it in the AppModule only.'
      );
    }
  }
}
