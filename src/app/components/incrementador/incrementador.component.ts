import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txt_progress') txt_progress:ElementRef;
 @Input() leyenda:string;
 @Input() porcentaje:number;

 @Output() cambioPorcentaje: EventEmitter<number> = new EventEmitter();

  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

  cambiarValor(valor:number){
    if(this.porcentaje <= 0 && valor == -10 || this.porcentaje >= 100 &&  valor == +10 ){
      console.log(this.porcentaje);
      return;
    }
    this.porcentaje = this.porcentaje + valor
    this.cambioPorcentaje.emit(this.porcentaje)
    console.log(this.porcentaje);
  }
  onChanges(event:number){
    
  
    if(event >= 100){
     
      this.porcentaje = 100
      console.log('>100');
     
    }
    if(event <= 0){
      this.porcentaje = 0
    }
    else{
      this.porcentaje = event
      
    }
      this.porcentaje = this.txt_progress.nativeElement.value
      this.cambioPorcentaje.emit(this.porcentaje)
      console.log(this.porcentaje);
   
  }

}
