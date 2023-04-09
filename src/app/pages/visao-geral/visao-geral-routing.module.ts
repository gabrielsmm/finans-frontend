import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisaoGeralComponent } from './visao-geral.component';

const routes: Routes = [
    {path: '', component: VisaoGeralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisaoGeralRoutingModule { }