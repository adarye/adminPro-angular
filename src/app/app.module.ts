


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

import { RegisterComponent } from './authentication/register/register.component';
import { ServiceModule } from './services/service.module';

import { AuthInterceptor } from './interceptors/httpconfig.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';





@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, PagesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ServiceModule, ReactiveFormsModule, SharedModule],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
