import { URL_SERVICIOS } from './../../config/config';
import { Usuario } from './../../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient,

  ) {

  }
  login(usuario:Usuario, recuerdame: boolean = false){
    const url = URL_SERVICIOS + 'login';
   return this.http.post(url,usuario,{
    headers: new HttpHeaders({
      'Accept': 'application/json'
    })

  });

  }
  crearUsuario(usuario: Usuario) {
    console.log(usuario);
    const url = URL_SERVICIOS + 'register';
    return this.http.post(url, usuario, {
      headers: new HttpHeaders({
        'Authorization': `Bearer VT4Tm7c3u45evrJyQkUKGaSapWwSXTYrR9oZjKH`,
        'Accept': 'application/json'
      })

    }).map((res: any) => {
      Swal.fire({
        title: 'Correcto',
        text: res.email,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      return res;
    })

  }

}
