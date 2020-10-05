import { UsuarioService } from './../../services/service.index';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public usuarioService: UsuarioService, public router: Router) { }


  ngOnInit(): void {
    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password_confirmation: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)

    },
      { validators: this.sonIguales('password', 'password_confirmation') }
    );
  }
  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }
  registrar() {
    if (this.forma.invalid) {
      Swal.fire({
        title: 'Advertencia',
        text: 'Todos los campos son obligatorios',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
      return;
    }
    if (!this.forma.value.condiciones) {
      Swal.fire({
        title: 'Advertencia',
        text: 'Acepta los terminos y condiciones',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
      return;
    }
    this.usuarioService.crearUsuario(this.forma.value)
      .subscribe(response =>  this.router.navigate(['/login']));
  }

}
