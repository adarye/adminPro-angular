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
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NopageFoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  providers: [],
})
export class SharedModule {}
