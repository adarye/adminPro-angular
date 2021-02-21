import { Injectable } from '@angular/core';
import { URL_SERVICIOS, URL_API } from './../../config/config';
import { Hospital } from './../../models/hospital.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  constructor(public http: HttpClient) {
  }

  get(desde: number = 0) {
    return this.http.get(`${URL_API}hospital?page=${desde}`)

  }
  create(hospital:Hospital){
    const url = URL_API + 'hospital';
    return this.http.post(url,hospital)
      .map((res: any) => {
        return res;
      })
  }

  update(id: bigint, nombre: string) {
    const url = URL_API + 'hospital' + '/' + id;
    return this.http.put(url, {'nombre': nombre})
      .map((res: any) => {
        return res;
      })
  }
  destroy(id:bigint){
    return this.http.delete(`${URL_API}hospital/${id}`)
  }
  obtenerHospital(id:number){
    return this.http.get(`${URL_API}hospital/${id}`)
  }

  searchHospital(param: string, desde: number = 0) {
    const url = URL_API + 'hospital/search/' + param + '?page=' + desde;
    return this.http.get(url).map((res: any) => {
      return res;
    })
  }

}
