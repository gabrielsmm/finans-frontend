import { Injectable } from '@angular/core';
import { Usuario } from './models/Usuario.model';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Orcamento } from './models/Orcamento.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public usuarioAutenticado: boolean = false;
  public usuarioLogado: Usuario = new Usuario();
  public orcamentoVigente: Orcamento = new Orcamento();

  constructor(private router: Router,
              private _snack: MatSnackBar) {
    
  }

  deslogar() {
    this.usuarioAutenticado = false;
    this.usuarioLogado = new Usuario();
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }

  mensagem(str: string){
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 3000
    });
  }

  mensagemTime(str: string, duration: number){
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: duration
    });
  }

  mensagemErro(str: string){
    const config = new MatSnackBarConfig();
    config.panelClass = ['snack-background-red'];
    config.duration = 3000;
    config.horizontalPosition = 'end';
    config.verticalPosition = 'bottom';
    this._snack.open(`${str}`, '', config);
  }

  mensagemSucesso(str: string){
    const config = new MatSnackBarConfig();
    config.panelClass = ['snack-background-green'];
    config.duration = 3000;
    config.horizontalPosition = 'end';
    config.verticalPosition = 'bottom';
    this._snack.open(`${str}`, '', config);
  }

  getDataFormatada(data: Date): string {
    return data.getFullYear() + "-" + ("0"+(data.getMonth()+1)).slice(-2) + "-" + ("0" + data.getDate()).slice(-2);
  }

  getInicioMes(): Date {
    const dataAtual = new Date();
    return new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
  }

  getFimMes(): Date {
    const dataAtual = new Date();
    const inicioMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
    return new Date(inicioMes.getFullYear(), inicioMes.getMonth() + 1, 0);
  }

  getMensagensErro(erro: any): string {
    if (erro.error.message) {
      return erro.error.message
    } else {
      return erro.error.errors.map((erro: any) => erro.message).join(', ');
    }
  }

  isNullOrUndefined(obj: any): boolean {
    return obj === null || obj === undefined;
  }

  printData(data: Date): string {
    const partes = data.toString().split('-');
    const dia = partes[2];
    const mes = partes[1];
    const ano = partes[0];

    return `${dia}/${mes}/${ano}`;
  }
  
}
