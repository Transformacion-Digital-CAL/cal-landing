import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Institucional } from './institucional';

describe('Institucional', () => {
  let component: Institucional;
  let fixture: ComponentFixture<Institucional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Institucional],
    }).compileComponents();

    fixture = TestBed.createComponent(Institucional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
