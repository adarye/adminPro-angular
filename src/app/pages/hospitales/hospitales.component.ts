import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/service.index';
import { Hospital } from './../../models/hospital.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  hospitales: Hospital[] = []
  loading: boolean = true;
  desde: number = 1;
  total: number = 0;
  hasta: number = 0;
  buscador:string = "";

  constructor(public _hospitaleService: HospitalService, public _modalUploadService: ModalUploadService) {
    this.get();
  }

  ngOnInit(): void {
    this._modalUploadService.notificacion.subscribe(res => this.get());
  }

  get() {
    this._hospitaleService.get(this.desde).subscribe((res: any) => {
      this.hospitales = res.data;
      this.loading = false;
      this.total = res.total;
      this.hasta = res.last_page
      this.desde = res.current_page
    })
  }

  create(){
    Swal.fire({
      title: 'Nombre',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
       this._hospitaleService.create({'nombre':login}).subscribe(res =>{console.log('creado');})
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        this.get();
        Swal.fire({
          title: 'Hospital creado con exito',
          imageUrl: result.value.avatar_url
        })
      }
    })
  }

  update(id:bigint, nombre:string){
  this._hospitaleService.update(id,nombre).subscribe(res =>{
    Swal.fire({
      title: 'Transacción correcta',
      text: 'El hospital ha sido actualizado',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  })
  }
  destroy(id: bigint) {
      Swal.fire({
        title: 'Esta seguro?',
        text: "No podras revertirlo después",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this._hospitaleService.destroy(id)
            .subscribe(res => {
              Swal.fire(
                'Eliminado!',
                'Este hospital ha sido eliminado correctamente.',
                'success'
              )
              this.get();
            })

        }
      })


  }

  nextPage() {
    this.desde = this.desde + 1;
    if (this.desde <= this.hasta) {
      if (this.buscador.length > 0) {
        - this.paginarHospitalBuscado(this.buscador)
      }
      else {
        this.get();
      }
    }
  }
  backPage() {
    this.desde = this.desde - 1;
    console.log(this.desde);
    if (this.desde >= 1) {
      if (this.buscador.length > 0) {
         this.paginarHospitalBuscado(this.buscador)
      }
      else {
        this.get();
      }
    }
  }

  searchHospital(param: string) {
    if (param.length > 0) {
      this.desde = 0;
      this.paginarHospitalBuscado(param)
    }
    else {
      this.desde = 1;
      this.get();
    }
  }
  paginarHospitalBuscado(param: string) {
    this._hospitaleService.searchHospital(param, this.desde)
      .subscribe(res => {
        this.hospitales = res.data
        this.total = res.total;
        this.hasta = res.last_page
        this.desde = res.current_page
      })
  }

}
