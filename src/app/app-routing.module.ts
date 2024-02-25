import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule)},
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: 'visao-geral', loadChildren: () => import('./pages/visao-geral/visao-geral.module').then(m => m.VisaoGeralModule), canActivate: [AuthGuard]},
  {path: 'orcamentos', loadChildren: () => import('./pages/orcamentos/orcamentos.module').then(m => m.OrcamentosModule), canActivate: [AuthGuard]},
  {path: 'transacoes', loadChildren: () => import('./pages/transacoes/transacoes.module').then(m => m.TransacoesModule), canActivate: [AuthGuard]},
  {path: 'relatorios', loadChildren: () => import('./pages/relatorios/relatorios.module').then(m => m.RelatoriosModule), canActivate: [AuthGuard]},
  {path: '**', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
