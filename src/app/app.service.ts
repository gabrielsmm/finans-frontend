import { Injectable } from '@angular/core';
import { Usuario } from './models/Usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public usuarioAutenticado: boolean = false;
  public usuarioLogado: Usuario = new Usuario();

  constructor(private router: Router) { }

  deslogar() {
    this.usuarioAutenticado = false;
    this.usuarioLogado = new Usuario();
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
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
    return erro.error.errors.map((erro: any) => erro.message).join(', ');
  }
  
}
