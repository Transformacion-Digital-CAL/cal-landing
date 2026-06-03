import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechosHumanos } from './derechos-humanos';

describe('DerechosHumanos', () => {
  let component: DerechosHumanos;
  let fixture: ComponentFixture<DerechosHumanos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DerechosHumanos],
    }).compileComponents();

    fixture = TestBed.createComponent(DerechosHumanos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
