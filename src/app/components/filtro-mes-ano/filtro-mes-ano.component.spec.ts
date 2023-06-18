import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMesAnoComponent } from './filtro-mes-ano.component';

describe('FiltroMesAnoComponent', () => {
  let component: FiltroMesAnoComponent;
  let fixture: ComponentFixture<FiltroMesAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroMesAnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroMesAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
