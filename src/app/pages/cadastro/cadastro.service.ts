import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  create(usuario: Usuario): Observable<Usuario>{
    const url = `${this.baseUrl}/usuarios`;
    return this.http.post<Usuario>(url, usuario);
  }

  // findById(id: any): Observable<Usuario>{
  //   const url = `${this.baseUrl}/usuarios/${id}`;
  //   return this.http.get<Usuario>(url);
  // }

  // getLista(): Observable<any> {
  //   const url = `${this.baseUrl}/usuarios`;
  //   return this.http.get(url);
  // }

  // update(usuario: Usuario): Observable<void>{
  //   const url = `${this.baseUrl}/usuarios/${usuario.id}`;
  //   return this.http.put<void>(url, usuario);
  // }

  // delete(id: string): Observable<void>{
  //   const url = `${this.baseUrl}/usuarios/${id}`;
  //   return this.http.delete<void>(url);
  // }

}
