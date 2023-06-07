import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategorias(tipo: number): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias/${tipo}`;
    return this.http.get<Categoria[]>(url);
  }
  
}
