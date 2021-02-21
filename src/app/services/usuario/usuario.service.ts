import { URL_SERVICIOS, URL_API } from './../../config/config';
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

  token: string = "";

  usuario: Usuario;

  constructor(
    public http: HttpClient,
    public router: Router

  ) {
    this.token = localStorage.getItem('token');
  }
  login(usuario: Usuario, recuerdame: boolean = false) {
    const url = URL_SERVICIOS + 'login';
    return this.http.post(url, usuario,
    )

  }
  get() {
    const url = URL_SERVICIOS + 'user';
    let user;
    user = this.http.get(url);
    user.subscribe(res => {
      this.usuario = res;
      console.log(res);
    });
    return user;
  }
  update(usuario: Usuario) {
    const url = URL_API + 'user-update';
    return this.http.post(url, usuario);
  }

  updateUser(usuario: Usuario, id: bigint) {
    const url = URL_API + 'users-update/' + id;
    return this.http.put(url, usuario);
  }

  validarEstadoLogin(): boolean {
    return (this.token && this.token.length > 5) ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + 'register';
    return this.http.post(url, usuario).map((res: any) => {
      Swal.fire({
        title: 'Correcto',
        text: res.email,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
      return res;
    })
  }
  getUsuarios(desde: number = 0) {
    const url = URL_API + 'users?page=' + desde;
    return this.http.get(url).map((res: any) => {
      return res;
    })
  }

  buscarUsuarios(param: string, desde: number = 0) {
    const url = URL_API + 'users/' + param + '?page=' + desde;
    return this.http.get(url).map((res: any) => {
      return res;
    })
  }
  destroyUsuario(id: bigint) {
    const url = URL_API + 'users-delete/' + id;
    return this.http.get(url).map((res: any) => {
      return res;
    })
  }

}
