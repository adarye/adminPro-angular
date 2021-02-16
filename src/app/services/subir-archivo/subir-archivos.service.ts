import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_API } from './../../config/config';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivosService {

  constructor(public http: HttpClient,
  ) { }

  subirArchivo(archivo: any, tipo: string, id: bigint) {
    const url = URL_API + tipo + '-update' + '/' + id;
    return this.http.put(url, {'img': archivo }, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      })

    });

  }
}
