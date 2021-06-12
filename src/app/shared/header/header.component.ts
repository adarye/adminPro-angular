import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  user: any = {
  };
  constructor( public _usuarioService: UsuarioService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this._usuarioService.get()
    .subscribe((res: any) => {
      this.user = res;
    })
  }
  logout(){
      this._usuarioService.logout();
  }
  buscar(param: string){
    this.router.navigate(['/busqueda', param]);

  }

}
