import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit, OnDestroy {
    subscription: Subscription;

  constructor() {
  this.subscription =  this.regresaObservable().subscribe(
      (numero) => console.log('subs ', numero),
      (error) => console.log('error ', error),
      () => console.log('El observador termino')
    );
  }

  ngOnInit(): void {}

  regresaObservable(): Observable<any> {
    let contador = 0;
    return new Observable((observer) => {
      let intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador,
        };
        observer.next(salida);

        // if (contador === 4) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // else{
        //     clearInterval(intervalo);
        //     observer.error('Auxilio')
        // }
      }, 500);
    })
   
      .retry(2)
      .map((res:any) => {
          return res.valor;

      })
      .filter( (valor, index) => {
        if((valor % 2) === 1){
            return true;

        }
        return false

         
      })
  }
  ngOnDestroy() {
      console.log('se destruyo');
      this.subscription.unsubscribe();
  }
}
