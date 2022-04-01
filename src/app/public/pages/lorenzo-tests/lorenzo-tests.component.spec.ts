import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorenzoTestsComponent } from './lorenzo-tests.component';

describe('LorenzoTestsComponent', () => {
  let component: LorenzoTestsComponent;
  let fixture: ComponentFixture<LorenzoTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LorenzoTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LorenzoTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
