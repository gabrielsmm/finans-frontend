import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { AppService } from 'src/app/app.service';
import { DialogConfirmacaoComponent } from 'src/app/dialogs/dialog-confirmacao/dialog-confirmacao.component';
import { DialogOrcamentoComponent } from 'src/app/dialogs/dialog-orcamento/dialog-orcamento.component';
import { Orcamento } from 'src/app/models/Orcamento.model';
import { OrcamentoService } from 'src/app/services/orcamento.service';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.css']
})
export class OrcamentosComponent implements OnInit {

  public displayedColumns: string[] = ['actions', 'nome', 'dataInicio', 'dataFim', 'valor', 'valorDespesas', 'valorReceitas', 'saldo'];
  public orcamentos: Orcamento[] = [];

  // paginação
  public page = 0;
  public size = 10;
  public first: boolean;
  public last: boolean;
  public totalElements = 0;

  constructor(private orcamentoService: OrcamentoService,
              private dialog: MatDialog,
              private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.validarLogin().subscribe((loginValido) => {
      if (loginValido) this.getOrcamentos();
    });
  }

  private getOrcamentos(page?: number) {
    this.orcamentoService.findPage(page, this.size).subscribe({
      next: (data) => {
        this.orcamentos = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalElements = data.totalElements;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  public editarClick(orcamento: Orcamento) {
    let dialogRef = this.dialog.open(DialogOrcamentoComponent, {
      height: '500px',
      width: '500px',
      data: {id: orcamento.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getOrcamentos();
    });
  }

  public excluirClick(orcamento: Orcamento) {
    const dialogRef = this.dialog.open(DialogConfirmacaoComponent, {
      maxWidth: '500px',
      data: {texto: `Confirma exclusão do orçamento referente ao período 
             ${this.printData(orcamento.dataInicio)} - ${this.printData(orcamento.dataFim)}?`}
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.orcamentoService.delete(orcamento.id).subscribe({
          next: (data) => {
            this.getOrcamentos(this.page);
          },
          error: (err) => {
            console.error(err);
            this.appService.mensagemErro(this.appService.getMensagensErro(err));
          }
        });
      }
    });
  }

  public openDialogOrcamento() {
    let dialogRef = this.dialog.open(DialogOrcamentoComponent, {
      height: '500px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getOrcamentos();
    });
  }

  public atualizarPagina(e: PageEvent) {
    this.page = e.pageIndex;
    this.getOrcamentos(this.page);
  }

  public calcularSaldo(orcamento: Orcamento): number {
    return orcamento.valor + orcamento.valorReceitas - orcamento.valorDespesas;
  }

  public printData(data: Date): string {
    return this.appService.printData(data);
  }

}
