import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartTransacoesPeriodoComponent } from './bar-chart-transacoes-periodo.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    BarChartTransacoesPeriodoComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    BarChartTransacoesPeriodoComponent
  ]
})
export class BarChartTransacoesPeriodoModule { }
