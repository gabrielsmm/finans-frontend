import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario.model';
import { CadastroService } from './cadastro.service';
import { Router } from '@angular/router';

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
  public showSucesso: boolean = false;
  public msgErro: string = '';
  public showSenha: boolean = false;
  public showConfirmacaoSenha: boolean = false;
  
  public cadastroForm = new FormGroup({
    nome: new FormControl(this.usuario.nome, Validators.required),
    email: new FormControl(this.usuario.email, [Validators.required, Validators.email]),
    senha: new FormControl(this.usuario.senha, Validators.required),
    confirmacaoSenha: new FormControl('', Validators.required)
  }, { validators: matches });

  constructor(private cadastroService: CadastroService,
              private router: Router) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.usuario = new Usuario(this.cadastroForm.value);
    this.cadastroService.create(this.usuario).subscribe({
      next: (data) => {
        this.cadastroForm.reset();
        this.showErro = false;
        this.showSucesso = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      error: (err) => {
        console.error(err);
        if (err.error.errors) {
          this.msgErro = err.error.errors[0].message;
          this.showErro = true;
        } else if (err.error) {
          this.msgErro = err.error.message;
          this.showErro = true;
        }
      },
      complete: () => {

      }
    });
  }

  senha() {
    this.showSenha = !this.showSenha;
  }

  confirmacaoSenha() {
    this.showConfirmacaoSenha = !this.showConfirmacaoSenha;
  }

}
