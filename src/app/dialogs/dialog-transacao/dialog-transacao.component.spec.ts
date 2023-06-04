import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTransacaoComponent } from './dialog-transacao.component';

describe('DialogTransacaoComponent', () => {
  let component: DialogTransacaoComponent;
  let fixture: ComponentFixture<DialogTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTransacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
