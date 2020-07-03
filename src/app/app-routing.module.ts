import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { NopageFoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './authentication/register/register.component';


const routes: Routes = [
  
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'**', component: NopageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
