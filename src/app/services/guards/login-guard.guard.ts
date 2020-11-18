import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../service.index';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(public _usuarioService: UsuarioService, public router: Router) {

  }
  canActivate() {
    console.log(this._usuarioService.validarEstadoLogin);
    if (localStorage.getItem('token')) {
      console.log('si Pasa');
      return true;
    }
    else {
      console.log('no pasa')
      this.router.navigate(['/login'])
      return false;

    }


  }

}
