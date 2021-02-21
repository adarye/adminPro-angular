import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_API } from './../../config/config';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivosService {
  url: string;
  constructor(public http: HttpClient,
  ) { }

  subirArchivo(archivo: any, tipo: string, id: bigint) {
    const url = "";
    if (tipo == 'users') {
      this.url = URL_API + tipo + '-update' + '/' + id;
    }
    else{
       this.url = URL_API + tipo + '/' + id;
    }
    return this.http.put(this.url, { 'img': archivo }, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      })

    });

  }
}
