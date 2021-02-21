
import { Hospital } from './../../models/hospital.model';
import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService, ModalUploadService, HospitalService } from 'src/app/services/service.index';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {





  buscador: string = ""
  loading: boolean = true;
  total: number = 0;
  desde: number = 1;
  hasta: number = 0;
  medicos: Medico[] = []
  constructor(public _medicoService: MedicoService, public _modalUploadService: ModalUploadService) {
    this.get();
  }

  ngOnInit(): void {
    this._modalUploadService.notificacion.subscribe(res => this.get());


  }
  get() {
    this._medicoService.get(this.desde).subscribe((res: any) => {
      this.medicos = res.data;
      this.loading = false;
      this.total = res.total;
      this.hasta = res.last_page


    })
  }
  create() {

  }

  searchMedico(param) {
    if (param.length > 0) {
      this.desde = 0;
      this.paginarMedicoBuscado(param)
    }
    else {
      this.desde = 1;
      this.get();
    }


  }
  update(id: number, nombre: string) {

  }
  destroy(id: number) {
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
        this._medicoService.destroy(id)
          .subscribe(res => {
            Swal.fire(
              'Eliminado!',
              'Este medico ha sido eliminado correctamente.',
              'success'
            )
            this.get();
          })

      }
    })

  }
  paginarMedicoBuscado(param) {
    this._medicoService.searchMedico(param, this.desde).subscribe(res => {

      this.medicos = res.data
      this.total = res.total;
      this.hasta = res.last_page
      this.desde = res.current_page
    })

  }
  nextPage() {

    this.desde = this.desde + 1;
    if (this.desde <= this.hasta) {
      if (this.buscador.length > 0) {
        this.paginarMedicoBuscado(this.buscador)
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
        this.paginarMedicoBuscado(this.buscador)
      }
      else {
        this.get();
      }
    }
  }
}


