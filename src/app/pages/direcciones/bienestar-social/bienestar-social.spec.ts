import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienestarSocial } from './bienestar-social';

describe('BienestarSocial', () => {
  let component: BienestarSocial;
  let fixture: ComponentFixture<BienestarSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BienestarSocial],
    }).compileComponents();

    fixture = TestBed.createComponent(BienestarSocial);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
