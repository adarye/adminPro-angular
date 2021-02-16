import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
  buscador: string = "";


  constructor(public _usuarioService: UsuarioService, public _modalUploadService: ModalUploadService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe(res => this.cargarUsuarios());
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

  destroyUsuario(id: bigint) {
    if (this._usuarioService.usuario.id === id) {
      Swal.fire({
        title: 'Transacción erronea',
        text: 'Este usuario no se puede eliminar, esta logueado actualmente.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    else {
      Swal.fire({
        title: 'Esta seguro?',
        text: "No podras revertirlo después",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this._usuarioService.destroyUsuario(id)
            .subscribe(res => {
              Swal.fire(
                'Eliminado!',
                'Este usuario ha sido eliminado correctamente.',
                'success'
              )
              this.cargarUsuarios();
            })

        }
      })
    }

  }
  actualizarUsuario(usuario: Usuario) {
    console.log(usuario);
    this._usuarioService.updateUser(usuario, usuario.id)
      .subscribe(res => {
        console.log(res);
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
