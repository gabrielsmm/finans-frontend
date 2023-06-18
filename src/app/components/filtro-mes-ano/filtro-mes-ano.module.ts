import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroMesAnoComponent } from './filtro-mes-ano.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    FiltroMesAnoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FiltroMesAnoComponent
  ]
})
export class FiltroMesAnoModule { }
