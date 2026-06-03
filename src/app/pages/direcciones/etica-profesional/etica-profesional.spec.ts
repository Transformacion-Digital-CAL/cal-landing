import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaProfesional } from './etica-profesional';

describe('EticaProfesional', () => {
  let component: EticaProfesional;
  let fixture: ComponentFixture<EticaProfesional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EticaProfesional],
    }).compileComponents();

    fixture = TestBed.createComponent(EticaProfesional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
