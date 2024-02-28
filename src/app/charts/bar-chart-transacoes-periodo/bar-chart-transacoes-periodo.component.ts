import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { TransacoesPeriodo } from 'src/app/models/TransacoesPeriodo.model';
import { TransacaoService } from 'src/app/services/transacao.service';

@Component({
  selector: 'app-bar-chart-transacoes-periodo',
  templateUrl: './bar-chart-transacoes-periodo.component.html',
  styleUrls: ['./bar-chart-transacoes-periodo.component.css']
})
export class BarChartTransacoesPeriodoComponent implements OnInit {

  @Input() public largura: string = '100%';
  @Input() public altura: string = '100%';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
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

  constructor(private transacaoService: TransacaoService) {

  }

  ngOnInit(): void {
    this.getSomaValoresPorPeriodo();
  }

  private getSomaValoresPorPeriodo() {
    this.transacaoService.getSomaValoresPorPeriodo().subscribe({
      next: (data) => {
        const resultado: TransacoesPeriodo[] = data.slice().reverse();

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
