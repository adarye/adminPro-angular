import { Medico } from 'src/app/models/medico.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_API } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(public http: HttpClient) { }
  get(desde:number){
    let url = URL_API + 'medicos'+ '?page=' + desde;
    return this.http.get(url);
  }
  create(medico:Medico){
    let url = URL_API + 'medicos';
    return this.http.post(url, medico);
  }
  update(medico:Medico, id:bigint){
    let url = URL_API + 'medicos/' + id;
    return this.http.put(url, medico);
  }
  searchMedico(param: string, desde: number = 0) {
    const url = URL_API + 'medicos/search/' + param + '?page=' + desde;
    return this.http.get(url).map((res: any) => {
      return res;
    })
  }
  destroy(id:number){
    let url = URL_API + 'medicos'+ '/'+ id;
    return this.http.delete(url);
  }
  show(id:number){
    let url = URL_API + 'medicos/' + id
    return this.http.get(url);
  }


}
