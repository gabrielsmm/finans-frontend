import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartTransacoesCategoriaComponent } from './pie-chart-transacoes-categoria.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    PieChartTransacoesCategoriaComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [
    PieChartTransacoesCategoriaComponent
  ]
})
export class PieChartTransacoesCategoriaModule { }
