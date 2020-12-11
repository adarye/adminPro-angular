import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  usuario: Usuario;
  constructor(public _usuarioService: UsuarioService) {
    this._usuarioService.get().subscribe((res: Usuario) => {
      this.usuario = res
    })
  }

  ngOnInit(): void {
  }
  guardar(usuario: Usuario) {
    this._usuarioService.update(usuario).subscribe((res: any) => {
      Swal.fire({
        title: 'Transacción exitosa',
        text: 'Usuario actualizado',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })
  }

}
