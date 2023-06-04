import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { Transacao } from 'src/app/models/Transacao.model';

@Component({
  selector: 'app-dialog-transacao',
  templateUrl: './dialog-transacao.component.html',
  styleUrls: ['./dialog-transacao.component.css']
})
export class DialogTransacaoComponent implements OnInit {

  public texto: string = 'Nova receita';
  public transacao: Transacao = new Transacao();

  public transacaoForm = new FormGroup({
    descricao: new FormControl('', Validators.required),
    data: new FormControl(this.appService.getDataFormatada(new Date()), Validators.required),
    valor: new FormControl(0.0, Validators.required),
    categoria: new FormControl(0, Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<DialogTransacaoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private appService: AppService) {

  }

  ngOnInit(): void {
    if (!this.data.isReceita) this.texto = 'Nova despesa';
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
