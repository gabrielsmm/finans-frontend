import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-mes-ano',
  templateUrl: './filtro-mes-ano.component.html',
  styleUrls: ['./filtro-mes-ano.component.css']
})
export class FiltroMesAnoComponent implements OnInit {

  @Input() public mes: number;
  @Output() public mesChange = new EventEmitter<number>();

  @Input() public ano: number;
  @Output() public anoChange = new EventEmitter<number>();

  @Output() public mesAnoChange = new EventEmitter<void>();

  public strMes: string;
  public dataAtual: Date;

  private nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  constructor() {

  }

  ngOnInit(): void {
    this.dataAtual = new Date();
    this.strMes = `${this.getNomeMes(this.mes)} ${this.ano}`;
  }

  mesAnterior() {
    this.dataAtual.setMonth(this.dataAtual.getMonth() - 1);
    this.atualizarMesSelecionado();
  }

  proximoMes() {
    this.dataAtual.setMonth(this.dataAtual.getMonth() + 1);
    this.atualizarMesSelecionado();
  }

  private atualizarMesSelecionado() {
    this.mes = this.dataAtual.getMonth() + 1;
    this.ano = this.dataAtual.getFullYear();

    this.mesChange.emit(this.mes);
    this.anoChange.emit(this.ano);

    this.strMes = `${this.getNomeMes(this.mes)} ${this.ano}`;

    this.mesAnoChange.emit();
  }

  private getNomeMes(mes: number) {
    const mesAjustado = mes - 1;
    return this.nomesMeses[mesAjustado];
  }

}
