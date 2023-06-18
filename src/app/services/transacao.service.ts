import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Transacao } from '../models/Transacao.model';

export class Filtro {
  page: number;
  linesPerPage: number;
  orderBy: string;
  direction: string;
  tipo: number;
  mes: number;
  ano: number;

  constructor(page: number = 0, linesPerPage: number = 10) {
    this.page = page;
    this.linesPerPage = linesPerPage;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private baseUrl: string = environment.baseUrl;
  public filtro: Filtro = new Filtro();

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Transacao>{
    const url = `${this.baseUrl}/transacoes/${id}`;
    return this.http.get<Transacao>(url);
  }

  findPage(filtro: Filtro): Observable<any>{
    let params = new HttpParams();
    for (const [key, value] of Object.entries(filtro)) {
      if (value) params = params.append(key, value.toString());
    }
    let url = `${this.baseUrl}/transacoes/page`;
    return this.http.get<any>(url, { params });
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
