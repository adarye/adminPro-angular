import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 1;
  total: number = 0;
  hasta: number = 0;
  loading: boolean = true;
  buscador: string;


  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this._usuarioService.getUsuarios(this.desde)
      .subscribe(res => {
        console.log(res);
        this.usuarios = res.data;
        this.total = res.total;
        this.hasta = res.last_page
        this.desde = res.current_page
        this.loading = false;
      })
  }

  buscarUsuario(param: string) {
    if (param.length > 0) {
      this.desde = 0;
      this.paginarUsuarioBuscado(param)
    }
    else {
      this.desde = 1;
      this.cargarUsuarios();
    }
  }
  paginarUsuarioBuscado(param: string) {
    this._usuarioService.buscarUsuarios(param, this.desde)
      .subscribe(res => {
        this.usuarios = res.data
        this.total = res.total;
        this.hasta = res.last_page
        this.desde = res.current_page
      })
  }

  nextPage() {
    this.desde = this.desde + 1;
    if (this.desde <= this.hasta) {
      if (this.buscador.length > 0) {
        this.paginarUsuarioBuscado(this.buscador)
      }
      else {
        this.cargarUsuarios();
      }
    }
  }
  backPage() {
    this.desde = this.desde - 1;
    console.log(this.desde);
    if (this.desde >= 1) {
      if (this.buscador.length > 0) {
        this.paginarUsuarioBuscado(this.buscador)
      }
      else {
        this.cargarUsuarios();
      }
    }
  }

}
