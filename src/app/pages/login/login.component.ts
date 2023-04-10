import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

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
              private router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.usuario = new Usuario(this.loginForm.value);
    this.loginService.login(this.usuario).subscribe({
      next: (data: HttpResponse<any>) => {
        console.log(data.headers.get('Authorization'));
        this.router.navigate(['/visao-geral']);
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
