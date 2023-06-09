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

  public orcamentoId: number;
  public isEditar: boolean = false;

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
    if (this.data) {
      this.isEditar = true;
      this.texto = 'Editar orçamento';
      this.getOrcamento(this.data.id);
    }
  }

  private getOrcamento(id: number) {
    this.orcamentoService.findById(id).subscribe({
      next: (data) => {
        this.orcamento = data;
        this.orcamentoId = this.orcamento.id;
        this.orcamentoForm.get('nome')?.setValue(this.orcamento.nome);
        this.orcamentoForm.get('dataInicio')?.setValue(this.orcamento.dataInicio.toString());
        this.orcamentoForm.get('dataFim')?.setValue(this.orcamento.dataFim.toString());
        this.orcamentoForm.get('valor')?.setValue(this.orcamento.valor);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  onSubmit() {
    this.orcamento = new Orcamento(this.orcamentoForm.value);
    this.orcamento.usuarioId = this.appService.usuarioLogado.id;
    if (!this.isEditar) {
      this.inserirOrcamento(this.orcamento);
    } else {
      this.atualizarOrcamento(this.orcamento);
    }
  }

  private inserirOrcamento(orcamento: Orcamento) {
    this.orcamentoService.create(this.orcamento).subscribe({
      next: (data) => {
        this.dialogRef.close(true);
        this.appService.mensagemSucesso("Orçamento incluído");
      },
      error: (err) => {
        console.error(err);
        this.mensagemErro = this.appService.getMensagensErro(err);
        this.showErro = true;
      }
    });
  }

  private atualizarOrcamento(orcamento: Orcamento) {
    orcamento.id = this.orcamentoId;
    this.orcamentoService.update(orcamento).subscribe({
      next: (data) => {
        this.dialogRef.close(true);
        this.appService.mensagemSucesso("Orçamento atualizado");
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