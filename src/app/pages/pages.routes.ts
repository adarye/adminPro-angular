import { BusquedGeneralComponent } from './busqued-general/busqued-general.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginGuardGuard } from './../services/guards/login-guard.guard';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicoComponent } from './medicos/medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminGuard } from '../services/guards/admin.guard';

const PagesRoutes: Routes = [

      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'ProgressBar'}  },
      { path: 'graficas1', component: Graficas1Component , data: {titulo: 'Graficas'}  },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}  },
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RXJS'}  },
      { path: 'settings', component: AccountSettingsComponent, data: {titulo: 'Ajuestes de Tema'}  },
      { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de usuario'}  },
      { path: 'busqueda/:termino', component: BusquedGeneralComponent, data: {titulo: 'Buscador'}  },
      //Mantenimientos
      { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de usuarios'}, canActivate: [ AdminGuard]  },
      { path: 'hospitales', component: HospitalesComponent, data: {titulo: 'Mantenimiento de hospitales'}  },
      { path: 'medicos', component: MedicosComponent, data: {titulo: 'Mantenimiento de medicos'}  },
      { path: 'medico/:id', component: MedicoComponent, data: {titulo: 'Actualizar medico'}  },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
