import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { Orcamento } from 'src/app/models/Orcamento.model';
import { OrcamentoService } from 'src/app/services/orcamento.service';

@Component({
  selector: 'app-dialog-orcamento',
  templateUrl: './dialog-orcamento.component.html',
  styleUrls: ['./dialog-orcamento.component.css']
})
export class DialogOrcamentoComponent {

  public texto: string = 'Novo orçamento';
  public orcamento: Orcamento = new Orcamento();
  public showErro: boolean = false;
  public mensagemErro: string = '';

  public orcamentoForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dataInicio: new FormControl(this.appService.getDataFormatada(this.appService.getInicioMes()), Validators.required),
    dataFim: new FormControl(this.appService.getDataFormatada(this.appService.getFimMes()), Validators.required),
    valor: new FormControl(0.0, [Validators.required, Validators.min(0.01)])
  });

  constructor(public dialogRef: MatDialogRef<DialogOrcamentoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private appService: AppService,
              private orcamentoService: OrcamentoService) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.orcamento = new Orcamento(this.orcamentoForm.value);
    this.orcamento.usuarioId = this.appService.usuarioLogado.id;
    this.orcamentoService.create(this.orcamento).subscribe({
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