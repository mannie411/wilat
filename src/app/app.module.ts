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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializationModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    ViewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
