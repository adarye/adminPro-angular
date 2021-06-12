import { UsuarioService } from 'src/app/services/service.index';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public _usuarioService: UsuarioService, public router:Router){

  }
  canActivate(
   ) {
     if(this._usuarioService.usuario.role === 'ADMIN_ROLE'){
      return true;
     }
     else{
       console.log('Bloqueado');
       this._usuarioService.logout();
      //  this.router.navigate(['/login'])
       return false;
     }

  }

}
