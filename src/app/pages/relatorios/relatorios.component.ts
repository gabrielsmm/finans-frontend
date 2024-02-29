import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.validarLogin().subscribe((loginValido) => {
      if (loginValido) this.appService.getOrcamentoVigente().subscribe();
    });
  }

  public possuiReceitas(): boolean {
    return this.appService.possuiReceitas();
  }

  public possuiDespesas(): boolean {
    return this.appService.possuiDespesas();
  }

}
