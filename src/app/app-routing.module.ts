import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { NopageFoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './authentication/register/register.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { PagesRoutingModule } from './pages/pages.routes';


const routes: Routes = [
  {
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
  },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'**', component: NopageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
