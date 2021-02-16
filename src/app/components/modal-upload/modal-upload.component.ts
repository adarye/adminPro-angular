import { SubirArchivosService } from './../../services/subir-archivo/subir-archivos.service';
import { ModalUploadService } from './modal-upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: [
  ]
})
export class ModalUploadComponent implements OnInit {
  imagenTemp: string = '';
  imagenSubir: File;
  imagen_base64: string;
  constructor(public _modalUploadService: ModalUploadService, public _subirArchivoService: SubirArchivosService) {
    console.log('modal listo');
  }

  ngOnInit(): void {
  }
  mostrarModal() {

  }
  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUploadService.ocultarModal();
  }
  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;

      return;
    }
    this.imagenSubir = archivo;
    let reader = new FileReader();
    let url = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result as string;
  }
  subirImagen() {
    if(this.imagenSubir){
    const reader = new FileReader();
    reader.readAsDataURL(this.imagenSubir);
    reader.onload = () => {
      this._subirArchivoService.subirArchivo(reader.result, this._modalUploadService.tipo, this._modalUploadService.id)
        .subscribe(res => {
          this._modalUploadService.notificacion.emit(res);
          this.cerrarModal();
        })
      }
    }

  };
}
