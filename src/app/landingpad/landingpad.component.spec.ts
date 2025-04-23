import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpadComponent } from './landingpad.component';

describe('LandingpadComponent', () => {
  let component: LandingpadComponent;
  let fixture: ComponentFixture<LandingpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
