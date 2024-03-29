import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {

    this.contarTres().then(
      mensaje => console.log('termino', mensaje)

    )
      .catch(error => console.log(error))
  }

  ngOnInit(): void { }

  contarTres(): Promise<boolean> {
    let contador = 0;
    return new Promise((res, reject) => {
      const intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          res(true);
          clearInterval(intervalo);

        }
      }, 1000);
    });



  }
}
