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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
