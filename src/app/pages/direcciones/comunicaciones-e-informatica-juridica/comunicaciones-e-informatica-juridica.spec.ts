import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionesEInformaticaJuridica } from './comunicaciones-e-informatica-juridica';

describe('ComunicacionesEInformaticaJuridica', () => {
  let component: ComunicacionesEInformaticaJuridica;
  let fixture: ComponentFixture<ComunicacionesEInformaticaJuridica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComunicacionesEInformaticaJuridica],
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicacionesEInformaticaJuridica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
