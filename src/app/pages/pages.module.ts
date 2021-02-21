

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms'

import { SharedModule } from '../shared/shared.module';

import { ChartsModule } from 'ng2-charts';


import { GraficadonaComponent } from '../components/graficadona/graficadona.component';
import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ProfileComponent } from './profile/profile.component';

import { PipesModule } from './../pipes/pipes.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';






@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficadonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    ProfileComponent,
    UsuariosComponent,
     ModalUploadComponent,
     HospitalesComponent,
     MedicosComponent,
     MedicoComponent,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule,
    CommonModule,
    PipesModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
  ],
  providers: [],
})
export class PagesModule {}
