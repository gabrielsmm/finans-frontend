import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/app/models/Categoria.model';
import { Transacao } from 'src/app/models/Transacao.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-dialog-transacao',
  templateUrl: './dialog-transacao.component.html',
  styleUrls: ['./dialog-transacao.component.css']
})
export class DialogTransacaoComponent implements OnInit {

  public texto: string = 'Nova receita';
  public transacao: Transacao = new Transacao();
  public categorias: Categoria[] = [];

  public transacaoForm = new FormGroup({
    descricao: new FormControl('', Validators.required),
    data: new FormControl(this.appService.getDataFormatada(new Date()), Validators.required),
    valor: new FormControl(0.0, Validators.required),
    categoria: new FormControl(0, Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<DialogTransacaoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private appService: AppService,
              private categoriaService: CategoriaService) {

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
    console.log(this.transacao);
    this.dialogRef.close();
  }

  fechar() {
    this.dialogRef.close();
  }

}
