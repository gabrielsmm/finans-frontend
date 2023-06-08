import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentosComponent } from './orcamentos.component';
import { OrcamentosRoutingModule } from './orcamentos-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';



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
    MatPaginatorModule
  ]
})
export class OrcamentosModule { }
