import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';


import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';

import { RegisterComponent } from './authentication/register/register.component';
import { GraficadonaComponent } from './components/graficadona/graficadona.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, GraficadonaComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
