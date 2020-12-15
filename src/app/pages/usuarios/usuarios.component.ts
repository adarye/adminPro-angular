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
  desde: number = 0;
  total: number = 0;


  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
     this._usuarioService.getUsuarios(this.desde)
     .subscribe(res =>{
       console.log(res);
       this.usuarios = res.data;
       this.total = res.total;
     })
  }

}
