import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';
import { TransacoesCategoria } from 'src/app/models/TransacoesCategoria.model';
import { TransacaoService } from 'src/app/services/transacao.service';

@Component({
  selector: 'app-pie-chart-transacoes-categoria',
  templateUrl: './pie-chart-transacoes-categoria.component.html',
  styleUrls: ['./pie-chart-transacoes-categoria.component.css']
})
export class PieChartTransacoesCategoriaComponent implements OnInit {

  @Input() public tipoCategoria: number = 1;
  @Input() public largura: string = '100%';
  @Input() public altura: string = '100%';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public titulo: string;

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
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

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: []
  };

  public pieChartType: ChartType = 'pie';

  public pieChartPlugins = [DataLabelsPlugin];

  constructor(private transacaoService: TransacaoService) {

  }

  ngOnInit(): void {
    this.titulo = (this.tipoCategoria === 1 ? 'Receitas' : 'Despesas') + ' por categoria';
    this.getSomaValoresPorCategoria(this.tipoCategoria);
  }

  private getSomaValoresPorCategoria(tipoCategoria?: number) {
    this.transacaoService.getSomaValoresPorCategoria(tipoCategoria).subscribe({
      next: (data) => {
        const resultado: TransacoesCategoria[] = data;

        const categorias = resultado.map(t => t.nomeCategoria);
        const valores = resultado.map(t => t.valorTransacoes);

        this.pieChartData = {
          labels: categorias,
          datasets: [
            { data: valores }
          ]
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
