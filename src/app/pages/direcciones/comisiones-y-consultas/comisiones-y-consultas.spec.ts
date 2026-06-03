import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesYConsultas } from './comisiones-y-consultas';

describe('ComisionesYConsultas', () => {
  let component: ComisionesYConsultas;
  let fixture: ComponentFixture<ComisionesYConsultas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComisionesYConsultas],
    }).compileComponents();

    fixture = TestBed.createComponent(ComisionesYConsultas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
