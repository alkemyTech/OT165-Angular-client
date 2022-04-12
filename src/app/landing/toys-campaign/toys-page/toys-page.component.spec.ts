import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToysPage } from './toys-page.component';

describe('ToysPage', () => {
  let component: ToysPage;
  let fixture: ComponentFixture<ToysPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
