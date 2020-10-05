import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/service.index';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame:boolean = false;
  constructor(public router: Router, public _usuarioService:UsuarioService) {

  }

  ngOnInit(): void {

  }

  ingresar(forma: NgForm) {
    console.log(forma.invalid);
    if(forma.invalid){
      return;
    }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService.login(usuario, forma.value.recuerdame)
    .subscribe(res=>console.log(res));

  }

}
