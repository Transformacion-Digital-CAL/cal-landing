import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionSocialYParticipacion } from './extension-social-y-participacion';

describe('ExtensionSocialYParticipacion', () => {
  let component: ExtensionSocialYParticipacion;
  let fixture: ComponentFixture<ExtensionSocialYParticipacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionSocialYParticipacion],
    }).compileComponents();

    fixture = TestBed.createComponent(ExtensionSocialYParticipacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
