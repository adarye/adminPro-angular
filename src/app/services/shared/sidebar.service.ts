import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'dashboard', url:'/dashboard'},
        {titulo: 'ProgressBar', url:'/progress'},
        {titulo: 'Graficas', url:'/graficas1'},
        {titulo: 'Promesas', url:'/promesas'},
        {titulo: 'rxjs', url:'/rxjs'},
      ]

    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Usuarios', url: '/usuarios'},
        {titulo: 'Hospitales', url: '/hospitales'},
        {titulo: 'Médicos', url: '/medicos'}
      ]
    }
  ]
  constructor() { }
}
