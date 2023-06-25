import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentosComponent } from './orcamentos.component';
import { OrcamentosRoutingModule } from './orcamentos-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { DialogConfirmacaoModule } from 'src/app/dialogs/dialog-confirmacao/dialog-confirmacao.module';
import { PaginatorPersonalizado } from 'src/app/components/paginator-personalizado/paginator-personalizado';



@NgModule({
  declarations: [
    OrcamentosComponent
  ],
  imports: [
    CommonModule,
    OrcamentosRoutingModule,
    HeaderModule,
    FooterModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    DialogConfirmacaoModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorPersonalizado}]
})
export class OrcamentosModule { }
