import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { AppService } from 'src/app/app.service';
import { TransacoesPeriodo } from 'src/app/models/TransacoesPeriodo.model';
import { TransacaoService } from 'src/app/services/transacao.service';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter(value, context) {
          return `R$ ${value.toFixed(2)}`;
        }
      },
      tooltip: {
        callbacks: {
          label(tooltipItem) {
            const valor = Number(tooltipItem.raw);
            tooltipItem.formattedValue = `R$ ${valor.toFixed(2)}`;
          }
        }
      }
    }
  };

  public barChartType: ChartType = 'bar';

  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  constructor(public transacaoService: TransacaoService,
              private appService: AppService) {

  }

  ngOnInit(): void {
    this.appService.validarLogin().subscribe((loginValido) => {
      if (loginValido) this.getSomaValoresPorPeriodo();
    });
  }

  private getSomaValoresPorPeriodo() {
    this.transacaoService.getSomaValoresPorPeriodo().subscribe({
      next: (data) => {
        const resultado = data as TransacoesPeriodo[];

        const titulos = resultado.map(t => t.periodo);
        const receitas = resultado.map(t => t.valorReceitas);
        const despesas = resultado.map(t => t.valorDespesas);

        this.barChartData = {
          labels: titulos,
          datasets: [
            { data: receitas, label: 'Receitas', backgroundColor: '#139153' },
            { data: despesas, label: 'Despesas', backgroundColor: '#c01f2c' }
          ]
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

}
