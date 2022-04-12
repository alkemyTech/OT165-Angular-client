import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysCampaignComponent } from './toys-campaign.component';

describe('ToysCampaignComponent', () => {
  let component: ToysCampaignComponent;
  let fixture: ComponentFixture<ToysCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
