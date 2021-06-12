import { ModalUploadComponent } from './../components/modal-upload/modal-upload.component';
import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopageFoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NopageFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
     ModalUploadComponent
  ],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [
    NopageFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
     ModalUploadComponent
  ],
  providers: [],
})
export class SharedModule {}
