import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationSectionComponent } from './donation-section.component';

describe('DonationSectionComponent', () => {
  let component: DonationSectionComponent;
  let fixture: ComponentFixture<DonationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
