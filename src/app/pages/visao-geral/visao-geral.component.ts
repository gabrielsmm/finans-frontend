import { Component, OnInit } from '@angular/core';
import { VisaoGeralService } from './visao-geral.service';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTransacaoComponent } from 'src/app/dialogs/dialog-transacao/dialog-transacao.component';
import { DialogOrcamentoComponent } from 'src/app/dialogs/dialog-orcamento/dialog-orcamento.component';
import { Orcamento } from 'src/app/models/Orcamento.model';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  public saldo: number = 0;

  constructor(private visaoGeralService: VisaoGeralService,
              public appService: AppService,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.appService.validarLogin().subscribe((loginValido) => {
      if (loginValido) this.getOrcamentoVigente();
    });
  }

  private getOrcamentoVigente() {
    this.visaoGeralService.getOrcamentoVigente().subscribe({
      next: (data) => {
        this.appService.orcamentoVigente = data;
        this.calcularSaldo(this.appService.orcamentoVigente);
      },
      error: (err) => {
        console.error(err);
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
      if (result) this.getOrcamentoVigente();
    });
  }

  public openDialogOrcamento() {
    let dialogRef = this.dialog.open(DialogOrcamentoComponent, {
      height: '500px',
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.getOrcamentoVigente();
    });
  }

  public possuiOrcamento(): boolean {
    return !this.appService.isNullOrUndefined(this.appService.orcamentoVigente);
  }

  private calcularSaldo(orcamento: Orcamento) {
    if (orcamento) this.saldo = orcamento.valor + orcamento.valorReceitas - orcamento.valorDespesas;
  }
  
}
