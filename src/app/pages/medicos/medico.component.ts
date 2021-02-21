import { HospitalService } from './../../services/hospital/hospital.service';
import { Hospital } from './../../models/hospital.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService, ModalUploadService } from 'src/app/services/service.index';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {


  hospitales: Hospital[] = []
  medico: Medico = new Medico(null, '', '', null, null, {});
  hospital: Hospital = new Hospital()

  constructor(public _medicoService: MedicoService, public _modalUploadService: ModalUploadService, public _hospitalService: HospitalService, public router: Router) { }

  ngOnInit(): void {
    this._hospitalService.get(1)
      .subscribe((res: any) => this.hospitales = res.data)
  }
  create(f: NgForm) {

    if (f.valid) {
      this._medicoService.create(f.value).subscribe((res: any) => {
        Swal.fire(
          'Medico creado',
          res.nombre,
          'success'
        )
        this.medico.id = res.id;
        this.router.navigate(['/medico', res.id])
      });
    }
  }
  cambioHospital(event) {
    console.log(event.target.value);
    this._hospitalService.obtenerHospital(event.target.value).subscribe(res => this.hospital = res)
  }


}
