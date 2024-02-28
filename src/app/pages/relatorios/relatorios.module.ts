import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  BarChartTransacoesPeriodoModule,
} from 'src/app/charts/bar-chart-transacoes-periodo/bar-chart-transacoes-periodo.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';

import {
  PieChartTransacoesCategoriaModule,
} from './../../charts/pie-chart-transacoes-categoria/pie-chart-transacoes-categoria.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatoriosComponent } from './relatorios.component';



@NgModule({
  declarations: [
    RelatoriosComponent
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    HeaderModule,
    FooterModule,
    MatCardModule,
    BarChartTransacoesPeriodoModule,
    PieChartTransacoesCategoriaModule
  ]
})
export class RelatoriosModule { }
