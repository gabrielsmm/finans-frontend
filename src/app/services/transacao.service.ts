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

  findById(id: any): Observable<Transacao>{
    const url = `${this.baseUrl}/transacoes/${id}`;
    return this.http.get<Transacao>(url);
  }

  findPage(page: number = 0, linesPerPage?: number, orderBy?: string, direction?: string): Observable<any>{
    let url = `${this.baseUrl}/transacoes/page?page=${page}`;
    if (linesPerPage) url += `&linesPerPage=${linesPerPage}`;
    if (orderBy) url += `&linesPerPage=${orderBy}`;
    if (direction) url += `&linesPerPage=${direction}`;
    return this.http.get<any>(url);
  }

  create(transacao: Transacao): Observable<Transacao>{
    const url = `${this.baseUrl}/transacoes`;
    return this.http.post<Transacao>(url, transacao);
  }

  update(transacao: Transacao): Observable<void>{
    const url = `${this.baseUrl}/transacoes/${transacao.id}`;
    return this.http.put<void>(url, transacao);
  }

  delete(id: number): Observable<void>{
    const url = `${this.baseUrl}/transacoes/${id}`;
    return this.http.delete<void>(url);
  }
  
}
