import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  graficos:any = [
  {
      labels: ['con frijoles', 'con natilla', 'con tocino'],
      data: [24,31,50],
      type: 'doughnut',
      leyenda: 'el pan se come con'
  },
  {
    labels: ['gracias', 'con gusto', 'you'],
    data: [24,31,50],
    type: 'doughnut',
    leyenda: 'saludo'
}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
