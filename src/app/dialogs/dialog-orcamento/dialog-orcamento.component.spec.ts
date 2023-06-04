import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOrcamentoComponent } from './dialog-orcamento.component';

describe('DialogOrcamentoComponent', () => {
  let component: DialogOrcamentoComponent;
  let fixture: ComponentFixture<DialogOrcamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOrcamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOrcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
