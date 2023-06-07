import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Transacao } from '../models/Transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  create(transacao: Transacao): Observable<Transacao>{
    const url = `${this.baseUrl}/transacoes`;
    return this.http.post<Transacao>(url, transacao);
  }

  update(transacao: Transacao): Observable<void>{
    const url = `${this.baseUrl}/transacoes/${transacao.id}`;
    return this.http.put<void>(url, transacao);
  }
  
}
