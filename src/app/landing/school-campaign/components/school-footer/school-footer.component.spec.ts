import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFooterComponent } from './school-footer.component';

describe('SchoolFooterComponent', () => {
  let component: SchoolFooterComponent;
  let fixture: ComponentFixture<SchoolFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
