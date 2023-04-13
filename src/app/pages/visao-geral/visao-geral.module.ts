import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisaoGeralComponent } from './visao-geral.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { VisaoGeralRoutingModule } from './visao-geral-routing.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    VisaoGeralComponent
  ],
  imports: [
    CommonModule,
    VisaoGeralRoutingModule,
    HeaderModule,
    FooterModule,
    MatCardModule
  ]
})
export class VisaoGeralModule { }
