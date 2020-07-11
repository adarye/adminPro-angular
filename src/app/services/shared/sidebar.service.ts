import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-view-dashboard',
      submenu: [
        {titulo: 'dashboard', url:'/dashboard'},
        {titulo: 'ProgressBar', url:'/progress'},
        {titulo: 'Graficas', url:'/graficas1'},
        {titulo: 'Promesas', url:'/promesas'},
        {titulo: 'rxjs', url:'/rxjs'},
      ]

    }
  ]
  constructor() { }
}
