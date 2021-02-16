import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {
  public tipo: string;
  public id: bigint;
  public oculto: string = 'oculto';
  public notificacion = new EventEmitter<any>();
  constructor() { }
  ocultarModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }
  mostrarModal(tipo: string, id: bigint) {
    this.oculto = ''
    this.tipo = tipo;
    this.id = id;
  }
}
