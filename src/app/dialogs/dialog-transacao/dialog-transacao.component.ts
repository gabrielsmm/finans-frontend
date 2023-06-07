import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/app/models/Categoria.model';
import { Transacao } from 'src/app/models/Transacao.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { TransacaoService } from 'src/app/services/transacao.service';

@Component({
  selector: 'app-dialog-transacao',
  templateUrl: './dialog-transacao.component.html',
  styleUrls: ['./dialog-transacao.component.css']
})
export class DialogTransacaoComponent implements OnInit {

  public texto: string = 'Nova receita';
  public transacao: Transacao = new Transacao();
  public categorias: Categoria[] = [];
  public showErro: boolean = false;
  public mensagemErro: string = '';

  public transacaoForm = new FormGroup({
    descricao: new FormControl('', [Validators.required, Validators.minLength(3)]),
    data: new FormControl(this.appService.getDataFormatada(new Date()), Validators.required),
    valor: new FormControl(0.0, [Validators.required, Validators.min(0.01)]),
    categoriaId: new FormControl(0, [Validators.required, Validators.min(1)])
  });

  constructor(public dialogRef: MatDialogRef<DialogTransacaoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private appService: AppService,
              private categoriaService: CategoriaService,
              private transacaoService: TransacaoService) {

  }

  ngOnInit(): void {
    if (!this.data.isReceita) this.texto = 'Nova despesa';
    this.getCategorias(this.data.isReceita ? 1 : 2);
  }

  getCategorias(tipo: number) {
    this.categoriaService.getCategorias(tipo).subscribe({
      next: (data) => {
        this.categorias = data;
      }, 
      error: (err) => {
        console.error(err);
      }
    });
  }

  onSubmit() {
    this.transacao = new Transacao(this.transacaoForm.value);
    this.transacao.usuarioId = this.appService.usuarioLogado.id;
    this.transacao.categoriaId = Number(this.transacao.categoriaId);
    this.transacaoService.create(this.transacao).subscribe({
      next: (data) => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error(err);
        this.mensagemErro = this.appService.getMensagensErro(err);
        this.showErro = true;
      }
    });
  }

  fechar() {
    this.dialogRef.close(false);
  }

}
