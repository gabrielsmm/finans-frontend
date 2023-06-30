import { Component, OnInit } from '@angular/core';
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
  public showSaldo: boolean = false;

  constructor(public appService: AppService,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.appService.validarLogin().subscribe((loginValido) => {
      if (loginValido) this.getOrcamentoVigente();
    });
  }

  private getOrcamentoVigente() {
    this.appService.getOrcamentoVigente().subscribe((buscouOrcamento) => {
      if (buscouOrcamento) this.calcularSaldo(this.appService.orcamentoVigente);
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
    return this.appService.possuiOrcamento();
  }

  private calcularSaldo(orcamento: Orcamento) {
    if (orcamento) this.saldo = orcamento.valor + orcamento.valorReceitas - orcamento.valorDespesas;
  }

  showSaldoClick() {
    this.showSaldo = !this.showSaldo;
  }
  
}
