import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogOrcamentoComponent } from './dialog-orcamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    DialogOrcamentoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxCurrencyModule,
    MatTooltipModule
  ],
  exports: [
    DialogOrcamentoComponent
  ]
})
export class DialogOrcamentoModule { }
