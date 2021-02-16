import { ModalUploadService } from './../components/modal-upload/modal-upload.service';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  SubirArchivosService,
  LoginGuardGuard
} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [SettingsService, SharedService, SidebarService, UsuarioService, SubirArchivosService, LoginGuardGuard, ModalUploadService],
})
export class ServiceModule {}
