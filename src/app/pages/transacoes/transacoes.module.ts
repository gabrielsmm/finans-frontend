import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransacoesComponent } from './transacoes.component';
import { TransacoesRoutingModule } from './transacoes-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { FiltroMesAnoModule } from 'src/app/components/filtro-mes-ano/filtro-mes-ano.module';
import { PaginatorPersonalizado } from 'src/app/components/paginator-personalizado/paginator-personalizado';



@NgModule({
  declarations: [
    TransacoesComponent
  ],
  imports: [
    CommonModule,
    TransacoesRoutingModule,
    HeaderModule,
    FooterModule,
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatMenuModule,
    MatPaginatorModule,
    MatChipsModule,
    FiltroMesAnoModule
  ],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorPersonalizado}]
})
export class TransacoesModule { }
