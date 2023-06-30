import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTooltipModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
