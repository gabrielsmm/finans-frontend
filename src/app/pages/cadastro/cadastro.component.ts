import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario.model';

export const matches: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const senha = control.get('senha');
  const confirmacaoSenha = control.get('confirmacaoSenha');

  return senha && confirmacaoSenha && senha.value === confirmacaoSenha.value ? null : { equals: true };
};

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public showErro: boolean = false;
  public msgErro: string = '';
  
  public cadastroForm = new FormGroup({
    nome: new FormControl(this.usuario.nome, Validators.required),
    email: new FormControl(this.usuario.email, [Validators.required, Validators.email]),
    senha: new FormControl(this.usuario.senha, Validators.required),
    confirmacaoSenha: new FormControl('', Validators.required)
  }, { validators: matches });

  constructor() {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.usuario = new Usuario(this.cadastroForm.value);
    this.msgErro = "Erro";
    this.showErro = true;
    // Cadastrar usuário
  }

}
