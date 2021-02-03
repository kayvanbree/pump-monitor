import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './modules/app-router.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import {StoreModule} from './store/store.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {OktaModule} from './modules/okta.module';
import { LoginComponent } from './pages/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {OktaHttpInterceptor} from './interceptors/okta-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UserMenuComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule,
    OktaModule,
    HttpClientModule,
  ],
  providers: [
    {  provide: HTTP_INTERCEPTORS,
      useClass: OktaHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
