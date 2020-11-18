import { URL_SERVICIOS } from './../../config/config';
import { Usuario } from './../../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;

  constructor(
    public http: HttpClient,
    public router: Router

  ) {
    this.token = localStorage.getItem('token');
  }
  login(usuario: Usuario, recuerdame: boolean = false) {
    const url = URL_SERVICIOS + 'oauth/token';
    return this.http.post(url, usuario);

  }
  get() {
    const url = URL_SERVICIOS + 'user';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      })

    });
  }

  validarEstadoLogin(): boolean {
    return (this.token.length > 5) ? true : false;

  }

  logout(){
    this.token = ''
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
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
