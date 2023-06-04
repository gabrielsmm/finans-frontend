import { Component, OnInit } from '@angular/core';
import { VisaoGeralService } from './visao-geral.service';
import { AppService } from 'src/app/app.service';
import { Usuario } from 'src/app/models/Usuario.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogTransacaoComponent } from 'src/app/dialogs/dialog-transacao/dialog-transacao.component';
import { DialogOrcamentoComponent } from 'src/app/dialogs/dialog-orcamento/dialog-orcamento.component';

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  constructor(private visaoGeralService: VisaoGeralService,
              public appService: AppService,
              private router: Router,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.visaoGeralService.getUsuarioLogado().subscribe({
      next: (data) => {
        const usuarioLogado: Usuario = data;
        if (!usuarioLogado) {
          localStorage.removeItem("token");
          this.router.navigate(['/login']);
        }
        this.appService.usuarioLogado = usuarioLogado;
      },
      error: (err) => {
        console.error(err);
        localStorage.removeItem("token");
        this.router.navigate(['/login']);
      }
    });
  }

  openDialogTransacao(isReceita: boolean) {
    this.dialog.open(DialogTransacaoComponent, {
      height: '500px',
      width: '500px',
      data: {isReceita}
    });
  }

  openDialogOrcamento() {
    this.dialog.open(DialogOrcamentoComponent, {
      height: '500px',
      width: '500px'
    });
  }
  
}
