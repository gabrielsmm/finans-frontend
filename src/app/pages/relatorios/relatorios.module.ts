import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatoriosComponent } from './relatorios.component';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';



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

    NgChartsModule
  ]
})
export class RelatoriosModule { }
