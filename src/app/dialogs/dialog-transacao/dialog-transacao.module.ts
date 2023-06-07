import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogTransacaoComponent } from './dialog-transacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    DialogTransacaoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxCurrencyModule,
    MatTooltipModule
  ],
  exports: [
    DialogTransacaoComponent
  ]
})
export class DialogTransacaoModule { }
