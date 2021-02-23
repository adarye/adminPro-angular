import { HospitalService } from './../../services/hospital/hospital.service';
import { Hospital } from './../../models/hospital.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Medico } from 'src/app/models/medico.model';
import { MedicoService, ModalUploadService } from 'src/app/services/service.index';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ActivatedRoute, Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {


  hospitales: Hospital[] = []
  medico: Medico = new Medico(null, '', '', null, null, {});
  hospital: Hospital = new Hospital()

  constructor(public _medicoService: MedicoService,
    public _modalUploadService: ModalUploadService,
    public _hospitalService: HospitalService,
    public router: Router, public activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id !== 'nuevo'){
        this.show(id)
      }

    })
  }

  ngOnInit(): void {
    this._hospitalService.get(1)
      .subscribe((res: any) => this.hospitales = res.data)
       this._modalUploadService.notificacion.subscribe(res => console.log(this.medico.img = res.img));
  }

  show(id: number) {
    this._medicoService.show(id).subscribe((res:Medico) => {
      this.medico = res
      this.hospital = res.hospital;
      console.log(this.medico);
    })
  }
  create(f: NgForm) {
    console.log(f.value);
    if (f.valid) {
      if(this.medico.id){
        this.update(f.value, this.medico.id )
      }
      else{
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
  }
  update(medico:Medico, id:bigint){
    this._medicoService.update(medico, id).subscribe((res: any) => {
      Swal.fire(
        'Medico Actualizado',
        res.nombre,
        'success'
      )
      this.medico.id = res.id;
      this.router.navigate(['/medico', res.id])
    });

  }
  cambioHospital(event) {
    console.log(event.target.value);
    this._hospitalService.obtenerHospital(event.target.value).subscribe(res => this.hospital = res)
  }


}
