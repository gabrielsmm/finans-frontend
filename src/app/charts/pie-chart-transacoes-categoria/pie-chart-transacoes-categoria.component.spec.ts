import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartTransacoesCategoriaComponent } from './pie-chart-transacoes-categoria.component';

describe('PieChartTransacoesCategoriaComponent', () => {
  let component: PieChartTransacoesCategoriaComponent;
  let fixture: ComponentFixture<PieChartTransacoesCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartTransacoesCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartTransacoesCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
