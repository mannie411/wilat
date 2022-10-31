import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppInitializationModule } from './app-initialization.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';
import { LayoutModule } from './layouts/layout.module';
import { Angular4PaystackModule } from './features/payment/angular4-paystack.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializationModule,
    HttpClientModule,
    CoreModule,
    // LayoutModule,
    SharedModule,
    ViewsModule,
    Angular4PaystackModule.forRoot(
      'pk_test_34e1d1b3cfede21ffcb8143bed51d406e4c80668'
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
