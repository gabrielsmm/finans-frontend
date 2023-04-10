import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public showErro: boolean = false;

  public loginForm = new FormGroup({
    email: new FormControl(this.usuario.email, [Validators.required, Validators.email]),
    senha: new FormControl(this.usuario.senha, Validators.required)
  });

  constructor(private loginService: LoginService,
              private router: Router,
              private appService: AppService) {

  }

  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if (token) {
      this.appService.usuarioAutenticado = true;
      this.router.navigate(['/visao-geral']);
    }
  }

  onSubmit() {
    this.usuario = new Usuario(this.loginForm.value);
    this.loginService.login(this.usuario).subscribe({
      next: (data: HttpResponse<any>) => {
        const token = data.headers.get('Authorization');
        if (token) {
          localStorage.setItem("token", token);
          this.appService.usuarioAutenticado = true;
          this.router.navigate(['/visao-geral']);
        }
      },
      error: (err) => {
        console.error(err);
        this.showErro = true;
      },
      complete: () => {

      }
    });
  }

}
