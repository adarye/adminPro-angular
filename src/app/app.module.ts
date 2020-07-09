import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';


import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';

import { RegisterComponent } from './authentication/register/register.component';
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, FormsModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
