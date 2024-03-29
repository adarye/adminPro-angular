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

  recuerdame: boolean = false;
  constructor(public router: Router, public _usuarioService: UsuarioService) {

  }

  ngOnInit(): void {

  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    // let usuario = new Usuario(null, forma.value.email, forma.value.password);
    const usuario: Usuario = {
      email: forma.value.email,
      password: forma.value.password,
    };
    this._usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe((res: any) => {
        console.log(res.access_token);
        localStorage.setItem('token', res.access_token)
        this.router.navigate(['/dashboard'])
      }
      );

  }

}
