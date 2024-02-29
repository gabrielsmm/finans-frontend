import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  PieChartTransacoesCategoriaModule,
} from 'src/app/charts/pie-chart-transacoes-categoria/pie-chart-transacoes-categoria.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { DialogOrcamentoModule } from 'src/app/dialogs/dialog-orcamento/dialog-orcamento.module';
import { DialogTransacaoModule } from 'src/app/dialogs/dialog-transacao/dialog-transacao.module';

import { VisaoGeralRoutingModule } from './visao-geral-routing.module';
import { VisaoGeralComponent } from './visao-geral.component';



@NgModule({
  declarations: [
    VisaoGeralComponent
  ],
  imports: [
    CommonModule,
    VisaoGeralRoutingModule,
    HeaderModule,
    FooterModule,
    MatCardModule,
    MatTooltipModule,
    DialogTransacaoModule,
    DialogOrcamentoModule,
    PieChartTransacoesCategoriaModule
  ]
})
export class VisaoGeralModule { }
