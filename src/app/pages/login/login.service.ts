import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(usuario: Usuario): Observable<any>{
    const url = `${this.baseUrl}/login`;
    return this.http.post<any>(url, usuario, {observe: 'response'});
  }

}
