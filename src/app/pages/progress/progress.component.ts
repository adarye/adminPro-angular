import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  porcentaje:number = 30;

  constructor() { }

  ngOnInit(): void {
  }
  cambiarValor(valor:number){
    if(this.porcentaje <= 0 && valor == -10 || this.porcentaje >= 100 &&  valor == +10 ){
      console.log(this.porcentaje);
      return;
    }
    this.porcentaje = this.porcentaje + valor
    console.log(this.porcentaje);
  }

}
