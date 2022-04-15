import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolHeaderComponent } from './school-header.component';

describe('SchoolHeaderComponent', () => {
  let component: SchoolHeaderComponent;
  let fixture: ComponentFixture<SchoolHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
