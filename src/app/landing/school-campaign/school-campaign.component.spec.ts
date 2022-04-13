import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCampaignComponent } from './school-campaign.component';

describe('SchoolCampaignComponent', () => {
  let component: SchoolCampaignComponent;
  let fixture: ComponentFixture<SchoolCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
