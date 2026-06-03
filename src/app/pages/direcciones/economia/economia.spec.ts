import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Economia } from './economia';

describe('Economia', () => {
  let component: Economia;
  let fixture: ComponentFixture<Economia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Economia],
    }).compileComponents();

    fixture = TestBed.createComponent(Economia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
