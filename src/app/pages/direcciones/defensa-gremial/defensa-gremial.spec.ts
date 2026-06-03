import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensaGremial } from './defensa-gremial';

describe('DefensaGremial', () => {
  let component: DefensaGremial;
  let fixture: ComponentFixture<DefensaGremial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefensaGremial],
    }).compileComponents();

    fixture = TestBed.createComponent(DefensaGremial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
