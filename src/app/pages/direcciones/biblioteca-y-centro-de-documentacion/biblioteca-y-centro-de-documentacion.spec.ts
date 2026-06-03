import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaYCentroDeDocumentacion } from './biblioteca-y-centro-de-documentacion';

describe('BibliotecaYCentroDeDocumentacion', () => {
  let component: BibliotecaYCentroDeDocumentacion;
  let fixture: ComponentFixture<BibliotecaYCentroDeDocumentacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliotecaYCentroDeDocumentacion],
    }).compileComponents();

    fixture = TestBed.createComponent(BibliotecaYCentroDeDocumentacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
