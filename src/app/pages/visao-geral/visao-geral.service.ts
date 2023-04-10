import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisaoGeralService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUsuarioLogado(): Observable<any>{
    const url = `${this.baseUrl}/usuarios/usuario-logado`;
    return this.http.get<any>(url);
  }

}
