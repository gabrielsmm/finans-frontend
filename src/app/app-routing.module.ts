import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'visao-geral', loadChildren: () => import('./pages/visao-geral/visao-geral.module').then(m => m.VisaoGeralModule)},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
