import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Layout Modules
import { AdminLayoutModule } from './admin-layout/admin-layout.module';
import { AuthLayoutModule } from './auth-layout/auth-layout.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, AdminLayoutModule, AuthLayoutModule],
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
