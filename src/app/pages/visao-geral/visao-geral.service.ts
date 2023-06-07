import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orcamento } from 'src/app/models/Orcamento.model';
import { Usuario } from 'src/app/models/Usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisaoGeralService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsuarioLogado(): Observable<Usuario>{
    const url = `${this.baseUrl}/usuarios/usuario-logado`;
    return this.http.get<Usuario>(url);
  }

  getOrcamentoVigente(): Observable<Orcamento> {
    const url = `${this.baseUrl}/orcamentos/orcamento-vigente`;
    return this.http.get<Orcamento>(url);
  } 

}
