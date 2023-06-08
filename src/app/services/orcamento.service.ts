import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Orcamento } from '../models/Orcamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  findPage(page: number = 0, linesPerPage?: number, orderBy?: string, direction?: string): Observable<any>{
    let url = `${this.baseUrl}/orcamentos/page?page=${page}`;
    if (linesPerPage) url += `&linesPerPage=${linesPerPage}`;
    if (orderBy) url += `&linesPerPage=${orderBy}`;
    if (direction) url += `&linesPerPage=${direction}`;
    return this.http.get<any>(url);
  }

  create(orcamento: Orcamento): Observable<Orcamento>{
    const url = `${this.baseUrl}/orcamentos`;
    return this.http.post<Orcamento>(url, orcamento);
  }

  update(orcamento: Orcamento): Observable<void>{
    const url = `${this.baseUrl}/orcamentos/${orcamento.id}`;
    return this.http.put<void>(url, orcamento);
  }

  delete(id: number): Observable<void>{
    const url = `${this.baseUrl}/orcamentos/${id}`;
    return this.http.delete<void>(url);
  }
  
}
