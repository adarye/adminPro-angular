import { LoginGuardGuard } from './../services/guards/login-guard.guard';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'}  },
      { path: 'graficas1', component: Graficas1Component , data: {titulo: 'Graficas'}  },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}  },
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RXJS'}  },
      { path: 'settings', component: AccountSettingsComponent, data: {titulo: 'Ajuestes de Tema'}  },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
