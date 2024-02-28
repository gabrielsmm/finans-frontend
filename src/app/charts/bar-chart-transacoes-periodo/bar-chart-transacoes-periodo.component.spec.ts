import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartTransacoesPeriodoComponent } from './bar-chart-transacoes-periodo.component';

describe('BarChartTransacoesPeriodoComponent', () => {
  let component: BarChartTransacoesPeriodoComponent;
  let fixture: ComponentFixture<BarChartTransacoesPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartTransacoesPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartTransacoesPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
