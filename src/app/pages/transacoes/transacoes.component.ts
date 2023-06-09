import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { AppService } from 'src/app/app.service';
import { DialogConfirmacaoComponent } from 'src/app/dialogs/dialog-confirmacao/dialog-confirmacao.component';
import { DialogTransacaoComponent } from 'src/app/dialogs/dialog-transacao/dialog-transacao.component';
import { Transacao } from 'src/app/models/Transacao.model';
import { TransacaoService } from 'src/app/services/transacao.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css']
})
export class TransacoesComponent implements OnInit {

  public displayedColumns: string[] = ['actions', 'descricao', 'data', 'categoria', 'tipo', 'valor'];
  public transacoes: Transacao[] = [];

  // paginação
  public page = 0;
  public size = 10;
  public first: boolean;
  public last: boolean;
  public totalElements = 0;

  constructor(private transacaoService: TransacaoService,
              private appService: AppService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTransacoes();
  }
  
  private getTransacoes(page?: number) {
    this.transacaoService.findPage(page, this.size).subscribe({
      next: (data) => {
        this.transacoes = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalElements = data.totalElements;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  public editarClick(transacao: Transacao) {
    let dialogRef = this.dialog.open(DialogTransacaoComponent, {
      height: '500px',
      width: '500px',
      data: {id: transacao.id, isReceita: transacao.categoria.tipo === 1}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getTransacoes();
    });
  }

  public excluirClick(transacao: Transacao) {
    const dialogRef = this.dialog.open(DialogConfirmacaoComponent, {
      maxWidth: '500px',
      data: {texto: `Confirma exclusão da transação: 
             ${transacao.descricao} - ${this.printData(transacao.data)}?`}
    });

    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.transacaoService.delete(transacao.id).subscribe({
          next: (data) => {
            this.getTransacoes(this.page);
          },
          error: (err) => {
            console.error(err);
            this.appService.mensagemErro(this.appService.getMensagensErro(err));
          }
        });
      }
    });
  }

  public openDialogTransacao(isReceita: boolean) {
    let dialogRef = this.dialog.open(DialogTransacaoComponent, {
      height: '500px',
      width: '500px',
      data: {isReceita}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getTransacoes();
    });
  }

  public atualizarPagina(e: PageEvent) {
    this.page = e.pageIndex;
    this.getTransacoes(this.page);
  }

  public printData(data: Date): string {
    return this.appService.printData(data);
  }

  public getNomeTipo(transacao: Transacao): string {
    return transacao.categoria.tipo === 1 ? 'Receita' : 'Despesa';
  }

  public isReceita(transacao: Transacao): boolean {
    return transacao.categoria.tipo === 1;
  }

}
