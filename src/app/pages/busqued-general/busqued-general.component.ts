import { Medico } from 'src/app/models/medico.model';
import { Hospital } from './../../models/hospital.model';
import { Usuario } from './../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_API } from 'src/app/config/config';

@Component({
  selector: 'app-busqued-general',
  templateUrl: './busqued-general.component.html',
  styleUrls: ['./busqued-general.component.css']
})
export class BusquedGeneralComponent implements OnInit {

  usuarios: Usuario[] = [];
  hospitales: Hospital[] = [];
  medicos: Medico[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {
    activatedRoute.params.subscribe(params => {
      let termino = params['termino'];
      console.log(termino);
      this.search(termino);
    })
  }

  ngOnInit(): void {

  }
  search(param: string) {
    let url = URL_API + 'search/todo/' + param
    this.http.get(url).subscribe((res: any) => {
      this.hospitales = res[0].hospitales;
      this.medicos = res[0].medicos;
      this.usuarios = res[0].users;
    })

  }

}
