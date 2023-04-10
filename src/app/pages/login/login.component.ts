import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public showErro: boolean = false;
  public msgErro: string = '';

  public loginForm = new FormGroup({
    email: new FormControl(this.usuario.email, [Validators.required, Validators.email]),
    senha: new FormControl(this.usuario.senha, Validators.required)
  });

  constructor() {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.usuario = new Usuario(this.loginForm.value);
    this.msgErro = "Erro";
    this.showErro = true;
    // Cadastrar usuário
  }

}
