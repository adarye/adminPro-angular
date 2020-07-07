import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficadona',
  templateUrl: './graficadona.component.html',
  styles: [
  ]
})
export class GraficadonaComponent implements OnInit {
  @Input() data;
  @Input() labels;
  @Input() type;
  constructor() { }

  ngOnInit(): void {
  }

}
